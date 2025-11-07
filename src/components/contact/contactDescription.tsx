"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  LocationEdit,
  Facebook,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react";

const pastorsData = [
  {
    name: "Bishop Joel Njoku Andrew",
    description: [
      "Bishop Joel Andrew Njoku, the visionary founder of City of David Tabernacle, is a man whose life and ministry are defined by divine calling, prophetic accuracy, and a heart of service. Born in Imo State, Nigeria, into a lineage of preachers, he carries a rich spiritual heritage from his parents, the late Reverends Andrew and Cecilia Njoku, and his uncle Reverend Joseph Omereonye—all seasoned ministers in the Assemblies of God Church. With over forty-five years of active ministry, Bishop Joel Andrew has become a spiritual father, intercessor, and teacher whose impact reaches across nations.",
      "His pursuit of both academic and spiritual excellence led him from Nigeria to the United States, where he studied at Rhema Bible College under Rev. Kenneth Hagin and earned a Master's in Urban Ministry from Oral Roberts University. He also holds business degrees from Calabar Polytechnic and the London School of Business Studies. In Maryland, he established City of David Tabernacle, a prophetic and healing ministry known for miracles, divine revelations, and over 180 fulfilled prophecies. His ministry has witnessed the blind see, the deaf hear, and global events foretold with supernatural precision.",
      "Beyond the pulpit, Bishop Joel Andrew is a psalmist and president of Lily Music Company, having released nine albums that glorify God. Married to Reverend Francisca Andrew and blessed with three children, he embodies humility, generosity, and unwavering devotion. His message remains one of faith, restoration, and God's glory—a consistent call to raise people into their divine destinies and to bring healing to humanity and the nations.",
    ],
    image: "/about/Bishop Glory Encounter Day 10 Picture 1.jpeg",
  },
  {
    name: "Rev. Francisca Njoku Andrew",
    description: [
      "Reverend Francisca Njoku Andrew serves as the Co-Pastor of City of David Tabernacle, bringing a unique blend of spiritual insight and pastoral care to the ministry. With a profound calling to women's ministry and intercessory prayer, she has been instrumental in nurturing spiritual growth and fostering community within the church.",
      "Her educational background includes theological studies and a degree in Business Administration, equipping her with both spiritual wisdom and organizational acumen. As a minister, she is known for her powerful teaching ministry, particularly in the areas of prayer, family life, and spiritual warfare.",
      "Together with Bishop Joel Andrew, she has helped build a ministry that emphasizes healing, deliverance, and spiritual transformation. Her compassionate approach to ministry and dedication to prayer has made her a beloved spiritual mother to many in the congregation and beyond.",
    ],
    image: "/about/PHOTO-2024-07-07-19-11-08 (1).jpg",
  },
];

export function ContactDescription() {
  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max space-y-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-100 flex items-center justify-center bg-dark rounded-2xl overflow-hidden"
          >
            <Image
              src={"/ministry/youth/IMG-20250825-WA0046.jpg"}
              alt={"Contact Image"}
              width={500}
              height={800}
              className="transform h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center lg:items-end justify-center"
          >
            <div className="space-y-5">
              <h3 className="font-extrabold text-primary-900 text-2xl md:text-4xl">
                {`Let's Talk`}
              </h3>
              <p className="font-medium text-dark md:text-lg leading-8 md:leading-10">
                {`God bless you. Reach out to us. We are available 24/7.`}
              </p>

              <div className="">
                <p className="font-bold text-dark  leading-8 md:leading-10">
                  General Enquiries
                </p>

                <p className="font-bold text-primary-900  leading-8 md:leading-10">
                  Email:{" "}
                  <span className="font-medium text-dark">
                    victorychapelmd@gmail.com
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className=" flex flex-col gap-4">
                  <h2 className="font-extrabold leading-5 text-primary-900">
                    Restoration Chapel - USA
                  </h2>

                  <div className="text-sm text-dark flex items-center gap-2">
                    <LocationEdit className="shrink-0 w-6 h-6 text-primary-900" />
                    <p className="max-w-xs">
                      Worship Center - 7953 Annapolis Rd Lanham, MD 20706
                    </p>
                  </div>

                  <div className="text-sm text-dark flex items-center gap-2">
                    <LocationEdit className="shrink-0 w-6 h-6 text-primary-900" />
                    <p className="max-w-xs">
                      Office - 5010 Sunnyside Avenue STE 309 Beltsville, MD
                      20705
                    </p>
                  </div>

                  <div className="text-sm text-dark flex items-center gap-2">
                    <Phone className="w-6 h-6 text-primary-900" />
                    <span>
                      <p>240-965-7558</p>
                      <p>240-601-8936</p>
                      <p>202-763-9291</p>
                    </span>
                  </div>
                </div>

                <div className=" flex flex-col gap-4">
                  <h2 className="font-extrabold leading-5 text-primary-900">
                    Restoration Chapel - Owerri
                  </h2>

                  <div className="text-sm text-dark flex items-center gap-2">
                    <LocationEdit className="shrink-0 w-6 h-6 text-primary-900" />
                    <p className="max-w-xs">
                      Plot 271 Ikenegbu Layout, Beside Fidelity Bank, Ikenegbu,
                      Owerri Imo State.
                    </p>
                  </div>

                  <div className="text-sm text-dark flex items-center gap-2">
                    <Phone className="w-6 h-6 text-primary-900" />
                    <span>
                      <p>+234-803-708-1146</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
