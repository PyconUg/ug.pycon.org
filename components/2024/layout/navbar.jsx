"use client";
import { useState, Fragment } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  ChevronDownIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";
import Logo from "@/components/ui/logo";
import {
  BanknotesIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  ShieldExclamationIcon,
  TruckIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Banner from "@/components/banner";
import { PYCONUGANDA_PROSPECTUS_2024 } from "@/2024/utils/constants";
const NavbarLinks = [
  // {
  //   path: "/2024/schedule",
  //   label: "Schedule",
  // },
  {
    path: "#",
    label: "Sponsors",
    subLinks: [
      {
        path: "/2024/sponsors",
        label: "PyCon Uganda 2024 Sponsors",
        description: "Get to know our sponsors.",
        icon: (
          <UserGroupIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      {
        path: "/2024/sponsors/why-sponsor",
        label: "Want To Make PyCon Uganda 2024 A Success?",
        description: "Why you should sponsor Pycon Uganda 2024.",
        icon: (
          <QuestionMarkCircleIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      {
        path: PYCONUGANDA_PROSPECTUS_2024,
        label: "PyCon Uganda 2024 Sponsorship Prospectus",
        description: "Key themes and goals for PyCon Uganda Conference.",
        icon: (
          <DocumentTextIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
    ],
  },
  {
    path: "#",
    label: "Speakers",
    subLinks: [
      {
        path: "/2024/speakers",
        label: "PyCon Uganda 2024 Speakers",
        description: "Get to know the speakers at PyCon Uganda 2024.",
        icon: (
          <UserGroupIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
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
        description:
          "Apply for financial assistance to attend PyCon Uganda 2024.",
        icon: (
          <BanknotesIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      {
        path: "/2024/travel-aid",
        label: "Travel Aid",
        description: "Get support for your travel expenses.",
        icon: (
          <TruckIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
    ],
  },
  {
    path: "#",
    label: "Communities",
    subLinks: [
      {
        path: "/2024/django-girls",
        label: "Django Girls",
        description:
          "Empowering women! Join us at PyCon Uganda 2024 for Django workshops.",
        icon: (
          <UserGroupIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      {
        path: "/2024/pyladies",
        label: "Pyladies",
        description: "Join us at PyCon Uganda for the PyLadies Anniversary, celebrating female Python developers' achievements and contributions!",
        icon: (
          <UserGroupIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />),
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
        description: "Find travel tips and guides for PyCon Uganda 2024.",
        icon: (
          <RocketLaunchIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      {
        path: "/2024/code-of-conduct",
        label: "Code of Conduct",
        description: "Understand the guidelines for participating.",
        icon: (
          <DocumentTextIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      {
        path: "/2024/health-and-safety",
        label: "Health and Safety",
        description: "Stay informed about health and safety measures.",
        icon: (
          <ShieldExclamationIcon
            className="h-6 w-6 text-gray-600 group-hover:text-pyconug-lightBlue"
            aria-hidden="true"
          />
        ),
      },
      // {
      //   path: "/contact",
      //   label: "Contact Us",
      // },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <Banner />
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {NavbarLinks.map((link, index) =>
            link?.subLinks?.length ? (
              <Popover.Group className="hidden lg:flex lg:gap-x-12" key={index}>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-pyconug-lightBlue" : "",
                          "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  hover:text-pyconug-lightBlue outline-none"
                        )}
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none text-gray-400"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                          <div className="p-4">
                            {link.subLinks.map((subLink, i) => (
                              <div
                                key={i}
                                className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                              >
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  {subLink?.icon}
                                </div>
                                <div className="flex-auto">
                                  <a
                                    href={subLink.path}
                                    className="block font-semibold text-gray-900 hover:text-pyconug-lightBlue"
                                  >
                                    {subLink.label}
                                    <span className="absolute inset-0" />
                                  </a>
                                  <p className="mt-1 text-gray-600">
                                    {subLink?.description}
                                  </p>{" "}
                                </div>
                              </div>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            ) : (
              <a
                key={link.label}
                href={link.path}
                className="text-sm font-semibold leading-6 text-gray-900  hover:text-pyconug-lightBlue"
              >
                {link.label}
              </a>
            )
          )}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-2">
          <a
            href="https://www.quicket.co.ug/events/254188-pycon-uganda-2024?preview=t#/tickets"
            className="hidden md:block rounded-lg border border-black px-3 py-2 font-semibold text-black text-center h-10 truncate ..."
          >
            Get Early Bird Ticket
          </a>
          <a
            href="/2024/sponsors/why-sponsor"
            className="rounded-lg bg-black px-3 py-2 font-semibold text-white inline-flex items-center"
          >
            Sponsor
            <HeartFilledIcon className="ml-1 animate-bounce" color="red" />
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
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
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
                {NavbarLinks.map((link, i) =>
                  link?.subLinks?.length ? (
                    <Disclosure as="div" className="-mx-3" key={i}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {link.label}
                            <ChevronDownIcon
                              className={`${open ? "rotate-180" : ""
                                } h-5 w-5 flex-none`}
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
                                <div className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-pyconug-lightBlue hover:bg-gray-50">
                                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    {subLink?.icon}
                                  </div>
                                  {subLink.label}
                                </div>
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
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
