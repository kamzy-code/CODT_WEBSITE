"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Track hovered menu

  const handleMouseEnter = (menu: string) => {
    setHoveredLink(menu);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="flex items-center justify-center gap-8">
      <Link
        href={"/"}
        className={`${activeLink === "/" ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
      >
        Home
      </Link>

      <div
        className=" flex flex-col relative"
        onMouseEnter={() => handleMouseEnter("the-church")}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={"/"}
          className={`${activeLink.startsWith("/the-church") ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
        >
          The Church
        </Link>

        {hoveredLink === "the-church" && (
          <div className="bg-white border border-dark rounded-md flex flex-col absolute top-full left-0 shadow-lg w-50">
            <Link
              href={"/the-church/about-us"}
              className={`${activeLink === "/the-church/about-us" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              About Us
            </Link>

            <Link
              href={"/the-church/branches"}
              className={`${activeLink === "/the-church/branches" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Branches
            </Link>

            <Link
              href={"/the-church/pastor"}
              className={`${activeLink === "/the-church/pastor" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Pastor
            </Link>
          </div>
        )}
      </div>

      <Link
        href={"/"}
        className={`${activeLink === "/give" ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
      >
        Give
      </Link>

      <div
        className=" flex flex-col relative"
        onMouseEnter={() => handleMouseEnter("ministries")}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={"/ministries"}
          className={`${activeLink.startsWith("/ministries") ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
        >
          Ministries
        </Link>

        {hoveredLink === "ministries" && (
          <div className="bg-white border border-dark rounded-md flex flex-col absolute top-full left-0 shadow-lg w-50">
            <Link
              href={"/ministries/men"}
              className={`${activeLink === "/ministries/men" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Men Ministry
            </Link>

            <Link
              href={"/ministries/women"}
              className={`${activeLink === "/ministries/women" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Women Ministry
            </Link>

            <Link
              href={"/ministries/youth"}
              className={`${activeLink === "/ministries/youth" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Youth Ministry
            </Link>

            <Link
              href={"/ministries/children"}
              className={`${activeLink === "/ministries/children" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
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
        <Link
          href={"/resources"}
          className={`${activeLink.startsWith("/resources") ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
        >
          Resources
        </Link>

        {hoveredLink === "resources" && (
          <div className="bg-white border border-dark rounded-md flex flex-col absolute top-full left-0 shadow-lg w-50">
            <Link
              href={"/resources/events"}
              className={`${activeLink === "/resources/events" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Events
            </Link>

            <Link
              href={"/resources/sermons"}
              className={`${activeLink === "/resources/sermons" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Sermons
            </Link>

            <Link
              href={"/resources/prayer-requests"}
              className={`${activeLink === "/resources/prayer-requests" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Prayer Requests
            </Link>

            <Link
              href={"/resources/forms"}
              className={`${activeLink === "/resources/forms" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white p-4`}
            >
              Forms
            </Link>
          </div>
        )}
      </div>

      <Link
        href={"/"}
        className={`${activeLink === "/contact" ? "text-primary-600 border-b " : "text-dark"} hover:text-primary-600`}
      >
        Contact
      </Link>
    </div>
  );
}
