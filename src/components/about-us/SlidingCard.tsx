



// // approximately best code 
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { Card, CardContent } from "@/components/ui/card";
// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description: "Enhanced prediction models and deeper integration.",
//     image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
//     stats: [
//       { label: "Accuracy", value: "+30%" },
//       { label: "Integrations", value: "15+" },
//       { label: "Users", value: "25K+" },
//     ],
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description: "Integrated machine learning models with CRM tools.",
//     image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
//     stats: [
//       { label: "Models", value: "10+" },
//       { label: "Accuracy", value: "+25%" },
//     ],
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description: "Opened platform to developers with robust APIs.",
//     image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "APIs", value: "50+" },
//       { label: "Partners", value: "30+" },
//     ],
//   },
//   {
//     year: "2021",
//     title: "Founding Year",
//     description: "Started our journey with a vision to transform AI.",
//     image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
//     stats: [
//       { label: "Team", value: "5" },
//       { label: "Launch", value: "Beta" },
//     ],
//   },
// ];

// export default function SlidingCards() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="w-full py-20 bg-purple-50 overflow-x-hidden">
//       <div className="container mx-auto">
//         <div className="flex gap-6 transition-transform duration-700">
//           {cardData.map((card, idx) => (
//             <div
//               key={idx}
//               className={cn(
//                 "relative min-w-[300px] md:min-w-[400px] shrink-0 transition-all duration-500 ease-in-out rounded-2xl shadow-lg bg-white overflow-hidden cursor-pointer",
//                 {
//                   "-ml-20 z-10": idx !== 0,
//                   "scale-105": idx === active,
//                 }
//               )}
//               onClick={() => setActive(idx)}
//             >

//               <div className="flex h-full">
//                 <div className="flex flex-col justify-between p-6 w-1/2 space-y-4">
//                   <div>
//                     <h4 className="text-purple-600 font-medium">{card.title}</h4>
//                     <h2 className="text-2xl font-bold text-black">{card.year}</h2>
//                     <p className="text-sm text-gray-600 mt-2">{card.description}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-sm">
//                     {card.stats.map((stat, i) => (
//                       <div
//                         key={i}
//                         className="bg-purple-100 rounded-xl p-3 text-center"
//                       >
//                         <p className="font-bold text-purple-700">{stat.value}</p>
//                         <p className="text-gray-700">{stat.label}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="w-1/2 h-full relative">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cardData = [
  {
    year: "2024",
    title: "Everything AI 2.0",
    description: "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
    stats: [
      { label: "Accuracy", value: "+30%" },
      { label: "Integrations", value: "15+" },
      { label: "Users", value: "25K+" },
    ],
  },
  {
    year: "2023",
    title: "ML Integration",
    description: "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
    stats: [
      { label: "Models", value: "10+" },
      { label: "Accuracy", value: "+25%" },
    ],
  },
  {
    year: "2022",
    title: "API Launch",
    description: "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
    stats: [
      { label: "APIs", value: "50+" },
      { label: "Partners", value: "30+" },
    ],
  },


];

export default function VerticalStickyCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      // Calculate scroll position relative to container
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate which card should be active based on scroll position
      // We subtract viewportHeight because we want to start the effect when the container is fully visible
      const scrollProgress = -containerTop / (containerHeight - viewportHeight);
      
      let newActiveIndex = 0;
      
      if (scrollProgress < 0) {
        newActiveIndex = 0;
      } else if (scrollProgress >= 1) {
        newActiveIndex = cardData.length - 1;
      } else {
        newActiveIndex = Math.floor(scrollProgress * cardData.length);
      }
      
      if (newActiveIndex !== activeCardIndex) {
        setActiveCardIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeCardIndex]);

  return (
    <section className="w-full bg-purple-50">
      {/* Introduction area */}
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Our Journey</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* Scroll down to explore our timeline and see how we've evolved over the years */}
             Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
          </p>
{/* subscription button  card */}
  {/* <Card 
        className={`bg-black text-white p-3 rounded-md transition-all duration-300 ${
          isHovered ? 'transform scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button variant="ghost" className="w-full flex items-center justify-center gap-2 text-white hover:bg-gray-800">
        
          <span className="font-medium">Subscribe to Updates</span>
          <Mail className="h-5 w-5" />
        </Button>
      </Card> */}

       {/* <Card 
        className={`bg-black text-white p-3 rounded-md transition-all duration-300 w-1/12 min-w-fit ${
          isHovered ? 'transform scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button variant="ghost" className="flex items-center justify-center gap-1 text-white hover:bg-gray-800 text-xs px-2 py-1">
          <span className="font-medium">Subscribe to Updates</span>
          <Mail className="h-4 w-4" />
        </Button>
      </Card> */}
      <div className="flex items-center justify-center w-full h-full p-8">
      <Card 
        className={`bg-black text-white p-3 rounded-md transition-all duration-300 w-1/5 min-w-fit mx-auto ${
          isHovered ? 'transform scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button variant="ghost" className="flex items-center justify-center gap-1 text-white hover:bg-gray-800 text-xs px-2 py-1">
          <span className="font-medium">Subscribe to Updates</span>
          <Mail className="h-4 w-4" />
        </Button>
      </Card>
    </div>
        </div>
      </div> 
      {/* Cards container - this will be tall to allow scrolling */}
      <div 
        ref={containerRef}
        className="relative h-[400vh]" // Height to allow scrolling (4x viewport height)
      >
        {/* Sticky viewport for cards */}
        <div className="sticky top-0 h-screen flex items-center justify-center p-4">
          <div 
            ref={cardsContainerRef}
            className="container mx-auto relative max-w-4xl h-full flex items-center justify-center"
          >
            {/* Render all cards with stacking effect */}
            {cardData.map((card, index) => (
              <Card
                key={index}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out",
                  "flex flex-col md:flex-row h-auto md:h-96 rounded-2xl overflow-hidden shadow-lg bg-white",
                  index === activeCardIndex ? "opacity-100 scale-100 z-10" : 
                    index < activeCardIndex ? "opacity-0 scale-95 -translate-y-16 z-0" : 
                    "opacity-0 scale-95 translate-y-16 z-0"
                )}
              >
                <div className="flex-1 flex flex-col justify-between p-6 space-y-4">
                  <div>
                    <h4 className="text-purple-600 font-medium">{card.title}</h4>
                    <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
                    <p className="text-gray-600 mt-4">{card.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {card.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-purple-100 rounded-xl p-3 text-center"
                      >
                        <p className="font-bold text-purple-700">{stat.value}</p>
                        <p className="text-gray-700">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative min-h-56 md:min-h-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final section */}
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Looking Forward</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our journey continues as we push the boundaries of AI technology
          </p>
        </div>
      </div>
    </section>
  );
}

// 3rd code
// "use client";
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// const cardData = [
//   {
//     year: "2024",
//     title: "Everything AI 2.0",
//     description: "Enhanced prediction models and deeper integration.",
//   },
//   {
//     year: "2023",
//     title: "ML Integration",
//     description: "Integrated machine learning models with CRM tools.",
//   },
//   {
//     year: "2022",
//     title: "API Launch",
//     description: "Opened platform to developers with robust APIs.",
//   },
//   {
//     year: "2021",
//     title: "Founding Year",
//     description: "Started our journey with a vision to transform AI.",
//   },
// ];
// export default function StackingCards() {
//   return (
//     <section className="relative w-full min-h-[300vh] bg-purple-50 py-20">
//       <div className="sticky top-20 h-[80vh] flex items-center justify-center">
//         <div className="relative w-[90%] max-w-2xl h-full">
//           {cardData.map((card, index) => (
//             <StackCard key={index} card={card} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// function StackCard({ card, index }: any) {
//   const { ref, inView } = useInView({ threshold: 0.3 });
//   const controls = useAnimation();
//   useEffect(() => {
//     if (inView) {
//       controls.start({
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         zIndex: 10 + index,
//         transition: { duration: 0.6, ease: "easeOut" },
//       });
//     } else {
//       controls.start({
//         y: 50,
//         opacity: 0,
//         scale: 0.95,
//         zIndex: 10 - index,
//       });
//     }
//   }, [inView, controls, index]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial={{ opacity: 0, y: 50, scale: 0.95 }}
//       className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center"
//     >
//       <h4 className="text-purple-600 font-medium text-lg">{card.title}</h4>
//       <h2 className="text-3xl font-bold text-black mt-2">{card.year}</h2>
//       <p className="text-gray-600 mt-4">{card.description}</p>
//     </motion.div>
//   );
// }
