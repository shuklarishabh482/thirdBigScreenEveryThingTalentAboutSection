
'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';


interface MobileNavItemProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavItem: FC<MobileNavItemProps> = ({ href, active, children, onClick }) => (
  <Link
    href={href}
    className={cn(
      'flex items-center justify-between py-3 px-4 text-base font-medium border-b border-gray-100 dark:border-gray-700',
      active ? 'text-violet-600 dark:text-violet-400' : 'text-gray-900 dark:text-gray-200'
    )}
    onClick={onClick}
  >
    <span>{children}</span>
    <ChevronRight className="h-4 w-4" />
  </Link>
);

interface MobileNavProps {
  currentPath: string;
}

export const MobileNavigation: FC<MobileNavProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-200">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-80 p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
              <Link href="/" onClick={closeMenu}>
                <div className="flex h-8 w-8 items-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="4" fill="#FF5EBC" />
                    <circle cx="18" cy="6" r="4" fill="#FFC542" />
                    <circle cx="12" cy="14" r="4" fill="#4C6FFF" />
                  </svg>
                </div>
              </Link>
              <Button variant="ghost" size="icon" onClick={closeMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation items */}
            <MobileNavItem href="/about" active={currentPath === '/about'} onClick={closeMenu}>
              About
            </MobileNavItem>
            <MobileNavItem href="/services" active={currentPath === '/services'} onClick={closeMenu}>
              Services
            </MobileNavItem>
            <MobileNavItem href="/contact" active={currentPath === '/contact'} onClick={closeMenu}>
              Contact
            </MobileNavItem>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
