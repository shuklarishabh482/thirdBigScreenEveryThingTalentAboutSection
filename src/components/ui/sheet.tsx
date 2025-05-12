'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = (props: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>) => (
  <SheetPrimitive.Portal {...props} />
);

SheetPortal.displayName = SheetPrimitive.Portal.displayName;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100',
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: 'top' | 'bottom' | 'left' | 'right';
  }
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 bg-white dark:bg-gray-900 p-6 shadow-lg transition ease-in-out duration-300',
        side === 'top' && 'inset-x-0 top-0 h-1/3',
        side === 'bottom' && 'inset-x-0 bottom-0 h-1/3',
        side === 'left' && 'inset-y-0 left-0 w-3/4 sm:w-80',
        side === 'right' && 'inset-y-0 right-0 w-3/4 sm:w-80',
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
        <X className="h-5 w-5" />
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;
export { Sheet, SheetTrigger, SheetClose, SheetContent };


// // src/components/ui/sheet.tsx
// 'use client';
// import * as React from 'react';
// import * as SheetPrimitive from '@radix-ui/react-dialog';
// import { X } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const Sheet = SheetPrimitive.Root;

// const SheetTrigger = SheetPrimitive.Trigger;

// const SheetClose = SheetPrimitive.Close;

// const SheetPortal = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>) => (
//   <SheetPrimitive.Portal className={cn(className)} {...props} />
// );

// SheetPortal.displayName = SheetPrimitive.Portal.displayName;

// const SheetOverlay = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <SheetPrimitive.Overlay
//     ref={ref}
//     className={cn(
//       'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100',
//       className
//     )}
//     {...props}
//   />
// ));
// SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// const SheetContent = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
//     side?: 'top' | 'bottom' | 'left' | 'right';
//   }
// >(({ side = 'right', className, children, ...props }, ref) => (
//   <SheetPortal>
//     <SheetOverlay />
//     <SheetPrimitive.Content
//       ref={ref}
//       className={cn(
//         'fixed z-50 bg-white dark:bg-gray-900 p-6 shadow-lg transition ease-in-out duration-300',
//         side === 'top' && 'inset-x-0 top-0 h-1/3',
//         side === 'bottom' && 'inset-x-0 bottom-0 h-1/3',
//         side === 'left' && 'inset-y-0 left-0 w-3/4 sm:w-80',
//         side === 'right' && 'inset-y-0 right-0 w-3/4 sm:w-80',
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <SheetPrimitive.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
//         <X className="h-5 w-5" />
//       </SheetPrimitive.Close>
//     </SheetPrimitive.Content>
//   </SheetPortal>
// ));
// SheetContent.displayName = SheetPrimitive.Content.displayName;

// export { Sheet, SheetTrigger, SheetClose, SheetContent };
