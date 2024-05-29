import Link from "next/link";
import Image from "next/image";
import { SPONSORS_2024 } from "@/2024/utils/constants";
import SponsorList from "@/components/2024/sponsors-list";

export default function SponsorsPage() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300 justify-center">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Sponsors
            </h1>
            <p className="mt-4 sm:text-xl mx-5">
              Thank you! 🎉 Your sponsorship makes PyCon Uganda affordable and
              accessible to a wide and diverse audience.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:mx-28 mx-8 min-h-[55vh]">
        <div>
          {Object.entries(SPONSORS_2024).map(([key, sponsors]) => (
            <SponsorList
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              sponsors={sponsors}
            />
          ))}
        </div>
        <div className="py-12 flex justify-center">
          <Link
            className="uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md font-bold "
            href={"/2024/sponsors/why-sponsor"}
          >
            Become a Sponsor
          </Link>
        </div>
      </section>
    </>
  );
}
