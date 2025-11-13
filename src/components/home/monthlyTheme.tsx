"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MonthlyTheme({theme}: {theme: {month: string; theme: string} | null}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  return (
    <section
      ref={ref}
      className="flex items-center justify-center section-padding bg-primary-200 "
    >
      <div className="container-max flex flex-col items-center gap-4 p-12">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-medium text-center text-primary-900 text-2xl md:text-4xl"
        >
          Theme for the Month
        </motion.h2>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-black text-center text-primary-900 text-2xl md:text-4xl xl:text-6xl "
        >
         { theme ? `${theme.month} - ${theme.theme}` : "Loading theme..." }
        </motion.h2>
      </div>
    </section>
  );
}
