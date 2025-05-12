


import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import DottedMap from 'dotted-map'
import { useTheme } from 'next-themes' // If you're using next-themes for theme handling

interface MapProps {
  dots: {
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  }[];
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {

  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    // <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">

      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] opacity-40"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={i}>
              <motion.path
                d={createCurvedPath(start, end)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
              {[start, end].map((point, j) => (
                <g key={j}>
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                    <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}


// // components/WorldMap.tsx
//  function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const map = new DottedMap({ height: 100, grid: "diagonal" });
//   const { theme } = useTheme();

//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//     shape: "circle",
//     backgroundColor: "transparent",
//   });

//   const projectPoint = (lat: number, lng: number) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (
//     start: { x: number; y: number },
//     end: { x: number; y: number }
//   ) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//       <Image
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] opacity-40"
//         alt="world map"
//         height={495}
//         width={1056}
//         draggable={false}
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0"
//       >
//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         {dots.map((dot, i) => {
//           const start = projectPoint(dot.start.lat, dot.start.lng);
//           const end = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <g key={i}>
//               <motion.path
//                 d={createCurvedPath(start, end)}
//                 fill="none"
//                 stroke="url(#path-gradient)"
//                 strokeWidth="1"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//               />
//               {[start, end].map((point, j) => (
//                 <g key={j}>
//                   <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
//                   <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
//                     <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
//                     <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
//                   </circle>
//                 </g>
//               ))}
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }

// // components/JoinOurMissionSection.tsx

// export function JoinOurMissionSection() {
//   const dots = [
//     {
//       start: { lat: 64.2008, lng: -149.4937, label: "Alaska" },
//       end: { lat: 28.6139, lng: 77.209, label: "Delhi" },
//     },
//     // ... your other dots
//   ];

//   return (
//     <section className="relative w-full h-[600px] flex items-center justify-center bg-background">
//       {/* Background WorldMap */}
//       <WorldMap dots={dots} />

//       {/* Foreground Card */}
//       <div className="relative z-10 max-w-xl text-center p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
//         <h2 className="text-4xl font-bold mb-4">
//           Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Mission</span>
//         </h2>
//         <p className="text-gray-700 mb-6 dark:text-gray-300">
//           Help us reimagine the future of hiring in the tech industry.
//         </p>
//         <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
//           Start Here →
//         </button>
//       </div>
//     </section>
//   );
// }



// almost good code 
// "use client";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import DottedMap from "dotted-map";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// interface MapProps {
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
// }
// export function WorldMap({
//   dots = [],
//   lineColor = "#0ea5e9",
// }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const map = new DottedMap({ height: 100, grid: "diagonal" });

//   const { theme } = useTheme();

//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//     shape: "circle",
//     backgroundColor: theme === "dark" ? "black" : "white",
//   });

//   const projectPoint = (lat: number, lng: number) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (
//     start: { x: number; y: number },
//     end: { x: number; y: number }
//   ) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   return (
//     <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
//       <Image
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//         alt="world map"
//         height="495"
//         width="1056"
//         draggable={false}
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-none select-none"
//       >
//         {dots.map((dot, i) => {
//           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <g key={`path-group-${i}`}>
//               <motion.path
//                 d={createCurvedPath(startPoint, endPoint)}
//                 fill="none"
//                 stroke="url(#path-gradient)"
//                 strokeWidth="1"
//                 initial={{
//                   pathLength: 0,
//                 }}
//                 animate={{
//                   pathLength: 1,
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: 0.5 * i,
//                   ease: "easeOut",
//                 }}
//                 key={`start-upper-${i}`}
//               ></motion.path>
//             </g>
//           );
//         })}

//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         {dots.map((dot, i) => (
//           <g key={`points-group-${i}`}>
//             <g key={`start-${i}`}>
//               <circle
//                 cx={projectPoint(dot.start.lat, dot.start.lng).x}
//                 cy={projectPoint(dot.start.lat, dot.start.lng).y}
//                 r="2"
//                 fill={lineColor}
//               />
//               <circle
//                 cx={projectPoint(dot.start.lat, dot.start.lng).x}
//                 cy={projectPoint(dot.start.lat, dot.start.lng).y}
//                 r="2"
//                 fill={lineColor}
//                 opacity="0.5"
//               >
//                 <animate
//                   attributeName="r"
//                   from="2"
//                   to="8"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//                 <animate
//                   attributeName="opacity"
//                   from="0.5"
//                   to="0"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//             </g>
//             <g key={`end-${i}`}>
//               <circle
//                 cx={projectPoint(dot.end.lat, dot.end.lng).x}
//                 cy={projectPoint(dot.end.lat, dot.end.lng).y}
//                 r="2"
//                 fill={lineColor}
//               />
//               <circle
//                 cx={projectPoint(dot.end.lat, dot.end.lng).x}
//                 cy={projectPoint(dot.end.lat, dot.end.lng).y}
//                 r="2"
//                 fill={lineColor}
//                 opacity="0.5"
//               >
//                 <animate
//                   attributeName="r"
//                   from="2"
//                   to="8"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//                 <animate
//                   attributeName="opacity"
//                   from="0.5"
//                   to="0"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//             </g>
//           </g>
//         ))}
//       </svg>
//     </div>
//   );
// }
// new code 


// "use client";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import DottedMap from "dotted-map";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Mail } from "lucide-react";

// interface MapProps {
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
// }

// export default function JoinOurMissionMap({
//   dots = [
//     {
//       start: { lat: 40.7128, lng: -74.006 }, // New York
//       end: { lat: 48.8566, lng: 2.3522 }, // Paris
//     },
//     {
//       start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
//       end: { lat: -33.8688, lng: 151.2093 }, // Sydney
//     },
//     {
//       start: { lat: 51.5074, lng: -0.1278 }, // London
//       end: { lat: 19.4326, lng: -99.1332 }, // Mexico City
//     },
//   ],
//   lineColor = "#0ea5e9",
// }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const map = new DottedMap({ height: 100, grid: "diagonal" });
//   const [isHovered, setIsHovered] = useState(false);

//   const { theme } = useTheme();

//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//     shape: "circle",
//     backgroundColor: "transparent", // Make background transparent
//   });

//   const projectPoint = (lat: number, lng: number) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (
//     start: { x: number; y: number },
//     end: { x: number; y: number }
//   ) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };
//   return (
//     <div className="relative w-full h-96 overflow-hidden rounded-lg">
//       {/* World Map as Background */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-blue-900/50 dark:from-blue-900/30 dark:to-black/60 z-10" />
      
//       <div className="absolute inset-0">
//         <Image
//           src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//           className="h-full w-full object-cover"
//           alt="world map"
//           fill
//           draggable={false}
//         />
//         <svg
//           ref={svgRef}
//           viewBox="0 0 800 400"
//           className="w-full h-full absolute inset-0"
//         >
//           {dots.map((dot, i) => {
//             const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//             const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//             return (
//               <g key={`path-group-${i}`}>
//                 <motion.path
//                   d={createCurvedPath(startPoint, endPoint)}
//                   fill="none"
//                   stroke="url(#path-gradient)"
//                   strokeWidth="1"
//                   initial={{
//                     pathLength: 0,
//                   }}
//                   animate={{
//                     pathLength: 1,
//                   }}
//                   transition={{
//                     duration: 1,
//                     delay: 0.5 * i,
//                     ease: "easeOut",
//                   }}
//                   key={`start-upper-${i}`}
//                 ></motion.path>
//               </g>
//             );
//           })}

//           <defs>
//             <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="white" stopOpacity="0" />
//               <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//               <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//               <stop offset="100%" stopColor="white" stopOpacity="0" />
//             </linearGradient>
//           </defs>

//           {dots.map((dot, i) => (
//             <g key={`points-group-${i}`}>
//               <g key={`start-${i}`}>
//                 <circle
//                   cx={projectPoint(dot.start.lat, dot.start.lng).x}
//                   cy={projectPoint(dot.start.lat, dot.start.lng).y}
//                   r="2"
//                   fill={lineColor}
//                 />
//                 <circle
//                   cx={projectPoint(dot.start.lat, dot.start.lng).x}
//                   cy={projectPoint(dot.start.lat, dot.start.lng).y}
//                   r="2"
//                   fill={lineColor}
//                   opacity="0.5"
//                 >
//                   <animate
//                     attributeName="r"
//                     from="2"
//                     to="8"
//                     dur="1.5s"
//                     begin="0s"
//                     repeatCount="indefinite"
//                   />
//                   <animate
//                     attributeName="opacity"
//                     from="0.5"
//                     to="0"
//                     dur="1.5s"
//                     begin="0s"
//                     repeatCount="indefinite"
//                   />
//                 </circle>
//               </g>
//               <g key={`end-${i}`}>
//                 <circle
//                   cx={projectPoint(dot.end.lat, dot.end.lng).x}
//                   cy={projectPoint(dot.end.lat, dot.end.lng).y}
//                   r="2"
//                   fill={lineColor}
//                 />
//                 <circle
//                   cx={projectPoint(dot.end.lat, dot.end.lng).x}
//                   cy={projectPoint(dot.end.lat, dot.end.lng).y}
//                   r="2"
//                   fill={lineColor}
//                   opacity="0.5"
//                 >
//                   <animate
//                     attributeName="r"
//                     from="2"
//                     to="8"
//                     dur="1.5s"
//                     begin="0s"
//                     repeatCount="indefinite"
//                   />
//                   <animate
//                     attributeName="opacity"
//                     from="0.5"
//                     to="0"
//                     dur="1.5s"
//                     begin="0s"
//                     repeatCount="indefinite"
//                   />
//                 </circle>
//               </g>
//             </g>
//           ))}
//         </svg>
//       </div>

//       {/* Join Our Mission Card - Centered on top of the map */}
//       <div className="absolute inset-0 flex items-center justify-center z-20">
//         <Card 
//           className={`bg-black/80 backdrop-blur-sm text-white p-6 rounded-xl transition-all duration-300 max-w-md ${
//             isHovered ? 'transform scale-105' : ''
//           }`}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="text-center space-y-4">
//             <h2 className="text-2xl font-bold text-blue-400">Join Our Mission</h2>
//             <p className="text-gray-300">Be part of our global initiative to connect communities around the world.</p>
//             <Button variant="outline" className="mt-2 bg-transparent border-blue-500 text-blue-400 hover:bg-blue-900/30 group transition-all">
//               <span>Subscribe to Updates</span>
//               <Mail className="ml-2 h-4 w-4 group-hover:animate-pulse" />
//             </Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }











