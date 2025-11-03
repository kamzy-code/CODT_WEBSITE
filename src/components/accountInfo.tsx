"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Copy } from "lucide-react";

const giveData = [
  { name: "PayPal", account: "Bishop Joel", icon: "/give/paypal.png" },
  { name: "Zelle", account: "(240) 991-2698", icon: "/give/zelle.png" },
  {
    name: "Givelify",
    account: "City of David Tabernacle",
    icon: "/give/givelify.png",
    url: "https://giv.li/vo5fqp",
  },
  {
    name: "Zenith Bank - Naira",
    account: "1019742767",
    acct_name: "City of David Tabernacle",
    icon: "/give/Zenith.png",
  },
];

export function AccountInfo() {
  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max flex flex-col gap-16 justify-center py-12 px-8">
        <div className="space-y-6">
          <h3 className="font-extrabold text-2xl md:text-4xl text-dark">
            Tithe, Offering, Seed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {giveData.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="w-70 rounded-2xl overflow-hidden group bg-primary-50 flex flex-col gap-4"
                >
                  <div className="flex item-center justify-center h-50">
                    <div className="flex items-center justify-center h-full w-full">
                      <Image
                        src={data.icon}
                        alt={data.name}
                        width={700}
                        height={700}
                        className="h-20 w-20 "
                      />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex w-full justify-between border-t border-t-dark/20">
                    <div>
                      <h3 className="font-extrabold text-primary-900 md:text-xl">
                        {data.name}
                      </h3>
                      <p className="font-medium text-dark md:text-lg">
                        {`A/C: ${data.account}`}
                      </p>
                      {data.acct_name && (
                        <p className="font-medium text-dark md:text-lg">
                          {`A/C Name: ${data.acct_name}`}
                        </p>
                      )}
                      {data.url && (
                        <Link
                          href={data.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-600 underline md:text-lg"
                        >
                          Give Here
                        </Link>
                      )}
                    </div>
                    <div>
                      <button
                        className="mt-4 flex items-center gap-2 px-4 py-2 text-primary-900 hover:text-primary-600 transition"
                        onClick={() => {
                          navigator.clipboard.writeText(data.account);
                        }}
                      >
                        <Copy className="h-4 w-4"></Copy>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-extrabold text-2xl md:text-4xl text-dark">
            Building Project
          </h3>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * 5 }}
            className="rounded-2xl overflow-hidden group w-70 bg-primary-50 flex flex-col gap-4"
          >
            <div className="flex item-center justify-center h-50">
              <div className="flex items-center justify-center h-full w-full">
                <Image
                  src={"/give/zelle.png"}
                  alt={"Zelle"}
                  width={700}
                  height={700}
                  className="h-20 w-20 "
                />
              </div>
            </div>
            <div className="p-4 flex-1 flex w-full justify-between border-t border-t-dark/20">
              <div>
                <h3 className="font-extrabold text-primary-900 md:text-xl">
                  {"Zelle"}
                </h3>
                <p className="font-medium text-dark md:text-lg">
                  {`A/C: (227) 218-4493`}
                </p>
              </div>
              <div>
                <button
                  className="mt-4 flex items-center gap-2 px-4 py-2 text-primary-900 hover:text-primary-600 transition"
                  onClick={() => {
                    navigator.clipboard.writeText("(227) 218-4493");
                  }}
                >
                  <Copy className="h-4 w-4"></Copy>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
