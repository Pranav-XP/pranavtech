"use client";

import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-4">
      <a
        className="bg-hoverColor
            rounded-full inline-flex items-center justify-center cursor-pointer
            hover:translate-x-2 transition-all hover:drop-shadow-glow duration-300"
        href="https://github.com/Pranav-XP"
        target="_blank"
      >
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <VscGithubInverted size={35}></VscGithubInverted>
        </motion.span>
      </a>

      <a
        className="w-10 h-10 text-xl bg-hoverColor
            rounded-full inline-flex items-center justify-center cursor-pointer
            hover:translate-x-2 transition-all duration-300 hover:drop-shadow-glow"
        href="https://www.linkedin.com/in/pranav-chand-16777318b/"
        target="_blank"
      >
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <AiFillLinkedin size={35}></AiFillLinkedin>
        </motion.span>
      </a>
    </div>
  );
};

export default LeftSide;
