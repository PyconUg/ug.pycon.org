"use client";
import KeynoteSpeakerCards from "@/components/speakers/keynote-speaker-cards";
import Link from "next/link";

export default function SpeakersPage() {
  return (
    <>
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Keynote Speakers
            </h1>
          </div>

          <div>
            <p className="text-base p-4 font-medium">
              View our exciting Keynote Speakers at PyCon Uganda 2024!
            </p>
          </div>
        </div>
      </section>
      <KeynoteSpeakerCards />
      <section className="flex md:flex-row  flex-col md:space-x-4 space-y-16 text-center md:space-y-0 justify-center my-10">
        <div>
          <Link
            className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            href={"/speakers"}
          >
            View all speakers
          </Link>
        </div>
      </section>
    </>
  );
}
