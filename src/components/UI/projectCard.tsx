"use client";

import Tilt from "react-parallax-tilt";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  liveLink: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  liveLink,
}: ProjectCardProps) => {
  return (
    <Tilt
      className="w-80 rounded-2xl bg-neutral-800 p-4 sm:w-full lg:w-[400px]"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={600}
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="flex h-full flex-col justify-center sm:flex-row lg:flex-col"
      >
        <Link
          href={liveLink}
          aria-label={`Check out the ${name} website`}
          target="_blank"
          className="mb-4 block h-60 w-full flex-initial sm:mb-0 sm:flex-1 lg:mb-5 lg:flex-initial"
        >
          <Image
            src={image}
            alt={`A homepage photo of ${name} website`}
            className="h-full w-full rounded-xl object-cover"
          />
        </Link>

        <div className="ml-0 flex flex-1 flex-col justify-between sm:ml-8 sm:justify-around lg:ml-0 lg:justify-between">
          <h3 className="mb-2 text-base font-semibold sm:mb-0 sm:text-2xl lg:mb-2">
            {name}
          </h3>
          <p className="text-sm text-neutral-300 sm:text-base">{description}</p>

          <div className="mt-2 flex gap-1 text-base sm:mt-0 md:gap-4 md:text-lg lg:mt-4">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={tag.color}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
