"use client";
import React from "react";
import { motion } from "framer-motion";
import { profileImg } from "@/public/images/util";
import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="flex-col items-center sm:flex pb-20">
      <div className="flex flex-col text-left gap-y-5">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl md:text-3xl font-mono font-extrabold tracking-wide"
        >
          Bula, my name is<br></br>
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          id="bannerName"
          className="text-textLight font-titleFont font-black text-5xl"
        >
          Pranav
        </motion.h1>
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-black font-mono text-2xl"
        >
          I create things on the web.
        </motion.span>
        <motion.p
          className="font-mono"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {" "}
          Currently studying Software Engineering at the{" "}
          <a
            className="text-textLight font-mono bg-bodyColor underline hover:underline-none hover:bg-textLight hover:text-bodyColor"
            href="https://www.usp.ac.fj/discipline-of-computer-science-and-information-systems/programmes/software-engineering/"
          >
            University of the South Pacific!
          </a>
          <br></br> This is my journey to becoming a fully fledged Engineer.{" "}
        </motion.p>
        <div className="pt-5">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button
              className=" dark:shadow-none shadow-stone-500 shadow-md text-md active:shadow-inset w-52 h-14 font-titleFont font-bold
                    rounded-md tracking-wide active:bg-foreground md:hover:drop-shadow-glow md:transition md:duration-700 md:ease-in-out"
            >
              <a href="https://github.com/Pranav-XP/pranavtechportfolio">
                View Website Code
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Image
          className="md:hover:drop-shadow-glow transition duration-700 ease-in-out"
          src={profileImg}
          alt="Profile Image of Pranav"
          width={300}
          height={1}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
