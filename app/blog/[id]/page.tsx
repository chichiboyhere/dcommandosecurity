// // 4. /app/blog/[id]/page.tsx - Blog Detail Page with Comments

// import { notFound } from "next/navigation";
// import Image from "next/image";
// async function fetchBlog(id) {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) return null;
//   return res.json();
// }

// export default async function BlogDetail({ params }) {
//   const post = await fetchBlog(params.id);

//   if (!post) return notFound();

//   return (
//     <div className="max-w-3xl mx-auto p-6 relative my-20 min-h-[80vh]">
//       {/* Watermark */}
//       <div className="absolute inset-0 flex justify-center items-center z-[-1] opacity-5">
//         <Image
//           src="/images/blogs/blog1.jpg"
//           alt="Damion Security"
//           className="w-2/3"
//           width={500}
//           height={300}
//         />
//       </div>

//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

//       {post.images?.[0] && (
//         <Image
//           src={post.images[0]}
//           alt="Blog image 1"
//           className="w-full h-64 object-cover rounded mb-4"
//           width={500}
//           height={300}
//         />
//       )}

//       <p className="text-lg leading-relaxed whitespace-pre-line mb-6">
//         {post.content}
//       </p>

//       {post.images?.[1] && (
//         <Image
//           src={post.images[1]}
//           alt="Blog image 2"
//           className="w-full h-64 object-cover rounded mb-6"
//           width={500}
//           height={300}
//         />
//       )}

//       {/* Comments Section */}
//       <section className="mt-10">
//         <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
//         <form
//           action={`/api/blog/${post._id}/comments`}
//           method="POST"
//           className="space-y-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your name"
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your email"
//             className="w-full border p-2 rounded"
//             required
//           />
//           <textarea
//             name="comment"
//             placeholder="Your comment"
//             className="w-full border p-2 rounded h-28"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Submit Comment
//           </button>
//         </form>

//         {/* Comments List */}
//         <div className="mt-8">
//           <h3 className="text-xl font-semibold mb-3">Comments</h3>
//           {post.comments?.length === 0 ? (
//             <p className="text-gray-600">No comments yet. Be the first!</p>
//           ) : (
//             post.comments
//               .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
//               .map((comment, index) => (
//                 <div key={index} className="border-t pt-4 mt-4">
//                   <p className="font-semibold">{comment.name}</p>
//                   <p className="text-sm text-gray-500">
//                     {new Date(comment.postedAt).toLocaleString()}
//                   </p>
//                   <p className="mt-1 text-gray-700">{comment.comment}</p>
//                 </div>
//               ))
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// app/blog/[id]/page.tsx

// import { connectDB } from "@/lib/mongodb";
// import BlogPost from "@/models/BlogPost";
// import mongoose from "mongoose";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// export const dynamic = "force-dynamic"; // To avoid static caching
// import CommentForm from "@/components/CommentForm";

// interface BlogPageProps {
//   params: { id: string };
// }

// export default async function BlogDetailPage({ params }: BlogPageProps) {
//   await connectDB();
//   const post = await BlogPost.findById(params.id).lean();

//   if (!post) {
//     return <div className="p-8 text-red-600">Blog post not found.</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
//       <h1 className="text-3xl font-bold">{post.title}</h1>
//       <p className="text-gray-700 whitespace-pre-line">{post.content}</p>

//       {/* Images */}
//       {post.images && post.images.length > 0 && (
//         <div className="mt-6 grid grid-cols-1 gap-4">
//           {post.images.map((id: mongoose.Types.ObjectId) => (
//             <Image
//               key={id.toString()}
//               src={`/api/images/${id}`}
//               alt="Blog Image"
//               className="w-full h-auto rounded shadow"
//               width={500}
//               height={300}
//             />
//           ))}
//         </div>
//       )}

//       {/* Comments */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-4">Comments</h2>
//         {post.comments?.length > 0 ? (
//           [...post.comments].reverse().map((comment: any, index: number) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <p className="text-sm text-gray-600">
//                 {comment.name} — {new Date(comment.postedAt).toLocaleString()}
//               </p>
//               <p className="mt-1">{comment.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No comments yet.</p>
//         )}
//       </div>
//       <CommentForm postId={params.id} />
//     </div>
//   );
// }

// app/blog/[id]/page.tsx

import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import mongoose from "mongoose";
import CommentForm from "@/components/CommentForm"; // Assuming you moved it into components
import ReactMarkdown from "react-markdown";
export const dynamic = "force-dynamic";
import Image from "next/image";

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

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold mt-6 text-blue-900">{post.title}</h1>

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
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {post.comments?.length > 0 ? (
          [...post.comments].reverse().map((comment: any, index: number) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <p className="text-sm text-gray-600">
                {comment.name} — {new Date(comment.postedAt).toLocaleString()}
              </p>
              <p className="mt-1">{comment.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>

      <CommentForm postId={id} />
    </div>
  );
}
