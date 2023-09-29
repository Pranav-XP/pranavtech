import { projects } from "@/lib/utils";
import { ExternalLink, Github, ShareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <section id="projects" className="pb-10 mx-5">
      <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
      <div className="flex flex-col items-center justify-center md:p-5">
        {projects.map((project) => (
          <div className="p-5" key={project.id}>
            <h2 className="flex items-center gap-2 font-bold text-left hover:md:underline md:text-center text-xl md:text-3xl p-5">
              <a href={project.demoUrl}>{project.title}</a>
              <ExternalLink size={20} />
            </h2>

            <div
              className="flex flex-col lg:flex-row justify-center items-center
            md:border dark:md:border-stone-600 border shadow-glow  border-stone-600 rounded-lg p-10 text-left"
            >
              <Image
                className="rounded-md border dark:border-none w-50 items-center p-1"
                src={project.screenshot}
                alt="Project image"
                width={400}
              ></Image>
              <div className="font-mono md:p-10 pb-2">
                {project.description} <br />
                <div className="flex flex-row gap-3">
                  {project.toolsApplied.map((tool) => (
                    <div
                      key={tool.id}
                      className="hidden h-fit text-stone-800 font-bold border border-stone-300 md:inline md:text-center md:bg-stone-300 md:m-1 md:p-2 p-1 rounded-sm"
                    >
                      {tool.skill}
                    </div>
                  ))}
                </div>
                <div className="underline font-semibold justify-center md:justify-normal mt-2 md:mt-5 md:hover:underline flex flex-row gap-1 items-center">
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
