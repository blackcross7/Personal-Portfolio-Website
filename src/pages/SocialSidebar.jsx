import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaItchIo,
} from "react-icons/fa";
import { SiWattpad, SiAmazonmusic } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

/* ---- Custom SVG Icons ---- */



/* ---- Social Icons Array ---- */
const icons = [
  { icon: <FaGithub />, link: "https://github.com/blackcross7" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kartikay7/" },
  { icon: <FaItchIo />, link: "https://itch.io/profile/21bcs10038https://itch.io" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/im_kartikay7?igsh=dGV5amtwbjh3encw" },
];

const sidebarVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const SocialSidebar = () => {
  const [open, setOpen] = useState(false);

  // Mobile handle button
  const tabHandle = (
    <motion.button
      className="fixed top-1/2 right-0 z-50 flex items-center justify-end md:hidden focus:outline-none"
      style={{ transform: "translateY(-50%)" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.15}
      onClick={() => setOpen(true)}
      aria-label="Open socials sidebar"
      whileTap={{ scale: 0.95 }}
      type="button"
    >
      <div className="bg-green-600 hover:bg-green-500 h-16 w-8 rounded-l-lg flex items-center justify-end shadow-lg cursor-pointer border-l-2 border-green-400">
        <div className="w-1 h-8 flex flex-col justify-center items-center mx-auto gap-1">
          <div className="w-1 h-1 rounded-full bg-white opacity-80" />
          <div className="w-1 h-1 rounded-full bg-white opacity-80" />
          <div className="w-1 h-1 rounded-full bg-white opacity-80" />
        </div>
      </div>
    </motion.button>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:flex fixed top-1/2 right-2 -translate-y-1/2 flex-col items-center space-y-4 z-40">
        {icons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:scale-125 transition-transform"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* MOBILE HANDLE */}
      {tabHandle}

      {/* MOBILE SLIDING SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 bg-opacity-95 flex flex-col items-center pt-14 space-y-8 z-50 md:hidden shadow-xl"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl"
                aria-label="Close socials sidebar"
              >
                ×
              </button>

              {icons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white hover:text-green-400 hover:scale-125 transition-transform"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialSidebar;
