"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PrayerRequestForm } from "../forms/prayer-request";

export function PrayerRequestCompnent() {
  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max space-y-8">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 py-12 px-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-100 flex items-center justify-center rounded-2xl overflow-hidden"
          >
            <Image
              src={"/reources/IMG-20250825-WA0120.jpg"}
              alt={"Prayer Request Image"}
              width={500}
              height={800}
              className="transform h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="space-y-4">
              <h3 className="font-extrabold text-primary-900 text-2xl md:text-4xl">
                Prayer Request
              </h3>
              <PrayerRequestForm></PrayerRequestForm>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
