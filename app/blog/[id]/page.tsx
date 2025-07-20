import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import fs from "fs";
import path from "path";
import JsonLd from "@/components/JsonLd";
import { blogs } from "@/data/blogs";
import RelatedPosts from "@/components/RelatedPosts";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export const metadata: Metadata = {
  title: "Dcommando Security - Blog story",
  description: "This is Dcommando security blog section.",
  keywords: ["security news", "security updates", "stories on security"],
};
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const post = blogs.find((blog) => blog.id === id);
  if (!post) {
    return <div className="p-8 text-red-600">Blog post not found.</div>;
  }

  const filePath = path.join(process.cwd(), post.content);
  const content = fs.readFileSync(filePath, "utf-8");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: content,
    image: `https://dcommandosecurity.com${post.image}`,
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
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dcommandosecurity.com/blog/${id}`,
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
          <div className="mt-6 grid grid-cols-1 gap-4">
            <Image
              src={post.image}
              alt="Blog Image"
              className="w-full h-auto rounded shadow"
              width={500}
              height={300}
            />
          </div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <RelatedPosts postId={id} />
      </div>
    </>
  );
}
