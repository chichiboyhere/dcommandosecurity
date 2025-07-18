import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Readable } from "stream";
import mongoose from "mongoose";
import { handleApiError } from "@/lib/handleApiError";

export async function GET() {
  try {
    await connectDB();
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return handleApiError(error, "GET /api/blog");
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const formData = await req.formData();
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const files = formData.getAll("images") as File[];

    // const db = mongoose.connection.db;
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("MongoDB connection not initialized");
    }
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
  } catch (error) {
    console.error("Error uploading blog:", error);
    return handleApiError(error, "POST /api/blog");
  }
}
