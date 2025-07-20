import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";

import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Dcommando Security - Blogs",
  description: "We bring you security news and updates.",
  keywords: [
    "security tips",
    "personal security",
    "security news",
    "security updates",
    "stories on security",
    "alertness",
  ],
};

export default async function RelatedPosts({ postId }: { postId: string }) {
  const blogPosts = await Promise.all(
    blogs.map(async (post) => {
      const filePath = path.join(process.cwd(), post.content);
      const content = fs.readFileSync(filePath, "utf-8");
      return { ...post, content };
    })
  );

  return (
    <div className="mx-auto p-6 bg-gray-100 mt-10 dark:bg-gray-800">
      <h1 className="text-3xl font-bold my-10 text-center text-blue-900 dark:text-white">
        Related Posts
      </h1>

      {blogPosts.length === 0 ? (
        <div className="flex-1 justify-center items-center min-h-[80vw] dark:bg-gray-800">
          <p className="text-center text-gray-500 dark:text-[#ffffffcf]">
            No blog posts yet.
          </p>
        </div>
      ) : (
        <section
          className="p-8 text-blue-900 dark:bg-gray-800 min-h-[100vh]"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dark:bg-gray-800">
            {blogPosts
              .filter((post) => post.id !== postId)
              .map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="transition-transform duration-300 hover:scale-110 dark:bg-gray-800">
                    <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90 dark:bg-gray-800">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h4 className="text-lg font-bold my-4 dark:text-white">
                      {post.title}
                    </h4>
                    <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
                      <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
