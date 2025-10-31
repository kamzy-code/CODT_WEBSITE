"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function UpcomingEvents() {
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
          className="w-full h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left "
        >
          <div className="max-w-xl flex flex-col items-center lg:items-start space-y-5">
            <h3 className="font-medium text-primary-900 text-lg md:text-2xl">
              Upcoming Events!
            </h3>
            <h2 className="font-medium text-dark text-2xl md:text-4xl leading-10 md:leading-15">
              {
                "Stay connected! Experience God’s move in our upcoming services, crusades, and conferences."
              }
            </h2>

            <Link href={"/resources/events"}>
              <button className="btn-primary h-12 md:h-16 hover:bg-red-600">
                View All Events
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
