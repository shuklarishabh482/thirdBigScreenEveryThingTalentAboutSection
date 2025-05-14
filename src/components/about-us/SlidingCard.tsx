

"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    year: "2024",
    title: "Everything AI 2.0",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
    stats: [
      // { label: "Accuracy", value: "+30%" },
      // { label: "Integrations", value: "15+" },
      // { label: "Users", value: "25K+" },
      {label : "Users" , value : "50K+"},
      {label : "Accuracy" , value : "98%"},
      {label : "Processing", value : "2x faster"}
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
      {label : "Users", value : "25K+"}
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
      { label: "dataProcessed", value: "1M+" },
      {label : "Clients", value : "1K+"}
    ],
  },
];

export default function VerticalStickyCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;
      const viewportHeight = window.innerHeight;

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCardIndex]);

  return (
    <section className="w-full bg-purple-50">
      {/* Intro Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            <div className="dark:bg-[#404040] bg-gray-100 rounded-lg text-base inline-block px-3 py-1 mb-2">
              Our Values & Milestones
            </div>
            <br />
            <span className="text-black">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400">
              Journey
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
          </p>

          <div className="flex items-center justify-center w-full h-full p-8">
            <Card
              className={`bg-black text-white p-3 rounded-md transition-all duration-300 w-1/5 min-w-fit mx-auto ${
                isHovered ? "transform scale-110" : ""
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

      {/* Sticky Cards Section */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center p-4">
          <div className="container mx-auto relative max-w-5xl h-full flex items-center justify-center">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className={cn(
                  "absolute transition-all duration-500 ease-in-out",
                  "flex flex-col md:flex-row rounded-[32px] overflow-hidden shadow-xl",
                  "bg-[#F5F7FE] w-[70rem] h-[32rem] p-8",
                  index === activeCardIndex
                    ? "opacity-100 scale-100 z-10"
                    : index < activeCardIndex
                    ? "opacity-0 scale-95 -translate-y-16 z-0"
                    : "opacity-0 scale-95 translate-y-16 z-0"
                )}
              >
                <div className="flex-1 flex flex-col justify-between pr-8">
                  {/* Title */}
                  <div>
                    <h4 className="text-purple-600 font-medium">{card.title}</h4>
                    <h2 className="text-3xl font-bold text-gray-900">{card.year}</h2>
                    <p className="text-gray-600 mt-4">{card.description}</p>
                  </div>

{/* Common 3-Stat Section */}

  <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6">
    
  {card.stats.map((stat, i) => (
    <div
      key={i}
      className="bg-white rounded-xl py-4 px-3 text-center shadow-sm"
    >
      <p className="font-bold text-purple-700 text-lg">{stat.value}</p>
      <p className="text-gray-700 text-sm">{stat.label}</p>
    </div>
  ))}
</div>

                </div>
                {/* Image */}
                <div className="flex-1 relative h-full min-h-[300px]">
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
    </section>
  );
}

