
'use client';
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-24 pb-48 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 z-10 relative">
        {/* Logo and About */}
        <div>
          <div className="flex items-start space-x-4">
            <Image
              src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=384&q=75"
              alt="Everything Talent Logo"
              width={50}
              height={50}
              className="mt-1"
            />
            <div>
              <h3 className="text-2xl font-semibold">Everything Talent</h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[Twitter, Linkedin, Youtube, Facebook].map((Icon, idx) => (
              <Link href="#" key={idx} aria-label="social-link">
                <Icon className="w-6 h-6 text-white hover:text-pink-500 transition duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <nav>
          <h4 className="font-bold text-lg mb-4">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Blogs", "Success Stories", "Case Studies", "Whitepapers", "FAQs", "Hiring Guides", "Support"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get Started */}
        <nav>
          <h4 className="font-bold text-lg mb-4">GET STARTED</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Pricing", "Hiring Solutions", "Funded Startups", "Free Trial", "Contact Support", "Request Demo", "Trust"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <nav>
          <h4 className="font-bold text-lg mb-4">LEGAL</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "CCPA Compliance"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-pink-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-pink-500 text-2xl font-semibold mt-20 relative z-10">
        EVERYTHINGTALENT.AI
      </div>

      {/* Cityscape Image */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
          alt="Cityscape"
          width={1920}
          height={300}
          className="w-full animate-slide-up"
        />
      </div>
    </footer>
  );
};

