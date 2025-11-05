"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageCarousel } from "../imageCarousel";

const childrenImages = [
  "/ministry/children/PHOTO-2024-08-12-12-22-13 (1).jpg",
  "/ministry/children/PHOTO-2024-08-12-12-22-13.jpg",
  "/ministry/children/PHOTO-2024-08-12-12-22-14.jpg",
  "/ministry/children/DSC_0189 copy.jpg",
  "/ministry/children/DSC_0195 copy.jpg",
  "/ministry/children/IMG-20250621-WA0004.jpg",
  "/ministry/children/377A6537.jpg",
  "/ministry/children/IMG-20250621-WA0032.jpg",
  "/ministry/children/IMG-20250623-WA0004.jpg",
  "/ministry/children/IMG-20250623-WA0005.jpg",
  "/ministry/children/IMG-20250825-WA0009.jpg",
  "/ministry/children/IMG-20250825-WA0036.jpg",
  "/ministry/children/IMG-20250825-WA0086.jpg",
  "/ministry/children/IMG-20250825-WA0117 (1).jpg",
  "/ministry/children/IMG-20250825-WA0168.jpg",
  "/ministry/children/PHOTO-2024-04-08-10-22-28.jpg",
  "/ministry/children/PHOTO-2024-06-24-16-15-26.jpg",
  "/ministry/children/PHOTO-2024-06-24-16-15-29.jpg",
  "/ministry/children/PHOTO-2024-08-12-12-22-12 (1).jpg",
  "/ministry/children/PHOTO-2024-08-12-12-22-12.jpg",
];

export function ChildrenDescription() {
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
              images={childrenImages}
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
              Welcome to Children Ministry
            </h3>

            <div className="space-y-5">
              <p className="font-medium text-dark ">
                {`Our children's ministry is a vibrant and nurturing environment where young hearts are introduced to God's love through age-appropriate teaching, engaging activities, and caring guidance.`}
              </p>

              <p className="font-medium text-dark ">
                {`We meet weekly for interactive Bible lessons, worship songs, and creative activities that make learning about Jesus fun and memorable for children of all ages.`}
              </p>

              <p className="font-medium text-dark ">
                {`Our dedicated team of teachers and volunteers create a safe, loving atmosphere where children can build friendships, develop their faith foundation, and experience God's love firsthand.`}
              </p>

              <p className="font-medium text-dark ">
                {`Through Sunday School, vacation Bible school, and special events, we help children discover their unique gifts, learn biblical values, and grow in their relationship with God while having fun together.`}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
