"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import { QUICKET_LINK } from "@/utils/constants";
import { useState } from "react";

export default function Navbar() {
  const NavbarLinks = [
    {
      path: "/speakers",
      label: "Speakers",
    },
    {
      path: "/sponsors",
      label: "Sponsors",
    },
    {
      path: "/code-of-conduct",
      label: "Code of Conduct",
    },
    {
      path: "/financial-aid",
      label: "Financial Aid",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  const SESSIONIZE_LINK = "https://sessionize.com/pycon-uganda";
  const TICKET_BTN_LABEL = "Get Ticket";
  const SHOP_ACTION_LABEL = "Shop";
  const SHOP_ACTION_LINK = "/shop";

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="mx-[6%] my-2">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Side Menu - For smaller devices */}
          <div className="md:hidden flex items-center">
            <button
              className="mr-2 text-gray-700 focus:outline-none"
              onClick={toggleSideMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* For larger devices */}
          <div className="md:flex space-x-4 hidden">
            {NavbarLinks.map(({ path, label }, index) => {
              return (
                <a key={index} href={path}>
                  {label}
                </a>
              );
            })}
            <Link
              className="border-black hidden md:block  px-6 py-1 border rounded-lg"
              href={SHOP_ACTION_LINK}
            >
              {SHOP_ACTION_LABEL}
            </Link>
            <Link
              className="bg-black text-white px-6 py-1 border rounded-lg"
              href={QUICKET_LINK}
            >
              {TICKET_BTN_LABEL}
            </Link>
          </div>

          {/* Side Menu Links - For smaller devices */}
          <div
            className={`${
              isSideMenuOpen ? "block" : "hidden"
            } md:hidden absolute bg-pyconug-lightBlue text-white top-20 right-0`}
          >
            {NavbarLinks.map(({ path, label }, index) => {
              return (
                <a key={index} href={path} className="block px-4 py-2">
                  {label}
                </a>
              );
            })}
            <Link
              href={SHOP_ACTION_LINK}
              className="block px-4 py-2 border-gray-300"
            >
              {SHOP_ACTION_LABEL}
            </Link>
            <Link
              href={QUICKET_LINK}
              className="block px-4 py-2 border-gray-300"
            >
              {TICKET_BTN_LABEL}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


