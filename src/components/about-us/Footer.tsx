
'use client';
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    // <footer className="relative bg-black text-white pt-16 pb-48 overflow-hidden">
    <footer className="relative bg-black text-white w-[1333px] h-[873px] mx-auto overflow-hidden">

      <div className="container mx-auto pl-48 pr-4 grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 z-10 relative pt-16">
<div className="flex flex-col items-start space-y-1 -ml-40 md:-ml-20 lg:-ml-26">

  {/* Logo on top */}
  <Image
    src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=384&q=75"
    alt="Everything Talent Logo"
    width={160}
    height={160}
    className="mb-0"
  />

  {/* Heading */}
  <h3 className="text-3xl font-semibold text-white">Everything Talent</h3>

  {/* Subheading */}
  <p className="text-base text-gray-300 max-w-xs">
    Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
  </p>

  {/* Social Icons stacked horizontally */}
  <div className="flex space-x-4 pt-2">
    {[Twitter, Linkedin, Youtube, Facebook].map((Icon, idx) => (
      <Link href="#" key={idx} aria-label="social-link">
        <Icon className="w-6 h-6 text-black  hover:text-pink-500 transition duration-300 bg-white" />
      </Link>
    ))}
  </div>
</div>
        {/* <nav > */}
        <nav className="ml-30">
          <h4 className="mb-6 text-lg font-semibold uppercase text-white">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Blogs", "Success Stories", "Case Studies", "Whitepapers", "FAQs", "Hiring Guides", "Support"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Get Started */}
        <nav className="ml-10">
        
          <h4 className="mb-6 text-lg font-semibold uppercase text-white">GET STARTED</h4>
          <ul className="space-y-2 text-base text-gray-400">
            {["Pricing", "Hiring Solutions", "Funded Startups", "Free Trial", "Contact Support", "Request Demo", "Trust"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <nav className="ml-2">
          <h4 className="mb-6 text-lg font-semibold uppercase text-white">LEGAL</h4>
          <ul className="space-y-2 text-base text-gray-400">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "CCPA Compliance"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition text-base">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

  
<div className="flex justify-end px-7 mt-29">
  <div className="text-pink-500 text-2xl font-bold">
    EVERYTHINGTALENT.AI
  </div>
</div>

  <div className="absolute bottom-0 left-0 w-full z-0 h-120 overflow-hidden">
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

