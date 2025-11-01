"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function LatestSermons() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center section-padding "
    >
      <div className="container-max w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 py-24 ">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-start"
        >
          <div className="max-w-xl flex flex-col items-center lg:items-start space-y-8">
            <h3 className="font-medium text-primary-900 text-2xl md:text-4xl">
              Latest Sermons
            </h3>
             <h2 className="font-medium text-dark text-xl md:text-4xl leading-10 md:leading-15">
              {
                "Missed a service? Stream our latest messages and be refreshed by God’s Word."
              }
            </h2>

            <Link href={"/resources/sermons"}>
              <button className="btn-primary h-12 md:h-16  hover:bg-red-600">
                Watch Sermons
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center rounded-2xl"
        >
          <div className="rounded-[50] md:rounded-[70] rotate-45 h-60 w-60 sm:h-80 sm:w-80 lg:w-100 lg:h-100 overflow-hidden flex items-center justify-center">
            <Image
              src={"/home/96849540-4a52-43c5-9d55-5d85a4dc6a74.jpeg"}
              alt="Bishop Joel"
              width={500}
              height={800}
              className="object-cover -rotate-45 scale-130"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
