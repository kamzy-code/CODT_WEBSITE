"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CardData = [
  {
    title: "About the church",
    subtitle: "Learn More",
    img: "/home/IMG-20250825-WA0125.jpg",
    url: "/the-church/about",
  },
  {
    title: "Branches",
    subtitle: "Find a Branch",
    img: "/home/377A6455.jpg",
    url: "/the-church/branches",
  },
  {
    title: "Prayer Request",
    subtitle: "Submit a Prayer Request",
    img: "/home/DSC_0342 copy.jpg",
    url: "/resources/prayer-requests",
  },
  {
    title: "Offering",
    subtitle: "Give Now",
    img: "/home/PHOTO-2024-04-08-10-20-28.jpg",
    url: "/give",
  },
];

export function FaithCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {CardData.map((card, index) => {
        return (
          <Link key={index} href={card.url}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-2xl overflow-hidden group bg-white h-80 lg:h-120"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={700}
                className="object-cover transition-transform duration-300 group-active:scale-110 group-hover:scale-110 h-full"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6">
                <div className="h-full w-full flex flex-col justify-between ">
                  <p className="text-white capitalize drop-shadow-lg">
                    {card.subtitle}
                  </p>
                  <h2 className="text-white text-xl font-semibold capitalize drop-shadow-lg">
                    {card.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
