"use client";

import SectionWrapper from "./UI/sectionWrapper";
import ProjectCard from "./UI/projectCard";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { projects } from "@/utils/constant";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-xs uppercase tracking-wide text-gray-300 md:text-base">
          -My Work-
        </p>
        <h2 className="text-3xl font-black tracking-wide text-white md:text-6xl">
          Projects
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-6 max-w-2xl text-sm tracking-wide text-neutral-300 md:text-lg"
      >
        The following are some of my projects that showcase my journey from
        simple tasks to real-world examples of complex problem-solving,
        practical project management, and proficiency with various technologies.
        Each project is briefly described and accompanied by links to its code
        repository or live demo, providing insight into the skills and expertise
        demonstrated throughout my work.
      </motion.p>

      <div className="flex w-full flex-wrap justify-center gap-y-4 py-8 lg:gap-8 lg:py-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
