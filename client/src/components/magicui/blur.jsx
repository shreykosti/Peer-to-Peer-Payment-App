"use client";

import { motion } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const BlurIn = ({ word, className, variant, duration = 1 }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display text-center tracking-[-0.02em] drop-shadow-sm "
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
