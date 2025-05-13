
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
    id: 2,
    title: "Embrace hard work",
    description: "#HARDWORK",
    hashtag: "HARDWORK",
    bgColor: "bg-orange-300 text-orange-900",
  },
  {
    id: 3,
    title: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
    description: "#URGENCY",
    hashtag: "URGENCY",
    bgColor: "bg-purple-500 text-white",
  },
  {
    id: 4,
    title: "Grow 1% every day",
    description: "#GROWTHMINDSET",
    hashtag: "GROWTHMINDSET",
    bgColor: "bg-green-100 text-green-900",
  },
  {
    id: 5,
    title: "We’re here to help you aim higher, break limits, and achieve what others might think impossible.",
    description: "#ASPIRATION",
    hashtag: "ASPIRATION",
    bgColor: "bg-lime-300 text-lime-900",
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
  const rowChunks = [
    philosophyItems.slice(0, 3), 
    philosophyItems.slice(3, 5), 
    philosophyItems.slice(5, 8), 
    philosophyItems.slice(8, 10), 
  ];

  return (
    <section id="philosophy" className="py-20 bg-pink-50">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-black">
          Our Philosophy in{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Action
          </span>
        </h2>
        <p className="mt-2 text-gray-600">
          At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
        </p>
      </div>

      <div className="space-y-4 px-4 lg:px-16">
        {rowChunks.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {row.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-xl min-h-[160px] ${
                  row.length === 2
                    ? "flex-1 basis-[48%] max-w-full"
                    : "flex-1 min-w-[250px] max-w-[33%]"
                } ${item.bgColor}`}
              >
                <div className="text-sm font-semibold">0{item.id}</div>
                <div className="mt-2 font-bold">{item.title}</div>
                <div className="mt-2 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

