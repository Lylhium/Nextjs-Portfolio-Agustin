"use client";
import { motion, useScroll } from "framer-motion";

export const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    />
  );
};
