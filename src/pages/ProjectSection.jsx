import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// ✅ Local assets
import Portfolio from "../assets/portfolio.png";
import Solar from "../assets/SolarSystem.png";
import Space from "../assets/SolarBlast.png";
import SpaceStronaut from "../assets/SpaceStronaut.png";
import Yoga from "../assets/YogaPose.png";
import txtsum from "../assets/txtsum.png";
import TCH from "../assets/Ten CodeHub.png";
import EDT from "../assets/Eduten.png";
import TCE from "../assets/TCE.png";
import Personal from "../assets/PersonalPortfolio.png";

// ✅ Project details
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Hands on Vite Technology and Tailwind CSS. Built a fully responsive portfolio with 3-D Components.",
    link: "https://kartikaykandpalportfolio.netlify.app",
    image: Personal,
  },
  {
    title: "TEN Tech Competition Engine",
    description: "Used MERN Stack and Django Framework to build a clone of Hackerrank.",
    link: "https://github.com/UmaShankarBharawa/TEN-Tech-Competition-Engine",
    image: TCE,
  },
  {
    title: "EduTen",
    description:
      "A Udemy-like platform built with MERN stack for free learning and courses.",
    link: "https://github.com/blackcross7/EduTen-Cloning-Udemy-",
    image: EDT,
  },
  {
    title: "TEN CodeHub",
    description:
      "A MERN Stack website, clone of GeeksforGeeks with Tailwind CSS & MongoDB authentication.",
    link: "https://ten-code-hub.vercel.app/",
    image: TCH,
  },
  {
    title: "React Portfolio Website",
    description:
      "A reactive portfolio made using Next.js, Tailwind CSS, JavaScript & Framer Motion.",
    link: "https://kartikaykandpal.netlify.app/",
    image: Portfolio,
  },
  {
    title: "Solar System Simulation - 3D",
    description:
      "A 3D Solar System Simulation built with Unity3D. Playable on itch.io.",
    link: "https://21bcs10038.itch.io/solar-system",
    image: Solar,
  },
  {
    title: "Space Blast",
    description:
      "A 2D space shooter made with Unity & C#. Playable on itch.io.",
    link: "https://21bcs10038.itch.io/space-blast",
    image: Space,
  },
  {
    title: "SpaceStronaut",
    description:
      "Guided Unity project — dodge & destroy obstacles. Playable on itch.io.",
    link: "https://21bcs10038.itch.io/spacestronout",
    image: SpaceStronaut,
  },
  {
    title: "Yoga Pose Detection",
    description:
      "AI model using TensorFlow & OpenPose to correct yoga postures. Web UI built with Flask.",
    link: "https://github.com/blackcross7/Yoga-Pose-Detection",
    image: Yoga,
  },
  {
    title: "AI Text Summarizer",
    description:
      "Summarizer using transformer models (BERT, Pegasus, T5) with Flask & JS UI.",
    link: "https://github.com/blackcross7/AI-Text-Summarization",
    image: txtsum,
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center relative z-0"
    >
      <div className="w-full relative py-32 px-4 sm:px-10 lg:px-[8rem] text-white flex flex-col items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-green-400 text-3xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center"
        >
          My Projects
        </motion.h2>

        {/* Cards */}
        <div className="relative z-10 flex flex-wrap justify-center gap-10 w-full max-w-7xl">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:scale-105 transition-transform w-80 sm:w-96 h-[28rem] flex flex-col"
            >
              {/* ✅ Top Image */}
              <div className="h-3/5 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ✅ Bottom Content */}
              <div className="flex flex-col items-center text-center justify-center flex-1 p-4">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{proj.description}</p>

                {/* Link */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 transition text-sm font-semibold mt-4"
                >
                  <FiExternalLink size={18} />
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
