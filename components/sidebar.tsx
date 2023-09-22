import React from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { logo } from "@/public/images/util";

const Sidebar = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Button className="bg-bg text-foreground hover:bg-bg">
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[250px]" side={"left"}>
          <Image src={logo} alt="logo" width={40} height={40} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
