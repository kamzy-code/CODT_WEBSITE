"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FirstTimerForm } from "../forms/first-timer";
import { TestimonyForm } from "../forms/testimony";

export function TestimonyComponent() {
  return (
    <section className="flex items-center justify-center section-padding gradient-background ">
      <div className="container-max space-y-8">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 py-12 px-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-100 flex items-center justify-center rounded-2xl overflow-hidden"
          >
            <Image
              src={"/resources/PHOTO-2024-04-15-08-44-49.jpg"}
              alt={"Testimony Image"}
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
            <div className="space-y-6">
              <h3 className="font-extrabold text-white text-2xl md:text-4xl">
                Testimony
              </h3>
              <TestimonyForm></TestimonyForm>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
