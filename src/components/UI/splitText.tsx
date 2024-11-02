"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
}

const SplitText = ({ text }: Props) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          aria-hidden={true}
          animate={{
            opacity: [0, 1, 1],
            y: [25, -25, 0],
          }}
          transition={{
            duration: 0.75,
            delay: 0.5 + index / 10,
          }}
          style={{
            display: char === " " ? "inline" : "inline-block",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
