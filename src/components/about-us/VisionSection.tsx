

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const tabs = [
  {
    id: "ambition",
    title: "Ambition",
    heading: "Connecting Talent and Opportunity",
    subheading: "Ambition",
    description:
      "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
    // image: "https://www.everythingtalent.ai/assets/about-us/ambition.jpg", // <-- replace with your actual image path
    image : "https://www.everythingtalent.ai/assets/about-us/our-story.svg",
  
  },
  {
    id: "satisfaction",
    title: "Satisfaction",
    heading: "Partnering for Success",
    subheading: "Satisfaction",
    description:
      "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
    image: "https://www.everythingtalent.ai/assets/about-us/some1.avif",
  },
  {
    id: "integrity",
    title: "Integrity",
    heading: "Building Trust in Hiring",
    subheading: "Integrity",
    description:
      "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
    image: "https://www.everythingtalent.ai/assets/about-us/integrity.webp",
  },
  {
    id: "vigilance",
    title: "Vigilance",
    heading: "Security-Driven Solutions",
    subheading: "Vigilance",
    description:
      "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
    image: "https://www.everythingtalent.ai/assets/about-us/security.jpg",
  },
];

export function VisionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-black relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">
          Our Standards
        </p>
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-pink-600 to-yellow-400 dark:from-white dark:via-pink-400 dark:to-yellow-300">
          The Fuel for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Our Vision</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
          Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
        </p>

        <Tabs defaultValue="ambition" className="w-full">
          <TabsList className="flex flex-wrap justify-center bg-white dark:bg-gray-800 rounded-full shadow-md mb-8 gap-2 p-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-full px-4 py-2 text-sm font-medium data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-800 data-[state=active]:text-purple-800 dark:data-[state=active]:text-white"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tab.heading}
                  </h3>
                  <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-4">
                    {tab.subheading}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{tab.description}</p>
                </div>
                <div className="flex-1">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={500}
                    height={400}
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
