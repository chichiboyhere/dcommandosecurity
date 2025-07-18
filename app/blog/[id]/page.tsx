import { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import mongoose from "mongoose";
import CommentForm from "@/components/CommentForm";
import ReactMarkdown from "react-markdown";
export const dynamic = "force-dynamic";
import Image from "next/image";
import RelatedPosts from "@/components/RelatedPosts";
import JsonLd from "@/components/JsonLd";
//import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dcommando Security - Blog story",
  description: "This is Dcommando security blog section.",
  keywords: ["security news", "security updates", "stories on security"],
};

/**
 * // There are lots of redlines in the code below, particularly in the post section
 * Please generate  type/interface for the post using blogpost schema above
 * interface IBlogPost extends Document {
  title: string;
  content: string;
  images: mongoose.Types.ObjectId[]; // Change to ObjectId
  createdAt: Date;
  updatedAt: Date;
  comments: IComment[];
} */

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const post = await getBlogPost(params.id);
//   if (!post) return notFound();

//   return {
//     title: post.title,
//     description: post.content,
//   };
// }

export default async function BlogDetailPage({ params }: { params: any }) {
  const id = params?.id;

  if (!id) {
    return <div className="p-8 text-red-600">Invalid blog ID.</div>;
  }

  await connectDB();
  const post = await BlogPost.findById(id).lean();

  if (!post) {
    return <div className="p-8 text-red-600">Blog post not found.</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.content,
    image: `https://dcommandosecurity.com/images/${post.images[0]}`, // full URL
    author: {
      "@type": "Person",
      name: "Tony Jays",
    },
    publisher: {
      "@type": "Organization",
      name: "Dcommando Security",
      logo: {
        "@type": "ImageObject",
        url: "https://dcommandosecurity.com/logo.png",
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dcommandosecurity.com/blog/${params.id}`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="dark:bg-gray-800">
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-6 dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
          <h1 className="text-3xl font-bold mt-15 text-blue-900 dark:text-white">
            {post.title}
          </h1>

          {post.images && post.images.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-4">
              {post.images.map((id: mongoose.Types.ObjectId) => (
                <Image
                  key={id.toString()}
                  src={`/api/images/${id}`}
                  alt="Blog Image"
                  className="w-full h-auto rounded shadow"
                  width={500}
                  height={300}
                />
              ))}
            </div>
          )}

          <ReactMarkdown>{post.content}</ReactMarkdown>
          {/* <p className="text-gray-700 whitespace-pre-line"> */}
          {/* Comments */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Comments
            </h2>
            {post.comments?.length > 0 ? (
              [...post.comments]
                .reverse()
                .map((comment: any, index: number) => (
                  <div key={index} className="mb-4 p-4 border rounded">
                    <p className="text-sm text-gray-600 dark:text-[#ffffffcf]">
                      {comment.name} —{" "}
                      {new Date(comment.postedAt).toLocaleString()}
                    </p>
                    <p className="mt-1 dark:text-[#ffffffcf]">
                      {comment.comment}
                    </p>
                  </div>
                ))
            ) : (
              <p className="text-gray-500 dark:text-[#ffffffcf]">
                No comments yet.
              </p>
            )}
          </div>

          <CommentForm postId={id} />
        </div>
        <RelatedPosts postId={id} />
      </div>
    </>
  );
}
