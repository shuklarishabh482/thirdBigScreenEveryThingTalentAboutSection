"use client";
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
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Our Philosophy in{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Action
          </span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-16 auto-rows-auto">
        {philosophyItems.map((item) => {
          let spanClasses = "";

          switch (item.id) {
            // Row 1
            case 1:
              spanClasses = "sm:col-span-2";
              break;
            case 2:
            case 3:
              spanClasses = "sm:col-span-1";
              break;
            // Row 2
            case 4:
            case 5:
              spanClasses = "sm:col-span-2";
              break;
            // Row 3
            case 6:
            case 8:
              spanClasses = "sm:col-span-1";
              break;
            case 7:
              spanClasses = "sm:col-span-2";
              break;
            // Row 4
            case 9:
            case 10:
              spanClasses = "sm:col-span-2";
              break;
            default:
              spanClasses = "col-span-1";
          }

          return (
            <div
              key={item.id}
              className={`p-5 rounded-xl min-h-[150px] ${item.bgColor} ${spanClasses} flex flex-col justify-between`}
            >
              <div className="text-sm font-semibold opacity-60">0{item.id}</div>
              <div className="mt-1 font-bold text-base sm:text-lg">{item.title}</div>
              <div className="mt-2 text-sm sm:text-base">{item.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


// "use client";
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

//     {
//     id: 2,
//     title: "Embrace hard work",
//     description: "#HARDWORK",
//     hashtag: "HARDWORK",
//     bgColor: "bg-orange-300 text-orange-900",
//   },

//    {
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
//         <h2 className="text-4xl font-bold text-black">
//           Our Philosophy in{" "}
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
//             Action
//           </span>
//         </h2>
//         <p className="mt-2 text-gray-600">
//           At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-16 auto-rows-min">
//         {philosophyItems.map((item) => {
//           let spanClasses = "";

//           switch (item.id) {
//             // Row 1: 1 (2), 2 (1), 3 (1)
//             case 1:
//               spanClasses = "col-span-2";
//               break;
//             case 2:
//             case 3:
//               spanClasses = "col-span-1";
//               break;

//             // Row 2: 4 (2), 5 (2)
//             case 4:
//             case 5:
//               spanClasses = "col-span-2";
//               break;

//             // Row 3: 6 (1), 7 (2), 8 (1)
//             case 6:
//             case 8:
//               spanClasses = "col-span-1";
//               break;
//             case 7:
//               spanClasses = "col-span-2";
//               break;

//             // Row 4: 9 (2), 10 (2)
//             case 9:
//             case 10:
//               spanClasses = "col-span-2";
//               break;

//             default:
//               spanClasses = "col-span-1";
//           }

//           return (
//             <div
//               key={item.id}
//               className={`p-6 rounded-xl min-h-[160px] ${item.bgColor} ${spanClasses}`}
//             >
//               <div className="text-xl font-semibold">0{item.id}</div>
//               <div className="mt-2 font-bold text-xl">{item.title}</div>
//               <div className="mt-2 text-xl">{item.description}</div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

