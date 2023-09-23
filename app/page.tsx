import LeftSide from "@/components/leftside";
import RightSide from "@/components/rightside";
import { nextJSLogoDark, nextJSLogoLight } from "@/public/images/util";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between">
      <aside className="hidden sm:flex pl-2 fixed left-1 top-1/2">
        <LeftSide />
      </aside>

      <section className="grow h-full pt-20 px-20 text-center">Middle</section>

      <aside className="hidden sm:flex pl-2 fixed right-2 bottom-1/4">
        <RightSide />
      </aside>
      <footer
        className="w-full p-2 fixed bottom-0 border
    border-b-stone-300 shadow-lg shadow-stone-300 dark:border-b-stone-600  
    dark:shadow-navbarShadow z-50 bg-background 
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
