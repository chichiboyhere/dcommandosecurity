// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import BlogPost from "@/models/BlogPost";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import upload from "@/lib/multer"; // Import multer configuration

// import { createRouter } from "next-connect";

// const handler = createRouter();
// handler.use(upload.array("images", 2)); // Limit to 2 images

// // Define the GET method
// export async function GET(req: Request) {
//   await connectDB();
//   const posts = await BlogPost.find().sort({ createdAt: -1 });
//   return NextResponse.json(posts);
// }

// // Define the POST method
// export async function POST(req: Request) {
//   const session = await getServerSession(authOptions);
//   if (!session || session.user.role !== "admin") {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }

//   const { title, content } = req.body;
//   const images = req.files.map((file) => file.id); // Get the file IDs from multer

//   await connectDB();
//   const newPost = await BlogPost.create({
//     title,
//     content,
//     images,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     comments: [],
//   });

//   return NextResponse.json(newPost, { status: 201 });
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Readable } from "stream";
import mongoose from "mongoose";

export async function GET(req: Request) {
  try {
    await connectDB();
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error: any) {
    console.error("Error in GET /api/blog:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB(); // Ensure DB is ready before creating GridFS bucket

    const formData = await req.formData();
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const files = formData.getAll("images") as File[];

    const db = mongoose.connection.db;
    const bucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: "uploads",
    });

    const uploadedImageIds: mongoose.Types.ObjectId[] = [];

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const readableStream = Readable.from(buffer);

      const uploadStream = bucket.openUploadStream(file.name, {
        contentType: file.type,
      });

      await new Promise<void>((resolve, reject) => {
        readableStream
          .pipe(uploadStream)
          .on("error", reject)
          .on("finish", () => {
            uploadedImageIds.push(uploadStream.id as mongoose.Types.ObjectId);
            resolve();
          });
      });
    }

    const newPost = await BlogPost.create({
      title,
      content,
      images: uploadedImageIds,
      createdAt: new Date(),
      updatedAt: new Date(),
      comments: [],
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error: any) {
    console.error("Error uploading blog:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
