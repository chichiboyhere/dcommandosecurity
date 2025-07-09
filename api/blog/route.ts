// 1. /api/blog/route.ts - Handles GET all blogs and POST new blog

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { getServerSession } from "next-auth";
//import { authOptions } from "@/lib/auth";
import { authOptions } from "@/lib/auth";
export async function GET() {
  await connectDB();
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const image1 = formData.get("image1");
  const image2 = formData.get("image2");

  const images = [];
  if (image1) images.push(image1);
  if (image2) images.push(image2);

  await connectDB();
  const newPost = await BlogPost.create({
    title,
    content,
    images,
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  });

  return NextResponse.json(newPost, { status: 201 });
}
