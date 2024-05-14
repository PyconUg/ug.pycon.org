"use client";
import KeynoteSpeakerCard from "@ui/components/shared/speakers/keynote-speaker-card";
import { KEYNOTESPEAKERS } from "@ui/components/shared/speakers/keynote-speakers-data";
import Image from "next/image";
import Link from "next/link";

export default function Speakers() {
  return (
    <main className="space-y-14 my-20 bg-[#f6f7fd] py-[80px]">
      <section className="">
        <div className="flex flex-col justify-center items-center text-[#0e1b4d]">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Keynote Speakers
          </h1>
        </div>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-2  grid-cols-1 mx-10 gap-y-10">
        {KEYNOTESPEAKERS?.map((keynoteSpeaker, index) => {
          return (
            <KeynoteSpeakerCard keynoteSpeaker={keynoteSpeaker} key={index} />
          );
        })}
      </section>
      <section className="flex md:flex-row  flex-col md:space-x-4 space-y-16 text-center md:space-y-0 justify-center">
        <div>
          <Link
            className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            href={"/speakers"}
          >
            View all speakers
          </Link>
        </div>
        <div>
          <Link
            className=" uppercase hover:text-white hover:bg-pyconug-lightBlue border-2 text-pyconug-lightBlue border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            href={"/schedule"}
          >
            View Schedule
          </Link>
        </div>
      </section>
    </main>
  );
}
