
'use client';

interface PhilosophyItem {
  id: number;
  title: string;
  description: string;
  hashtag: string;
  bgColor: string;
}

const philosophyItems: PhilosophyItem[] = [
  {
    id: 1,
    title: "With us, there are no surprises—just straight talk and genuine commitment.",
    description: "#HONESTY",
    hashtag: "HONESTY",
    bgColor: "bg-yellow-300 text-yellow-900",
  },
  {
    id: 3,
    title: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
    description: "#URGENCY",
    hashtag: "URGENCY",
    bgColor: "bg-purple-500 text-white",
  },
  {
    id: 2,
    title: "Embrace hard work",
    description: "#HARDWORK",
    hashtag: "HARDWORK",
    bgColor: "bg-orange-300 text-orange-900",
  },
  {
    id: 5,
    title: "We’re here to help you aim higher, break limits, and achieve what others might think impossible.",
    description: "#ASPIRATION",
    hashtag: "ASPIRATION",
    bgColor: "bg-lime-300 text-lime-900",
  },
  {
    id: 4,
    title: "Grow 1% every day",
    description: "#GROWTHMINDSET",
    hashtag: "GROWTHMINDSET",
    bgColor: "bg-green-100 text-green-900",
  },
  {
    id: 6,
    title: "DO HARD THINGS",
    description: "#RESILIENT",
    hashtag: "RESILIENT",
    bgColor: "bg-gray-200 text-gray-900 font-bold text-xl",
  },
  {
    id: 7,
    title: "We value fresh ideas, bold solutions, and the freedom to imagine what’s next.",
    description: "#CREATIVITY",
    hashtag: "CREATIVITY",
    bgColor: "bg-pink-300 text-pink-900",
  },
  {
    id: 8,
    title: "Commit to continuous learning and improvement",
    description: "#LEARNING",
    hashtag: "LEARNING",
    bgColor: "bg-blue-300 text-blue-900",
  },
  {
    id: 9,
    title: "Build trust through actions, not just words.",
    description: "#TRUST",
    hashtag: "#TRUST",
    bgColor: "bg-pink-300 text-white",
  },
  {
    id: 10,
    title: "Every project, every solution we create is aimed at contributing to something greater.",
    description: "#CONTRIBUTION",
    hashtag: "#CONTRIBUTION",
    bgColor: "bg-green-300 text-black",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-pink-50">
      <div className="text-center mb-12 px-4">
        <h2 className="text-[clamp(1.5rem,2vw,2.25rem)] font-bold text-black">
          Our Philosophy in{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Action
          </span>
        </h2>
        <p className="mt-2 text-gray-600 text-[clamp(0.875rem,1.2vw,1rem)]">
          At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {philosophyItems.slice(0, 3).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Row 2: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {philosophyItems.slice(3, 5).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Row 3: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {philosophyItems.slice(5, 8).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Row 4: 2 cards, each taking 1/2 width of 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-3 md:col-span-3 flex gap-4">
            <div className="w-1/2">
              <Card item={philosophyItems[8]} />
            </div>
            <div className="w-1/2">
              <Card item={philosophyItems[9]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item }: { item: PhilosophyItem }) {
  return (
    <div
      className={`p-5 rounded-xl min-h-[150px] break-words min-w-0 ${item.bgColor} flex flex-col justify-between`}
    >
      <div className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold opacity-60">
        0{item.id}
      </div>
      <div className="mt-1 font-bold text-[clamp(0.875rem,1.2vw,1.125rem)]">{item.title}</div>
      <div className="mt-2 text-[clamp(0.75rem,1vw,1rem)]">{item.description}</div>
    </div>
  );
}

// 'use client';

// interface PhilosophyItem {
//   id: number;
//   title: string;
//   description: string;
//   hashtag: string;
//   bgColor: string;
// }

// const philosophyItems: PhilosophyItem[] = [
//   {
//     id: 1,
//     title: "With us, there are no surprises—just straight talk and genuine commitment.",
//     description: "#HONESTY",
//     hashtag: "HONESTY",
//     bgColor: "bg-yellow-300 text-yellow-900",
//   },
//   {
//     id: 3,
//     title: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
//     description: "#URGENCY",
//     hashtag: "URGENCY",
//     bgColor: "bg-purple-500 text-white",
//   },
//   {
//     id: 2,
//     title: "Embrace hard work",
//     description: "#HARDWORK",
//     hashtag: "HARDWORK",
//     bgColor: "bg-orange-300 text-orange-900",
//   },
//   {
//     id: 5,
//     title: "We’re here to help you aim higher, break limits, and achieve what others might think impossible.",
//     description: "#ASPIRATION",
//     hashtag: "ASPIRATION",
//     bgColor: "bg-lime-300 text-lime-900",
//   },
//   {
//     id: 4,
//     title: "Grow 1% every day",
//     description: "#GROWTHMINDSET",
//     hashtag: "GROWTHMINDSET",
//     bgColor: "bg-green-100 text-green-900",
//   },
//   {
//     id: 6,
//     title: "DO HARD THINGS",
//     description: "#RESILIENT",
//     hashtag: "RESILIENT",
//     bgColor: "bg-gray-200 text-gray-900 font-bold text-xl",
//   },
//   {
//     id: 7,
//     title: "We value fresh ideas, bold solutions, and the freedom to imagine what’s next.",
//     description: "#CREATIVITY",
//     hashtag: "CREATIVITY",
//     bgColor: "bg-pink-300 text-pink-900",
//   },
//   {
//     id: 8,
//     title: "Commit to continuous learning and improvement",
//     description: "#LEARNING",
//     hashtag: "LEARNING",
//     bgColor: "bg-blue-300 text-blue-900",
//   },
//   {
//     id: 9,
//     title: "Build trust through actions, not just words.",
//     description: "#TRUST",
//     hashtag: "#TRUST",
//     bgColor: "bg-pink-300 text-white",
//   },
//   {
//     id: 10,
//     title: "Every project, every solution we create is aimed at contributing to something greater.",
//     description: "#CONTRIBUTION",
//     hashtag: "#CONTRIBUTION",
//     bgColor: "bg-green-300 text-black",
//   },
// ];

// export default function PhilosophySection() {
//   return (
//     <section id="philosophy" className="py-20 bg-pink-50">
//       <div className="text-center mb-12 px-4">
//         <h2 className="text-[clamp(1.5rem,2vw,2.25rem)] font-bold text-black">
//           Our Philosophy in{" "}
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
//             Action
//           </span>
//         </h2>
//         <p className="mt-2 text-gray-600 text-[clamp(0.875rem,1.2vw,1rem)]">
//           At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
//         </p>
//       </div>

//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-16 auto-rows-auto">
//           {philosophyItems.map((item, index) => {
//             const itemsPerRow = 3;
//             const totalItems = philosophyItems.length;
//             const itemsInLastRow = totalItems % itemsPerRow || itemsPerRow;
//             const isInLastRow = index >= totalItems - itemsInLastRow;

//             const shouldExpandLastRowItems =
//               itemsInLastRow === 2 && isInLastRow;

//             const spanClass = shouldExpandLastRowItems
//               ? "md:col-span-3 sm:col-span-2"
//               : "";

//             return (
//               <div
//                 key={item.id}
//                 className={`p-5 rounded-xl min-h-[150px] break-words min-w-0 ${item.bgColor} ${spanClass} flex flex-col justify-between`}
//               >
//                 <div className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold opacity-60">
//                   0{item.id}
//                 </div>
//                 <div className="mt-1 font-bold text-[clamp(0.875rem,1.2vw,1.125rem)]">{item.title}</div>
//                 <div className="mt-2 text-[clamp(0.75rem,1vw,1rem)]">{item.description}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


