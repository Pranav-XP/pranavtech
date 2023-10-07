import { projects } from "@/lib/utils";
import { ExternalLink, Github, ShareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <section id="projects" className="pb-10 md:px-10">
      <h1 className="text-6xl xl:text-5xl font-bold">Projects</h1>
      <div className="flex flex-col items-center justify-center xl:px-16 py-5 w-full">
        {projects.map((project) => (
          <div className="py-5 " key={project.id}>
            <div
              className="flex flex-col xl:flex-row justify-center items-center
            xl:border border shadow-glow  border-stone-400 rounded-lg p-5 text-left"
            >
              <h2 className="xl:hidden text-2xl items-center pb-2 flex gap-2 font-bold self-start text-left">
                <a className="hover:xl:underline" href={project.demoUrl}>
                  {project.title}
                </a>
                <ExternalLink size={20} />
              </h2>
              <a href={project.demoUrl} className="w-full p-3">
                <Image
                  className="border dark:border-none rounded-md w-full items-center"
                  src={project.screenshot}
                  alt="Project image"
                  width={400}
                ></Image>
              </a>
              <div className="flex flex-col xl:p-10 pb-2">
                <h2 className="hidden xl:flex items-center gap-2 font-bold font text-left  xl:text-center text-xl xl:text-3xl py-5">
                  <a className="hover:xl:underline" href={project.demoUrl}>
                    {project.title}
                  </a>
                  <ExternalLink size={20} />
                </h2>
                <p className="font-mono">{project.description}</p> <br />
                <div className="flex flex-row flex-wrap justify-start items-center gap-3 p-1">
                  {project.toolsApplied.map((tool) => (
                    <div
                      key={tool.id}
                      className="text-sm font-mono px-1 text-stone-800 font-bold border border-stone-700 flex text-center bg-stone-100  rounded-sm"
                    >
                      {tool.skill}
                    </div>
                  ))}
                </div>
                <div className="underline font-mono font-semibold justify-center xl:justify-normal mt-2 xl:mt-5 xl:hover:underline flex flex-row gap-1 items-center">
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
