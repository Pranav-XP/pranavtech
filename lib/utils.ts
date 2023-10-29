import {
  newspapernotesImg,
  starmanImg,
  tspImg,
  unifitImg,
} from "@/public/images/util";
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
    id: 4,
    title: "UniFit",
    demoUrl: "https://github.com/Pranav-XP/unifit-booking",
    codeUrl: "https://github.com/Pranav-XP/unifit-booking",
    screenshot: unifitImg,
    description:
      "A fullstack sports facility booking web app made with Spring WebMVC. Includes role based authentication and feature packed admin dashboard.",
    framework: "Java",
    toolsApplied: [
      {
        id: 1,
        skill: "Java",
      },
      {
        id: 2,
        skill: "Springboot",
      },
      {
        id: 3,
        skill: "MySQL",
      },
    ],
  },
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
  {
    id: 3,
    title: "Starman",
    demoUrl: "https://starmanphotos.vercel.app",
    codeUrl: "https://github.com/Pranav-XP/nasagallery",
    screenshot: starmanImg,
    description:
      "A small gallery style app to practice Server Side data fetching on NextJS. Images supplied by NASA API.",
    framework: "Java",
    toolsApplied: [
      {
        id: 1,
        skill: "NextJS",
      },
      {
        id: 2,
        skill: "REST API",
      },
      {
        id: 3,
        skill: "CSS",
      },
    ],
  },
  {
    id: 2,
    title: "Travelling Salesman Problem",
    demoUrl: "https://github.com/Pranav-XP/Travelling-Salesman-Problem",
    codeUrl: "https://github.com/Pranav-XP/Travelling-Salesman-Problem",
    screenshot: tspImg,
    description:
      "Implemented and analysed Dynamic Programming and Genetic Algorithm approach to solve Asymmetric Travelling Salesman Problem.",
    framework: "Java",
    toolsApplied: [
      {
        id: 1,
        skill: "Java",
      },
      {
        id: 2,
        skill: "Algorithms",
      },
      {
        id: 3,
        skill: "Matlab",
      },
    ],
  },
];
