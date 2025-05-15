"use client";

import { useTheme } from "next-themes";
import { WorldMap } from "./WorldMap";

export function MissionSection() {
  const { resolvedTheme } = useTheme();

  const dots = [
    { start: { lat: 64.2008, lng: -149.4937, label: "Alaska" }, end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" } },
    { start: { lat: 64.2008, lng: -149.4937, label: "Alaska" }, end: { lat: -14.235, lng: -51.9253, label: "Brazil" } },
    { start: { lat: -14.235, lng: -51.9253, label: "Brazil" }, end: { lat: 38.7169, lng: -9.1399, label: "Lisbon" } },
    { start: { lat: 38.7169, lng: -9.1399, label: "Lisbon" }, end: { lat: 28.6139, lng: 77.209, label: "New Delhi" } },
    { start: { lat: 28.6139, lng: 77.209, label: "New Delhi" }, end: { lat: 43.1198, lng: 131.8869, label: "Vladivostok" } },
    { start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" }, end: { lat: 28.6139, lng: 77.209, label: "New Delhi" } },
  ];

  const isDark = resolvedTheme === "dark";

  return (
    <section className={`relative w-full h-[600px] flex items-center justify-center transition-colors duration-500 ${
      isDark ? "bg-gray-900" : "bg-sky-100"
    }`}>
      <WorldMap dots={dots} />

      {/* Foreground Card */}
      <div
        className={`relative z-10 max-w-8xl text-center p-8 rounded-2xl backdrop-blur-lg border shadow-lg transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 border-white/10 text-white"
            : "bg-radial-[at_50%_75%] from-sky-200 via-blue-200 to-indigo-200 border-white/20 text-slate-900"
        }`}
      >
        <h2 className="text-4xl font-bold mb-4">
          Join Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Mission
          </span>
        </h2>
        <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Help us reimagine the future of hiring in the tech industry.
        </p>
        <button
          className={`px-6 py-2 rounded-md transition font-medium ${
            isDark
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Start Here →
        </button>
      </div>
    </section>
  );
}


// legacy codebase 
// "use client";
// import { WorldMap } from "./WorldMap";
// export function MissionSection() {
//   const dots = [
//     {
//       start: { lat: 64.2008, lng: -149.4937, label: "Alaska" },
//       end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
//     },
//     {
//       start: { lat: 64.2008, lng: -149.4937, label: "Alaska" },
//       end: { lat: -14.2350, lng: -51.9253, label: "Brazil" },
//     },
//     {
//       start: { lat: -14.2350, lng: -51.9253, label: "Brazil" },
//       end: { lat: 38.7169, lng: -9.1399, label: "Lisbon" },
//     },
//     {
//       start: { lat: 38.7169, lng: -9.1399, label: "Lisbon" },
//       end: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
//     },
//     {
//       start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
//       end: { lat: 43.1198, lng: 131.8869, label: "Vladivostok" },
//     },
//     {
//       start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
//       end: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
//     },
//   ];

//   return (
//     <section className="relative w-full h-[600px] flex items-center justify-center bg-sky-100">
//       <WorldMap dots={dots} />

//       {/* Foreground Card */}
//       <div className="relative z-10 max-w-8xl text-center p-8 rounded-2xl bg-radial-[at_50%_75%] from-sky-200 via-blue-200 to-indigo-200 to-90% backdrop-blur-lg border border-white/20 shadow-lg">
//         <h2 className="text-4xl font-bold mb-4 text-slate-900">
//           Join Our{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//             Mission
//           </span>
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Help us reimagine the future of hiring in the tech industry.
//         </p>
//         <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
//           Start Here →
//         </button>
//       </div>
//     </section>
//   );
// }


