import { newspapernotesImg } from "@/public/images/util";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const routes = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
];

export type NavRoute = {
  label: string;
  href: string;
};

export const projects = [
  {
    id: 1,
    title: "NewspaperNotes",
    demoUrl: "https://newspapernotes.vercel.app/",
    codeUrl: "https://github.com/Pranav-XP/newspapernotes",
    screenshot: newspapernotesImg,
    description:
      "A fun newspaper styled notes app. Users are authenticated using OAuth and data is persisted in MySQL DB.",
    framework: "NextJS",
    toolsApplied: [
      {
        id: 1,
        skill: "0Auth",
      },
      {
        id: 2,
        skill: "Prisma",
      },
      {
        id: 3,
        skill: "MySQL",
      },
      {
        id: 4,
        skill: "tRPC",
      },
      {
        id: 5,
        skill: "NextJS",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "NewspaperNotes",
  //   demoUrl: "https://newspapernotes.vercel.app/",
  //   codeUrl: "https://github.com/Pranav-XP/newspapernotes",
  //   screenshot: newspapernotesImg,
  //   description:
  //     "A fun newspaper styled note taking app. Users are authenticated using OAuth and data is persisted in MySQL DB.",
  //   framework: "NextJS",
  //   toolsApplied: [
  //     {
  //       id: 1,
  //       skill: "0Auth",
  //     },
  //     {
  //       id: 2,
  //       skill: "Prisma ORM",
  //     },
  //     {
  //       id: 3,
  //       skill: "MySQL Database",
  //     },
  //     {
  //       id: 4,
  //       skill: "tRPC",
  //     },
  //   ],
  // },
];
