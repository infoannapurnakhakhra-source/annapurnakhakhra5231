// import { notFound } from "next/navigation";
// import { getBlogByHandle } from "@/lib/shopify";

// /* ===============================
//    SEO METADATA (Next.js 15 FIXED)
// ================================ */
// export async function generateMetadata({ params }) {
//   const { blogHandle, handle } = await params;

//   if (!blogHandle || !handle) return {};

//   const blog = await getBlogByHandle(blogHandle);
//   if (!blog) return {};

//   const article = blog.articles.find(a => a.handle === handle);
//   if (!article) return {};

//   return {
//     title: `${article.title} | Annapurna Khakhra`,
//     description:
//       article.excerpt?.replace(/<[^>]*>/g, "") ||
//       "Read the latest updates from Annapurna Khakhra.",
//   };
// }

// /* ===============================
//    BLOG DETAIL PAGE
// ================================ */
// export default async function BlogDetailPage({ params }) {
//   const { blogHandle, handle } = await params;

//   if (!blogHandle || !handle) return notFound();

//   const blog = await getBlogByHandle(blogHandle);
//   if (!blog) return notFound();

//   const article = blog.articles.find(a => a.handle === handle);
//   if (!article) return notFound();

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-amber-100 py-12 px-6 sm:px-12">
//       <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Featured Image */}
//         {article.image?.url && (
//           <img
//             src={article.image.url}
//             alt={article.image.altText || article.title}
//             className="w-full h-[420px] object-cover"
//           />
//         )}

//         <div className="p-8">
//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
//             {article.title}
//           </h1>

//           {/* Date */}
//           <p className="text-sm text-amber-700 mb-6">
//             {new Date(article.publishedAt).toLocaleDateString("en-IN", {
//               day: "numeric",
//               month: "long",
//               year: "numeric",
//             })}
//           </p>

//           {/* Content */}
//           <div
//             className="prose prose-amber max-w-none"
//             dangerouslySetInnerHTML={{ __html: article.contentHtml }}
//           />
//         </div>
//       </article>
//     </main>
//   );
// }



import { notFound } from "next/navigation";
import { getBlogByHandle } from "@/lib/shopify";

/* ===============================
   SEO METADATA (Next.js 15 FIXED)
================================ */
export async function generateMetadata({ params }) {
  const { blogHandle, handle } = await params;

  if (!blogHandle || !handle) return {};

  const blog = await getBlogByHandle(blogHandle);
  if (!blog) return {};

  const article = blog.articles.find(a => a.handle === handle);
  if (!article) return {};

  return {
    title: `${article.title} | Annapurna Khakhra`,
    description:
      article.excerpt?.replace(/<[^>]*>/g, "") ||
      "Read the latest updates from Annapurna Khakhra.",
  };
}

/* ===============================
   BLOG DETAIL PAGE
================================ */
export default async function BlogDetailPage({ params }) {
  const { blogHandle, handle } = await params;

  if (!blogHandle || !handle) return notFound();

  const blog = await getBlogByHandle(blogHandle);
  if (!blog) return notFound();

  const article = blog.articles.find(a => a.handle === handle);
  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        {article.image?.url && (
          <>
            <img
              src={article.image.url}
              alt={article.image.altText || article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </>
        )}
        
        {/* Title Overlay */}
       <div className="absolute inset-0 flex items-center justify-center px-8 sm:px-12 text-center">
          <div className="max-w-4xl mx-auto md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl leading-tight md:text-left">
              {article.title}
            </h1>
           <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 inline-flex">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-white text-base sm:text-lg font-semibold drop-shadow-lg">
              {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto -mt-20 relative z-10 px-6 sm:px-12 pb-20">
        <div className="bg-white/95 backdrop-blur-sm px-8 sm:px-16 py-12 sm:py-16 shadow-2xl rounded-lg">
          <div
            className="prose prose-lg prose-amber max-w-none 
            prose-headings:text-amber-900 prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
            prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-amber-800
            prose-img:rounded-lg prose-img:shadow-lg
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500 
            prose-blockquote:bg-amber-50 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </div>
      </article>
    </main>
  );
}


// import { notFound } from "next/navigation";
// import { getBlogByHandle } from "@/lib/shopify";

// /* ===============================
//    SEO METADATA (Next.js 15 FIXED)
// ================================ */
// export async function generateMetadata({ params }) {
//   const { blogHandle, handle } = await params;

//   if (!blogHandle || !handle) return {};

//   const blog = await getBlogByHandle(blogHandle);
//   if (!blog) return {};

//   const article = blog.articles.find(a => a.handle === handle);
//   if (!article) return {};

//   return {
//     title: `${article.title} | Annapurna Khakhra`,
//     description:
//       article.excerpt?.replace(/<[^>]*>/g, "") ||
//       "Read the latest updates from Annapurna Khakhra.",
//   };
// }

// /* ===============================
//    BLOG DETAIL PAGE
// ================================ */
// export default async function BlogDetailPage({ params }) {
//   const { blogHandle, handle } = await params;

//   if (!blogHandle || !handle) return notFound();

//   const blog = await getBlogByHandle(blogHandle);
//   if (!blog) return notFound();

//   const article = blog.articles.find(a => a.handle === handle);
//   if (!article) return notFound();

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Hero Section with Image */}
//       <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
//         {article.image?.url && (
//           <>
//             <img
//               src={article.image.url}
//               alt={article.image.altText || article.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//           </>
//         )}
        
//         {/* Title Overlay - FIXED POSITIONING */}
//         <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 pb-12 sm:pb-16">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
//               {article.title}
//             </h1>
            
//             {/* Date Display - Better positioned */}
//             <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 inline-flex">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               <p className="text-white text-base sm:text-lg font-semibold drop-shadow-lg">
//                 {new Date(article.publishedAt).toLocaleDateString("en-IN", {
//                   day: "numeric",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section - NO NEGATIVE MARGIN */}
//       <article className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
//         <div className="bg-white/95 backdrop-blur-sm px-8 sm:px-16 py-12 sm:py-16 shadow-2xl rounded-2xl">
//           <div
//             className="prose prose-lg prose-amber max-w-none 
//             prose-headings:text-amber-900 prose-headings:font-bold
//             prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
//             prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
//             prose-strong:text-amber-800
//             prose-img:rounded-lg prose-img:shadow-lg
//             prose-blockquote:border-l-4 prose-blockquote:border-amber-500 
//             prose-blockquote:bg-amber-50 prose-blockquote:italic"
//             dangerouslySetInnerHTML={{ __html: article.contentHtml }}
//           />
//         </div>
//       </article>
//     </main>
//   );
// }