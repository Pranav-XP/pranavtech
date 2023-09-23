import React from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { logo } from "@/public/images/util";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";
import { NavRoute, routes } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger className="md:hidden pl-2">
          <Menu size={20} />
        </SheetTrigger>
        <SheetContent className="w-[250px] h-full" side={"left"}>
          <div className="flex flex-col gap-y-10 justify-between pt-5 relative">
            <Image
              className="dark:border-0 dark:shadow-none rounded-md border border-stone-400 shadow-sm shadow-neutral-600"
              src={logo}
              alt="logo"
              width={40}
              height={40}
            />
            <div className="flex flex-col gap-y-10">
              {routes.map((route: NavRoute) => (
                <SheetClose key={route.href}>
                  <a className="p-5 rounded-md w-fit" href={route.href}>
                    <span className="text-2xl font-bold">{route.label}</span>
                  </a>
                </SheetClose>
              ))}
            </div>
            <ThemeSwitch />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
