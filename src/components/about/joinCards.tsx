"use client"

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const CardData = [
 "/about/IMG-20250825-WA0070.jpg", "/about/IMG-20250825-WA0087.jpg", "/about/PHOTO-2024-07-07-19-11-08.jpg", "/about/377A6572.jpg"
];

export function JoinCards() {
     const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {CardData.map((image, index) => {
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {y:50, opacity:0}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="rounded-2xl overflow-hidden group bg-white h-80 lg:h-120"
          >
            <Image
              src={image}
              alt={"Image"}
              width={500}
              height={700}
              className="object-cover transition-transform duration-300 group-active:scale-110 group-hover:scale-110 h-full"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
