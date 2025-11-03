"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Prop {
  title: string;
  description: string;
}
export function PageHeader({ title, description }: Prop) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  return (
    <section ref={ref} className="relative bg-primary-200 mt-24">
      <div className="w-full flex justify-center h-60 md:h-80 overflow-hidden">
        <Image
          src={"/home/IMG-20250825-WA0083.jpg"}
          alt={"Header Background"}
          width={500}
          height={700}
          className="object-cover w-full opacity-100"
        />
      </div>
      <div className="absolute inset-0 top-0 left-0 bg-primary-900/80 flex items-center justify-center h-full w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5}}
          className="max-w-4xl flex flex-col-reverse items-center justify-center  w-full h-full gap-4 px-12"
        >
          <h2 className="font-medium text-center text-primary-200 text-xl md:text-2xl lg:text-4xl">
            {description}
          </h2>

          <h2 className="font-black text-center text-white text-4xl md:text-6xl">
            {title}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
