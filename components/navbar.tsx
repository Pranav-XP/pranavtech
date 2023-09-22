import Image from "next/image";
import React from "react";
import { ThemeSwitch } from "./theme-switch";
import { logo } from "@/public/images/util";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <nav className="w-full p-2 sm:p-5 h-20 border items-center border-b-stone-100 shadow-navbarShadow h-15 sticky bg-background text-foreground flex justify-between">
      <Sidebar />
      <div className="hidden sm:flex">
        <Image src={logo} width={40} height={40} alt="logo"></Image>
      </div>
      <div className="hidden sm:flex">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
