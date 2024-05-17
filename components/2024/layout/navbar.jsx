"use client";
import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { Cross1Icon, HamburgerMenuIcon, ChevronDownIcon} from "@radix-ui/react-icons"
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
                        <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <Cross1Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {NavbarLinks.map((link, i) => (
                                    link?.subLinks?.length ? (
                                        <Disclosure as="div" className="-mx-3" key={i}>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                        {link.label}
                                                        <ChevronDownIcon
                                                            className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`}
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 space-y-2">
                                                        {link.subLinks.map((subLink, j) => (
                                                            <Disclosure.Button
                                                                key={j}
                                                                as="a"
                                                                href={subLink.path}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                            >
                                                                {subLink.label}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ) : (
                                        <a
                                            href={link.path}
                                            key={i}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {link.label}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
