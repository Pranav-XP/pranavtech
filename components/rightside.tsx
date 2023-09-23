"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const RightSide = () => {
  return (
    <div className="flex flex-col gap-4 pr-2">
      <a
        className="w-10 h-10 text-xl bg-hoverColor
            rounded-full inline-flex items-center justify-center cursor-pointer
            hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-glow"
        href="mailto:pranavchand777@gmail.com"
        target="_blank"
      >
        <motion.span
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <MdEmail size={35}></MdEmail>
        </motion.span>
      </a>
    </div>
  );
};

export default RightSide;
