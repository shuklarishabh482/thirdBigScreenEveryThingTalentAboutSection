
'use client';
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-17 pb-48 overflow-hidden">

      <div className="container mx-auto pl-48 pr-4 grid grid-cols-1 md:grid-cols-4 gap-2 z-10 relative">
<div className="flex flex-col items-start space-y-4 -ml-4 md:-ml-6">

  {/* Logo on top */}
  <Image
    src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=384&q=75"
    alt="Everything Talent Logo"
    width={60}
    height={60}
    className="mb-2"
  />

  {/* Heading */}
  <h3 className="text-2xl font-semibold text-white">Everything Talent</h3>

  {/* Subheading */}
  <p className="text-sm text-gray-300 max-w-xs">
    Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
  </p>

  {/* Social Icons stacked horizontally */}
  <div className="flex space-x-4 pt-2">
    {[Twitter, Linkedin, Youtube, Facebook].map((Icon, idx) => (
      <Link href="#" key={idx} aria-label="social-link">
        <Icon className="w-6 h-6 text-white hover:text-pink-500 transition duration-300" />
      </Link>
    ))}
  </div>
</div>
        <nav>
          <h4 className="mb-6 text-sm font-semibold uppercase text-white">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Blogs", "Success Stories", "Case Studies", "Whitepapers", "FAQs", "Hiring Guides", "Support"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Get Started */}
        <nav>
        
          <h4 className="mb-6 text-sm font-semibold uppercase text-white">GET STARTED</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Pricing", "Hiring Solutions", "Funded Startups", "Free Trial", "Contact Support", "Request Demo", "Trust"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <nav>
          <h4 className="mb-6 text-sm font-semibold uppercase text-white">LEGAL</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "CCPA Compliance"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

  

<div className="flex justify-end px-6 mt-10">
  <div className="text-pink-500 text-2xl font-bold">
    EVERYTHINGTALENT.AI
  </div>
</div>




  <div className="absolute bottom-0 left-0 w-full z-0 h-70 overflow-hidden">
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

