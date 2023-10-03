"use client";

import React from "react";
import { BiLogoJava, BiLogoSpringBoot, BiGitBranch } from "react-icons/bi";
import { TbBrandCpp, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import {
  SiMysql,
  SiVmware,
  SiTailwindcss,
  SiSpringboot,
  SiNextdotjs,
  SiOracle,
} from "react-icons/si";
import { CgCPlusPlus, CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";
import { GitBranchIcon } from "lucide-react";

const Tools = () => {
  return (
    <section id="tools" className="pb-20 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-bold p-5">Tools</h1>
      <p className="pb-5 font-mono text-left md:text-lg">
        Technologies I am proficient with:
      </p>
      <ul className="flex md:px-20 gap-5 md:gap-10 items-center justify-evenly flex-wrap">
        <li>
          <BiLogoJava size={60} />
        </li>
        <li className="flex flex-col items-center justify-evenly">
          <SiSpringboot size={50} />
          <p className="text-sm dark:text-stone-200 font-mono">Springboot</p>
        </li>
        <li>
          <CgCPlusPlus size={50} />
        </li>
        <li>
          <SiNextdotjs size={50} />
          <p className="text-sm dark:text-stone-200 font-mono">NextJS</p>
        </li>
        <li>
          <SiMysql size={70} />
        </li>
        <li className="flex flex-col items-center">
          <SiTailwindcss size={50} />
          <p className="text-sm dark:text-stone-200 font-mono">Tailwind CSS</p>
        </li>
        <li className="flex flex-col items-center">
          <GitBranchIcon size={50} />
          <p className="text-sm dark:text-stone-200 font-mono">Git</p>
        </li>
        <li>
          <SiVmware size={70} />
        </li>
      </ul>
    </section>
  );
};

export default Tools;
