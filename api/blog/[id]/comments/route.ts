// 5. /api/blog/[id]/comments/route.ts - Handle POST Comment

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function POST(req, { params }) {
  await connectDB();
  const { id } = params;
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const comment = formData.get("comment");

  if (!name || !email || !comment) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const blog = await BlogPost.findById(id);
  if (!blog) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  blog.comments.unshift({ name, email, comment, postedAt: new Date() });
  await blog.save();

  return NextResponse.json({ message: "Comment added successfully" });
}
