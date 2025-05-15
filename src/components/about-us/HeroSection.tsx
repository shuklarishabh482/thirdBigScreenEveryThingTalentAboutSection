'use client';
import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const HeroSection: FC = () => {
  return (
    <section className="bg-white dark:bg-black px-4 md:px-10 lg:px-20 py-16 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="w-full lg:w-5/12 lg:ml-10">
          <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wide">
            About Us
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-gray-900 dark:text-gray-100">Shaping the Next Generation of HR </span>
            <span className="text-violet-600 dark:text-violet-400">Tech</span>{' '}
            <span className="text-blue-500 dark:text-blue-400">Recruitment</span>
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At Everything Talent, we help you launch your recruitment into a new dimension.
          </p>
          <Button className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-md px-6 py-6 text-sm flex items-center transition-colors duration-300">
            Start for Free Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Image Content */}
        <div className="w-full lg:w-1/2">
          <div className="w-full max-w-xl mx-auto">
            <div className="relative p-[4px] rounded-2xl bg-gradient-to-r from-pink-400 via-blue-500 to-yellow-400 shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBg2.7b22de17.png&w=1536&q=75"
                  alt="HR analytics dashboard"
                  className="w-full h-auto object-cover"
                  width={1076}
                  height={564}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent pointer-events-none rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// legacy codebase 
// 'use client';
// import { FC } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// export const HeroSection: FC = () => {
//   return (
//     <section className="dark:bg-white px-4 md:px-10 lg:px-20 py-1">
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
//         {/* Left Text Content */}
//         <div className="w-full lg:w-5/12 lg:ml-10">
//           <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wide">
//             About Us
//           </h5>
//           <h5 className="text-7xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
//             <span className="text-black dark:text-black">Shaping the Next Generation of HR </span>
//             <span className="text-violet-600 dark:text-violet-400">Tech</span>{' '}
//             <span className="text-blue-500 dark:text-blue-400">Recruitment</span>
//             <span className="text-yellow-400">.</span>
//           </h5>
//           <p className="text-lg text-gray-500 dark:text-gray-300 mb-8">
//             At Everything Talent, we help you launch your recruitment into a new dimension.
//           </p>
//           <Button className="bg-black text-white hover:bg-black rounded-md px-6 py-6 text-sm flex items-center">
//             Start for Free Today <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>
//         {/* Right Image Content */}
//         <div className="w-full lg:w-1/2">
//           <div className="w-full max-w-xl mx-auto">
//             <div className="relative p-[4px] rounded-2xl bg-gradient-to-r from-pink-400 via-blue-500 to-yellow-400 shadow-xl transition-transform duration-300 hover:scale-105">
//               <div className="rounded-2xl overflow-hidden">
//                 <Image
//                   src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBg2.7b22de17.png&w=1536&q=75"
//                   alt="HR analytics dashboard"
//                   className="w-full h-auto object-cover"
//                   width={1076}
//                   height={564}
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent pointer-events-none rounded-2xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };









