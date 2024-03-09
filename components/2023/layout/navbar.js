"use client";

import Image from "next/image";
import Link from "next/link";
import { QUICKET_LINK } from "@/2023/utils/constants";
import { useState } from "react";
import Logo from "../../ui/logo";

export default function Navbar() {
  const NavbarLinks = [
    {
      path: "/2023/schedule",
      label: "Schedule",
    },
    {
      path: "/2023/sponsors",
      label: "Sponsors",
    },
    {
      path: "/2023/financial-aid",
      label: "Financial Aid",
    },
    {
      path: "#",
      label: "Speakers",
      subLinks: [
        {
          path: "/2023/keynote-speakers",
          label: "Keynote Speakers",
        },
        {
          path: "/2023/speakers",
          label: "All Speakers",
        },
      ],
    },
    {
      path: "#",
      label: "Attendee Guide",
      subLinks: [
        {
          path: "/2023/travel-guide",
          label: "Travel Guide",
        },
        {
          path: "/2023/code-of-conduct",
          label: "Code of Conduct",
        },
        {
          path: "/2023/health-and-safety",
          label: "Health and Safety",
        },
        // {
        //   path: "/contact",
        //   label: "Contact Us",
        // },
      ],
    },
    {
      path: "#",
      label: "Communities",
      subLinks: [
        {
          path: "/2023/django-girls",
          label: "Django Girls",
        },
      ],
    },
  ];

  const TICKET_BTN_LABEL = "Get Ticket";
  const SHOP_ACTION_LABEL = "Shop";
  const SHOP_ACTION_LINK = "/2023/shop";

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

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
            {NavbarLinks.map(({ path, label, subLinks }, index) => (
              <div key={index} className="relative group">
                {subLinks ? (
                  <div
                    className="flex items-center focus:outline-none"
                    onMouseEnter={() => toggleDropdown(index)}
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <a href={path}>{label}</a>
                    <svg
                      className={`w-4 h-4 ml-1 text-gray-700 transform ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    {openDropdownIndex === index && (
                      <div className="absolute mt-1 top-5 space-y-1 bg-white border border-gray-300 rounded-md">
                        {subLinks.map(({ path, label }, subIndex) => (
                          <a
                            key={subIndex}
                            href={path}
                            className="relative block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={path}>{label}</a>
                )}
              </div>
            ))}
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
            {NavbarLinks.map(({ path, label, subLinks }, index) => {
              return (
                <div key={index}>
                  {subLinks ? (
                    <div className="border-b border-gray-300">
                      <button className="w-full text-left px-4 py-2 text-white focus:outline-none">
                        {label}
                      </button>
                      <div className="space-y-1 bg-white">
                        {subLinks.map(({ path, label }, subIndex) => (
                          <a
                            key={subIndex}
                            href={path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={path}
                      className="block px-4 py-2 text-white hover:bg-pyconug-darkBlue"
                    >
                      {label}
                    </a>
                  )}
                </div>
              );
            })}
            <Link
              href={SHOP_ACTION_LINK}
              className="block px-4 py-2 text-white hover:bg-pyconug-darkBlue"
            >
              {SHOP_ACTION_LABEL}
            </Link>
            <Link
              href={QUICKET_LINK}
              className="block px-4 py-2 text-white hover:bg-pyconug-darkBlue"
            >
              {TICKET_BTN_LABEL}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
