"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CardData = [
  {
    name: "Min. Chidozie Anyanwu",
    img: "/home/IMG-20250620-WA0019.jpg",
    testimony: "Testimony 1",
  },
  {
    name: "Min. Carson Akaolisa",
    img: "/home/IMG-20250825-WA0148.jpg",
    testimony: "Testimony 2",
  },
  {
    name: "Mrs. Joyce Agbadu",
    img: "/home/PHOTO-2024-04-08-10-20-28 (1).jpg",
    testimony: "Testimony 3",
  },
  {
    name: "Miss. Ruth Neche",
    img: "/home/DSC_0189 copy.jpg",
    testimony: "/Testimony 4",
  },
];

export function StoriesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {CardData.map((card, index) => {
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="rounded-2xl group bg-white min-h-80 w-auto p-8 flex flex-col items-center justify-center gap-4"
          >
            <div className="flex justify-center items-center gap-2">
              <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.name}
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <h2 className="font-bold text-primary-900">{card.name}</h2>
            </div>

            <div>
              <p>{`"${card.testimony}"`}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
