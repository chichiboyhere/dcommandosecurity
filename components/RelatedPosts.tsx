import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

async function fetchBlogs() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs!");
  return res.json();
}

export default async function RelatedPosts({ postId }: { postId: string }) {
  const blogs = await fetchBlogs();

  return (
    <div className="mx-auto p-6 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-3xl font-bold my-10 text-center text-blue-900 dark:text-white">
        Related Posts
      </h1>

      {blogs.length === 1 ? (
        ""
      ) : (
        <section className="p-8  text-blue-900" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs
              .filter((post) => post._id !== postId)
              .map((post) => (
                <Link key={post._id} href={`/blog/${post._id}`}>
                  <div className="transition-transform duration-300 hover:scale-110">
                    <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90">
                      {post.images?.map((id) => (
                        <Image
                          key={id}
                          src={`/api/images/${id}`}
                          alt={post.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ))}
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
