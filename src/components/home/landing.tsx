"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, } from "framer-motion";

export function LandingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="relative min-h-screen w-full flex items-center justify-center p-8">
        .
        <Image
          src="/home/landing_bg.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-white/10 z-0"></div>
        <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-8 py-24">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-medium"
          >
            Welcome To
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="fleex flex-col items-center justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-4">
              City of David
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold">Tabernacle</h1>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-3 w-full rounded-full bg-primary-900 mt-4"
            ></motion.div>
          </motion.div>

          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5}}
            className="sm:text-lg md:text-xl max-w-sm md:max-w-md text-center font-medium opacity-90"
          >
            A place of transformation, renewal, and restoration through the
            power of Jesus Christ.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 scale-85 md:scale-100 "
          >
            <Link href={"https://www.youtube.com/@victorychapelmd_cod/streams"} target="_blank">
              <button className="btn-primary hover:bg-red-600 border-0 h-12 md:h-16 p-2">
                Watch Live
              </button>
            </Link>

            <Link href={"/the-church/about-us"}>
              <button className="btn-secondary text-white border-white hover:bg-white active:text-dark hover:text-dark h-12 md:h-16 p-2">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
