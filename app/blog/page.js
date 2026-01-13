// "use client";

// import React from "react";
// import Link from "next/link";

// // Sample blog data (replace with API/database in production)
// const blogPosts = [
//   {
//     id: "1",
//     title: "The Secret Spices Behind Our Methi Khakhra",
//     excerpt: "Discover the ancient Gujarati herbs that make our methi khakhra irresistibly flavorful.",
//     date: "November 15, 2025",
//     category: "Recipes",
//     image: "/7.webp",
//     readTime: "5 min read",
//     author: "Priya Patel",
//     content: `
//       <p>Khakhra, the beloved Gujarati snack, owes its magic to a symphony of spices...</p>
//     `,
//   },
//   {
//     id: "2",
//     title: "Why Khakhra is the Ultimate Snack for Busy Bees",
//     excerpt: "In a fast-paced world, khakhra offers crunch without the crash.",
//     date: "October 28, 2025",
//     category: "Health",
//     image: "/k9.webp",
//     readTime: "4 min read",
//     author: "Dr. Amit Shah",
//     content: `<p>In today's hustle, finding a snack that's satisfying yet guilt-free...</p>`,
//   },
// ];

// export default function BlogPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-amber-100 py-12 px-6 sm:px-12">
//       <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-10 text-center">Khakhra Parampara</h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogPosts.map((post) => (
//           <article
//             key={post.id}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
//           >
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
//             />

//             <div className="p-6">
//               <h2 className="text-xl font-bold text-amber-900 mb-2">{post.title}</h2>
//               <p className="text-amber-700 mb-4">{post.excerpt}</p>

//               {/* Link to Blog Details with ID */}
//               <Link
//                 href={`/blog/${post.id}`}
//                 className="text-amber-900 font-medium hover:text-amber-600"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </article>
//         ))}
//       </div>
//     </main>
//   );
// }


// app/blog/page.js
import Link from "next/link";
import { getBlogs } from "@/lib/shopify";

export const metadata = {
  title: "Khakhra Parampara | Annapurna Khakhra",
  description: "Stories, recipes & health insights from Annapurna Khakhra.",
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  // Flatten all articles from all blogs
  const articles = blogs.flatMap(blog =>
    blog.articles.map(article => ({
      ...article,
      blogHandle: blog.handle,
    }))
  );

  if (!articles.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">No blogs found.</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-amber-100 py-12 px-6 sm:px-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-10 text-center">
        Khakhra Parampara
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            {/* Article Image */}
            <img
              src={post.image?.url || "/blog-placeholder.webp"}
              alt={post.title}
              className="w-full h-75 object-cover hover:scale-105 transition-transform duration-500"
            />

            <div className="p-6">

              {/* Date */}
              {post.publishedAt && (
                <p className="text-sm text-amber-600 mb-3">
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}

              <h2 className="text-xl font-bold text-amber-900 mb-3">{post.title}</h2>
              {post.excerpt && (
                <p
                  className="text-amber-700 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              )}

              <Link
                href={`/blog/${post.blogHandle}/${post.handle}`}
                className="text-amber-900 font-medium hover:text-amber-600"
              >
                Read More →
              </Link>
            </div>
          </article>

        ))}
      </div>
    </main>
  );
}
