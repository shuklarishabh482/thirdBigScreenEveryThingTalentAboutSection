// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
// import Image from "next/image";
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

// export default function SlidingCard() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isZoomedOut, setIsZoomedOut] = useState(false);
//   const totalCards = cardData.length;

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Properly type and create MotionValue arrays
//   const yTransforms: MotionValue<number>[] = [];
//   const opacityTransforms: MotionValue<number>[] = [];

//   // Use a useEffect to ensure hooks are only called during render
//   useEffect(() => {
//     for (let i = 0; i < totalCards; i++) {
//       const start = i / totalCards;
//       const end = (i + 1) / totalCards;
      
//       if (!yTransforms[i]) {
//         yTransforms[i] = useTransform(scrollYProgress, [start, end], [0, -100]);
//       }
      
//       if (!opacityTransforms[i]) {
//         opacityTransforms[i] = useTransform(
//           scrollYProgress, 
//           [start, start + 0.3, end], 
//           [1, 0.5, 0]
//         );
//       }
//     }
//   }, [scrollYProgress, totalCards]);

//   useEffect(() => {
//     const checkZoom = () => {
//       const zoom = window.devicePixelRatio;
//       setIsZoomedOut(zoom < 1);
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
//           // Static stacked version for zoomed-out mode
//           <div className="max-w-6xl mx-auto space-y-10">
//             {cardData.map((card, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white"
//               >
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
//                         <p className="text-xl font-bold text-purple-700">{stat.value}</p>
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
//           // Animated stacked scroll version
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="relative w-full max-w-5xl h-[32rem] overflow-hidden">
//               {cardData.map((card, index) => (
//                 <motion.div
//                   key={index}
//                   style={{
//                     y: yTransforms[index],
//                     opacity: opacityTransforms[index],
//                     zIndex: totalCards - index,
//                     position: "absolute",
//                     width: "100%",
//                     height: "100%",
//                   }}
//                   className="will-change-transform transition-transform duration-700"
//                 >
//                   <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white shadow-lg h-full">
//                     <div className="flex-1 p-8 flex flex-col justify-between">
//                       <div>
//                         <h4 className="text-purple-600 font-semibold">{card.title}</h4>
//                         <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
//                         <p className="text-gray-600 mt-4">{card.description}</p>
//                       </div>
//                       <div className="grid grid-cols-2 gap-4 mt-6">
//                         {card.stats.map((stat, i) => (
//                           <div
//                             key={i}
//                             className="bg-gray-100 rounded-xl p-4 text-center"
//                           >
//                             <p className="text-xl font-bold text-purple-700">{stat.value}</p>
//                             <p className="text-sm text-gray-700">{stat.label}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="relative flex-1 h-full min-h-[300px]">
//                       <Image
//                         src={card.image}
//                         alt={card.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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

export default function SlidingCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const totalCards = cardData.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create individual transform values for each card
  // Card 0 transforms
  const y0 = useTransform(scrollYProgress, [0, 1/totalCards], [0, -100]);
  const opacity0 = useTransform(scrollYProgress, [0, 0.3/totalCards, 1/totalCards], [1, 0.5, 0]);
  
  // Card 1 transforms
  const y1 = useTransform(scrollYProgress, [1/totalCards, 2/totalCards], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [1/totalCards, 1/totalCards + 0.3/totalCards, 2/totalCards], [1, 0.5, 0]);
  
  // Card 2 transforms
  const y2 = useTransform(scrollYProgress, [2/totalCards, 3/totalCards], [0, -100]);
  const opacity2 = useTransform(scrollYProgress, [2/totalCards, 2/totalCards + 0.3/totalCards, 3/totalCards], [1, 0.5, 0]);

  // Put transforms into arrays for easy access in the render
  const yTransforms = [y0, y1, y2];
  const opacityTransforms = [opacity0, opacity1, opacity2];

  useEffect(() => {
    const checkZoom = () => {
      const zoom = window.devicePixelRatio;
      setIsZoomedOut(zoom < 1);
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
          // Static stacked version for zoomed-out mode
          <div className="max-w-6xl mx-auto space-y-10">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white"
              >
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-purple-600 font-semibold">{card.title}</h4>
                    <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
                    <p className="text-gray-600 mt-4">{card.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {card.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 rounded-xl p-4 text-center"
                      >
                        <p className="text-xl font-bold text-purple-700">{stat.value}</p>
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
          // Animated stacked scroll version
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full max-w-5xl h-[32rem] overflow-hidden">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  style={{
                    y: yTransforms[index],
                    opacity: opacityTransforms[index],
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
                        <h4 className="text-purple-600 font-semibold">{card.title}</h4>
                        <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
                        <p className="text-gray-600 mt-4">{card.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {card.stats.map((stat, i) => (
                          <div
                            key={i}
                            className="bg-gray-100 rounded-xl p-4 text-center"
                          >
                            <p className="text-xl font-bold text-purple-700">{stat.value}</p>
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
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}