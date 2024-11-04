"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { interests } from "@/utils/constant";
import InterestCard from "./UI/interestCard";
import SectionWrapper from "./UI/sectionWrapper";

const AboutMe = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-xs uppercase tracking-wide text-neutral-300 md:text-base">
        -Introduction-
      </p>
      <h2 className="text-3xl font-black tracking-wide text-white md:text-6xl">
        Overview
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.15, 1)}
      className="mt-6 max-w-2xl text-sm tracking-wide text-neutral-300 md:text-lg"
    >
      I am a technology enthusiast with experience in Python, Java, JavaScript,
      and frameworks such as React and Node.js. I take pride in my attention to
      detail and strong organizational skills, which enable me to contribute
      effectively to any team. Driven by a passion for knowledge, I am committed
      to continuous learning, particularly in software and web development
      skills. In my free time, I enjoy playing video games, hiking, and staying
      active by working out regularly.
    </motion.p>

    <div className="flex w-full flex-wrap justify-center py-8 lg:py-12">
      {interests.map((item, index) => (
        <InterestCard key={item.interest} index={index} {...item} />
      ))}
    </div>
  </>
);

export default SectionWrapper(AboutMe, "about");
