import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";

// 3D Globe
const Model = () => {
  const gltf = useGLTF("/globe.glb");
  return (
    <Float floatIntensity={1} speed={1.2}>
      <primitive object={gltf.scene} scale={4} rotation={[0, Math.PI / 4, 0]} />
    </Float>
  );
};

const nameAndRoles = [
  "Akrati Sharma",
  "Application Developer",
  "MERN Stack Developer",
  "Data Handler-",
  "Tech Enthusiast"
];

const morphPhrases = [
  "solving problems",
  "building experiences",
  "creating impact"
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % morphPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home" // <-- Added ID for Navbar scroll
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden scroll-smooth"
      role="main"
      aria-label="Hero section"
    >
      {/* Background overlays */}
      <div className="absolute inset-0 animate-gradient z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Left SVG Decoration (hidden on smaller screens) */}
      <img
        src="/student.svg"
        alt="Student vector illustration"
        className="
          absolute left-0 top-0 h-full object-cover z-0 pointer-events-none opacity-30 
          max-w-[45%] -translate-x-1/2 
          hidden xl:block
        "
        style={{
          objectFit: "cover"
        }}
      />

      {/* Quote at the top */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute top-20 xs:top-13 w-full text-center z-10 px-2 sm:px-4"
      >
        <p className="text-xs sm:text-sm md:text-base text-gray-400 italic">
          "Man is still the most extraordinary computer of all."
        </p>
      </motion.div>

      <div
        className="
          relative z-10 w-full
          flex flex-col-reverse lg:flex-row
          items-center justify-between
          max-w-4xl lg:max-w-7xl mx-auto
          px-4 md:px-8 lg:px-12
          py-6 sm:py-8
          gap-4 lg:gap-20 xl:gap-24
        "
      >
        {/* Left Content */}
        <div
          className="
            w-full
            lg:w-1/2
            flex flex-col items-center text-center justify-center
            mb-8 lg:mb-0
          "
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3"
          >
            Hi, I am
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center justify-center mb-2 w-full"
          >
            <span
              className="
                inline-block
                text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl
                font-extrabold text-green-300
                whitespace-nowrap overflow-hidden text-ellipsis
                w-full
                min-w-0
              "
              style={{
                textAlign: "center"
              }}
            >
              <Typewriter
                options={{
                  strings: nameAndRoles,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                  pauseFor: 1200,
                }}
              />
            </span>
          </motion.div>

          {/* Changing phrase */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="
              text-xs xs:text-sm sm:text-base md:text-lg
              text-gray-200
              max-w-xl
              mt-3 sm:mt-4
              leading-relaxed
              px-1
            "
          >
            Completed my Bachelor’s degree in Computer Science and Engineering from Chandigarh University.
            As a passionate software professional, I am driven to{" "}
            <span className="text-green-400 transition-all duration-500 ease-in-out">
              {morphPhrases[currentPhrase]}
            </span>
            , continuously learning new technologies and contributing to innovative projects. My goal is to deliver impactful solutions and grow alongside forward-thinking teams.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="
              flex flex-col sm:flex-row gap-3 sm:gap-4
              mt-5 sm:mt-8
              w-full max-w-xs sm:max-w-sm mx-auto
            "
          >
            <a
              href="mailto:kartikay.kk47@gmail.com"
              aria-label="Send me an email"
              className="
                bg-green-500 hover:bg-green-600 text-white font-semibold
                py-2 px-4 text-base sm:text-lg
                sm:py-3 sm:px-6
                rounded-lg shadow-lg
                transition transform hover:scale-105
                text-center
              "
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1T_KHNdfrVnDx_IPTBS-csSRgFS5U7nVh/view?usp=sharing"
              download
              aria-label="Download my resume"
              className="
                bg-transparent border border-green-400
                hover:bg-green-500 hover:text-white text-green-400 font-semibold
                py-2 px-4 text-base sm:text-lg
                sm:py-3 sm:px-6
                rounded-lg shadow-lg
                transition transform hover:scale-105
                text-center
              "
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right 3D Globe */}
        <div
          className="
            relative
            w-full lg:w-[450px]
            h-[170px] xs:h-[215px] sm:h-[260px] md:h-[320px] lg:h-[500px]
            flex justify-center items-center
            mb-3 lg:mb-0
          "
        >
          {/* Glow behind globe */}
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-green-400/20 blur-3xl animate-pulse" />

          <Canvas camera={{ position: [4, 4, 6], fov: 40 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
