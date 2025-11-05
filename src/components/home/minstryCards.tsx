"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ministryData = [
  {
    title: "Men Ministry",
    img: "/home/IMG-20250620-WA0019.jpg",
    url: "/ministries/men",
  },
  {
    title: "Women Ministry",
    img: "/home/IMG-20250825-WA0148.jpg",
    url: "/ministries/women",
  },
  {
    title: "Youth Ministry",
    img: "/home/PHOTO-2024-04-08-10-20-28 (1).jpg",
    url: "/ministries/youth",
  },
  {
    title: "Children Ministry",
    img: "/home/DSC_0189 copy.jpg",
    url: "/ministries/children",
  },
];

export function MinistryCards({gridStyle}: {gridStyle?: string}) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div ref={ref} className={`grid ${gridStyle ? gridStyle :"grid-cols-1 lg:grid-cols-2"} gap-8`}>
      {ministryData.filter((ministry)=> ministry.url !== pathname).map((ministry, index) => {
        return (
          <Link href={ministry.url} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-2xl overflow-hidden group bg-white h-80 w-full"
            >
              <Image
                src={ministry.img}
                alt={ministry.title}
                width={500}
                height={700}
                className="object-cover transition-transform duration-300 group-active:scale-110 group-hover:scale-110 h-full"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6">
                <div className="h-full w-full flex flex-col items-center justify-center ">
                  <h2 className="text-white text-xl font-semibold capitalize drop-shadow-lg">
                    {ministry.title}
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
