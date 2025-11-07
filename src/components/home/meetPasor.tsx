"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function MeetPastor() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center section-padding gradient-background"
    >
      <div className="container-max w-full grid grid-cols-1 lg:grid-cols-2 gap-16 p-12">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center rounded-2xl"
        >
          <div className="bg-white ">
            <Image
              src={"/home/IMG-20251002-WA0005.jpg"}
              alt="Bishop Joel"
              width={500}
              height={700}
              className="object-cover transition-transform duration-300 max-h-180 hover:scale-110"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-start justify-center text-justify"
        >
          <div className="max-w-xl flex flex-col items-center lg:items-start space-y-8">
            <h3 className="font-medium text-primary-200 text-2xl md:text-4xl border-b-2 border-b-primary-200">
              Meet Our Pastor
            </h3>
            <p className="font-medium text-white text-lg md:text-xl leading-8 md:leading-10">
              Bishop Joel Njoku Andrew is a man of the Spirit, anointed to bring
              restoration to lives through the Word of God and the ministry of
              the Holy Spirit. With a unique blend of humility, wisdom, and
              divine passion, he leads the City of David Tabernacle with a
              vision to see destinies rebuilt and families restored.
            </p>

            <Link href={"/the-church/pastor"}>
              <button className="btn-secondary h-12 md:h-16 hover:bg-white hover:text-dark hover:border-0">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
