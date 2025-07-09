// 3. /app/blog/page.tsx - Blog Listing Page

import Link from "next/link";
import Image from "next/image";
// async function fetchBlogs() {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
//       cache: "no-store",
//     });

// //   const res = await fetch(`/api/blog`, { cache: "no-store" });

//   if (!res.ok) throw new Error("Failed to fetch blogs!");

//   return res.json();
// }

// /app/blog/page.tsx

import { cookies } from "next/headers";

async function fetchBlogs() {
  //   const host =
  //     cookies().get("__next__host")?.value ||
  //     process.env.NEXTAUTH_UR ||
  //     "http://localhost:3000";

  //const res = await fetch(`${host}/api/blog`, { cache: "no-store" });
  //   const res = await fetch("http://localhost:3000/api/blog", {
  //     cache: "no-store",
  //   });
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);

  if (!res.ok) throw new Error("Failed to fetch blogs!");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Damion Security Blog
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post._id}`}
              className="block p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              {post.images?.[0] && (
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-2"
                  width={500}
                  height={300}
                />
              )}
              <p className="text-gray-700 line-clamp-3">{post.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
