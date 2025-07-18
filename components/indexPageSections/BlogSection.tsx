import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Comment {
  name: string;
  email: string;
  comment: string;
  postedAt: Date;
}

interface BlogPost {
  _id: string; // Add this line to include the ID
  title: string;
  content: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

async function fetchBlogs(): Promise<BlogPost[]> {
  // Specify the return type
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs!");
  return res.json();
}

export default async function BlogPage() {
  const blogs: BlogPost[] = await fetchBlogs(); // Specify the type of blogs

  return (
    <div className="mx-auto p-6 ">
      <h1 className="text-3xl font-bold my-10 text-center text-blue-900 dark:text-white">
        Dcommando Security Blog
      </h1>

      {blogs.length === 0 ? (
        <div className="flex-1 justify-center items-center min-h-[80vw] ">
          <p className="text-center text-gray-500 dark:text-[#ffffffcf]">
            No blog posts yet.
          </p>
        </div>
      ) : (
        <section
          className="p-8  text-blue-900 dark:text-white"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map(
              (
                post: BlogPost // Specify the type of post
              ) => (
                <Link key={post._id} href={`/blog/${post._id}`}>
                  <div className="transition-transform duration-300 hover:scale-110">
                    <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90">
                      {post.images?.map(
                        (
                          id: string // Specify the type of id
                        ) => (
                          <Image
                            key={id}
                            src={`/api/images/${id}`}
                            alt={post.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )
                      )}
                    </div>
                    <h4 className="text-lg font-bold my-4 dark:text-white">
                      {post.title}
                    </h4>
                    <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
                      <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>
      )}
    </div>
  );
}
