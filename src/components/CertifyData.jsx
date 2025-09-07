import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import DataAnalyticsCert from "../assets/Data Analytics.png";
import GenAICert from "../assets/GenAI.png";

import Java from "../assets/Java.png";
import MobDev from "../assets/MobDev.png";
import DSP from "../assets/DSP.png";
import CC from "../assets/CC.png";
import IOT from "../assets/IOT.png";
import UX from "../assets/UX.png"


const certifications = [
  { name: "Data Analytics", institution: "Deloitte", image: DataAnalyticsCert, link: "https://drive.google.com/file/d/12QtGI3_GkJLYOEdmnICUEKjzSxRTSi3l/view", year: "January 2025" },
  { name: "GenAI", institution: "BCGX", image: GenAICert, link: "https://drive.google.com/file/d/1kNbMCmWU3LHgIFL2awlA7pCmRK1TxOa3/view", year: "January 2025" },
  { name: "Java as a Second Language", institution: "LearnQuest", image: Java, link: "https://www.coursera.org/account/accomplishments/specialization/MP6H4GP8UHL6", year: "June 2024" },
  { name: "Mobile Development", institution: "Meta", image: MobDev, link: "https://www.coursera.org/account/accomplishments/verify/QDZYJJ28DP6Y", year: "June 2024" },
  { name: "Data Structures and Performance", institution: "UC San Diego", image: DSP, link: "https://www.coursera.org/account/accomplishments/verify/MHTE2LY78FWH", year: "June 2024" },
  { name: "Cloud Computing", institution: "ILLINOIS", image: CC, link: "https://www.coursera.org/account/accomplishments/verify/NF4HSKQBCY9T", year: "June 2022" },
  { name: "Introduction to Internet of things", institution: "Coursera", image: IOT, link: "https://www.coursera.org/account/accomplishments/verify/S5Y8S78BVUD9", year: "August 2024" },
  { name: "Foundation of UX Design", institution: "Google", image: UX, link: "https://www.coursera.org/account/accomplishments/verify/UVDEBCV3AN7E", year: "June 2023" },

];

const CertifyData = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemsPerSlide = () => {
    if (windowWidth >= 768) return 4;
    return 1;
  };

  const getAutoSlideInterval = () => (windowWidth < 768 ? 2500 : 4000);
  const totalCerts = certifications.length;

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [windowWidth]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + getItemsPerSlide()) % totalCerts);
    }, getAutoSlideInterval());
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev - getItemsPerSlide() + totalCerts) % totalCerts);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + getItemsPerSlide()) % totalCerts);
    startAutoSlide();
  };

  const renderCards = () => {
    const count = getItemsPerSlide();
    let slideCerts = [];
    for (let i = 0; i < count; i++) {
      slideCerts.push(certifications[(currentSlide + i) % totalCerts]);
    }
    return slideCerts.map((cert, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-5 text-white shadow-xl relative group transform transition-transform hover:scale-[1.03] border border-white/20"
        style={{
          width: windowWidth < 768 ? "280px" : "260px",
          height: windowWidth < 768 ? "340px" : "340px",
          flexShrink: 0
        }}
      >
        {/* Always show image */}
        <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
          <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
        </div>

        <h3 className="text-lg font-semibold text-center mb-1 leading-tight">{cert.name}</h3>
        <p className="text-sm text-gray-300 text-center mb-1 italic">{cert.institution}</p>
        <p className="text-xs text-gray-400 text-center">{cert.year}</p>

        {/* Overlay for desktop hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            <FiExternalLink size={32} />
          </a>
        </div>

        {/* ✅ Always show "Tap to open" in mobile */}
        {windowWidth < 768 && (
          <p className="text-xs text-center mt-3 text-green-400">📲 Tap to open</p>
        )}
      </div>
    ));
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-center gap-6">
        <button onClick={handlePrev} className="hidden md:block text-4xl text-white hover:text-green-400 transition">
          <MdChevronLeft />
        </button>
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-center">
            <div className="flex flex-nowrap gap-6 px-2">{renderCards()}</div>
          </div>
        </div>
        <button onClick={handleNext} className="hidden md:block text-4xl text-white hover:text-green-400 transition">
          <MdChevronRight />
        </button>
      </div>

      {/* Mobile navigation buttons */}
      <div className="flex justify-center gap-4 md:hidden mt-4">
        <button onClick={handlePrev} className="text-2xl text-white hover:text-green-400 transition">
          <MdChevronLeft />
        </button>
        <button onClick={handleNext} className="text-2xl text-white hover:text-green-400 transition">
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CertifyData;
