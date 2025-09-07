import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll < lastScrollY || currentScroll <= 0);
      setLastScrollY(currentScroll);
      setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ All section IDs included
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Creativity", link: "#creative-works" }, // fixed
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/akratisharma26/",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/akrati260",
    },
  ];

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          className="bg-black/30 backdrop-blur-md shadow-md px-6 fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16"
          role="navigation"
          aria-label="Main navigation"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Logo / Site title */}
          <a
            href="#home"
            className="text-xl font-extrabold text-white select-none"
            style={{
              fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Portfolio
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="text-white hover:text-blue-300 text-sm font-medium transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger & Dropdown */}
          <div className="md:hidden ml-4 relative">
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-2 z-50 p-4 shadow-lg bg-white/95 backdrop-blur-md rounded w-48 text-center"
                >
                  {navItems.map((item) => (
                    <li key={item.link} className="my-1">
                      <a
                        href={item.link}
                        className="block py-2 text-base text-gray-800 hover:text-blue-600 font-medium rounded transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
