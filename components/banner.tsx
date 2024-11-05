"use client";
import React from "react";
import { motion } from "framer-motion";
import { profileImg } from "@/public/images/util";
import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="flex-col sm:items-center sm:justify-center sm:flex pt-16 pb-10 md:px-10 xl:pb-20">
      <div className="flex gap-5 items-center">
        <div className="flex flex-col text-left gap-y-5">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl xl:text-3xl 2xl:text-5xl font-mono font-extrabold tracking-wide"
          >
            Bula, my name is<br></br>
          </motion.h3>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            id="bannerName"
            className="font-black text-7xl xl:text-8xl 2xl:text-9xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-fuchsia-200 dark:to-purple-700 from-fuchsia-500 to-purple-700">
              Pranav
            </span>
          </motion.h1>
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-black font-mono text-2xl 2xl:text-5xl"
          >
            I create things on the web.
          </motion.span>
          <motion.p
            className="font-mono 2xl:text-3xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Currently studying Software Engineering at the<br></br>
            <a
              className="text-textLight font-mono bg-bodyColor underline hover:underline-none hover:bg-textLight hover:text-bodyColor"
              href="https://www.usp.ac.fj/discipline-of-computer-science-and-information-systems/programmes/software-engineering/"
            >
              University of the South Pacific!
            </a>
            <br></br> This is my journey to becoming a fully fledged Engineer.
          </motion.p>
          <div className="pt-5">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button
                className="dark:shadow-inner dark:shadow-zinc-400 shadow-stone-500 shadow-md text-md active:shadow-inset w-52 h-14 font-titleFont font-bold
                    rounded-md tracking-wide active:bg-foreground xl:hover:drop-shadow-glow xl:transition-all dark:active:drop-shadow-none dark:xl:hover:bg-white dark:xl:active:shadow-zinc-800 xl:duration-700 xl:ease-in-out"
              >
                <a href="https://github.com/Pranav-XP">
                  Visit my Github
                </a>
              </Button>
              <p className="text-sm text-stone-600 dark:text-zinc-400 py-3">
                Need a website as cool as this one? Shoot me an{" "}
                <a className="underline" href="mailto:pranavchand777@gmail.com">
                  email
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Image
            className="hidden dark:border dark:border-stone-800 dark:shadow-none border border-stone-400 shadow-inner shadow-stone-50 dark:bg-inherit 
             rounded-md sm:flex xl:hover:drop-shadow-glow transition duration-700 ease-in-out"
            src={profileImg}
            alt="Profile Image of Pranav"
            width={300}
            height={1}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className=""
      >
        <Image
          className=" mx-auto sm:hidden xl:hover:drop-shadow-glow transition duration-700 ease-in-out"
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
