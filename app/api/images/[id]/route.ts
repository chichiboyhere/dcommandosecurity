import { NextRequest } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
//import { Readable } from "stream";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const db = mongoose.connection.db;
    if (!db) {
      return new Response("Database connection is not established", {
        status: 500,
      });
    }

    const bucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: "uploads",
    });

    const fileId = new mongoose.Types.ObjectId(params.id);

    const files = await db
      .collection("uploads.files")
      .find({ _id: fileId })
      .toArray();
    if (!files || files.length === 0) {
      return new Response("File not found", { status: 404 });
    }

    const file = files[0];

    const downloadStream = bucket.openDownloadStream(
      fileId
    ) as NodeJS.ReadableStream;

    const headers = new Headers();
    headers.set("Content-Type", file.contentType || "application/octet-stream");
    headers.set("Content-Disposition", `inline; filename="${file.filename}"`);

    // Convert Node.js ReadableStream to Web ReadableStream
    const webReadableStream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => {
          controller.enqueue(chunk);
        });
        downloadStream.on("end", () => {
          controller.close();
        });
        downloadStream.on("error", (err) => {
          controller.error(err);
        });
      },
    });

    return new Response(webReadableStream, {
      headers,
    });
  } catch (error: unknown) {
    console.error("Error streaming image:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
