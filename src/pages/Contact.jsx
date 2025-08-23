import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react"; // icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 sm:px-10"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-5"
        >
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Your email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 focus:border-purple-500 outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input
              type="text"
              placeholder="Just saying hi"
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 focus:border-purple-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Let's talk about..."
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 focus:border-purple-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
