
'use client';
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-[650px] text-sm md:text-base overflow-visible">
      {/* Grid container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row lg:gap-x-70 items-start z-20 relative">
        {/* Left section */}
        <div className="flex flex-col space-y-4 max-w-md">
          <div className="relative w-40 h-16">
            <Image
              src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=384&q=75"
              alt="Everything Talent Logo"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold">Everything Talent</h3>
          <p className="text-gray-300 max-w-xs">
            Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
          </p>
          <div className="flex space-x-3 pt-2">
            {[Twitter, Linkedin, Youtube, Facebook].map((Icon, idx) => (
              <Link href="#" key={idx} aria-label="social-link">
                <Icon className="w-6 h-6 text-black hover:text-pink-500 transition bg-white p-1 rounded-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-x-1 w-full mt-10 lg:mt-0">
          {[
            {
              title: "Resources",
              links: ["Blogs", "Success Stories", "Case Studies", "Whitepapers", "FAQs", "Hiring Guides", "Support"],
            },
            {
              title: "Get Started",
              links: ["Pricing", "Hiring Solutions", "Funded Startups", "Free Trial", "Contact Support", "Request Demo", "Trust"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "CCPA Compliance"],
            },
          ].map((section, index) => (
            <nav key={index} className="min-w-[140px] w-full">
              <h4 className="mb-4 font-semibold uppercase text-white text-base">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-pink-500 transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Branding */}
      <div className="mt-16 px-4 sm:px-6 lg:px-12 text-center md:text-right relative z-10">
        <div className="text-pink-500 text-lg md:text-xl lg:text-2xl font-bold">
          EVERYTHINGTALENT.AI
        </div>
      </div>

      {/* Curved Background Image */}

{/* <div className="absolute bottom-0 left-0 w-full h-[650px] z-0 pointer-events-none overflow-hidden">
  <div
    className="relative w-full h-full"
    style={{
      clipPath: 'ellipse(120% 80% at 50% 100%)', // Wider + gentler curve
    }}
  >
    <Image
      src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
      alt="Cityscape"
      fill
      className="object-cover object-bottom"
      sizes="100vw"
      priority
    />
  </div>
</div> */}
      {/* Curved Background Image */}
{/* <div className="absolute bottom-0 left-0 w-full h-[650px] z-0 pointer-events-none overflow-hidden">
  <div className="relative w-full h-full [clip-path:ellipse(100%_100%_at_50%_100%)]">
    <Image
      src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
      alt="Cityscape"
      fill
      className="object-cover object-bottom"
      sizes="100vw"
      priority
    />
  </div>
</div> */}

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1800px] h-[650px] z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full [clip-path:ellipse(80%_100%_at_50%_100%)]">
          <Image
            src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
            alt="Cityscape"
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </footer>
  );
};
