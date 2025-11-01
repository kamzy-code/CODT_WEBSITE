"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CardData = [
  {
    title: "Victory Chapel",
    img: "/about/IMG-20250825-WA0084.jpg",
    url: "/the-church/branches",
  },
  {
    title: "Restoration Chapel",
    img: "/about/DSC_0403 copy.jpg",
    url: "/the-church/branches",
  },
];

export function BranchesCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {CardData.map((card, index) => {
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative rounded-2xl overflow-hidden group bg-white h-80 w-full"
          >
            <Image
              src={card.img}
              alt={card.title}
              width={500}
              height={700}
              className="object-cover transition-transform duration-300 group-active:scale-110 group-hover:scale-110 h-full"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end p-6">
              <div className="h-full w-full flex flex-col items-center gap-4 justify-center ">
                <h2 className="text-white text-2xl font-semibold capitalize drop-shadow-lg">
                  {card.title}
                </h2>
                <Link href={card.url}>
                  <button className="btn-secondary p-4 h-10 text-sm flex items-center justify-center hover:bg-white hover:text-dark">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
