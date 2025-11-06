import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { FaTiktok, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

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
                <h2 className="font-extrabold text-lg lg:text-2xl leading-5">
                  City of David Tabernacle
                </h2>
                <p className="text-sm lg:text-lg w-[70%] sm:w-auto">
                  Home of Restoration
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
              <MapPin className="w-6 h-6 text-primary-200" />
              <p className="max-w-xs">
                Worship Center - 7953 Annapolis Rd Lanham, MD 20706
              </p>
            </div>

            <div className="text-sm text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary-200" />
              <p className="max-w-xs">
                Office - 7953 Annapolis Rd Lanham, MD 20706
              </p>
            </div>

            <div className="text-sm text-white flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary-200" />
              <span>
                <p>240-965-7558</p>
              </span>
            </div>

            <div className="text-sm text-white flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary-200" />
              <span>
                <p>Other Contacts</p>
                <p>240-601-8936</p>
                <p>202-763-9291</p>
              </span>
            </div>

            <div className="text-sm text-white flex items-center gap-2">
              <Link
                href={"https://www.facebook.com/share/17XL1mMWt6/"}
                target="_blank"
              >
                <FaFacebook className="w-6 h-6 text-primary-200" />
              </Link>

              <Link
                href={"https://www.youtube.com/@victorychapelmd_cod"}
                target="_blank"
              >
                <FaYoutube className="w-6 h-6 text-primary-200" />
              </Link>

              <Link
                href={
                  "https://www.instagram.com/cityofdavidtabernacle?igsh=MTk2NW9rZng5dzBq"
                }
                target="_blank"
              >
                <FaInstagram className="w-6 h-6 text-primary-200" />
              </Link>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            <h2 className="font-extrabold leading-5 text-white">
              Restoration Chapel
            </h2>

            <div className="text-sm text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary-200" />
              <p className="max-w-xs">
                Plot 271 Ikenegbu Layout, Beside Fidelity Bank, Ikenegbu, Owerri
                Imo State.
              </p>
            </div>

            <div className="text-sm text-white flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary-200" />
              <span>
                <p>+234-803-708-1146</p>
              </span>
            </div>

            <div className="text-sm text-white flex items-center gap-2">
              <Link
                href={"https://www.facebook.com/share/1CnefnRZEy/"}
                target="_blank"
              >
                <FaFacebook className="w-6 h-6 text-primary-200" />
              </Link>

              <Link
                href={"https://www.youtube.com/@victorychapelmd_cod"}
                target="_blank"
              >
                <FaYoutube className="w-6 h-6 text-primary-200" />
              </Link>

              <Link
                href={
                  "https://www.tiktok.com/@cityofdavidtabernacle?_r=1&_d=edc962904ebf2m&sec_uid=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&share_author_id=7483171134293607430&sharer_language=en&source=h5_m&u_code=ejai5i3hfhlbi8&timestamp=1762434878&user_id=7483171134293607430&sec_user_id=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7534814119968851726&share_link_id=486c458e-0fdc-40a0-9182-a37cb2e3d071&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1"
                }
                target="_blank"
              >
                <FaTiktok className="w-6 h-6 text-primary-200" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="border-b w-full border-b-gray-600"></div>
          <p className="text-white text-sm">
            Copyright 2025 City of David Tabernacle.
          </p>
        </div>
      </div>
    </footer>
  );
}
