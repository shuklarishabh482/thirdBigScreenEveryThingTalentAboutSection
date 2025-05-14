


"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Users,
  Lightbulb,
  Rocket,
  TrendingUp,
  Star,
  Award,
  LucideIcon,
} from "lucide-react";

interface ThriveItem {
  title: string;
  description: string;
  icon: string;
}

const thriveData: ThriveItem[] = [
  {
    title: "Community-Driven",
    description: "We build strong connections and foster collaboration within our team.",
    icon: "users",
  },
  {
    title: "Innovation First",
    description: "We encourage creative thinking and novel approaches to challenges.",
    icon: "lightbulb",
  },
  {
    title: "Action Oriented",
    description: "We transform ideas into tangible results through decisive action.",
    icon: "rocket",
  },
  {
    title: "Continuous Growth",
    description: "We embrace learning and development as core principles.",
    icon: "trending-up",
  },
  {
    title: "Excellence Pursuit",
    description: "We strive for exceptional quality in everything we do.",
    icon: "star",
  },
  {
    title: "Shared Success",
    description: "We celebrate achievements and grow together as one team.",
    icon: "award",
  },
];

const icons: Record<string, LucideIcon> = {
  users: Users,
  lightbulb: Lightbulb,
  rocket: Rocket,
  "trending-up": TrendingUp,
  star: Star,
  award: Award,
};


export default function HowWeThrive() {
  return (
    <section id="thrive" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="w-full max-w-[700px] h-auto mx-auto">
            <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden border border-purple-100 shadow-md">
              <Image
                src="https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Flanding-page%2Finsight-img-2.jpeg&w=1090&q=75"
                alt="Working together"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-full lg:max-w-[680px] xl:max-w-[720px]">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">
                We Thrive
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate,
              learn, and push boundaries—fostering shared growth and a relentless pursuit of excellence.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {thriveData.map(({ title, description, icon }) => {
                const Icon = icons[icon];
                return (
                  <Card
                    key={title}
                    className="bg-white/80 shadow-md border-none backdrop-blur-sm"
                  >
                    <CardContent className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-black">
                        <Icon className="w-5 h-5" />
                        <h4 className="font-semibold text-base sm:text-base">{title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// export default function HowWeThrive() {
//   return (
//     <section id="thrive" className="py-20 bg-gradient-to-br from-white to-purple-50">
//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Image */}
//           <div className="w-full max-w-[700px] h-auto mx-auto">
//             <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden border border-purple-100 shadow-md">
//               <Image
//                 src="https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Flanding-page%2Finsight-img-2.jpeg&w=1090&q=75"
//                 alt="Working together"
//                 fill
//                 className="object-cover rounded-2xl"
//               />
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="max-w-full lg:max-w-[680px] xl:max-w-[720px]">
//             <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
//               How{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">
//                 We Thrive
//               </span>
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate,
//               learn, and push boundaries—fostering shared growth and a relentless pursuit of excellence.
//             </p>

//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {thriveData.map(({ title, description, icon }) => {
//                 const Icon = icons[icon];
//                 return (
//                   <Card
//                     key={title}
//                     className="bg-white/80 shadow-md border-none backdrop-blur-sm"
//                   >
//                     <CardContent className="p-5 space-y-2">
//                       <div className="flex items-center gap-2 text-black">
//                         <Icon className="w-5 h-5" />
//                         <h4 className="font-semibold text-base sm:text-base">{title}</h4>
//                       </div>
//                       <p className="text-sm text-gray-600">{description}</p>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

