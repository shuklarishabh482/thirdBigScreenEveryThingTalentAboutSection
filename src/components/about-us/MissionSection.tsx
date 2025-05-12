

'use client';

import { Button } from "@/components/ui/button";
import { WorldMap } from "./WorldMap";

export function MissionSection() {
  const dots = [
    {
      start: { lat: 64.2008, lng: -149.4937, label: "Alaska" },
      end: { lat: 28.6139, lng: 77.209, label: "Delhi" },
    },
    // Add more dots as needed
  ];

  return (

    <section className="relative w-full h-[600px] flex items-center justify-center bg-sky-500">
  {/* bg-[#1e3a5f] */}

      <WorldMap dots={dots} />

      {/* Foreground Card */}
      <div className="relative z-10 max-w-xl text-center p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Mission</span>
        </h2>
        <p className="text-gray-600 mb-6 ">
          Help us reimagine the future of hiring in the tech industry.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Start Here →
        </button>
      </div>
    </section>
  );
}
