"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const branchData = [
  {
    name: "Bishop Joel Njoku Andrew",
    description: `Bishop Joel Njoku Andrew is the Lead Pastor of City of David Tabernacle, a dynamic teacher, mentor, and spiritual father.
He carries a divine mandate to bring restoration to the dying world — reviving faith, rebuilding families, and restoring destinies.
His ministry is marked by practical wisdom, heartfelt compassion, and supernatural manifestations of the Holy Spirit.
Through his leadership, countless lives have been transformed across our branches and outreach programs.
`,
    image: "/about/Bishop Glory Encounter Day 10 Picture 1.jpeg",
  },
  {
    name: "Rev. Francisca Njoku Andrew",
    description: `Bishop Joel Njoku Andrew is the Lead Pastor of City of David Tabernacle, a dynamic teacher, mentor, and spiritual father.
He carries a divine mandate to bring restoration to the dying world — reviving faith, rebuilding families, and restoring destinies.
His ministry is marked by practical wisdom, heartfelt compassion, and supernatural manifestations of the Holy Spirit.
Through his leadership, countless lives have been transformed across our branches and outreach programs.
`,
    image: "/about/PHOTO-2024-07-07-19-11-08 (1).jpg",
  },
];

export function PastorsDescription() {
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
      <div className="container-max space-y-8">
        {branchData.map((branch, idx) => {
          return (
            <div
              key={idx}
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-12"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className="w-full min-h-100 flex items-center justify-center bg-dark rounded-2xl overflow-hidden"
              >
                <Image
                  src={branch.image}
                  alt={branch.name}
                  width={500}
                  height={800}
                  className="transform h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className="w-full h-full flex flex-col items-center lg:items-end justify-center"
              >
                <div className="space-y-5">
                  <h3 className="font-extrabold text-primary-900 text-lg md:text-2xl">
                    {branch.name}
                  </h3>

                  <p className="font-medium text-dark text-lg md:text-xl leading-8 md:leading-10">
                    {branch.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
