import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./navlinks";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full h-24 flex items-center justify-center fixed top-0 bg-white backdrop-blur-md z-50 border-b border-gray-200">
      <div className="section-padding container-max flex justify-between w-full items-center">
        <Link href={"/"} className=" flex gap-1 md:gap-2 items-center">
          <Image
            src="/codt_logo.png"
            alt="Church Logo"
            width={60}
            height={60}
            className="scale-80 sm:scale-100"
          />

          <div className="text-primary-900 flex flex-col -space-y-1">
            <h2 className="font-extrabold sm:text-2xl">
              City of David Tabernacle
            </h2>
            <p className="text-xs w-[70%] sm:w-auto">
              Bringing Restoration to the Dying World
            </p>
          </div>
        </Link>

        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <Menu size={28} className="text-dark" />
        </div>
      </div>
    </nav>
  );
}
