"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CardData = [
  {
    name: "Min. Chidozie Anyanwu",
    img: "/home/IMG-20250620-WA0019.jpg",
    testimony: "Through CODT I have experienced tremendous growth in my spiritual life. The teachings and fellowship have helped me develop a deeper understanding of God's word.",
  },
  {
    name: "Min. Carson Akaolisa",
    img: "/home/IMG-20250825-WA0148.jpg",
    testimony: "Being part of CODT has been a life-changing experience. The community here has helped me grow both spiritually and personally, providing support and guidance.",
  },
  {
    name: "Mrs. Joyce Agbadu",
    img: "/home/PHOTO-2024-04-08-10-20-28 (1).jpg",
    testimony: "CODT has been a blessing to my family. The biblical teachings and warm fellowship have created a nurturing environment for spiritual growth and development.",
  },
  {
    name: "Miss. Ruth Neche",
    img: "/home/DSC_0189 copy.jpg",
    testimony: "I found my spiritual home in CODT. The genuine love and care shown by the community, coupled with sound biblical teaching, has helped strengthen my faith journey.",
  },
];

export function StoriesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {CardData.map((card, index) => {
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="rounded-2xl group bg-white p-8 flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 w-full">
              <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.name}
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <h2 className="font-bold text-primary-900">{card.name}</h2>
            </div>

            <div>
              <p>{`"${card.testimony}"`}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
