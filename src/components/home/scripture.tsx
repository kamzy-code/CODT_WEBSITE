"use client";
import { motion, useInView} from "framer-motion";
import { useRef } from "react";

export function Scripture() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only trigger animation once
    amount: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <section ref={ref} className="flex items-center justify-center gradient-background section-padding">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-2xl lg:text-4xl font-semibold py-12 md:py-24 text-white text-center max-w-xl md:max-w-4xl"
      >
        “And I will restore to you the years that the locust hath eaten.” Joel
        2:25 (KJV)
      </motion.h1>
    </section>
  );
}
