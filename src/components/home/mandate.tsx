"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Mandate() {
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
      <div className="container-max w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-12">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center bg-dark rounded-2xl"
        >
          <Image
            src={"/home/PHOTO-2023-10-10-20-47-01-removebg-preview.png"}
            alt="Bishop Joel"
            width={500}
            height={800}
            className="transform scale-x-[-1] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-end justify-center text-center lg:text-right lg:col-span-2"
        >
          <div className="max-w-xl space-y-5">
            <h3 className="font-medium text-primary-900 text-lg md:text-2xl">
              The Mandate
            </h3>
            <h2 className="font-medium text-dark text-2xl md:text-4xl leading-10 md:leading-15">
              Bringing Restoration to Humanity and the Dying World.
            </h2>
            <p className="font-medium text-dark text-lg md:text-xl leading-8 md:leading-10 text-center lg:text-right">
              City of David Tabernacle is more than a church it is a movement of
              restoration. Through the transforming power of the Word, prayer,
              and love, we are committed to rebuilding lives, families, and
              destinies broken by the pressures of the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
