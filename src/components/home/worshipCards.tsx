"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CardData = [
  {
    title: "Worship Experience",
    description: "Join in our worship service every Sunday",
    img: "/home/PHOTO-2024-04-08-10-18-11.jpg",
    time: {
      victory: "Sunday - 11AM",
      restoration: "Sunday - 4PM",
    },
  },
  {
    title: "Prayer Serivce",
    description: "Join in our worship service every Sunday",
    img: "/home/IMG-20250825-WA0131.jpg",
    time: {
      victory: "Monday - 9PM (ZOOM)",
      restoration: "",
    },
  },
  {
    title: "Bible Study (Faith Clinic)",
    description: "Join in our worship service every Sunday",
    img: "/home/IMG-20250825-WA0083.jpg",
    time: {
      victory: "Wednesday - 7PM",
      restoration: "Thursday - 5PM",
    },
  },
  {
    title: "Midinght Prayer Fire Night",
    description: "Join in our worship service every Sunday",
    img: "/home/DSC_0249 copy.jpg",
    time: {
      victory: "Friday - 11PM",
      restoration: "",
    },
  },
];

export function WorshipCards({scripture}:{scripture?: boolean}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <>
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
    >
      {CardData.map((card, index) => {
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="rounded-t-2xl overflow-hidden group bg-white w-full"
          >
            <div className="h-60">
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={700}
                className="object-cover transition-transform duration-300 group-active:scale-110 group-hover:scale-110 w-full h-full"
              />
            </div>

            <div className="flex gap-2 px-4 py-6 items-center">
              <div className="h-16 w-1 bg-primary-900"></div>

              <div className="flex flex-col  gap-2">
                <h2 className="text-dark font-medium uppercase">
                  {card.title}
                </h2>

                <div className="space-y-1">
                  {card.time.victory && (
                    <p className="text-primary-900 text-xs font-extrabold">
                      {`Victory Chapel: ${card.time.victory}`}
                    </p>
                  )}
                  {card.time.restoration && (
                    <p className="text-primary-900 text-xs font-extrabold">
                      {`Restoration Chapel: ${card.time?.restoration}`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
    
    {scripture && <div className="flex items-center justify-center">
    <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-2xl lg:text-4xl font-semibold pt-24 text-white text-center max-w-xl md:max-w-4xl"
      >
        “And I will restore to you the years that the locust hath eaten.” Joel
        2:25 (KJV)
      </motion.h1>
    </div>}
    </>
  );
}
