"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ImageCarousel } from "../imageCarousel";

const images = [
  "/about/IMG-20250825-WA0080.jpg",
  "/about/IMG-20250825-WA0084.jpg",
  "/home/377A6455.jpg",
  "/home/IMG-20250620-WA0019.jpg",
  "/home/IMG-20250825-WA0148.jpg",
  "/about/DSC_0403 copy.jpg",
];

export function AboutDescription() {
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
      <div className="container-max w-full grid grid-cols-1 lg:grid-cols-2 gap-16 p-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center rounded-2xl"
        >
          <div className="lg:scale-95 h-100">
            <ImageCarousel images={images} scale max_w="max-w-lg" card_height="h-80 md:h-100"></ImageCarousel>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-end justify-center "
        >
          <div className="space-y-5">
            {/* <h3 className="font-medium text-primary-900 text-lg md:text-2xl">
              The Mandate
            </h3> */}

            <p className="font-medium text-dark text-lg md:text-xl leading-8 md:leading-10">
              {`City of David Tabernacle is a family of believers dedicated to restoring lives through God’s Word, worship, and love. 
              
              We believe that no life is too broken for God to fix, and no destiny too lost to recover.
Since our inception, we have seen countless lives transformed as people encounter the presence and power of God.`}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
