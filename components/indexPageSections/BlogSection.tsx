// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import ReactMarkdown from "react-markdown";

// import { blogs } from "@/data/blogs";

// export const metadata: Metadata = {
//   title: "Dcommando Security - Blogs",
//   description: "We bring you security news and updates.",
//   keywords: [
//     "security tips",
//     "personal security",
//     "security news",
//     "security updates",
//     "stories on security",
//     "alertness",
//   ],
// };

// // interface BlogPost {
// //   _id: string;
// //   slug: string;
// //   title: string;
// //   content: string;
// //   images: string[];
// //   createdAt: Date;
// //   updatedAt: Date;

// // }

// export default async function BlogPage() {
//   return (
//     <div className="mx-auto p-6 bg-gray-100 mt-10 dark:bg-gray-800  ">
//       <h1 className="text-3xl font-bold my-10 text-center text-blue-900 dark:text-white">
//         Dcommando Security Blog
//       </h1>

//       {blogs.length === 0 ? (
//         <div className="flex-1 justify-center items-center min-h-[80vw] dark:bg-gray-800">
//           <p className="text-center text-gray-500  dark:text-[#ffffffcf]">
//             No blog posts yet.
//           </p>
//         </div>
//       ) : (
//         <section
//           className="p-8  text-blue-900  dark:bg-gray-800 min-h-[100vh]"
//           data-aos="fade-up"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dark:bg-gray-800">
//             {blogs.map((post) => (
//               <Link key={post.id} href={`/blog/${post.id}`}>
//                 <div className="transition-transform duration-300 hover:scale-110 dark:bg-gray-800">
//                   <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90 dark:bg-gray-800">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       fill
//                       className="object-cover object-center"
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                     />
//                   </div>
//                   <h4 className="text-lg font-bold my-4 dark:text-white">
//                     {post.title}
//                   </h4>
//                   <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
//                     <ReactMarkdown>{post.content}</ReactMarkdown>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import ReactMarkdown from "react-markdown";
// import fs from "fs";
// import path from "path";

// import { blogs } from "@/data/blogs";

// export const metadata: Metadata = {
//   title: "Dcommando Security - Blogs",
//   description: "We bring you security news and updates.",
//   keywords: [
//     "security tips",
//     "personal security",
//     "security news",
//     "security updates",
//     "stories on security",
//     "alertness",
//   ],
// };

// export default async function BlogPage() {
//   const blogPosts = await Promise.all(
//     blogs.map(async (post) => {
//       const filePath = path.join(process.cwd(), post.content);
//       const content = fs.readFileSync(filePath, "utf-8");
//       return { ...post, content };
//     })
//   );

//   return (
//     <div className="mx-auto p-6 bg-gray-100 mt-10 dark:bg-gray-800">
//       <h1 className="text-3xl font-bold my-10 text-center text-blue-900 dark:text-white">
//         Dcommando Security Blog
//       </h1>

//       {blogPosts.length === 0 ? (
//         <div className="flex-1 justify-center items-center min-h-[80vw] dark:bg-gray-800">
//           <p className="text-center text-gray-500 dark:text-[#ffffffcf]">
//             No blog posts yet.
//           </p>
//         </div>
//       ) : (
//         <section
//           className="p-8 text-blue-900 dark:bg-gray-800 min-h-[100vh]"
//           data-aos="fade-up"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dark:bg-gray-800">
//             {blogPosts.map((post) => (
//               <Link key={post.id} href={`/blog/${post.id}`}>
//                 <div className="transition-transform duration-300 hover:scale-110 dark:bg-gray-800">
//                   <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90 dark:bg-gray-800">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       fill
//                       className="object-cover object-center"
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                     />
//                   </div>
//                   <h4 className="text-lg font-bold my-4 dark:text-white">
//                     {post.title}
//                   </h4>
//                   <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
//                     <ReactMarkdown>{post.content}</ReactMarkdown>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

import { Metadata } from "next";
//import Link from "next/link";
import Image from "next/image";
//import ReactMarkdown from "react-markdown";
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

export default async function BlogPage() {
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
        Dcommando Security Blog
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
            {/* {blogPosts.map((post) => (
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
            ))} */}
            <a
              href={"/blogposts/bouncers.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2"
            >
              <div className="transition-transform duration-300 hover:scale-110 dark:bg-gray-800">
                <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90 dark:bg-gray-800">
                  <Image
                    src={"/images/blogs/couple.jpg"}
                    alt={"The Bouncers Who Saved The Day"}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="text-lg font-bold my-4 dark:text-white">
                  The Bouncers Who Saved The Day
                </h4>
                <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
                  Saturday. Sunshine. Satin gowns. Suits. Sumptuous meals.
                  Serenades. The mood was as high as the centerpieces. When
                  Anita and Tunde finally tied the knot after five years of
                  long-distance love, the last thing on their minds was a
                  gatecrasher… or a public food fight.
                </div>
              </div>
            </a>{" "}
            <a
              href={"/blogposts/holy-ground-mosh.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2"
            >
              <div className="transition-transform duration-300 hover:scale-110 dark:bg-gray-800">
                <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90 dark:bg-gray-800">
                  <Image
                    src={"/images/blogs/crowdControl.jpg"}
                    alt={"Holy Ground or Mosh Pit? "}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="text-lg font-bold my-4 dark:text-white">
                  Holy Ground or Mosh Pit?
                </h4>
                <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
                  The Crowd Isn’t Always the Problem… Until It Is Organizing a
                  large outdoor event—be it a gospel crusade, sporting event,
                  political rally, or concert—can feel like trying to tame a
                  tidal wave with a teacup
                </div>
              </div>
            </a>{" "}
            <a
              href={"/blogposts/stay-safe-stay-sharp.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2"
            >
              <div className="transition-transform duration-300 hover:scale-110 dark:bg-gray-800">
                <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90 dark:bg-gray-800">
                  <Image
                    src={"/images/blogs/woman_walking_at_night.jpg"}
                    alt={"Stay Sharp, Stay Safe "}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="text-lg font-bold my-4 dark:text-white">
                  Stay Sharp, Stay Safe
                </h4>
                <div className="text-gray-700 line-clamp-3 dark:text-[#ffffffcf]">
                  Gloom hung in the air like a thick fog on a cold Harmattan
                  morning. The silence was palpable. Inspector Kalu shifted his
                  gaze from one occupant in the room to another. Mrs. Nkechi
                  Uwadinjo, a light-skinned middle-aged woman, had a faraway
                  look
                </div>
              </div>
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
