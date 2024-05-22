import React from "react";
import { motion } from "framer-motion";
const transition = (Component) => {
  return () => (
    <>
      <motion.div
        className="slide-in"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <Component />
      </motion.div>
    </>
  );
};

export default transition;
