
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  {
    label: 'Solutions',
    dropdown: [
      { href: '/solutions/Hiring Solutions', label: 'Stremaline processes by matching the right talent with the right opportunities' },
      { href: '/solutions/Funded Startups', label: 'Empower Startups with essential resources and funding for scaling and success'},
    ],
  },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="mt-4 px-4">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between backdrop-blur-sm bg-white/80 border shadow-md rounded-2xl px-6 py-3">
        {/* Left: Logo and Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=96&q=75" // Replace with your actual logo path
              alt="Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
          </Link>

 <nav className="flex items-center gap-6 text-sm font-medium bg-white px-4 py-2 rounded-xl shadow-sm">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <span className=" text-black cursor-pointer hover:text-violet-500">
                      {item.label} ▾
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white text-black">
                    {item.dropdown.map((sub) => (
                      <DropdownMenuItem key={sub.href}>
                        <Link href={sub.href} className="w-full block">
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-violet-500 ${
                    pathname === item.href
                      ? 'text-fuchsia-600 font-semibold'
                      : 'text-black'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-md">
            Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Button variant="ghost" className="text-black font-medium">
            Login <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
