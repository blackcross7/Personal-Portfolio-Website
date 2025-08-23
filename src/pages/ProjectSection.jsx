import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// Project details as in the provided image
const projects = [
  {
    title: "React Portfolio Website",
    description:
      "A Reactive Portfolio Website made using Next.js, CSS, HTML, Tailwind CSS, JavaScript and Framer Motion. Code Source available on Github.",
    link: "#", // Replace with your repo/deploy link
    image: "/portfolio-bg.jpg", // Add relevant bg image in your public/assets folder
  },
  {
    title: "Solar System Simulation-3D",
    description:
      "A 3D Solar System Simulation made using Unity3D. Game is available on itch.io. Source Code available on Github.",
    link: "#",
    image: "/solar-system.jpg",
  },
  {
    title: "Space Blast",
    description:
      "A 2D Space Shooter game made using Unity Engine with C#. Game is available on itch.io. Source Code available on Github.",
    link: "#",
    image: "/space-blast.jpg",
  },
  {
    title: "SpaceStronaut",
    description:
      "Guided project on Unity Engine. Dodge and destroy obstacles. Game is available on itch.io. Source Code available on Github.",
    link: "#",
    image: "/spacestronaut.jpg",
  },
  {
    title: "Yoga Pose Detection",
    description:
      "Used TensorFlow and OpenPose to build a model correcting Yoga Postures via live webcam. Web UI built using Flask, HTML, CSS and JavaScript.",
    link: "#",
    image: "/yoga-pose.jpg",
  },
  {
    title: "AI Text Summarizer",
    description:
      "Transformer models (BERT, Pegasus, T5) to summarize and process text, with a Flask and JS interface.",
    link: "#",
    image: "/ai-text-summarizer.jpg",
  },
];

// Card color/gradient theme (matching AboutSection)
const cardTheme =
  "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-xl";

// Background section gradient and overlay, matching AboutSection
const ProjectSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center relative z-0">
      <div className="w-full relative py-36 px-4 sm:px-10 lg:px-[12rem] text-white min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-green-400 text-3xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center"
        >
          My Projects
        </motion.h2>

        <div className="relative z-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3 w-full max-w-7xl">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 flex flex-col justify-between group ${cardTheme}`}
              style={{ minHeight: 340 }}
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-5">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{proj.title}</h3>
              <p className="text-sm text-gray-200 mb-3">{proj.description}</p>
              <div className="flex justify-center mt-2">
                <a
                  href={proj.link}
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 transition text-base font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={22} />
                  <span>View Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
