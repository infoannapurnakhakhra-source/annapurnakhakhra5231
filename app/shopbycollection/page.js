import Link from "next/link";
import { getAllCollections } from "@/lib/shopify";

export default async function CollectionIndexPage() {
  const collections = await getAllCollections();

  return (
    // <div className="max-w-7xl mx-auto px-4 py-12">
    //   <h1 className="text-4xl font-bold text-[#7d4b0e] text-center mb-12">
    //     Our Collections
    //   </h1>

    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //     {collections.map((col) => (
    //       <Link
    //         key={col.id}
    //         href={`/shopbycollection/${col.handle}`}
    //         className="group relative block h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    //       >
    //         {/* Background image */}
    //         {col.image && (
    //           <img
    //             src={col.image.url}
    //             alt={col.image.altText || col.title}
    //             className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    //           />
    //         )}

    //         {/* Gradient overlay */}
    //         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

    //         {/* Content */}
    //         <div className="absolute bottom-0 w-full p-5 text-left">
    //           <h3 className="text-2xl font-bold text-white tracking-wide">
    //             {col.title}
    //           </h3>

    //           <span className="mt-1 inline-block text-sm text-amber-300 opacity-0 group-hover:opacity-100 transition">
    //             View Collection →
    //           </span>
    //         </div>
    //       </Link>

    //     ))}
    //   </div>
    // </div>


//  <div className="min-h-screen bg-neutral-900 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-20">
//           <h1 className="text-7xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
//             Collections
//           </h1>
//           <p className="text-xl text-neutral-400">Browse our curated selections</p>
//         </div>

//         {/* Overlapping Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {collections.map((col, index) => (
//             <Link
//               key={col.id}
//               href={`/shopbycollection/${col.handle}`}
//               className="group relative animate-fade-in-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Main Card */}
//               <div className="relative h-96 transition-all duration-500 group-hover:translate-y-[-12px]">
//                 {/* Background shadow cards */}
//                 <div className="absolute inset-0 bg-[#7d4b0e] opacity-20 blur-sm transform translate-x-3 translate-y-3 rounded-2xl" />
//                 <div className="absolute inset-0 bg-[#7d4b0e] opacity-40 blur-sm transform translate-x-1.5 translate-y-1.5 rounded-2xl" />
                
//                 {/* Main card */}
//                 <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
//                   {/* Image */}
//                   {col.image && (
//                     <img
//                       src={col.image.url}
//                       alt={col.image.altText || col.title}
//                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   )}

//                   {/* Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

//                   {/* Content */}
//                   <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                     <div className="transform transition-all duration-500 group-hover:translate-y-[-10px]">
//                       <div className="mb-4">
//                         <span className="inline-block px-4 py-1 bg-[#7d4b0e] text-white text-xs font-bold uppercase tracking-widest rounded-full">
//                           Collection
//                         </span>
//                       </div>
                      
//                       <h3 className="text-3xl font-bold text-white mb-3">
//                         {col.title}
//                       </h3>
                      
//                       <div className="flex items-center gap-2 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         <span className="text-sm font-semibold">View Collection</span>
//                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover border glow */}
//                   <div className="absolute inset-0 border-2 border-[#7d4b0e]/0 group-hover:border-[#7d4b0e] transition-colors duration-500 rounded-2xl" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
//       `}</style>
//     </div>

// like
  // <div className="min-h-screen bg-white py-20 px-4">
  //     <div className="max-w-7xl mx-auto">
  //       {/* Header */}
  //       <div className="text-center mb-20">
  //         <h1 className="text-6xl font-light text-[#7d4b0e] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
  //           Our Collections
  //         </h1>
  //         <div className="w-24 h-1 bg-[#7d4b0e] mx-auto" />
  //       </div>

  //       {/* Split Cards Grid */}
  //       <div className="space-y-8">
  //         {collections.map((col, index) => (
  //           <Link
  //             key={col.id}
  //             href={`/shopbycollection/${col.handle}`}
  //             className={`group flex flex-col md:flex-row h-80 rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 animate-slide-in ${
  //               index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
  //             }`}
  //             style={{ animationDelay: `${index * 0.15}s` }}
  //           >
  //             {/* Image Half */}
  //             <div className="relative w-full md:w-1/2 h-full overflow-hidden">
  //               {col.image && (
  //                 <img
  //                   src={col.image.url}
  //                   alt={col.image.altText || col.title}
  //                   className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
  //                 />
  //               )}
                
  //               {/* Number overlay */}
  //               <div className="absolute top-8 left-8 w-20 h-20 bg-white/90 backdrop-blur-sm flex items-center justify-center">
  //                 <span className="text-4xl font-bold text-[#7d4b0e]" style={{ fontFamily: '"Playfair Display", serif' }}>
  //                   {String(index + 1).padStart(2, '0')}
  //                 </span>
  //               </div>
  //             </div>

  //             {/* Content Half */}
  //             <div className="relative w-full md:w-1/2 h-full bg-neutral-50 p-12 flex flex-col justify-center">
  //               <div className="transform transition-all duration-700 group-hover:translate-x-4">
  //                 <div className="mb-4">
  //                   <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
  //                     Collection
  //                   </span>
  //                 </div>
                  
  //                 <h3 className="text-4xl font-light text-[#7d4b0e] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
  //                   {col.title}
  //                 </h3>
                  
  //                 <p className="text-neutral-600 mb-8 leading-relaxed">
  //                   Discover our carefully curated selection of premium products
  //                 </p>
                  
  //                 <div className="flex items-center gap-3">
  //                   <span className="text-sm font-semibold text-[#7d4b0e] uppercase tracking-wider">
  //                     Explore
  //                   </span>
  //                   <div className="h-px w-12 bg-[#7d4b0e] group-hover:w-20 transition-all duration-500" />
  //                 </div>
  //               </div>

  //               {/* Decorative element */}
  //               <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#7d4b0e]/20" />
  //             </div>
  //           </Link>
  //         ))}
  //       </div>
  //     </div>

  //     <style>{`
  //       @keyframes slide-in {
  //         from { opacity: 0; transform: translateX(-60px); }
  //         to { opacity: 1; transform: translateX(0); }
  //       }
  //       .animate-slide-in { animation: slide-in 0.8s ease-out both; }
  //     `}</style>
  //   </div>


//  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h1 className="text-7xl font-black text-white mb-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
//             COLLECTIONS
//           </h1>
//           <div className="flex justify-center gap-2">
//             <div className="w-2 h-2 rounded-full bg-[#7d4b0e]" />
//             <div className="w-2 h-2 rounded-full bg-amber-500" />
//             <div className="w-2 h-2 rounded-full bg-orange-500" />
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {collections.map((col, index) => (
//             <Link
//               key={col.id}
//               href={`/shopbycollection/${col.handle}`}
//               className="group relative h-96 rounded-3xl overflow-hidden animate-zoom-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Background Image */}
//               {col.image && (
//                 <img
//                   src={col.image.url}
//                   alt={col.image.altText || col.title}
//                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                 />
//               )}

//               {/* Dark overlay */}
//               <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

//               {/* Circular reveal effect */}
//               <div 
//                 className="absolute inset-0 bg-[#7d4b0e] transition-all duration-700 rounded-full scale-0 group-hover:scale-[3] origin-center opacity-90"
//                 style={{ mixBlendMode: 'multiply' }}
//               />

//               {/* Content */}
//               <div className="absolute inset-0 p-8 flex flex-col justify-between">
//                 {/* Top badge */}
//                 <div className="self-start opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
//                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30">
//                     <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Bottom content */}
//                 <div className="transform transition-all duration-700 group-hover:translate-y-[-20px]">
//                   <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
//                     {col.title}
//                   </h3>
                  
//                   <div className="overflow-hidden">
//                     <div className="flex items-center gap-3 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 delay-100">
//                       <span className="text-sm font-bold uppercase tracking-widest">Discover</span>
//                       <div className="w-8 h-0.5 bg-white" />
//                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Border animation */}
//               <div className="absolute inset-0 rounded-3xl border-4 border-white/0 group-hover:border-white/30 transition-colors duration-700" />
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes zoom-in {
//           from { opacity: 0; transform: scale(0.8); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-zoom-in { animation: zoom-in 0.6s ease-out both; }
//       `}</style>
//     </div>


<div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#7d4b0e] mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover wholesome snacks made the traditional way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col, index) => (
            <Link
              key={col.id}
              href={`/shopbycollection/${col.handle}`}
              className="group flex flex-col h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 bg-white hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-[60%] overflow-hidden">
                {col.image && (
                  <img
                    src={col.image.url}
                    alt={col.image.altText || col.title}
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                )}
                
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
             
                <div className="mb-3 absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-[#7d4b0e] text-xs font-bold uppercase tracking-wider rounded-full">
                      {col.title}
                    </span>
                  </div>
              </div>

              
              <div className="relative h-[40%] p-8 flex flex-col justify-center bg-white">
                <div className="transform transition-all duration-700 group-hover:translate-y-[-8px]">
                  {/* <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-[#7d4b0e] text-xs font-bold uppercase tracking-wider rounded-full">
                      Collection
                    </span>
                  </div> */}
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#7d4b0e] mb-3">
                    {col.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {col.description || "Explore our exclusive range of products."}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#7d4b0e] transition-opacity duration-500">
                    <span className="text-sm font-bold">View Collection</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

               
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7d4b0e] via-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
      `}</style>
    </div>

  );
}
