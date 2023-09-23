import { projects } from "@/lib/utils";
import { ExternalLink, Github, ShareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <section id="projects" className="pb-10 mx-5">
      <h1 className="text-3xl sm:text-5xl font-bold p-5">Projects</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center md:p-10">
        {projects.map((project) => (
          <div key={project.id}>
            <a href={project.demoUrl}>
              <h2 className="flex items-center gap-2 font-bold text-left hover:md:underline sm:text-center text-xl sm:text-3xl pb-5">
                {project.title}
                <ExternalLink size={20} />
              </h2>
            </a>

            <div
              className="flex flex-col sm:flex-row justify-center items-center 
            sm:border dark:sm:border-stone-600 border shadow-glow  border-stone-600 rounded-lg p-10 text-left"
            >
              <Image
                className="rounded-md border dark:border-none w-50 items-center p-1"
                src={project.screenshot}
                alt="Project image"
                width={400}
              ></Image>
              <div className="font-mono sm:p-10 pb-2">
                {project.description} <br />
                <div className="p-2"></div>
                {project.toolsApplied.map((tool) => (
                  <span
                    className="hidden text-stone-800 font-bold border border-stone-300 md:inline md:text-center md:bg-stone-300 md:m-1 md:p-2 p-1 rounded-sm"
                    key={tool.id}
                  >
                    {tool.skill}
                  </span>
                ))}
                <div className="underline mt-2 md:mt-5 md:hover:underline flex flex-row gap-1 items-center">
                  <a href={project.codeUrl}>Github</a>
                  <Github />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
