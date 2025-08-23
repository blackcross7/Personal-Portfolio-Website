import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com" },
    { icon: <FaGithub size={20} />, url: "https://github.com" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
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
        <Link
          to="/"
          className="text-lg font-extrabold select-none"
          style={{
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          Portfolio
        </Link>

        {/* Middle - Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="hover:text-blue-300 transition duration-200"
            >
              {item.name}
            </Link>
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
