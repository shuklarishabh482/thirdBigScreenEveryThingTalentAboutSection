

// legacy codebase 

// 'use client';
// import { FC, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useTheme } from 'next-themes';
// import { ArrowRight, Sun } from 'lucide-react';
// import { Navbar } from './Navbar';
// export const Header: FC = () => {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Left: Logo and Navbar */}
//           <div className="flex items-center gap-6">
//             {/* Logo */}
//             <Link href="/" className="mr-2">
//               <div className="flex items-center">
//                 <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center shadow-sm">
//                   <div className="flex">
//                     <div className="w-2 h-2 bg-pink-500 rounded-full mr-0.5" />
//                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-0.5" />
//                     <div className="w-2 h-2 bg-yellow-500 rounded-full" />
//                   </div>
//                 </div>
//               </div>
//             </Link>

//             {/* Navbar */}
//             <div className="max-w-[calc(100vw-320px)] overflow-x-auto">
//               <Navbar />
//             </div>
//           </div>

//           {/* Right: Buttons */}
//           <div className="flex items-center gap-2">
//             {/* Request Demo Button */}
//             <Link href="/request-demo">
//               <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition">
//                 Request a Demo
//                 <ArrowRight className="ml-1 h-4 w-4" />
//               </div>
//             </Link>

//             {/* Theme Toggle */}
//             {mounted && (
//               <button
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                 className="p-2 rounded-md hover:bg-gray-100 transition"
//               >
//                 <Sun className="h-5 w-5 text-gray-600" />
//               </button>
//             )}

//             {/* Login Button */}
//             <Link href="/login">
//               <div className="flex items-center px-3 py-2 text-sm font-medium text-black hover:text-gray-700 transition">
//                 Login
//                 <ArrowRight className="ml-1 h-4 w-4" />
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };


'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ArrowRight, Sun } from 'lucide-react';
import { Navbar } from './Navbar';

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo and Navbar */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="mr-2">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white dark:bg-zinc-800 rounded-md flex items-center justify-center shadow-sm">
                  <div className="flex">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-0.5" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-0.5" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Navbar */}
            <div className="max-w-[calc(100vw-320px)] overflow-x-auto">
              <Navbar />
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
            {/* Request Demo Button */}
            <Link href="/request-demo">
              <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-zinc-800 rounded-md border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition">
                Request a Demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
              >
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            )}

            {/* Login Button */}
            <Link href="/login">
              <div className="flex items-center px-3 py-2 text-sm font-medium text-black dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition">
                Login
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

