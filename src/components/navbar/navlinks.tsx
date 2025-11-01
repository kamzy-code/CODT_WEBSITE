"use client";

import Link from "next/link";
import { useState, } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export function NavLinks() {
  const pathname = usePathname();
    
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Track hovered menu

  const handleMouseEnter = (menu: string) => {
    setHoveredLink(menu);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="flex items-center justify-center gap-6 xl:gap-8 ">
      <Link
        href={"/"}
       
        className={`${pathname === "/" ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
      >
        Home
      </Link>

      <div
        className=" flex flex-col relative"
        onMouseEnter={() => handleMouseEnter("the-church")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`${pathname.startsWith("/the-church") ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
        >
          The Church
          <ChevronDown className="inline mb-1 ml-1 w-4 h-4" />
        </button>

        {hoveredLink === "the-church" && (
          <div className="bg-white border border-dark rounded-md flex flex-col absolute top-full left-0 shadow-lg w-50">
            <Link
              href={"/the-church/about"}
              className={`${pathname === "/the-church/about" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              About Us
            </Link>

            <Link
              href={"/the-church/branches"}
              className={`${pathname === "/the-church/branches" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Branches
            </Link>

            <Link
              href={"/the-church/pastor"}
              className={`${pathname === "/the-church/pastor" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Pastor
            </Link>
          </div>
        )}
      </div>

      <Link
        href={"/give"}
        className={`${pathname === "/give" ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
      >
        Give
      </Link>

      <div
        className=" flex flex-col relative"
        onMouseEnter={() => handleMouseEnter("ministries")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`${pathname.startsWith("/ministries") ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
        >
          Ministries
          <ChevronDown className="inline mb-1 ml-1 w-4 h-4" />
        </button>

        {hoveredLink === "ministries" && (
          <div className="bg-white border border-dark rounded-md flex flex-col absolute top-full left-0 shadow-lg w-50">
            <Link
              href={"/ministries/men"}
              className={`${pathname === "/ministries/men" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Men Ministry
            </Link>

            <Link
              href={"/ministries/women"}
              className={`${pathname === "/ministries/women" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Women Ministry
            </Link>

            <Link
              href={"/ministries/youth"}
              className={`${pathname === "/ministries/youth" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Youth Ministry
            </Link>

            <Link
              href={"/ministries/children"}
              className={`${pathname === "/ministries/children" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Children Ministry
            </Link>
          </div>
        )}
      </div>

      <div
        className=" flex flex-col relative"
        onMouseEnter={() => handleMouseEnter("resources")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`${pathname.startsWith("/resources") ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
        >
          Resources
          <ChevronDown className="inline mb-1 ml-1 w-4 h-4" />
        </button>

        {hoveredLink === "resources" && (
          <div className="bg-white border border-dark rounded-md flex flex-col absolute top-full left-0 shadow-lg w-50">
            <Link
              href={"/resources/events"}
              className={`${pathname === "/resources/events" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Events
            </Link>

            <Link
              href={"/resources/sermons"}
              className={`${pathname === "/resources/sermons" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Sermons
            </Link>

            <Link
              href={"/resources/prayer-requests"}
              className={`${pathname === "/resources/prayer-requests" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Prayer Requests
            </Link>

            <Link
              href={"/resources/forms"}
              className={`${pathname === "/resources/forms" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Forms
            </Link>
          </div>
        )}
      </div>

      <Link
        href={"/contact"}
        className={`${pathname === "/contact" ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
      >
        Contact
      </Link>
    </div>
  );
}
