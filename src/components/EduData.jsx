import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Sample images - replace with actual imports or paths
import ChandigarhLogo from "../assets/chandigarh.png";
import VisionValleyLogo from "../assets/visionvalley.png";

const educationData = [
  {
    institution: "Vision Valley School",
    logo: VisionValleyLogo,
    degree: "High School",
    duration: "Mar 2018 - Apr 2019",
    grade: "88.6%",
  },
  {
    institution: "Vision Valley School",
    logo: VisionValleyLogo,
    degree: "Intermediate - PCM",
    duration: "Mar 2020 - Apr 2021",
    grade: "88%",
  },
  {
    institution: "Chandigarh University",
    logo: ChandigarhLogo,
    degree: "Bachelors in Computer Science Engineering",
    duration: "Aug 2021 - May 2025",
    grade: "7.23 CGPA",
  },
];

const EduData = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? educationData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === educationData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop / Tablet view: show all cards */}
      <div className="hidden sm:flex justify-center gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 text-white flex flex-col items-center shadow-xl transition-all hover:scale-105 border border-white/20"
            style={{ width: "280px", height: "260px" }}
          >
            <img
              src={edu.logo}
              alt={edu.institution}
              className="w-20 h-20 object-contain mb-4 opacity-80"
            />
            <h3 className="text-lg font-semibold text-center mb-2">
              {edu.institution}
            </h3>
            <p className="text-sm text-gray-300 text-center mb-1">
              {edu.degree}
            </p>
            <p className="text-xs text-gray-400">{edu.duration}</p>
            <p className="mt-2 text-sm font-medium text-green-400">
              {edu.grade}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile view: show single card with chevrons */}
      <div className="relative w-full flex justify-center items-center sm:hidden mt-4">
        {/* Chevron Left */}
        <button
          onClick={handlePrev}
          className="absolute left-2 z-10 bg-white/10 p-2 rounded-full text-white hover:text-green-400"
        >
          <MdChevronLeft size={28} />
        </button>

        {/* Single card */}
        <div className="flex w-full justify-center">
          <div
            key={currentIndex}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 text-white flex flex-col items-center shadow-xl transition-all hover:scale-105 border border-white/20"
            style={{ width: "240px", height: "240px" }}
          >
            <img
              src={educationData[currentIndex].logo}
              alt={educationData[currentIndex].institution}
              className="w-16 h-16 object-contain mb-4 opacity-80"
            />
            <h3 className="text-base font-semibold text-center mb-2">
              {educationData[currentIndex].institution}
            </h3>
            <p className="text-xs text-gray-300 text-center mb-1">
              {educationData[currentIndex].degree}
            </p>
            <p className="text-xs text-gray-400">
              {educationData[currentIndex].duration}
            </p>
            <p className="mt-2 text-sm font-medium text-green-400">
              {educationData[currentIndex].grade}
            </p>
          </div>
        </div>

        {/* Chevron Right */}
        <button
          onClick={handleNext}
          className="absolute right-2 z-10 bg-white/10 p-2 rounded-full text-white hover:text-green-400"
        >
          <MdChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default EduData;
