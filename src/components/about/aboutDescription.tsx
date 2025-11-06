"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ImageCarousel } from "../imageCarousel";

const images = [
  "/about/IMG-20250825-WA0080.jpg",
  "/about/IMG-20250825-WA0084.jpg",
  "/home/377A6455.jpg",
  "/home/IMG-20250620-WA0019.jpg",
  "/home/IMG-20250825-WA0148.jpg",
  "/about/DSC_0403 copy.jpg",
];

export function AboutDescription() {
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
      <div className="container-max w-full grid grid-cols-1 gap-16 p-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center rounded-2xl"
        >
          <div className="lg:scale-95 flex items-center justify-center">
            <ImageCarousel
              images={images}
              scale
              max_w="max-w-2xl"
              card_height="h-80 md:h-120"
            ></ImageCarousel>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-end justify-center "
        >
          <div className="space-y-8">
            <h3 className="font-extrabold text-primary-900 text-2xl md:text-4xl">
              Our Journey
            </h3>

            <p className="font-medium text-dark  md:text-lg leading-8 md:leading-10">
              {`City of David Tabernacle was birthed in October 2005 in College Park, Maryland, beginning humbly with four families gathering at Paint Branch Elementary School under the leadership of Bishop Joel Njoku-Andrew. From the start, its divine mandate was clear—to bring healing and restoration to a dying world. Over two decades, the ministry has flourished from a local fellowship into an international movement that now spans continents, with thriving branches in Liberia, Ghana, and Nigeria.`}
            </p>

            <p className="font-medium text-dark  md:text-lg leading-8 md:leading-10">
              {`Throughout its journey, City of David Tabernacle has remained a beacon of spiritual renewal and transformation. The church’s mission is centered on restoring people spiritually, mentally, physically, and economically, empowering them to live purposefully and in turn empower others. Through challenges such as the global COVID-19 pandemic, the ministry embraced innovation—expanding virtual services, digital outreach, and entrepreneurial training that reflect its Kingdom-driven vision of excellence and impact.`}
            </p>

            <p className="font-medium text-dark  md:text-lg leading-8 md:leading-10">
              {`As the ministry celebrates twenty years of God’s faithfulness, its legacy is marked by testimonies of families restored, miracles, prophetic fulfillment, and generations walking in divine purpose. The church’s newest chapter includes its fast-growing branch in Owerri, Nigeria, which continues to embody the heartbeat of restoration and empowerment. City of David Tabernacle stands today not merely as a church, but as a mantle and a movement—a living testimony of God’s power to transform lives and nations.`}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
