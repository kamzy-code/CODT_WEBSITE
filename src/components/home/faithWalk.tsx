"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaithCards } from "./faithCards";

export function FaithWalk() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center section-padding bg-dark rounded-t-4xl"
    >
      <div className="container-max flex flex-col items-center gap-8 p-12">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-medium text-center text-white text-2xl md:text-4xl leading-15"
          >
            Your Faith Walk
          </motion.h2>
          <div className="flex gap-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-3 w-30 rounded-full bg-primary-900 mt-4"
            ></motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-3 w-30 rounded-full bg-white mt-4"
            ></motion.div>
          </div>
        </div>

        <FaithCards></FaithCards>
        
      </div>
    </section>
  );
}
