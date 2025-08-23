import React, { useState } from "react";
import { motion } from "framer-motion";

const creativeWorks = [
  {
    id: 1,
    title: "My Music",
    description: "A collection of my original music compositions.",
    category: "Music",
    items: [
      {
        id: "m1",
        title: "Music Track 1",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "m2",
        title: "Music Track 2",
        image:
          "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "My Writings",
    description: "A captivating story that I wrote.",
    category: "Writing",
    items: [
      {
        id: "w1",
        title: "My Novel",
        image:
          "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6?auto=format&fit=crop&w=800&q=80",
      },
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wattpad_logo.png/640px-Wattpad_logo.png",
  },
];

const CreativeWorks = () => {
  const [activeCard, setActiveCard] = useState(null); // for mobile toggle
  const [hoveredCard, setHoveredCard] = useState(null); // for desktop hover

  const isMobile = window.innerWidth < 768;

  return (
    <section
      id="creative-works"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Creative Works
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
        {creativeWorks.map((work, idx) => {
          const isActive =
            isMobile ? activeCard === work.id : hoveredCard === work.id;

          return (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => !isMobile && setHoveredCard(work.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() =>
                isMobile &&
                setActiveCard((prev) => (prev === work.id ? null : work.id))
              }
              className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:scale-105 transition-transform w-80 sm:w-96 h-[28rem] flex flex-col justify-center items-center p-5 cursor-pointer"
            >
              {isActive ? (
                // List View
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full overflow-y-auto"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {work.category} List
                  </h3>
                  <ul className="space-y-4">
                    {work.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <span className="text-base">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                // Default View
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-48 w-full overflow-hidden rounded-md mb-4">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {work.description}
                  </p>
                  {/* 👇 Mobile-only helper message */}
                  <p className="text-xs text-gray-400 mt-3 md:hidden">
                    Tap to see list
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CreativeWorks;
