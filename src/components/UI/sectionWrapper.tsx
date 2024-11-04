"use client";

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  const WrappedComponent = (props: React.JSX.IntrinsicAttributes) => (
    <motion.section
      id={idName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer()}
      className="container mx-auto mt-px min-h-screen px-4 py-6 lg:px-10"
    >
      <Component {...props} />
    </motion.section>
  );

  WrappedComponent.displayName = `SectionWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default SectionWrapper;
