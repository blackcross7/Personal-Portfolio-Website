import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaJsSquare,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiExpress,
  SiCplusplus,
  SiLinux,
  SiBootstrap,
  SiApachemaven,
  SiSpringboot,
  SiApache,
} from "react-icons/si";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import EduData from "../components/EduData";
import CertifyData from "../components/CertifyData";
import PlatformData from "../components/PlatformData";

const tabsContent = {
  Skills: "skills",
  Education: "education",
  Certifications: "certifications",
  Platforms: "platforms",
};

const skillIcons = [
  { name: "Node.js", icon: <FaNodeJs size={80} color="#68A063" /> },
  { name: "Express.js", icon: <SiExpress size={80} color="#FFFFFF" /> },
  { name: "MySQL", icon: <SiMysql size={80} color="#00758F" /> },
  { name: "JavaScript", icon: <FaJsSquare size={80} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={80} color="#61DAFB" /> },
  { name: "Python", icon: <FaPython size={80} color="#3776AB" /> },
  { name: "C++", icon: <SiCplusplus size={80} color="#00599C" /> },
  { name: "HTML", icon: <FaHtml5 size={80} color="#E44D26" /> },
  { name: "Java", icon: <FaJava size={80} color="#f89820" /> },
  { name: "Git", icon: <FaGitAlt size={80} color="#F05032" /> },
  { name: "Linux", icon: <SiLinux size={80} color="#FCC624" /> },
  { name: "Unix", icon: <SiLinux size={80} color="#FFFFFF" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={80} color="#7952B3" /> },
  { name: "Maven", icon: <SiApachemaven size={80} color="#C71A36" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={80} color="#6DB33F" /> },
  {
    name: "Log4j",
    icon: (
      <SiApache
        size={80}
        color="#D22128"
        title="Log4j (Apache logging framework)"
      />
    ),
  },
  {
    name: "Logging",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="orange"
      >
        <path d="M3 3h18v2H3zm0 6h12v2H3zm0 6h18v2H3zm0 6h12v2H3z" />
      </svg>
    ),
  },
];

const AboutSection = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [revealedWords, setRevealedWords] = useState(0);
  const [activeTab, setActiveTab] = useState("Skills");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const textRef = useRef(null);
  const intervalRef = useRef(null);

  const aboutTexts = [
    "Hello! I'm Kartikay Kandpal, a Computer Science Engineer graduated from Chandigarh University, currently working as a Full time Employee in Cognizant Technology Solutions as a Programmer Analyst Trainee under Application Development and Maintenance Service Line.",
    "I specialize in Java, C++, Python, SQL, Unix or UNIX-like OS and JavaScript, with hands-on experience in building responsive portfolios, yoga pose detection, sentiment analysis tools, and certain projects in MERN and Django.",
    "I'm driven by innovation, continuous learning, and a goal to create impactful tech solutions while growing alongside forward-thinking teams.",
    "Take a sneak-peak on my journey below.",
  ];

  const totalLogos = skillIcons.length;
  const logosToShow = windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 2 : 1;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reveal words on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.85;
      const end = -rect.height * 0.1;
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end))
      );
      const totalWords = aboutTexts.join(" ").split(" ").length;
      const wordsToReveal = Math.floor(progress * totalWords);
      setRevealedWords(wordsToReveal);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide for skills
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [logosToShow]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + logosToShow) % totalLogos);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev - logosToShow + totalLogos) % totalLogos);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + logosToShow) % totalLogos);
    startAutoSlide();
  };

  // Handle tab switching for mobile
  const handleTabPrev = () => {
    const keys = Object.keys(tabsContent);
    const newIndex = (currentTabIndex - 1 + keys.length) % keys.length;
    setCurrentTabIndex(newIndex);
    setActiveTab(keys[newIndex]);
  };

  const handleTabNext = () => {
    const keys = Object.keys(tabsContent);
    const newIndex = (currentTabIndex + 1) % keys.length;
    setCurrentTabIndex(newIndex);
    setActiveTab(keys[newIndex]);
  };

  const motionVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.025,
        type: "spring",
        stiffness: 60,
        damping: 16,
      },
    }),
  };

  const wrapWordsWithAnimation = (text, startIndex = 0) => {
    const words = text.split(" ");
    return (
      <span>
        {words.map((word, index) => {
          const globalIndex = startIndex + index;
          const isRevealed = globalIndex < revealedWords;
          return (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={motionVariants}
              initial="hidden"
              animate={isRevealed ? "show" : "hidden"}
              custom={globalIndex}
            >
              {word}
            </motion.span>
          );
        })}
      </span>
    );
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center relative z-0 scroll-smooth"
    >
      <div className="w-full relative animate-about-gradient pt-20 pb-16 px-4 sm:px-10 lg:px-[8rem] text-white min-h-screen flex items-center justify-center text-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          ref={textRef}
          className="relative z-10 space-y-8 max-w-3xl mx-auto flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <h2 className="text-green-400 text-2xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About Me
          </h2>

          {/* ✅ Uniform text sizes */}
          <p className="text-base sm:text-lg lg:text-xl font-medium font-satoshi leading-relaxed">
            {wrapWordsWithAnimation(aboutTexts[0], 0)}
          </p>

          <div className="space-y-4 text-base sm:text-lg lg:text-xl font-satoshi leading-relaxed px-2 sm:px-0">
            {aboutTexts.slice(1).map((text, i) => (
              <p key={i}>
                {wrapWordsWithAnimation(
                  text,
                  aboutTexts.slice(0, i + 1).join(" ").split(" ").length
                )}
              </p>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-10 w-full flex flex-col items-center">
            {/* Mobile tabs */}
            <div className="flex justify-center items-center mb-8 relative w-full sm:hidden">
              <button
                onClick={handleTabPrev}
                aria-label="Previous tab"
                className="text-2xl text-white hover:text-green-400 transition absolute left-0"
              >
                <MdChevronLeft />
              </button>

              <button className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-green-500 text-black shadow-md">
                {Object.keys(tabsContent)[currentTabIndex]}
              </button>

              <button
                onClick={handleTabNext}
                aria-label="Next tab"
                className="text-2xl text-white hover:text-green-400 transition absolute right-0"
              >
                <MdChevronRight />
              </button>
            </div>

            {/* Desktop tabs */}
            <div className="hidden sm:flex justify-center items-center mb-8 space-x-4">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-label={`Open ${tab} tab`}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                    activeTab === tab
                      ? "bg-green-500 text-black shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full"
              >
                {activeTab === "Skills" ? (
                  <div className="w-full flex items-center justify-center gap-6 sm:gap-10 relative">
                    {/* Glow effect */}
                    <div className="absolute w-72 h-72 rounded-full bg-green-400/20 blur-3xl -z-10 animate-pulse" />

                    <button
                      onClick={handlePrev}
                      aria-label="Previous skill set"
                      className="text-3xl text-white hover:text-green-400 transition"
                    >
                      <MdChevronLeft />
                    </button>

                    <div className="flex gap-8 sm:gap-12 items-center justify-center">
                      {[...skillIcons, ...skillIcons]
                        .slice(currentSlide, currentSlide + logosToShow)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center"
                          >
                            {item.icon}
                            <p className="text-sm mt-2 text-gray-300">
                              {item.name}
                            </p>
                          </div>
                        ))}
                    </div>

                    <button
                      onClick={handleNext}
                      aria-label="Next skill set"
                      className="text-3xl text-white hover:text-green-400 transition"
                    >
                      <MdChevronRight />
                    </button>
                  </div>
                ) : activeTab === "Education" ? (
                  <EduData />
                ) : activeTab === "Certifications" ? (
                  <CertifyData />
                ) : activeTab === "Platforms" ? (
                  <PlatformData />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
