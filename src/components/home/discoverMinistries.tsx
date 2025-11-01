"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MinistryCards } from "./minstryCards";

export function DiscoverMinistries() {
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
      <div className="container-max flex flex-col items-center justify-center gap-8 w-full py-12">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center space-y-5 text-center">
          <h3 className="font-medium text-primary-900 text-lg md:text-2xl">
            Discover Our Ministries
          </h3>
          <h2 className="font-medium text-dark text-2xl md:text-4xl leading-10 md:leading-15">
            {
              "There’s a place for you to grow, serve, and shine at City of David Tabernacle."
            }
          </h2>
        </div>

        <div>
          <MinistryCards></MinistryCards>
        </div>
      </div>
    </section>
  );
}
