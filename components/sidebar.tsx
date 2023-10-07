import React from "react";
import { Menu } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { logo } from "@/public/images/util";
import { NavRoute, routes } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="xl:hidden p-2">
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent className="w-[250px] h-full" side={"left"}>
          <div className="flex flex-col gap-y-10 items-center justify-between pt-5">
            <Image
              className="rounded-md border border-stone-400 shadow-sm shadow-neutral-600"
              src={logo}
              alt="logo"
              width={40}
              height={40}
            />
            <div className=" text-left flex flex-col gap-y-10">
              {routes.map((route: NavRoute) => (
                <SheetClose key={route.href}>
                  <a className="p-5 rounded-md w-fit" href={route.href}>
                    <span className="text-2xl font-bold">{route.label}</span>
                  </a>
                </SheetClose>
              ))}
              <div>
                <div className="shadow-footerShadow w-full h-5 py-7 flex items-center justify-center gap-3">
                  <a href="https://github.com/Pranav-XP">
                    <span>
                      <VscGithubInverted size={30}></VscGithubInverted>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/pranav-chand-16777318b/">
                    <span>
                      <AiFillLinkedin size={40}></AiFillLinkedin>
                    </span>
                  </a>
                  <a href="mailto:pranavchand777@gmail.com">
                    <span>
                      <MdEmail size={40}></MdEmail>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
