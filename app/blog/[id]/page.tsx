// 4. /app/blog/[id]/page.tsx - Blog Detail Page with Comments

import { notFound } from "next/navigation";
import Image from "next/image";
async function fetchBlog(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail({ params }) {
  const post = await fetchBlog(params.id);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      {/* Watermark */}
      <div className="absolute inset-0 flex justify-center items-center z-[-1] opacity-5">
        <Image
          src="/logo.png"
          alt="Damion Security"
          className="w-2/3"
          width={500}
          height={300}
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.images?.[0] && (
        <Image
          src={post.images[0]}
          alt="Blog image 1"
          className="w-full h-64 object-cover rounded mb-4"
          width={500}
          height={300}
        />
      )}

      <p className="text-lg leading-relaxed whitespace-pre-line mb-6">
        {post.content}
      </p>

      {post.images?.[1] && (
        <Image
          src={post.images[1]}
          alt="Blog image 2"
          className="w-full h-64 object-cover rounded mb-6"
          width={500}
          height={300}
        />
      )}

      {/* Comments Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
        <form
          action={`/api/blog/${post._id}/comments`}
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="comment"
            placeholder="Your comment"
            className="w-full border p-2 rounded h-28"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit Comment
          </button>
        </form>

        {/* Comments List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Comments</h3>
          {post.comments?.length === 0 ? (
            <p className="text-gray-600">No comments yet. Be the first!</p>
          ) : (
            post.comments
              .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
              .map((comment, index) => (
                <div key={index} className="border-t pt-4 mt-4">
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.postedAt).toLocaleString()}
                  </p>
                  <p className="mt-1 text-gray-700">{comment.comment}</p>
                </div>
              ))
          )}
        </div>
      </section>
    </div>
  );
}
