import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Local assets
import Writing from "../assets/Writing.jpg";
import Music from "../assets/Music.jpg";
import Novel from "../assets/NCover.jpg";
import Sapne from "../assets/Sapne.jpg";
import TeriBaatein from "../assets/Teri Baatein.jpg";

const creativeWorks = [
  {
    id: 1,
    title: "My Music",
    description: "A collection of my original music compositions.",
    category: "Music",
    items: [
      {
        id: "m1",
        title: "Teri Baatein",
        image: TeriBaatein,
        link: "https://open.spotify.com/track/4WHizDD61lj8WncX3hsN3Q?si=2d43b0d3085b44ca",
      },
      {
        id: "m2",
        title: "Sapne",
        image: Sapne,
        link: "https://open.spotify.com/track/13nx4q5ZkNNnCWtmH5YK7g?si=5bebad0faa9643ce",
      },
    ],
    image: Music,
  },
  {
    id: 2,
    title: "My Writings",
    description: "A captivating story that I wrote.",
    category: "Writing",
    items: [
      {
        id: "w1",
        title: "Even After You",
        image: Novel,
        link: "https://www.wattpad.com/story/338262871-even-after-you",
      },
    ],
    image: Writing,
  },
];

const CreativeWorks = () => {
  const [activeCard, setActiveCard] = useState(null); // Mobile toggle
  const [hoveredCard, setHoveredCard] = useState(null); // Desktop hover

  const isMobile = window.innerWidth < 768;

  return (
    <section
      id="creative-works"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 
                 bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16 md:pt-0 pb-20 md:pb-28"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 mt-6 sm:mt-8"
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
              className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden 
                         shadow-lg backdrop-blur-md hover:scale-105 transition-transform 
                         w-80 sm:w-96 h-[28rem] flex flex-col cursor-pointer"
            >
              {isActive ? (
                // ✅ List View
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full overflow-y-auto p-4"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {work.category} List
                  </h3>
                  <ul className="space-y-4">
                    {work.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-4 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-green-400 hover:underline"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                // ✅ Default View
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Top Image */}
                  <div className="h-3/5 w-full overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Bottom Content Centered */}
                  <div className="flex flex-col items-center text-center justify-center flex-1 p-4">
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      {work.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-3 md:hidden">
                      Tap to see list
                    </p>
                  </div>
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
