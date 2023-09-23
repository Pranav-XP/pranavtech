"use client";

import Image from "next/image";
import React from "react";
import { ThemeSwitch } from "./theme-switch";
import { logo } from "@/public/images/util";
import Sidebar from "./sidebar";
import { routes } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  let animationDelay = 0;
  return (
    <nav
      className="w-full p-2 sm:p-5 h-20 border items-center 
    border-b-stone-300 shadow-lg shadow-stone-300 dark:border-b-stone-600  
    dark:shadow-navbarShadow sticky top-0 z-50 bg-background 
    text-foreground flex justify-between"
    >
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden sm:flex"
      >
        <Image src={logo} width={40} height={40} alt="logo"></Image>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { staggerChildren: 0.2 } }}
        className="hidden sm:flex sm:items-center sm:justify-between gap-x-10"
      >
        {routes.map((route) => (
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={route.href}
          >
            <Link className="font-bold" href={route.href}>
              {route.label}
            </Link>
          </motion.li>
        ))}
        <ThemeSwitch />
      </motion.ul>
    </nav>
  );
};

export default Navbar;
