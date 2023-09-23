import Banner from "@/components/banner";
import LeftSide from "@/components/leftside";
import Project from "@/components/project";
import RightSide from "@/components/rightside";
import Tools from "@/components/tools";
import { nextJSLogoDark, nextJSLogoLight } from "@/public/images/util";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-between">
        <aside className="hidden sm:flex pl-2 fixed left-1 top-1/2">
          <LeftSide />
        </aside>

        <section className="sm:grow grow-0 pt-20 px-10 text-center">
          <Banner />
          <Project />
          <Tools />
        </section>

        <aside className="hidden sm:flex pl-2 fixed right-2 top-1/2">
          <RightSide />
        </aside>
      </div>
      <footer
        className="w-full mt-2 p-2 bottom-0 border
    border-b-stone-300 shadow-lg shadow-stone-300 dark:border-b-stone-600  
    dark:shadow-navbarShadow bg-background 
    text-foreground flex justify-center items-centers gap-x-2 text-sm font-mono"
      >
        <span className="">Built with</span>
        <Image
          src={nextJSLogoDark}
          alt="NextJS Logo"
          className="hidden dark:flex"
          width={45}
        />
        <Image
          src={nextJSLogoLight}
          alt="NextJS Logo"
          className="dark:hidden flex"
          width={45}
        />
      </footer>
    </main>
  );
}
