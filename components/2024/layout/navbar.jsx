"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/ui/logo";
const NavbarLinks = [
    // {
    //   path: "/2024/schedule",
    //   label: "Schedule",
    // },
    {
        path: "/2024/sponsors",
        label: "Sponsors",
    },
    {
        path: "#",
        label: "Speakers",
        subLinks: [
            {
                path: "/2024/speakers",
                label: "PyCon 2024 Speakers",
            },
        ],
    },
    {
        path: "#",
        label: "Diversity",
        subLinks: [
            {
                path: "/2024/financial-aid",
                label: "Financial Aid",
            },
            {
                path: "/2024/travel-aid",
                label: "Travel Aid",
            },
        ],
    },
    {
        path: "#",
        label: "Attendee Guide",
        subLinks: [
            {
                path: "/2024/travel-guide",
                label: "Travel Guide",
            },
            {
                path: "/2024/code-of-conduct",
                label: "Code of Conduct",
            },
            {
                path: "/2024/health-and-safety",
                label: "Health and Safety",
            },
            // {
            //   path: "/contact",
            //   label: "Contact Us",
            // },
        ],
    },
    // {
    //   path: "#",
    //   label: "Communities",
    //   subLinks: [
    //     {
    //       path: "/2024/django-girls",
    //       label: "Django Girls",
    //     },
    //   ],
    // },
];

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Logo />
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {NavbarLinks.map((item) => (
                        <a key={item.label} href={item.path} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    <a href="#"
                        className="border-black hidden md:block  px-3 py-2 border rounded-lg">
                        Get Early Bird Ticket
                    </a>
                    <a
                        href="#"
                        className="rounded-lg bg-black px-3 py-2 font-semibold text-white"
                    >
                        Sponsor
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
