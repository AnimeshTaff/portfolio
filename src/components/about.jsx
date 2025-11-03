import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import nodejs from "../assets/nodejs.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import reactLogo from "../assets/react.png";
import shopify from "../assets/shopify.png";
import wordpress from "../assets/wordpress.png";
import github from "../assets/github.png";
import aws from "../assets/aws.png";

function AboutUs() {
  const images = [
    nodejs,
    css,
    html,
    javascript,
    mysql,
    reactLogo,
    shopify,
    wordpress,
    github,
    aws,
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // move left continuously
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="w-full bg-gray-900 text-white py-16 text-center mt-6 overflow-hidden relative">
      <h2 className="text-3xl font-semibold">🌐 About Skills</h2>

      <p className="text-gray-300 mt-3 max-w-3xl mx-auto px-4">
        These are the technologies and tools I use and more.
      </p>

      {/* Center highlight overlay */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 w-32 h-32 rounded-full bg-transparent pointer-events-none border-2 border-white/20"></div>

      {/* 🔹 Moving Image Strip */}
      <div className="mt-12 overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-10 min-w-max"
        >
          {/* Duplicate images array to make loop seamless */}
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={index}
              className="w-25 h-25 bg-blue-50 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2 }}
              whileInView={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1 }}
            >
              <img
                src={src}
                alt={`tech-${index}`}
                className="w-20 h-20 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
