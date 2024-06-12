import Link from "next/link";
import Image from "next/image";

export default function SponsorList({ title, sponsors }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px- my-16">
      <h2 className="text-center leading-8 text-2xl font-bold my-4 text-gray-500">
        {title} Sponsors
      </h2>
      <div
        className={`mx-auto grid max-w-lg grid-cols-2 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none ${
          sponsors?.length == 1 ? "lg:grid-cols-1" : "lg:grid-cols-3"
        }`}
      >
        {sponsors.map((sponsor, index) => (
          <Link key={index} href={sponsor.href} target="_blank">
            <Image
              className="col-span-2 w-full object-contain lg:col-span-1 max-h-16"
              src={sponsor.logo}
              alt={sponsor.name}
              width={sponsors?.length == 1 ? 800 : 500}
              height={sponsors?.length == 1 ? 800 : 500}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
