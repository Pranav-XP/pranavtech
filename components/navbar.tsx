import Image from "next/image";
import React from "react";
import { ThemeSwitch } from "./theme-switch";
import { logo } from "@/public/images/util";
import Sidebar from "./sidebar";
import { routes } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="w-full p-2 sm:p-5 h-20 border items-center 
    border-b-stone-300 shadow-lg shadow-stone-300 dark:border-b-stone-600  
    dark:shadow-navbarShadow fixed top-0 z-50 bg-background 
    text-foreground flex justify-between"
    >
      <Sidebar />
      <div className="hidden sm:flex">
        <Image src={logo} width={40} height={40} alt="logo"></Image>
      </div>

      <div className="hidden sm:flex sm:items-center sm:justify-between gap-x-10">
        {routes.map((route) => (
          <Link className="font-bold" key={route.href} href={route.href}>
            {route.label}
          </Link>
        ))}
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
