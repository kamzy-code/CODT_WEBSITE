"use client"

import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./navlinks";
import { Menu } from "lucide-react";
import { SideNav } from "./sidenav";
import { useState } from "react";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="w-full h-24 flex items-center justify-center fixed top-0 bg-white backdrop-blur-md z-50 border-b border-gray-200">
      <div className="section-padding container-max flex justify-between w-full items-center">
        <Link href={"/"} className=" flex gap-1 md:gap-2 items-center " onClick={()=>setIsOpen(false)}>
          <Image
            src="/codt_logo.png"
            alt="Church Logo"
            width={60}
            height={60}
            className="scale-80 sm:scale-100"
          />

          <div className="text-primary-900 flex flex-col">
            <h2 className="font-extrabold text-lg lg:text-2xl leading-6">
              City of David Tabernacle
            </h2>
            <p className="text-sm  lg:text-lg w-[70%] sm:w-auto">
              Home of Restoration
            </p>
          </div>
        </Link>

        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <Menu size={28} className="text-dark" onClick={()=> setIsOpen(!isOpen)} />
        </div>
      </div>
    </nav>

<div className=" lg:hidden">

    <SideNav isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
</div>
    </>
  );
}
