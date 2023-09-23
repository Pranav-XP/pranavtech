"use client";

import Image from "next/image";
import React from "react";
import { ThemeSwitch } from "./theme-switch";
import { avatarImg, logo } from "@/public/images/util";
import Sidebar from "./sidebar";
import { routes } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const animateInVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Navbar = () => {
  return (
    <nav
      className="w-full p-2 sm:p-5 h-20 border-b items-center 
    border-b-stone-300 shadow-lg shadow-stone-300 dark:border-b-stone-600  
    dark:shadow-navbarShadow fixed top-0 z-50 bg-background 
    text-foreground flex justify-between"
    >
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden sm:flex"
      >
        <Image
          className="border border-stone-400 rounded-md"
          src={logo}
          width={40}
          height={40}
          alt="logo"
        ></Image>
      </motion.div>

      <div className="hidden sm:flex sm:items-center sm:justify-between gap-x-10">
        {routes.map((route, index) => (
          <motion.div
            variants={animateInVariant}
            initial="initial"
            animate="animate"
            custom={index}
            key={route.href}
            className="hover:underline"
          >
            <Link className="font-bold" href={route.href}>
              {route.label}
            </Link>
          </motion.div>
        ))}
        <ThemeSwitch />
      </div>
      <Avatar className="sm:hidden">
        <Image src={avatarImg} alt="Memeoji of Pranav" />
        <AvatarFallback>PC</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
