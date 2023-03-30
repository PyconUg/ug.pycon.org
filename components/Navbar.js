import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo.png";

export default function Navbar() {
  const NavbarLinks = [
    {
      path: "#speakers",
      label: "Speakers",
    },
    {
      path: "#schedule",
      label: "Schedule",
    },
    {
      path: "#venue",
      label: "Venue",
    },
    {
      path: "#hotels",
      label: "Hotels",
    },
    {
      path: "#sponsors",
      label: "Sponsors",
    },
    {
      path: "/code-of-conduct",
      label: "Code of Conduct",
    },
    {
      path: "#contact",
      label: "Contact",
    },
  ];
  const QUICKET_LINK = "https://qkt.io/pyconug";
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"}>
            <Image src={logo} alt="Pycon logo" width={120} height={70} />
          </Link>
          <div className="md:flex space-x-4 text-gray-900 hidden">
            {NavbarLinks.map(({ path, label }, index) => {
              return <a key={index} href={path}>{label}</a>;
            })}
          </div>
          <Link
            className="bg-black text-white px-6 py-1 border rounded-lg"
            href={QUICKET_LINK}
          >
            {" "}
            Buy Ticket
          </Link>
        </div>
      </div>
    </nav>
  );
}
