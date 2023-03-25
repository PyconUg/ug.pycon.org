import Image from 'next/image';
import logo from '../public/img/logo.png';

export default function Navbar() {
  const NavbarLinks = [
    {
      path: "#speakers",
      label: "Speakers"
    },
    {
      path: "#schedule",
      label: "Schedule"
    },
    {
      path: "#venue",
      label: "Venue"
    },
    {
      path: "#hotels",
      label: "Hotels"
    },
    {
      path: "#sponsors",
      label: "Sponsors"
    },
    {
      path: "/code-of-conduct",
      label: "Code of Conduct"
    },
    {
      path: "#contact",
      label: "Contact"
    }
  ]
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <Image
              src={logo}
              alt="Pycon logo"
              width={120}
              height={70}
            />
          <div className="flex space-x-4 text-gray-900">
            {NavbarLinks.map(({ path, label }) => {
              return <a href={path}>{label}</a>
            })}
            <button className="bg-black text-white px-6 py-1 border rounded-lg">Buy Ticket</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
