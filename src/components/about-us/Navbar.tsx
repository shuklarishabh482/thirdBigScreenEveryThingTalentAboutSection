
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  {
    label: 'Solutions',
    dropdown: [
      { href: '/solutions/hiring', label: 'Hiring Solutions' },
      { href: '/solutions/startups', label: 'Funded Startups' },
    ],
  },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Left Section */}
        <div className="flex items-center space-x-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xs px-6 py-1 shadow-md border border-purple-300">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=96&q=75"
              alt="Company Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center px-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-2 text-sm font-medium whitespace-nowrap ${
                      pathname === item.href || item.label === 'About'
                        ? 'text-violet-600 dark:text-violet-400'
                        : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-3">
          {/* Request a Demo */}
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-md px-4 py-1 shadow-md border border-purple-300">
            <Link href="/request-demo">
              <Button variant="outline" className="text-sm font-medium flex items-center dark:text-white">
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-md px-3 py-1 shadow-md border border-purple-300">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
              </Button>
            </div>
          )}

          {/* Login */}
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-md px-4 py-1 shadow-md border border-purple-300">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-medium flex items-center dark:text-white">
                Login <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


// legacy codebase 
// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { ChevronDown, ArrowRight, Moon, Sun } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// const navItems = [
//   { href: '/', label: 'Home' },
//   { href: '/products', label: 'Products' },
//   {
//     label: 'Solutions',
//     dropdown: [
//       { href: '/solutions/hiring', label: 'Hiring Solutions' },
//       { href: '/solutions/startups', label: 'Funded Startups' },
//     ],
//   },
//   { href: '/pricing', label: 'Pricing' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/support', label: 'Support' },
//   { href: '/about', label: 'About' },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const toggleDropdown = (label: string) => {
//     setOpenDropdown((prev) => (prev === label ? null : label));
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
//         {/* Left Section */}
//         <div className="flex items-center space-x-8 bg-white/30 backdrop-blur-md rounded-xs px-6 py-1 shadow-md border border-purple-300">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=96&q=75"
//               alt="Company Logo"
//               width={32}
//               height={32}
//               className="h-8 w-auto"
//               priority
//             />
//           </Link>

//           {/* Navigation */}
//           <nav className="flex items-center space-x-2">
//             {navItems.map((item) => (
//               <div key={item.label} className="relative">
//                 {item.dropdown ? (
//                   <>
//                     <button
//                       onClick={() => toggleDropdown(item.label)}
//                       className="flex items-center px-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//                     >
//                       {item.label}
//                       <ChevronDown className="ml-1 h-4 w-4" />
//                     </button>
//                     {openDropdown === item.label && (
//                       <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
//                         <div className="py-1">
//                           {item.dropdown.map((subItem) => (
//                             <Link
//                               key={subItem.href}
//                               href={subItem.href}
//                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                               {subItem.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`px-2 text-sm font-medium whitespace-nowrap ${
//                       pathname === item.href || item.label === 'About'
//                         ? 'text-violet-600'
//                         : 'text-gray-700 hover:text-gray-900'
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-x-3">
//           {/* Request a Demo */}
//           <div className="bg-white/30 backdrop-blur-md rounded-md px-4 py-1 shadow-md border border-purple-300">
//             <Link href="/request-demo">
//               <Button variant="outline" className="text-sm font-medium flex items-center">
//                 Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>

//           {/* Theme Toggle */}
//           {mounted && (
//             <div className="bg-white/30 backdrop-blur-md rounded-md px-3 py-1 shadow-md border border-purple-300">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               >
//                 {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//               </Button>
//             </div>
//           )}

//           {/* Login */}
//           <div className="bg-white/30 backdrop-blur-md rounded-md px-4 py-1 shadow-md border border-purple-300">
//             <Link href="/login">
//               <Button variant="ghost" className="text-sm font-medium flex items-center">
//                 Login <ArrowRight className="ml-1 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


