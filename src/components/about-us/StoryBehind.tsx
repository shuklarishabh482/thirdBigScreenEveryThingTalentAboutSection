
"use client";
 const aboutUsFeatures = [
    {
      title: "AI-Powered",
      description: "Advanced AI/ML algorithms for precise matching",
      icon: "brain-circuit",
    },
    {
      title: "Human-Centric",
      description: "Built by recruiters, for recruiters",
      icon: "users",
    },
    {
      title: "Skill Assessment",
      description: "Comprehensive skill evaluation system",
      icon: "graduation-cap",
    },
    {
      title: "Future-Ready",
      description: "Constantly evolving with industry needs",
      icon: "forward",
    },
  ];
// import { aboutUsFeatures } from "@/data/aboutUsFeatures";
import { Card, CardContent } from "@/components/ui/card" ;
import { LucideIcon, BrainCircuit, Users, GraduationCap, Forward } from "lucide-react";
import Image from "next/image";

// import AboutUsImage from "@/assets/about-us.jpg";

const icons: Record<string, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  "users": Users,
  "graduation-cap": GraduationCap,
  "forward": Forward,
};

export default function StoryBehind() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Story</span> Behind Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              It all started with one question: What if hiring didn’t have to feel like gambling on a hunch?
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutUsFeatures.map(({ title, description, icon }) => {
                const Icon = icons[icon];
                return (
                  <Card key={title} className="shadow-md bg-white/80 backdrop-blur-md border-none">
                    <CardContent className="p-6 flex flex-col gap-2">
                      <Icon className="text-purple-500 w-6 h-6" />
                      <h4 className="font-semibold text-amber-900">{title}</h4>
                      <p className="text-sm text-gray-700">{description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-pink-200">
            <Image
              src={"https://images.stockcake.com/public/f/b/b/fbb188df-6d93-463f-8556-f376ac4ef330_large/corporate-presentation-meeting-stockcake.jpg"}
              alt="Team collaboration"
              className="w-full h-full object-cover"
             
              width={800}
              height={500}
            //   blurDataURL="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            
            />
          </div>
        </div>
      </div>
    </section>
  );
}

