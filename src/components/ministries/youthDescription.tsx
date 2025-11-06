"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageCarousel } from "../imageCarousel";

const youthImages = [
  "/ministry/youth/WhatsApp Image 2025-11-06 at 10.34.08.jpeg",
  "/ministry/youth/IMG-20250825-WA0004.jpg",
  "/ministry/youth/IMG-20250825-WA0033.jpg",
  "/ministry/youth/IMG-20250825-WA0037.jpg",
  "/ministry/youth/377A6570.jpg",
  "/ministry/youth/377A6572.jpg",
  "/ministry/youth/DSC_0249 copy.jpg",
  "/ministry/youth/IMG-20250825-WA0005.jpg",
  "/ministry/youth/IMG-20250825-WA0046.jpg",
  "/ministry/youth/IMG-20250825-WA0093.jpg",
  "/ministry/youth/DSC_0253 copy.jpg",
  "/ministry/youth/DSC_0805 copy.jpg",
  "/ministry/youth/PHOTO-2024-03-24-23-22-24.jpg",
  "/ministry/youth/PHOTO-2024-04-08-10-18-11.jpg",
  "/ministry/youth/PHOTO-2024-04-15-08-44-49.jpg",
  "/ministry/youth/IMG-20250825-WA0014.jpg",
  "/ministry/youth/PHOTO-2024-04-21-22-12-35.jpg",
  "/ministry/youth/PHOTO-2024-06-24-16-16-38.jpg",
  "/ministry/youth/PHOTO-2024-07-07-19-11-15.jpg",
  "/ministry/youth/PHOTO-2024-07-15-09-37-58.jpg",
  "/ministry/youth/PHOTO-2024-07-15-09-38-00.jpg",
];

export function YouthDescription() {
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
              images={youthImages}
              scale
              max_w="max-w-xs sm:max-w-md md:max-w-lg "
              card_height="h-80 md:h-120 w-100"
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
              Welcome to Youth Ministry
            </h3>

            <div className="space-y-5">
              <p className="font-medium text-dark ">
                {`Our youth ministry is a dynamic community where young people are encouraged to grow in their faith, discover their identity in Christ, and build authentic relationships in a safe and welcoming environment.`}
              </p>

              <p className="font-medium text-dark ">
                {`We gather weekly for worship nights, Bible study, and small group discussions that make Scripture relevant to everyday life, combining teaching with fun activities and meaningful fellowship.`}
              </p>

              <p className="font-medium text-dark ">
                {`Through mentorship and discipleship, youth are paired with leaders who invest in their spiritual growth, help develop leadership skills, and support them as they navigate challenges and celebrate milestones.`}
              </p>

              <p className="font-medium text-dark ">
                {`Our ministry also includes service projects, retreats, camps, and community outreach that equip young people to serve others, grow in faith, and share God’s love in tangible ways.`}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
