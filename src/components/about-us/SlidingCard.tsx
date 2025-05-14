// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";

// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description:
//       "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
//     stats: [
//       { label: "Users", value: "50K+" },
//       { label: "Accuracy", value: "98%" },
//       { label: "Processing", value: "2x faster" },
//     ],
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description:
//       "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
//     stats: [
//       { label: "Accuracy", value: "+30%" },
//       { label: "Integrations", value: "15+" },
//       { label: "Users", value: "25K+" },
//     ],
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description:
//       "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "Features", value: "10+" },
//       { label: "DataProcessed", value: "1M+" },
//       { label: "Clients", value: "1K+" },
//     ],
//   },
// ];

// export default function SlidingCards() {
//   const [isZoomedOut, setIsZoomedOut] = useState(false);

//   useEffect(() => {
//     const checkZoomOut = () => {
//       setIsZoomedOut(window.devicePixelRatio < 0.6);
//     };
//     checkZoomOut();
//     window.addEventListener("resize", checkZoomOut);
//     return () => window.removeEventListener("resize", checkZoomOut);
//   }, []);

//   return (
//     <section className="relative bg-purple-50">
//       {/* Header */}
//       <div className="h-screen flex items-center justify-center text-center">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">
//             <span className="text-black">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
//               Journey
//             </span>
//           </h1>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Explore the milestones that shaped our path.
//           </p>
//         </div>
//       </div>

//       {isZoomedOut ? (
//         // Zoomed-out stacked view
//         <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">
//           {cardData.map((card, index) => (
//             <Card
//               key={index}
//               className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-xl"
//             >
//               <div className="flex-1 p-8 flex flex-col justify-between">
//                 <div>
//                   <h4 className="text-purple-600 font-semibold">{card.title}</h4>
//                   <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
//                   <p className="text-gray-600 mt-4">{card.description}</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mt-6">
//                   {card.stats.map((stat, i) => (
//                     <div
//                       key={i}
//                       className="bg-gray-100 rounded-xl p-4 text-center"
//                     >
//                       <p className="text-xl font-bold text-purple-700">
//                         {stat.value}
//                       </p>
//                       <p className="text-sm text-gray-700">{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="relative flex-1 h-full min-h-[300px]">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         // Scroll-snapping vertical carousel
//         <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className="snap-start h-screen flex items-center justify-center"
//             >
//               <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-xl max-w-5xl h-[80vh] w-full mx-4">
//                 <div className="flex-1 p-8 flex flex-col justify-between">
//                   <div>
//                     <h4 className="text-purple-600 font-semibold">{card.title}</h4>
//                     <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
//                     <p className="text-gray-600 mt-4">{card.description}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     {card.stats.map((stat, i) => (
//                       <div
//                         key={i}
//                         className="bg-gray-100 rounded-xl p-4 text-center"
//                       >
//                         <p className="text-xl font-bold text-purple-700">
//                           {stat.value}
//                         </p>
//                         <p className="text-sm text-gray-700">{stat.label}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="relative flex-1 h-full min-h-[300px]">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </Card>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }


"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";

const cardData = [
  {
    year: "2024",
    title: "Everything AI 2.0",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
    stats: [
      { label: "Users", value: "50K+" },
      { label: "Accuracy", value: "98%" },
      { label: "Processing", value: "2x faster" },
    ],
  },
  {
    year: "2023",
    title: "ML Integration",
    description:
      "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
    stats: [
      { label: "Accuracy", value: "+30%" },
      { label: "Integrations", value: "15+" },
      { label: "Users", value: "25K+" },
    ],
  },
  {
    year: "2022",
    title: "API Launch",
    description:
      "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
    stats: [
      { label: "Features", value: "10+" },
      { label: "DataProcessed", value: "1M+" },
      { label: "Clients", value: "1K+" },
    ],
  },
];

export default function SlidingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomedOut, setIsZoomedOut] = useState(false);

  const totalCards = cardData.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Compute transforms for each card based on scroll
  const transforms = cardData.map((_, i) => {
    const start = i / totalCards;
    const end = (i + 1) / totalCards;
    return {
      y: useTransform(scrollYProgress, [start, end], ["0%", "-100%"]),
      opacity: useTransform(scrollYProgress, [start, start + 0.3, end], [1, 0.5, 0]),
    };
  });

  useEffect(() => {
    const checkZoom = () => {
      setIsZoomedOut(window.devicePixelRatio < 0.6);
    };
    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  return (
    <section className="relative bg-purple-50">
      {/* Header */}
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-black">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
              Journey
            </span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore the milestones that shaped our path.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className={isZoomedOut ? "relative py-20 px-6" : "relative"}
        style={!isZoomedOut ? { height: `${totalCards * 100}vh` } : {}}
      >
        {isZoomedOut ? (
          // Static vertical stack
          <div className="max-w-6xl mx-auto space-y-10">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white"
              >
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-purple-600 font-semibold">
                      {card.title}
                    </h4>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {card.year}
                    </h2>
                    <p className="text-gray-600 mt-4">{card.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {card.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 rounded-xl p-4 text-center"
                      >
                        <p className="text-xl font-bold text-purple-700">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-700">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative flex-1 h-full min-h-[300px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          // Scrollable stacked cards with animation
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full max-w-5xl h-[32rem] overflow-hidden">
              {cardData.map((card, index) => {
                const { y, opacity } = transforms[index];
                return (
                  <motion.div
                    key={index}
                    style={{
                      y,
                      opacity,
                      zIndex: totalCards - index,
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                    className="will-change-transform transition-transform duration-700"
                  >
                    <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-lg h-full">
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <h4 className="text-purple-600 font-semibold">
                            {card.title}
                          </h4>
                          <h2 className="text-3xl font-bold text-gray-900">
                            {card.year}
                          </h2>
                          <p className="text-gray-600 mt-4">
                            {card.description}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          {card.stats.map((stat, i) => (
                            <div
                              key={i}
                              className="bg-gray-100 rounded-xl p-4 text-center"
                            >
                              <p className="text-xl font-bold text-purple-700">
                                {stat.value}
                              </p>
                              <p className="text-sm text-gray-700">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative flex-1 h-full min-h-[300px]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}




// "use client";
// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Card } from "@/components/ui/card";

// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description:
//       "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
//     stats: [
//       { label: "Users", value: "50K+" },
//       { label: "Accuracy", value: "98%" },
//       { label: "Processing", value: "2x faster" },
//     ],
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description:
//       "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
//     stats: [
//       { label: "Accuracy", value: "+30%" },
//       { label: "Integrations", value: "15+" },
//       { label: "Users", value: "25K+" },
//     ],
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description:
//       "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "Features", value: "10+" },
//       { label: "DataProcessed", value: "1M+" },
//       { label: "Clients", value: "1K+" },
//     ],
//   },
// ];

// export default function SlidingCards() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isZoomedOut, setIsZoomedOut] = useState(false);

//   const totalCards = cardData.length;

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Compute transforms for each card based on scroll
//   const transforms = cardData.map((_, i) => {
//     const start = i / totalCards;
//     const end = (i + 1) / totalCards;
//     return {
//       y: useTransform(scrollYProgress, [start, end], ["0%", "-100%"]),
//       opacity: useTransform(scrollYProgress, [start, start + 0.3, end], [1, 0.5, 0]),
//     };
//   });

//   useEffect(() => {
//     const checkZoom = () => {
//       setIsZoomedOut(window.devicePixelRatio < 0.6);
//     };
//     checkZoom();
//     window.addEventListener("resize", checkZoom);
//     return () => window.removeEventListener("resize", checkZoom);
//   }, []);

//   return (
//     <section className="relative bg-purple-50">
//       {/* Header */}
//       <div className="h-screen flex items-center justify-center text-center">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">
//             <span className="text-black">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
//               Journey
//             </span>
//           </h1>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Explore the milestones that shaped our path.
//           </p>
//         </div>
//       </div>

//       <div
//         ref={containerRef}
//         className={isZoomedOut ? "relative py-20 px-6" : "relative"}
//         style={!isZoomedOut ? { height: `${totalCards * 100}vh` } : {}}
//       >
//         {isZoomedOut ? (
//           // Static vertical stack
//           <div className="max-w-6xl mx-auto space-y-10">
//             {cardData.map((card, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white"
//               >
//                 <div className="flex-1 p-8 flex flex-col justify-between">
//                   <div>
//                     <h4 className="text-purple-600 font-semibold">
//                       {card.title}
//                     </h4>
//                     <h2 className="text-3xl font-bold text-gray-900">
//                       {card.year}
//                     </h2>
//                     <p className="text-gray-600 mt-4">{card.description}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     {card.stats.map((stat, i) => (
//                       <div
//                         key={i}
//                         className="bg-gray-100 rounded-xl p-4 text-center"
//                       >
//                         <p className="text-xl font-bold text-purple-700">
//                           {stat.value}
//                         </p>
//                         <p className="text-sm text-gray-700">{stat.label}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="relative flex-1 h-full min-h-[300px]">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           // Scrollable stacked cards with animation
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="relative w-full max-w-5xl h-[32rem] overflow-hidden">
//               {cardData.map((card, index) => {
//                 const { y, opacity } = transforms[index];
//                 return (
//                   <motion.div
//                     key={index}
//                     style={{
//                       y,
//                       opacity,
//                       zIndex: totalCards - index,
//                       position: "absolute",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                     className="will-change-transform transition-transform duration-700"
//                   >
//                     <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-lg h-full">
//                       <div className="flex-1 p-8 flex flex-col justify-between">
//                         <div>
//                           <h4 className="text-purple-600 font-semibold">
//                             {card.title}
//                           </h4>
//                           <h2 className="text-3xl font-bold text-gray-900">
//                             {card.year}
//                           </h2>
//                           <p className="text-gray-600 mt-4">
//                             {card.description}
//                           </p>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mt-6">
//                           {card.stats.map((stat, i) => (
//                             <div
//                               key={i}
//                               className="bg-gray-100 rounded-xl p-4 text-center"
//                             >
//                               <p className="text-xl font-bold text-purple-700">
//                                 {stat.value}
//                               </p>
//                               <p className="text-sm text-gray-700">
//                                 {stat.label}
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="relative flex-1 h-full min-h-[300px]">
//                         <Image
//                           src={card.image}
//                           alt={card.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Card } from "@/components/ui/card";

// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description:
//       "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
//     stats: [
//       { label: "Users", value: "50K+" },
//       { label: "Accuracy", value: "98%" },
//       { label: "Processing", value: "2x faster" },
//     ],
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description:
//       "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
//     stats: [
//       { label: "Accuracy", value: "+30%" },
//       { label: "Integrations", value: "15+" },
//       { label: "Users", value: "25K+" },
//     ],
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description:
//       "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "Features", value: "10+" },
//       { label: "DataProcessed", value: "1M+" },
//       { label: "Clients", value: "1K+" },
//     ],
//   },
// ];

// export default function SlidingCards() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isZoomedOut, setIsZoomedOut] = useState(false);

//   const totalCards = cardData.length;

//   // Scroll hook (always runs)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Precompute transforms to avoid conditional hook usage
//   const transforms = cardData.map((_, index) => {
//     const start = (index - 0.5) / totalCards;
//     const end = (index + 0.5) / totalCards;
//     return {
//       opacity: useTransform(scrollYProgress, [start, end], [1, 0]),
//       y: useTransform(scrollYProgress, [start, end], ["0%", "-50%"]),
//     };
//   });

//   useEffect(() => {
//     const checkZoom = () => {
//       setIsZoomedOut(window.devicePixelRatio < 0.6);
//     };
//     checkZoom();
//     window.addEventListener("resize", checkZoom);
//     return () => window.removeEventListener("resize", checkZoom);
//   }, []);

//   return (
//     <section className="relative bg-purple-50">
//       {/* Header */}
//       <div className="h-screen flex items-center justify-center text-center">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">
//             <span className="text-black">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
//               Journey
//             </span>
//           </h1>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Explore the milestones that shaped our path.
//           </p>
//         </div>
//       </div>

//       {/* Cards Container */}
//       <div
//         ref={containerRef}
//         className={isZoomedOut ? "relative py-20 px-6" : "relative"}
//         style={!isZoomedOut ? { height: `${totalCards * 100}vh` } : {}}
//       >
//         {isZoomedOut ? (
//           // Vertically stacked layout for 25% zoom
//           <div className="max-w-6xl mx-auto space-y-10">
//             {cardData.map((card, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-xl"
//               >
//                 <div className="flex-1 p-8 flex flex-col justify-between">
//                   <div>
//                     <h4 className="text-purple-600 font-semibold">
//                       {card.title}
//                     </h4>
//                     <h2 className="text-3xl font-bold text-gray-900">
//                       {card.year}
//                     </h2>
//                     <p className="text-gray-600 mt-4">{card.description}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     {card.stats.map((stat, i) => (
//                       <div
//                         key={i}
//                         className="bg-gray-100 rounded-xl p-4 text-center"
//                       >
//                         <p className="text-xl font-bold text-purple-700">
//                           {stat.value}
//                         </p>
//                         <p className="text-sm text-gray-700">{stat.label}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="relative flex-1 h-full min-h-[300px]">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           // Scroll-animated cards
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="relative w-full max-w-5xl h-[32rem]">
//               {[...cardData].reverse().map((card, reversedIndex) => {
//                 const index = cardData.length - 1 - reversedIndex;
//                 const { opacity, y } = transforms[index];

//                 return (
//                   <motion.div
//                     key={index}
//                     style={{ opacity, y, zIndex: index + 1 }}
//                     className="absolute w-full h-full will-change-transform transition-transform duration-700"
//                   >
//                     <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-2xl h-full">
//                       <div className="flex-1 p-8 flex flex-col justify-between">
//                         <div>
//                           <h4 className="text-purple-600 font-semibold">
//                             {card.title}
//                           </h4>
//                           <h2 className="text-3xl font-bold text-gray-900">
//                             {card.year}
//                           </h2>
//                           <p className="text-gray-600 mt-4">
//                             {card.description}
//                           </p>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mt-6">
//                           {card.stats.map((stat, i) => (
//                             <div
//                               key={i}
//                               className="bg-gray-100 rounded-xl p-4 text-center"
//                             >
//                               <p className="text-xl font-bold text-purple-700">
//                                 {stat.value}
//                               </p>
//                               <p className="text-sm text-gray-700">
//                                 {stat.label}
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="relative flex-1 h-full min-h-[300px]">
//                         <Image
//                           src={card.image}
//                           alt={card.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }




// "use client";
// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Card } from "@/components/ui/card";

// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description:
//       "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
//     stats: [
//       { label: "Users", value: "50K+" },
//       { label: "Accuracy", value: "98%" },
//       { label: "Processing", value: "2x faster" },
//     ],
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description:
//       "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
//     stats: [
//       { label: "Accuracy", value: "+30%" },
//       { label: "Integrations", value: "15+" },
//       { label: "Users", value: "25K+" },
//     ],
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description:
//       "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "Features", value: "10+" },
//       { label: "DataProcessed", value: "1M+" },
//       { label: "Clients", value: "1K+" },
//     ],
//   },
// ];

// export default function SlidingCards() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isZoomedOut, setIsZoomedOut] = useState(false);

//   useEffect(() => {
//     const checkZoomOut = () => {
//       setIsZoomedOut(window.devicePixelRatio < 0.6);
//     };
//     checkZoomOut();
//     window.addEventListener("resize", checkZoomOut);
//     return () => window.removeEventListener("resize", checkZoomOut);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const totalCards = cardData.length;

//   return (
//     <section className="relative bg-purple-50">
//       {/* Header */}
//       <div className="h-screen flex items-center justify-center text-center">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">
//             <span className="text-black">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
//               Journey
//             </span>
//           </h1>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Explore the milestones that shaped our path.
//           </p>
//         </div>
//       </div>

//       {/* Sliding Section */}
//       <div
//         ref={containerRef}
//         className={isZoomedOut ? "relative py-20 px-6" : "relative"}
//         style={!isZoomedOut ? { height: `${totalCards * 100}vh` } : {}}
//       >
//         {isZoomedOut ? (
//           // Stacked layout
//           <div className="max-w-6xl mx-auto space-y-10">
//             {cardData.map((card, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-xl"
//               >
//                 <div className="flex-1 p-8 flex flex-col justify-between">
//                   <div>
//                     <h4 className="text-purple-600 font-semibold">
//                       {card.title}
//                     </h4>
//                     <h2 className="text-3xl font-bold text-gray-900">
//                       {card.year}
//                     </h2>
//                     <p className="text-gray-600 mt-4">{card.description}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     {card.stats.map((stat, i) => (
//                       <div
//                         key={i}
//                         className="bg-gray-100 rounded-xl p-4 text-center"
//                       >
//                         <p className="text-xl font-bold text-purple-700">
//                           {stat.value}
//                         </p>
//                         <p className="text-sm text-gray-700">{stat.label}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="relative flex-1 h-full min-h-[300px]">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           // Scroll-animated cards
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="relative w-full max-w-5xl h-[32rem]">
//               {[...cardData].reverse().map((card, reversedIndex) => {
//                 const index = cardData.length - 1 - reversedIndex;
//                 const start = (index - 0.5) / totalCards;
//                 const end = (index + 0.5) / totalCards;

//                 const opacity = useTransform(
//                   scrollYProgress,
//                   [start, end],
//                   [1, 0],
//                   { clamp: false }
//                 );

//                 const y = useTransform(
//                   scrollYProgress,
//                   [start, end],
//                   ["0%", "-50%"],
//                   { clamp: false }
//                 );

//                 return (
//                   <motion.div
//                     key={index}
//                     style={{ opacity, y }}
//                     className="absolute w-full h-full will-change-transform"
//                   >
//                     <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-2xl h-full">
//                       <div className="flex-1 p-8 flex flex-col justify-between">
//                         <div>
//                           <h4 className="text-purple-600 font-semibold">
//                             {card.title}
//                           </h4>
//                           <h2 className="text-3xl font-bold text-gray-900">
//                             {card.year}
//                           </h2>
//                           <p className="text-gray-600 mt-4">
//                             {card.description}
//                           </p>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mt-6">
//                           {card.stats.map((stat, i) => (
//                             <div
//                               key={i}
//                               className="bg-gray-100 rounded-xl p-4 text-center"
//                             >
//                               <p className="text-xl font-bold text-purple-700">
//                                 {stat.value}
//                               </p>
//                               <p className="text-sm text-gray-700">
//                                 {stat.label}
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="relative flex-1 h-full min-h-[300px]">
//                         <Image
//                           src={card.image}
//                           alt={card.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }





// legacy codebase 
// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card } from "@/components/ui/card";
// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description:
//       "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
//     stats: [
//       { label: "Users", value: "50K+" },
//       { label: "Accuracy", value: "98%" },
//       { label: "Processing", value: "2x faster" },
//     ],
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description:
//       "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",

//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
//     stats: [
//       { label: "Accuracy", value: "+30%" },
//       { label: "Integrations", value: "15+" },
//       { label: "Users", value: "25K+" },
//     ],
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description:
//       "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
//     image:
//       "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "Features", value: "10+" },
//       { label: "DataProcessed", value: "1M+" },
//       { label: "Clients", value: "1K+" },
//     ],
//   },
// ];

// export default function SlidingCards() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isZoomedOut, setIsZoomedOut] = useState(false);

//   useEffect(() => {
//     const checkZoomOut = () => {
//       const zoomLevel = window.devicePixelRatio;
//       setIsZoomedOut(zoomLevel < 0.6); // True at ~50% or more zoomed out
//     };
//     checkZoomOut();
//     window.addEventListener("resize", checkZoomOut);
//     return () => window.removeEventListener("resize", checkZoomOut);
//   }, []);
//   // ✅ Scroll-based active card detection
// useEffect(() => {
//   if (isZoomedOut) return;
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const index = Math.floor(scrollY / window.innerHeight);
//     setActiveIndex(Math.min(index, cardData.length - 1));
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [isZoomedOut]);

//   // useEffect(() => {
//   //   if (isZoomedOut) return;

//   //   const onScroll = () => {
//   //     const container = containerRef.current;
//   //     if (!container) return;

//   //     const scrollY = window.scrollY;
//   //     const containerTop = container.offsetTop;
//   //     const containerHeight = container.scrollHeight;
//   //     const windowHeight = window.innerHeight;

//   //     const scrollProgress = Math.min(
//   //       Math.max((scrollY - containerTop) / (containerHeight - windowHeight), 0),
//   //       1
//   //     );

//   //     const index = Math.floor(scrollProgress * cardData.length);
//   //     setActiveIndex(Math.min(index, cardData.length - 1)); // ✅ Prevent out-of-bounds index
//   //   };

//   //   window.addEventListener("scroll", onScroll);
//   //   return () => window.removeEventListener("scroll", onScroll);
//   // }, [isZoomedOut]);

//   return (
//     <section className="relative bg-purple-50">
//       {/* Header Section */}
//       <div className="h-screen flex items-center justify-center text-center">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">
//             <span className="text-black">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
//               Journey
//             </span>
//           </h1>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Explore the milestones that shaped our path.
//           </p>
//         </div>
//       </div>

// <div
//   ref={containerRef}
//   className={
//     isZoomedOut
//       ? "relative py-20 px-6"
//       : `relative` // Apply height using inline style
//   }
//   style={!isZoomedOut ? { height: `${cardData.length * 100}vh` } : {}}
// >

//         {isZoomedOut ? (
//           // ✅ Vertical stacked layout for zoomed-out views
//           <div className="max-w-6xl mx-auto space-y-10">
//             {cardData.map((card, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-xl"
//               >
//                 <div className="flex-1 p-8 flex flex-col justify-between">
//                   <div>
//                     <h4 className="text-purple-600 font-semibold">
//                       {card.title}
//                     </h4>
//                     <h2 className="text-3xl font-bold text-gray-900">
//                       {card.year}
//                     </h2>
//                     <p className="text-gray-600 mt-4">{card.description}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     {card.stats.map((stat, i) => (
//                       <div
//                         key={i}
//                         className="bg-gray-100 rounded-xl p-4 text-center"
//                       >
//                         <p className="text-xl font-bold text-purple-700">
//                           {stat.value}
//                         </p>
//                         <p className="text-sm text-gray-700">{stat.label}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="relative flex-1 h-full min-h-[300px]">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           // ✅ Scroll-animated view for normal zoom
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="relative w-full max-w-5xl h-[32rem]">
//               <AnimatePresence mode="wait">
//                 {cardData.map((card, index) =>
//                   index === activeIndex ? (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 100 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -100 }}
//                       transition={{ duration: 0.6 }}
//                       className="absolute w-full h-full"
//                     >
//                       <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-2xl h-full">
//                         <div className="flex-1 p-8 flex flex-col justify-between">
//                           <div>
//                             <h4 className="text-purple-600 font-semibold">
//                               {card.title}
//                             </h4>
//                             <h2 className="text-3xl font-bold text-gray-900">
//                               {card.year}
//                             </h2>
//                             <p className="text-gray-600 mt-4">
//                               {card.description}
//                             </p>
//                           </div>
//                           <div className="grid grid-cols-2 gap-4 mt-6">
//                             {card.stats.map((stat, i) => (
//                               <div
//                                 key={i}
//                                 className="bg-gray-100 rounded-xl p-4 text-center"
//                               >
//                                 <p className="text-xl font-bold text-purple-700">
//                                   {stat.value}
//                                 </p>
//                                 <p className="text-sm text-gray-700">
//                                   {stat.label}
//                                 </p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="relative flex-1 h-full min-h-[300px]">
//                           <Image
//                             src={card.image}
//                             alt={card.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                       </Card>
//                     </motion.div>
//                   ) : null
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


