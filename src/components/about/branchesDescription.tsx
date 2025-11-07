"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ImageCarousel } from "../imageCarousel";
import { MapPin, Phone } from "lucide-react";

const branchData = [
  {
    name: "Restoration Chapel - USA",
    description: `A vibrant assembly focused on restoration through the Word. Worship with us and experience God’s power.`,
    worship_center: "Worship Center - 7953 Annapolis Rd Lanham, MD 20706",
    office: "Office - 5010 Sunnyside Avenue STE 309 Beltsville, MD 20705",
    contact: "240-965-7558  || 240-601-8936 || 202-763-9291",
    image: [
      "/about/IMG-20250825-WA0084.jpg",
      "/branches/usa/IMG-20250621-WA0019.jpg",
      "/branches/usa/IMG-20250825-WA0038.jpg",
      "/branches/usa/IMG-20250825-WA0040.jpg",
      "/branches/usa/IMG-20250825-WA0041.jpg",
      "/branches/usa/IMG-20250825-WA0053.jpg",
      "/branches/usa/IMG-20250825-WA0054.jpg",
      "/branches/usa/IMG-20250825-WA0062.jpg",
      "/branches/usa/IMG-20250825-WA0071.jpg",
      "/branches/usa/IMG-20250825-WA0077.jpg",
      "/branches/usa/IMG-20250825-WA0091.jpg",
      "/branches/usa/IMG-20250825-WA0115.jpg",
      "/branches/usa/IMG-20250825-WA0120.jpg",
      "/branches/usa/IMG-20250825-WA0126.jpg",
      "/branches/usa/IMG-20250825-WA0132.jpg",
      "/branches/usa/IMG-20250825-WA0137.jpg",
      "/branches/usa/IMG-20250825-WA0164.jpg",
      "/branches/usa/PHOTO-2024-04-08-10-18-11 (1).jpg",
      "/branches/usa/PHOTO-2024-04-08-10-18-11.jpg",
      "/branches/usa/PHOTO-2024-04-08-10-18-12 (1).jpg",
      "/branches/usa/PHOTO-2024-04-08-10-18-12.jpg",
      "/branches/usa/PHOTO-2024-04-08-10-20-28 (1).jpg",
      "/branches/usa/PHOTO-2024-04-08-10-20-28.jpg",
      "/branches/usa/PHOTO-2024-04-15-08-44-49.jpg",
      "/branches/usa/PHOTO-2024-04-29-05-08-57.jpg",
      "/branches/usa/PHOTO-2024-04-29-05-08-58.jpg",
      "/branches/usa/PHOTO-2024-04-29-05-28-40.jpg",
      "/branches/usa/PHOTO-2024-05-05-21-41-47.jpg",
      "/branches/usa/PHOTO-2024-05-05-21-41-52.jpg",
      "/branches/usa/PHOTO-2024-05-05-21-42-51.jpg",
      "/branches/usa/PHOTO-2024-07-15-09-37-56.jpg",
    ],
  },
  {
    name: "Restoration Chapel - Owerri",
    description: `A home of healing and renewal where lives are restored daily through prayer and teaching.`,
    worship_center:
      "Worship Center - Plot 271 Ikenegbu Layout, Beside Fidelity Bank, Ikenegbu, Owerri Imo State.",
    contact: "+234-803-708-1146",
    image: [
      "/about/DSC_0403 copy.jpg",
      "/branches/owerri/377A6485.jpg",
      "/branches/owerri/482022098_626839146867861_1731962059769347703_n.jpg",
      "/branches/owerri/482224178_626839153534527_7439771178334540193_n.jpg",
      "/branches/owerri/482323535_627057836845992_5865722903496681953_n.jpg",
      "/branches/owerri/482325770_627063550178754_779582115152396429_n.jpg",
      "/branches/owerri/482960559_628772063341236_5957277558140757349_n.jpg",
      "/branches/owerri/487454320_645338701684572_766348193455105500_n.jpg",
      "/branches/owerri/488619498_648813134670462_8791155646430354832_n.jpg",
      "/branches/owerri/489991783_648813271337115_7307329223824578660_n.jpg",
      "/branches/owerri/537645831_756999367185171_6889450341602241279_n.jpg",
      "/branches/owerri/544973382_767820206103087_5754099654035222295_n.jpg",
      "/branches/owerri/571365000_809992565219184_3176751935919002462_n.jpg",
      "/branches/owerri/571369665_809993311885776_3841402366519441525_n.jpg",
      "/branches/owerri/573278020_809993571885750_6547002695118205892_n.jpg",
    ],
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
      <div className="container-max flex flex-col items-center">
        {branchData.map((branch, idx) => {
          return (
            <div
              key={idx}
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-12 px-4"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className="w-full flex items-center justify-center rounded-2xl"
              >
                <div className="scale-80 sm:scale-90 lg:scale-95 h-80 md:h-120">
                  <ImageCarousel
                    images={branch.image}
                    scale
                    max_w="max-w-xs sm:max-w-md md:max-w-lg "
                    card_height="h-80 md:h-120 w-100"
                  ></ImageCarousel>
                </div>
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
                  <h3 className="font-extrabold text-primary-900 text-2xl md:text-4xl">
                    {branch.name}
                  </h3>

                  <p className="font-medium text-dark text-lg md:text-xl leading-8 md:leading-10">
                    {branch.description}
                  </p>

                  <div className=" space-y-4">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-primary-900 shrink-0"></MapPin>
                      {branch.worship_center}
                    </p>

                    {branch.office && (
                      <p className="flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-primary-900 shrink-0"></MapPin>
                        {branch.office}
                      </p>
                    )}

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
