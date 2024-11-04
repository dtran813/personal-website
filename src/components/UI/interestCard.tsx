"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { StaticImageData } from "next/image";

interface InterestCardProps {
  index: number;
  interest: string;
  image: StaticImageData;
}

const interestCard = ({ index, interest, image }: InterestCardProps) => {
  return (
    <Tilt
      className="w-1/2 p-2 lg:w-1/4 lg:p-4"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={500}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient w-full rounded-2xl bg-gradient-to-r from-green-300 to-sky-400 p-px shadow-xl shadow-neutral-800"
      >
        <div
          className="grid min-h-40 place-content-center rounded-2xl bg-neutral-700 bg-cover bg-center px-5 py-4 md:min-h-60 lg:min-h-80"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        >
          <h3 className="text-center text-sm font-bold md:text-base lg:text-lg">
            {interest}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default interestCard;
