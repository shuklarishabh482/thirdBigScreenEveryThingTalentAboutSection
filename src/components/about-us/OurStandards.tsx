

// src/components/HeroSection.tsx
import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const OurStandards: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">ABOUT US</h2>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Shaping the Next Generation of HR{' '}
          <span className="text-violet-600 dark:text-violet-400">Tech</span>{' '}
          <span className="text-blue-400">Recruitment</span>
          <span className="text-yellow-400">.</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          At Everything Talent, we help you launch your recruitment into a new dimension.
        </p>
        <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md px-6 py-6 text-lg flex items-center">
          Start for Free Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="relative w-full lg:w-1/2">
        <div 
          className="relative rounded-lg overflow-hidden border-4 shadow-lg" 
          style={{ 
            borderImage: 'linear-gradient(to right, #FF5EBC, #4C6FFF, #FFC542) 1',
          }}
        >
          <img 
            // src="/images/dashboard.jpg" 
            src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBg2.7b22de17.png&w=1536&q=75"
            height={"600px"}
            width={"600px"}

            alt="HR Analytics Dashboard" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

