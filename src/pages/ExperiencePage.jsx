import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    date: "Aug 2025 - Present",
    description:
      "Working as a Programmer Analyst Trainee in Application Development and Maintenance. Handy with JAVA, Command like interfaces such as LINUX, frameworks such as Bootstrap and Springboot, and Maven.",
  },
  {
    title: "Chief of Staff - MERN and Django Developer",
    company: "The Entrepreneurship Network",
    date: "Jul 2025 - Aug 2025",
    type: "Part-time",
    description:
      "Served as a guide and Chief of various Team-Leads working on projects on MERN stack and Django. Completed projects like EduTEN and TEN Tech Competition Engine",
  },
  {
    title: "MERN Developer",
    company: "The Entrepreneurship Network",
    date: "Apr 2025 - Aug 2025",
    type: "Internship",
    description:
      "Built and maintained MERN-based web applications, collaborated with cross-functional teams, and handled deployment processes.",
  },
  {
    title: "Software Developer Intern",
    company: "SmartSchool Education Pvt. Ltd., Noida",
    date: "Nov 2024 - Jan 2025",
    type: "Internship",
    description:
      "Learned about Software Development Lifecycle, automated test cases, contributed to software development, testing, and maintenance ensuring software quality and reliability.",
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80, scale: 0.95 },
  hiddenRight: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 16 },
  },
};

const ExperiencePage = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 md:px-10 lg:px-[12rem]"
    >
      {/* Overlay for smooth blending */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 
                   bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500"
      >
        My Experience
      </motion.h1>

      <div className="relative max-w-5xl mx-auto flex flex-col">
        {/* Timeline line */}
        <div className="absolute top-0 left-[1.15rem] md:left-1/2 transform -translate-x-1/2 
                        h-full w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-500 
                        opacity-40 z-0 rounded-full" />

        <div className="flex flex-col gap-20 relative z-10">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} className="relative flex w-full">
                {/* Desktop: Left side */}
                <div className="hidden md:flex w-1/2 justify-end pr-10">
                  {isLeft && (
                    <motion.div
                      initial="hiddenLeft"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      className="max-w-md w-full bg-gradient-to-br from-white/10 to-white/5 
                                 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl text-center"
                    >
                      <h3 className="text-lg md:text-2xl font-semibold 
                                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
                      <p className="text-xs text-gray-400 italic mb-4">{exp.date}</p>
                      <p className="text-sm md:text-base text-gray-200">{exp.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="absolute md:static left-[0.6rem] md:left-1/2 
                                transform md:-translate-x-1/2 flex flex-col items-center z-20">
                  <span className="w-7 h-7 md:w-9 md:h-9 bg-gradient-to-r from-green-400 to-blue-400 
                                   flex items-center justify-center rounded-full shadow-lg border-4 border-gray-900">
                    <FaBriefcase className="text-sm md:text-base text-black" />
                  </span>
                </div>

                {/* Desktop: Right side */}
                <div className="hidden md:flex w-1/2 justify-start pl-10">
                  {!isLeft && (
                    <motion.div
                      initial="hiddenRight"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      className="max-w-md w-full bg-gradient-to-br from-white/10 to-white/5 
                                 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl text-center"
                    >
                      <h3 className="text-lg md:text-2xl font-semibold 
                                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
                      <p className="text-xs text-gray-400 italic mb-4">{exp.date}</p>
                      <p className="text-sm md:text-base text-gray-200">{exp.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Mobile cards */}
                <div className="md:hidden flex-1 ml-12">
                  <motion.div
                    initial="hiddenRight"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="bg-gradient-to-br from-white/10 to-white/5 
                               backdrop-blur-lg rounded-lg p-4 border border-white/20 
                               shadow-md text-left mb-6"
                  >
                    <h3 className="text-base font-semibold 
                                   bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-gray-300 mb-1">{exp.company}</p>
                    <p className="text-[10px] text-gray-400 italic mb-3">{exp.date}</p>
                    <p className="text-sm text-gray-200">{exp.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
