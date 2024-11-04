"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "./UI/sectionWrapper";
import { experiences } from "@/utils/constant";
import { textVariant } from "@/utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface CompanyIconProps {
  icon: StaticImageData;
  companyName: string;
}

const CompanyIcon = ({ icon, companyName }: CompanyIconProps) => (
  <div className="flex h-full w-full items-center justify-center">
    <Image src={icon.src} alt={companyName} width={40} height={40} />
  </div>
);

const contentStyle = {
  background: "rgb(38, 38, 38)",
};

const iconStyle = {
  background: "rgb(212, 212, 212)",
};

const contentArrowStyle = {
  borderRight: "8px solid rgb(38, 38, 38)",
};

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-xs uppercase tracking-wide text-gray-300 md:text-base">
        -Career Highlights-
      </p>
      <h2 className="text-3xl font-black tracking-wide text-white md:text-6xl">
        Work Experience
      </h2>
    </motion.div>

    <div className="mt-12">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            className="text-white"
            date={experience.date}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            icon={
              <CompanyIcon
                icon={experience.icon}
                companyName={experience.companyName}
              />
            }
          >
            <h3 className="text-base font-bold md:text-lg lg:text-2xl">
              {experience.position}
            </h3>
            <h4 className="text-sm text-neutral-300 md:text-base">
              {experience.companyName}
            </h4>

            <ul className="ml-3 mt-3 lg:ml-5 lg:mt-5">
              {experience.points.map((point: string, index: number) => (
                <li
                  key={`experience-point-${index}`}
                  className="mb-1 list-disc text-xs md:text-sm md:mb-2 md:pl-1 md:tracking-wide"
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
