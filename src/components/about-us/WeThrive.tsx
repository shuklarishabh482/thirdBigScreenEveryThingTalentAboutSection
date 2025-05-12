import { FC } from 'react';
import Link from 'next/link';
import { Moon, Sun, ArrowRight } from 'lucide-react';
import { ThemeProvider , useTheme} '@/context/ThemeContext' ;

import { Logo } from './Logo';
import { Navbar } from './Navigation';

interface HeaderProps {
  currentPath: string;
}

export const WeThrive: FC<HeaderProps> = ({ currentPath }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="border-b border-gray-700 bg-black dark:bg-black shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <Navbar currentPath={currentPath} />
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="/features" 
            className="rounded-md px-4 py-2 text-sm font-medium text-white border border-gray-600 hover:bg-gray-800 transition-colors"
          >
            Everything Talent
          </Link>

          <Link 
            href="/request-demo" 
            className="rounded-md px-4 py-2 text-sm font-medium text-white border border-gray-600 hover:bg-gray-800 transition-colors flex items-center"
          >
            Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <button 
            onClick={toggleDarkMode} 
            className="rounded-full p-2 text-gray-300 hover:text-white transition"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Link 
            href="/login" 
            className="text-sm font-medium text-white hover:text-violet-400 transition-colors flex items-center"
          >
            Login <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};
