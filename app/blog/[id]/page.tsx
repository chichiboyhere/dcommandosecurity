import { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPost";
import CommentForm from "@/components/CommentForm";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import RelatedPosts from "@/components/RelatedPosts";
import JsonLd from "@/components/JsonLd";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dcommando Security - Blog story",
  description: "This is Dcommando security blog section.",
  keywords: ["security news", "security updates", "stories on security"],
};

interface Comment {
  name: string;
  comment: string;
  postedAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  images: string[];
  comments?: Comment[];
  createdAt: string;
  updatedAt: string;
}

interface Params {
  id: string;
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const id = params?.id;

  if (!id) {
    return <div className="p-8 text-red-600">Invalid blog ID.</div>;
  }

  await connectDB();
  const post = await BlogPostModel.findById(id).lean<BlogPost>();

  if (!post) {
    return <div className="p-8 text-red-600">Blog post not found.</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.content,
    image: `https://dcommandosecurity.com/images/${post.images[0]}`,
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
              {post.images.map(
                (
                  id: string // Change to string if images are stored as strings
                ) => (
                  <Image
                    key={id}
                    src={`/api/images/${id}`}
                    alt="Blog Image"
                    className="w-full h-auto rounded shadow"
                    width={500}
                    height={300}
                  />
                )
              )}
            </div>
          )}

          <ReactMarkdown>{post.content}</ReactMarkdown>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Comments
            </h2>

            {Array.isArray(post.comments) && post.comments.length > 0 ? (
              [...post.comments].reverse().map((comment, index) => (
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
