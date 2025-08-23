import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import DataAnalyticsCert from "../assets/Data Analytics.png";
import GenAICert from "../assets/GenAI.png";
import PythonCert from "../assets/Developing Ai Apps.png";
import UI_UX from "../assets/UX-UI by Meta.png";
import DV from "../assets/DV Tableau.png";
import Unity from "../assets/Unity.png";
import Maths from "../assets/Maths.png";
import DLRL from "../assets/DLRL.png";
import Java from "../assets/Java.png";
import MobDev from "../assets/MobDev.png";
import Frontend from "../assets/Frontend.png";
import Google from "../assets/Google.png";

const certifications = [
  { name: "Data Analytics", institution: "Deloitte", image: DataAnalyticsCert, link: "https://drive.google.com/file/d/1kKwzoBrweeKIT8wrgRvRv8yE3zyCuJsl/view", year: "January 2025" },
  { name: "GenAI", institution: "BCGX", image: GenAICert, link: "https://drive.google.com/file/d/1-nJ6TdlI7clrXynBLcmRCrmGJNmKgNOf/view", year: "January 2025" },
  { name: "Developing AI Applications with Python", institution: "IBM", image: PythonCert, link: "https://www.coursera.org/account/accomplishments/verify/VZ2WCY4G5PVH", year: "March 2024" },
  { name: "UX/UI Design", institution: "Meta", image: UI_UX, link: "https://www.coursera.org/account/accomplishments/verify/P2CAL6BPFKVC", year: "March 2024" },
  { name: "Data Visualization with Tableau", institution: "UCDAVIS", image: DV, link: "https://www.coursera.org/account/accomplishments/verify/HNU3DN5G42UP", year: "January 2024" },
  { name: "Game Designing using Unity Engine", institution: "Coursera Project Network", image: Unity, link: "https://drive.google.com/drive/u/1/folders/1zC2i1KVQZhoZX75cD5PzNZcF4A58IUA2", year: "June 2022" },
  { name: "Discrete Mathematics (NPTEL)", institution: "IIT Madras", image: Maths, link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS123BS7466000610043586", year: "Oct 2022" },
  { name: "Deep Learning & Reinforcement Learning", institution: "IBM", image: DLRL, link: "https://www.coursera.org/account/accomplishments/verify/Y3K6AH9F9WTN", year: "January 2024" },
  { name: "Java as a Second Language", institution: "LearnQuest", image: Java, link: "https://www.coursera.org/account/accomplishments/specialization/36TVUZP7G2NY", year: "September 2024" },
  { name: "Mobile Development", institution: "Meta", image: MobDev, link: "https://www.coursera.org/account/accomplishments/verify/Y3ETL8YPBY1O", year: "September 2024" },
  { name: "Intro to Web Development with HTML, CSS, JS", institution: "IBM", image: Frontend, link: "https://www.coursera.org/account/accomplishments/verify/LCGWXNAP8EDS", year: "July 2023" },
  { name: "Build Dynamic UI Websites", institution: "Google", image: Google, link: "https://www.coursera.org/account/accomplishments/verify/JZ99GV2XXUST", year: "July 2023" },
  { name: "Intro to Computer Vision & Image Processing", institution: "IBM", image: Google, link: "https://www.coursera.org/account/accomplishments/verify/V6MMT25EC4QS", year: "December 2023" }
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

  // ✅ FIXED: Always 4 cards for ≥768px
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
          width: windowWidth < 768 ? "240px" : "260px",
          height: windowWidth < 768 ? "200px" : "340px",
          flexShrink: 0
        }}
      >
        {windowWidth >= 768 && (
          <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-center mb-1 leading-tight">{cert.name}</h3>
        <p className="text-sm text-gray-300 text-center mb-1 italic">{cert.institution}</p>
        <p className="text-xs text-gray-400 text-center">{cert.year}</p>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">
            <FiExternalLink size={32} />
          </a>
        </div>
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
            {/* ✅ FIXED flex-nowrap to prevent wrapping */}
            <div className="flex flex-nowrap gap-6 px-2">
              {renderCards()}
            </div>
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
