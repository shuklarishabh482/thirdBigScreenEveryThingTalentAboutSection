

"use client";
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
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}

       
        <div className="w-full max-w-md h-[560px] mx-auto overflow-hidden">
          <Image
            src="https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Flanding-page%2Finsight-img-2.jpeg&w=1090&q=75"
            alt="Working together"
            width={400}
            height={500}
            className="w-full h-[550px]  object-cover"
          />
        </div>


        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">We Thrive</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn, and push boundaries—fostering shared growth and a relentless pursuit of excellence.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {thriveData.map(({ title, description, icon }) => {
              const Icon = icons[icon];
              return (
                <Card key={title} className="bg-white/80 shadow-md border-none backdrop-blur-sm">
                  <CardContent className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Icon className="w-5 h-5" />
                      <h4 className="font-semibold">{title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



  