
// src/components/about-us/HeroSection.tsx
import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const HeroSection: FC = () => {
  return (

    <section className="bg-white dark:bg-white flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl text-center lg:text-left">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          ABOUT US   
        </h3>

<h3 className="text-4xl md:text-3xl lg:text-3xl font-bold mb-6 leading-tight">
  <span className="text-black dark:text-black">Shaping the Next Generation of HR </span>
  <span className="text-violet-600 dark:text-violet-400">Tech</span>{' '}
  <span className="text-blue-500 dark:text-blue-400">Recruitment</span>
  <span className="text-yellow-400">.</span>
</h3>

        <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
          At Everything Talent, we help you launch your recruitment into a new dimension.
        </p>

        {/* <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md px-6 py-6 text-lg flex items-center">
          Start for Free Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button> */}
<Button className="bg-black text-white hover:bg-black rounded-md px-6 py-6 text-lg flex items-center">
  Start for Free Today <ArrowRight className="ml-2 h-5 w-5" />
</Button>


      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2">
        <div
          className="relative rounded-xl overflow-hidden border-[6px] shadow-xl"
          style={{
            borderImage: 'linear-gradient(to right, #FF5EBC, #4C6FFF, #FFC542) 1',
          }}
        >
        

          <Image
  src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBg2.7b22de17.png&w=1536&q=75"
  alt="HR analytics dashboard"
  className="w-full h-auto object-cover"
  width={1036} 
  height={564}
  loading="lazy"
/>
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};
