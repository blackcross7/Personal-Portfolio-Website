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

// Clean JioSaavn Logo
const JioSaavnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="currentColor"
    className="w-7 h-7"
  >
    <rect width="48" height="48" rx="10" fill="#0F9D58" />
    <path
      fill="#fff"
      d="M34.5 16.2c-2.9-2.3-7-3.5-10.9-3.5-3.8 0-7.9 1.2-10.8 3.5-2.5 2-4 4.7-4 7.6 0 2.8 1.5 5.5 4 7.5 2.9 2.3 7 3.5 10.8 3.5 3.9 0 8-1.2 10.9-3.5 2.5-2 4-4.7 4-7.5 0-2.9-1.5-5.6-4-7.6zm-8.6 11.6c-2.6 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.9 2.2 4.9 4.8-2.2 4.8-4.9 4.8z"
    />
  </svg>
);

// Boomplay Logo (kept same as before)
const BoomplayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.373 18.627 0 12 0zm.857 4.8c2.057 0 3.772 1.714 3.772 3.772 0 1.6-1.029 2.972-2.4 3.429 1.6.457 2.857 1.829 2.857 3.543 0 2.057-1.715 3.772-3.772 3.772H8.229V4.8h4.628zM11.2 7.2h1.029c.914 0 1.714.8 1.714 1.715s-.8 1.714-1.714 1.714H11.2V7.2zm0 5.486h1.257c1.029 0 1.829.8 1.829 1.829s-.8 1.829-1.829 1.829H11.2v-3.658z"/>
  </svg>
);

// iHeartRadio Logo
const IHeartRadioIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      d="M256 464s-48-40-96-88c-64-64-112-128-112-192 0-70.7 57.3-128 128-128 39.8 0 75.3 18.6 96 47.3C304.7 74.6 340.2 56 380 56c70.7 0 128 57.3 128 128 0 64-48 128-112 192-48 48-96 88-96 88z"
      fill="#C6002B"
    />
  </svg>
);

/* ---- Social Icons Array ---- */
const icons = [
  { icon: <FaGithub />, link: "https://github.com/blackcross7" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kartikay7/" },
  { icon: <FaSpotify />, link: "https://open.spotify.com/artist/14pbobNVJxUjGy19ZGkrr9?si=xi_KjN0gRdaL7JKX9WXxGA" },
  { icon: <SiWattpad />, link: "https://www.wattpad.com/myworks/338262871-even-after-you" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@kartikaykandpal6554" },
  { icon: <FaItchIo />, link: "https://itch.io/profile/21bcs10038https://itch.io" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/im_kartikay7?igsh=dGV5amtwbjh3encw" },
  { icon: <SiAmazonmusic />, link: "https://www.amazon.com/music/player/artists/B0BD5V2QNQ/kartikay-kandpal" },
  { icon: <JioSaavnIcon />, link: "https://www.jiosaavn.com/artist/-kartikay-kandpal-songs/hik07Ngy4ZU_" },
  { icon: <BoomplayIcon />, link: "https://www.boomplay.com/artists/54266369" },
  { icon: <IHeartRadioIcon />, link: "https://www.iheart.com/artist/kartikay-kandpal-123456/" },
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
