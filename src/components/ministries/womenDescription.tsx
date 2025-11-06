"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageCarousel } from "../imageCarousel";

const womenImages = [
  "/ministry/women/IMG-20250825-WA0146.jpg",
  "/ministry/women/IMG-20250825-WA0145.jpg",
  "/ministry/women/377A6454.jpg",
  "/ministry/women/377A6620.jpg",
  "/ministry/women/IMG-20250825-WA0154.jpg",
  "/ministry/women/IMG-20250825-WA0156.jpg",
  "/ministry/women/377A6642.jpg",
  "/ministry/women/DSC_0665 copy.jpg",
  "/ministry/women/DSC_0785 copy.jpg",
  "/ministry/women/IMG-20250825-WA0157.jpg",
  "/ministry/women/PHOTO-2024-04-21-22-13-35.jpg",
  "/ministry/women/PHOTO-2024-04-08-10-20-28 (1).jpg",
  "/ministry/women/PHOTO-2024-04-08-10-20-28 (2).jpg",
  "/ministry/women/PHOTO-2024-04-08-10-20-28.jpg",
  "/ministry/women/PHOTO-2024-04-15-08-54-40.jpg",
  "/ministry/women/PHOTO-2024-04-15-08-44-49.jpg",
  "/ministry/women/PHOTO-2024-04-21-22-12-35 (1).jpg",
  "/ministry/women/PHOTO-2024-04-21-22-12-35.jpg",
  "/ministry/women/PHOTO-2024-04-21-22-13-36.jpg",
];

export function WomenDescription() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  return (
    <section
      ref={ref}
      className="flex items-center justify-center section-padding"
    >
      <div className="container-max w-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-12 px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center rounded-2xl"
        >
          <div className="scale-80 sm:scale-90 lg:scale-95 h-80 md:h-120">
            <ImageCarousel
              images={womenImages}
              scale
              max_w="max-w-xs sm:max-w-md md:max-w-lg "
              card_height="h-80 md:h-120 w-100"
            ></ImageCarousel>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-end justify-center"
        >
          <div className="space-y-5">
            <h3 className="font-extrabold text-primary-900 text-lg md:text-2xl">
              Welcome to Women Ministry
            </h3>

            <div className="space-y-5">
              <p className="font-medium text-dark ">
                {`Our women's ministry is a vibrant community dedicated to empowering women in their faith journey through Christ. We provide a supportive space where women can discover their God-given purpose, develop deep spiritual connections, and grow in their relationship with Jesus.`}
              </p>
              <p className="font-medium text-dark ">
                {`We meet weekly for Bible study and prayer, creating a nurturing
                environment where women can share, grow, and support one
                another in their faith journey.`}
              </p>

              <p className="font-medium text-dark ">
                {` Through mentorship and small groups, women encourage and empower
                each other in their spiritual growth, building lasting friendships
                and developing leadership skills.`}
              </p>

              <p className="font-medium text-dark ">
                {`Our ministry extends beyond the church through community outreach,
                women's events, and support programs that touch lives and share
                God's love in practical ways.`}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
