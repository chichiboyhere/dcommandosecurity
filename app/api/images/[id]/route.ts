import { NextRequest } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const db = mongoose.connection.db;
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

    const downloadStream = bucket.openDownloadStream(fileId);

    const headers = new Headers();
    headers.set("Content-Type", file.contentType || "application/octet-stream");
    headers.set("Content-Disposition", `inline; filename="${file.filename}"`);

    return new Response(downloadStream as any, {
      headers,
    });
  } catch (error: any) {
    console.error("Error streaming image:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
