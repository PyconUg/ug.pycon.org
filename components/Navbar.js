import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo.png";

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
  const QUICKET_LINK = "https://qkt.io/w31vDE";
  const SESSIONIZE_LINK = "https://sessionize.com/pycon-uganda";
  const TICKET_BTN_LABEL = "Get Ticket";
  const SHOP_ACTION_LABEL = "Shop";
  const SHOP_ACTION_LINK = "/shop";

  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"}>
            <Image src={logo} alt="Pycon logo" width={120} height={70} />
          </Link>
          <div className="md:flex space-x-4 text-gray-900 hidden">
            {NavbarLinks.map(({ path, label }, index) => {
              return (
                <a key={index} href={path}>
                  {label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-row space-x-4">
            <Link
              className="border-black   px-6 py-1 border rounded-lg"
              href={SHOP_ACTION_LINK}
            >
              {SHOP_ACTION_LABEL}
            </Link>
            <Link
              className="bg-black text-white px-6 py-1 border rounded-lg"
              href={QUICKET_LINK}
            >
              {TICKET_BTN_LABEL}
            </Link>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
}
