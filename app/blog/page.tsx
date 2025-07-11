import Link from "next/link";
import Image from "next/image";

async function fetchBlogs() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs!");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Damion Security Blog
      </h1>

      {blogs.length === 0 ? (
        <div className="flex-1 justify-center items-center min-h-[80vw] ">
          <p className="text-center text-gray-500">No blog posts yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post._id}`}
              className="block p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              {/* {post.images?.[0] && (
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-2"
                  width={500}
                  height={300}
                /><Link key={blog._id} href={`/blog/${blog._id}`}>
              )} */}

              {post.images?.map((id) => (
                <Image
                  key={id}
                  src={`/api/images/${id}`}
                  alt="Blog Image"
                  className="w-full h-auto mb-4"
                  width={500}
                  height={300}
                />
              ))}
              <p className="text-gray-700 line-clamp-3">{post.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
