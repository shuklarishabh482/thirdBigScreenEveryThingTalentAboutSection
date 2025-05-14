'use client';
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-40 overflow-hidden">
      {/* Grid split into left (logo) and right (navs) */}
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-6
      md:gap-6  relative z-10">
        
        {/* Left Logo Section */}
        <div className="flex flex-col space-y-2 max-w-sm">
          <Image
            src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=384&q=75"
            alt="Everything Talent Logo"
            width={160}
            height={160}
          />
    <h3 className="text-2xl md:text-3xl font-semibold text-white">Everything Talent</h3>
    <p className="text-base text-gray-300">
            Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
     </p>
    <div className="flex space-x-4 pt-2">
            {[Twitter, Linkedin, Youtube, Facebook].map((Icon, idx) => (
              <Link href="#" key={idx} aria-label="social-link">
                <Icon className="w-6 h-6 text-black hover:text-pink-500 transition bg-white p-1 rounded-full" />
              </Link>
            ))}
       </div>
  </div>

        {/* Right Nav Sections */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
          {/* Resources */}
          <nav>
            <h4 className="mb-4 text-lg font-semibold uppercase text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Blogs", "Success Stories", "Case Studies", "Whitepapers", "FAQs", "Hiring Guides", "Support"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Started */}
          <nav>
            <h4 className="mb-4 text-lg font-semibold uppercase text-white">Get Started</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Pricing", "Hiring Solutions", "Funded Startups", "Free Trial", "Contact Support", "Request Demo", "Trust"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h4 className="mb-4 text-lg font-semibold uppercase text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "CCPA Compliance"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Brand bottom right */}
      <div className="flex justify-center md:justify-end px-6 mt-12">
        <div className="text-pink-500 text-2xl font-bold">
          EVERYTHINGTALENT.AI
        </div>
      </div>

      {/* Background image at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[400px] z-0 overflow-hidden">
        <Image
          src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
          alt="Cityscape"
          layout="fill"
          objectFit="cover"
          className="animate-slide-up"
        />
      </div>
    </footer>
  );
};


// 'use client';
// import Image from "next/image";
// import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
// import Link from "next/link";
// export const Footer = () => {
//   return (
//     <footer className="relative bg-black text-white pt-16 pb-40 overflow-hidden">
//       {/* Content Grid */}
//       <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

//         {/* Logo & Info */}
//         <div className="flex flex-col space-y-4">
//           <Image
//             src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=384&q=75"
//             alt="Everything Talent Logo"
//             width={160}
//             height={160}
//           />
//           <h3 className="text-2xl md:text-3xl font-semibold text-white">Everything Talent</h3>
//           <p className="text-base text-gray-300 max-w-sm">
//             Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
//           </p>
//           <div className="flex space-x-4 pt-2">
//             {[Twitter, Linkedin, Youtube, Facebook].map((Icon, idx) => (
//               <Link href="#" key={idx} aria-label="social-link">
//                 <Icon className="w-6 h-6 text-black hover:text-pink-500 transition bg-white p-1 rounded-full" />
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Resources */}
//         <nav>
//           <h4 className="mb-4 text-lg font-semibold uppercase text-white">Resources</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             {["Blogs", "Success Stories", "Case Studies", "Whitepapers", "FAQs", "Hiring Guides", "Support"].map((item) => (
//               <li key={item}>
//                 <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Get Started */}
//         <nav>
//           <h4 className="mb-4 text-lg font-semibold uppercase text-white">Get Started</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             {["Pricing", "Hiring Solutions", "Funded Startups", "Free Trial", "Contact Support", "Request Demo", "Trust"].map((item) => (
//               <li key={item}>
//                 <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Legal */}
//         <nav>
//           <h4 className="mb-4 text-lg font-semibold uppercase text-white">Legal</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy", "CCPA Compliance"].map((item) => (
//               <li key={item}>
//                 <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Brand bottom right */}
//       <div className="flex justify-center md:justify-end px-6 mt-12">
//         <div className="text-pink-500 text-2xl font-bold">
//           EVERYTHINGTALENT.AI
//         </div>
//       </div>

//       {/* Background image at bottom */}
//       <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[400px] z-0 overflow-hidden">
//         <Image
//           src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
//           alt="Cityscape"
//           layout="fill"
//           objectFit="cover"
//           className="animate-slide-up"
//         />
//       </div>
//     </footer>
//   );
// };

