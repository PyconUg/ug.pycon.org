import Link from "next/link";
import Image from "next/image";

export default function SponsorList({ title, sponsors }) {
  return (
    <div className="">
      <p className="text-4xl font-bold my-8 text-gray-500">{title} Sponsors</p>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        {sponsors.map((sponsor, index) => (
          <Link key={index} href={sponsor.href} target="_blank">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={500}
              height={500}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
