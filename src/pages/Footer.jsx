import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Creativity", link: "#creative-works" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/YOUR_USERNAME" },
    { icon: <FaGithub size={20} />, url: "https://github.com/YOUR_USERNAME" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com/YOUR_USERNAME" },
  ];

  return (
    <motion.footer
      className="bg-black/30 backdrop-blur-md border-t border-white/10 px-6 py-6 md:py-8 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Site Title */}
        <a
          href="#home"
          className="text-lg font-extrabold select-none"
          style={{
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          Portfolio
        </a>

        {/* Middle - Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="hover:text-blue-300 transition duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Small Text */}
      <div className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
