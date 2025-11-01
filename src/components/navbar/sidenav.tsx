"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type MenuKey = "the_church" | "ministries" | "resources";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};


export function SideNav({ isOpen, onClose }: Props) {
  const pathname = usePathname();

  const [openedSubMenus, setOpenedSubMenus] = useState<
    Record<MenuKey, boolean>
  >({
    the_church: false,
    ministries: false,
    resources: false,
  });

  const handleSubMenuToggle = (menu: MenuKey) => {
    setOpenedSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
    <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

    <aside className="w-64 h-full bg-white shadow-md fixed left-0 top-0 z-40  ">
      <div className="px-4 py-6 mt-24 h-full overflow-y-auto">
        <nav>
          <div className="flex flex-col gap-2">
            <Link
              href={"/"}
              onClick={onClose}
              className={`${pathname === "/" ? "bg-primary-600 text-white " : "text-dark"} hover:bg-primary-600 hover:text-white p-2`}
            >
              Home
            </Link>

            <div className=" flex flex-col gap-4">
              <button
                onClick={() => handleSubMenuToggle("the_church")}
                className={`${pathname.startsWith("/the-church") ? "bg-primary-600 text-white " : "text-dark"} hover:bg-primary-600 hover:text-white  flex items-center p-2`}
              >
                The Church
                <ChevronDown className="inline mb-1 ml-1 w-4 h-4" />
              </button>

              {openedSubMenus.the_church && (
                <div className="flex flex-col px-5 gap-4">
                  <Link
                    href={"/the-church/about"}
                    onClick={onClose}
                    className={`${pathname === "/the-church/about" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    About Us
                  </Link>

                  <Link
                    href={"/the-church/branches"}
                    onClick={onClose}
                    className={`${pathname === "/the-church/branches" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Branches
                  </Link>

                  <Link
                    href={"/the-church/pastor"}
                    onClick={onClose}
                    className={`${pathname === "/the-church/pastor" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Pastor
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={"/give"}
              onClick={onClose}
              className={`${pathname === "/give" ? "bg-primary-600 text-white " : "text-dark"} hover:bg-primary-600 hover:text-white p-2`}
            >
              Give
            </Link>

            <div className=" flex flex-col gap-4">
              <button
                onClick={() => handleSubMenuToggle("ministries")}
                className={`${pathname.startsWith("/ministries") ? "bg-primary-600 text-white " : "text-dark"} hover:bg-primary-600 hover:text-white  flex items-center p-2`}
              >
                Ministries
                <ChevronDown className="inline ml-1 w-4 h-4" />
              </button>

              {openedSubMenus.ministries && (
                <div className="flex flex-col px-5 gap-4">
                  <Link
                    href={"/ministries/men"}
                    onClick={onClose}
                    className={`${pathname === "/ministries/men" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white `}
                  >
                    Men Ministry
                  </Link>

                  <Link
                    href={"/ministries/women"}
                    onClick={onClose}
                    className={`${pathname === "/ministries/women" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Women Ministry
                  </Link>

                  <Link
                    href={"/ministries/youth"}
                    onClick={onClose}
                    className={`${pathname === "/ministries/youth" ? "text-primary-600" : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Youth Ministry
                  </Link>

                  <Link
                    href={"/ministries/children"}
                    onClick={onClose}
                    className={`${pathname === "/ministries/children" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white `}
                  >
                    Children Ministry
                  </Link>
                </div>
              )}
            </div>

            <div className=" flex flex-col gap-4">
              <button
                onClick={() => handleSubMenuToggle("resources")}
                className={`${pathname.startsWith("/resources") ? "bg-primary-600 text-white " : "text-dark"} hover:bg-primary-600 hover:text-white  flex items-center p-2`}
              >
                Resources
                <ChevronDown className="inline mb-1 ml-1 w-4 h-4" />
              </button>

              {openedSubMenus.resources && (
                <div className="flex flex-col px-5 gap-4">
                  <Link
                    href={"/resources/events"}
                    onClick={onClose}
                    className={`${pathname === "/resources/events" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Events
                  </Link>

                  <Link
                    href={"/resources/sermons"}
                    onClick={onClose}
                    className={`${pathname === "/resources/sermons" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Sermons
                  </Link>

                  <Link
                    href={"/resources/prayer-requests"}
                    onClick={onClose}
                    className={`${pathname === "/resources/prayer-requests" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Prayer Requests
                  </Link>

                  <Link
                    href={"/resources/forms"}
                    onClick={onClose}
                    className={`${pathname === "/resources/forms" ? "text-primary-600 " : "text-dark"} hover:bg-primary-900 hover:text-white`}
                  >
                    Forms
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={"/contact"}
              onClick={onClose}
              className={`${pathname === "/contact" ? "bg-primary-600 text-white " : "text-dark"} hover:bg-primary-600 hover:text-white p-2 mb-40`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </aside>
    </>
  );
}
