"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const branchData = [
  {
    name: "Victory Chapel",
    description: `A vibrant assembly focused on victory through the Word. Worship with us and experience God’s power.`,
    address: "7953 Annapolis Rd Lanham, MD 20706",
    contact: "240-601-8936 || 202-763-9291",
    image: "/about/IMG-20250825-WA0084.jpg"
  },
  {
    name: "Restoration Chapel",
    description: `A home of healing and renewal where lives are restored daily through prayer and teaching.`,
    address:
      "Plot 271 Ikenegbu Layout, Beside Fidelity Bank, Ikenegbu, Owerri Imo State.",
    contact: "+234-803-708-1146",
    image: "/about/DSC_0403 copy.jpg"
  },
];

export function BranchesDescription() {
  const ref = useRef(null);
  const isInView = true;
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

                  <div className=" space-y-4">
                    <p className="flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-primary-900 shrink-0"></MapPin>
                        {branch.address}
                    </p>

                    <p className="flex items-center gap-2">
                        <Phone className="h-6 w-6 text-primary-900 shrink-0"></Phone>
                        {branch.contact}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
