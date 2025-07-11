// // 5. /api/blog/[id]/comments/route.ts - Handle POST Comment

// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import BlogPost from "@/models/BlogPost";

// export async function POST(req, { params }) {
//   await connectDB();
//   const { id } = params;
//   const formData = await req.formData();

//   const name = formData.get("name");
//   const email = formData.get("email");
//   const comment = formData.get("comment");

//   if (!name || !email || !comment) {
//     return NextResponse.json(
//       { message: "All fields are required" },
//       { status: 400 }
//     );
//   }

//   const blog = await BlogPost.findById(id);
//   if (!blog) {
//     return NextResponse.json(
//       { message: "Blog post not found" },
//       { status: 404 }
//     );
//   }

//   blog.comments.unshift({ name, email, comment, postedAt: new Date() });
//   await blog.save();

//   return NextResponse.json({ message: "Comment added successfully" });
// }

// app/api/blog/[id]/comment/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import BlogPost from "@/models/BlogPost";
// import mongoose from "mongoose";

// export async function POST(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const { name, email, comment } = await req.json();

//     if (!name || !email || !comment) {
//       return NextResponse.json(
//         { message: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     const post = await BlogPost.findById(params.id);

//     if (!post) {
//       return NextResponse.json({ message: "Post not found" }, { status: 404 });
//     }

//     post.comments.unshift({
//       name,
//       email,
//       comment,
//       postedAt: new Date(),
//     });

//     await post.save();

//     return NextResponse.json({ message: "Comment added successfully." });
//   } catch (error: any) {
//     console.error("Error posting comment:", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { name, email, comment } = await req.json();

    if (!name || !email || !comment) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const post = await BlogPost.findById(params.id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    post.comments.unshift({
      name,
      email,
      comment,
      postedAt: new Date(),
    });

    await post.save();

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (error: any) {
    console.error("Comment API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
