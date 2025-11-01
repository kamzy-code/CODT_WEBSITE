import Link from "next/link";
import Image from "next/image";
import {
  LocationEdit,
  Facebook,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full section-padding bg-dark">
        <div className="container-max flex flex-col gap-8">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col gap-8">
          <Link href={"/"} className=" flex gap-1 md:gap-2 items-center">
            <Image
              src="/codt_logo.png"
              alt="Church Logo"
              width={60}
              height={60}
              className="scale-80 sm:scale-100 p-1 flex items-center justify-center bg-white rounded-full"
            />

            <div className="text-white flex flex-col gap-1">
              <h2 className="font-extrabold text-xl xl:text-2xl leading-5">
                City of David Tabernacle
              </h2>
              <p className="text-xs  xl:text-sm w-[70%] sm:w-auto">
                Bringing Restoration to the Dying World
              </p>
            </div>
          </Link>

          <h2 className="font-extrabold text-xl xl:text-2xl leading-5 text-primary-200 uppercase">
            Stay Connected!
          </h2>
        </div>

        <div className=" flex flex-col gap-4">
          <h2 className="font-extrabold leading-5 text-white">
            Victory Chapel
          </h2>

          <div className="text-sm text-white flex items-center gap-2">
            <LocationEdit className="w-6 h-6 text-primary-200" />
            <p className="max-w-xs">Address: 7953 Annapolis Rd Lanham, MD 20706</p>
          </div>

          <div className="text-sm text-white flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary-200" />
            <span>
              <p>240-601-8936</p>
              <p>202-763-9291</p>
            </span>
          </div>

          <div className="text-sm text-white flex items-center gap-2">
            <Link href={"/"} target="_blank">
              <Facebook className="w-6 h-6 text-primary-200" />
            </Link>

            <Link href={"/"} target="_blank">
              <Youtube className="w-6 h-6 text-primary-200" />
            </Link>

            <Link href={"/"} target="_blank">
              <Instagram className="w-6 h-6 text-primary-200" />
            </Link>
          </div>
        </div>
       
        <div className=" flex flex-col gap-4">
          <h2 className="font-extrabold leading-5 text-white">
            Restoration Chapel
          </h2>

          <div className="text-sm text-white flex items-center gap-2">
            <LocationEdit className="w-6 h-6 text-primary-200" />
            <p className="max-w-xs">Plot 271 Ikenegbu Layout, Beside Fidelity Bank, Ikenegbu, Owerri Imo State.</p>
          </div>

          <div className="text-sm text-white flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary-200" />
            <span>
              <p>+234-803-708-1146</p>
            </span>
          </div>

          <div className="text-sm text-white flex items-center gap-2">
            <Link href={"/"} target="_blank">
              <Facebook className="w-6 h-6 text-primary-200" />
            </Link>

            <Link href={"/"} target="_blank">
              <Youtube className="w-6 h-6 text-primary-200" />
            </Link>

            <Link href={"/"} target="_blank">
              <Instagram className="w-6 h-6 text-primary-200" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="border-b w-full border-b-gray-600"></div>
        <p className="text-white text-sm">Copyright 2025 City of David Tabernacle.</p>
      </div>

        </div>
    </footer>
  );
}
