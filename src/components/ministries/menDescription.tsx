"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageCarousel } from "../imageCarousel";

const menImages = [
  "/ministry/men/DSC_0575 copy.jpg",
  "/ministry/men/DSC_0599 copy.jpg",
  "/ministry/men/IMG-20250620-WA0013.jpg",
  "/ministry/men/IMG-20250620-WA0018.jpg",
  "/ministry/men/IMG-20250620-WA0019.jpg",
  "/ministry/men/IMG-20250620-WA0023.jpg",
  "/ministry/men/IMG-20250621-WA0005.jpg",
  "/ministry/men/PHOTO-2024-06-16-12-13-30 (1).jpg",
  "/ministry/men/PHOTO-2024-06-16-12-13-30.jpg",
  "/ministry/men/PHOTO-2024-06-16-13-14-28 (1).jpg",
  "/ministry/men/PHOTO-2024-06-16-13-14-28.jpg",
  "/ministry/men/PHOTO-2024-06-16-14-14-34.jpg",
  "/ministry/men/PHOTO-2024-06-16-14-14-35 (1).jpg",
  "/ministry/men/PHOTO-2024-06-16-14-14-35.jpg",
];

export function MenDescription() {
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
      <div className="container-max w-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-12 px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center rounded-2xl"
        >
          <div className="scale-80 sm:scale-90 lg:scale-95 h-80 md:h-120">
            <ImageCarousel
              images={menImages}
              scale
              max_w="max-w-xs sm:max-w-md md:max-w-lg"
              card_height="h-80 md:h-120"
            ></ImageCarousel>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center lg:items-end justify-center"
        >
          <div className="space-y-5">
            <h3 className="font-extrabold text-primary-900 text-lg md:text-2xl">
              Welcome to Men Ministry
            </h3>

            <div className="space-y-5">
              <p className="font-medium text-dark ">
                {`A welcoming community for men to grow in faith, fellowship, and service through Bible study, mentorship, outreach, and regular events that support spiritual growth and practical discipleship.`}
              </p>

              <p className="font-medium text-dark ">
                We meet weekly for Bible study and prayer, providing a safe
                space to ask questions and deepen your understanding of
                Scripture.
              </p>

              <p className="font-medium text-dark ">
                Through mentorship and small groups, members encourage one
                another in personal growth, accountability, and leadership
                development.
              </p>

              <p className="font-medium text-dark ">
                We also serve the wider community with outreach projects,
                service days, and family-friendly events — everyone is welcome
                to join and get involved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
