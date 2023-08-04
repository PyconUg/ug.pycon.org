"use client";
import SpeakerCard from "@/components/speakers/speaker-card";
import { SPEAKERS } from "@/components/speakers/speakers-data";
import Image from "next/image";
import Link from "next/link";

export default function Speakers() {
  return (
    <main className="space-y-14 mt-20">
      <section className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 mx-10 gap-y-10">
        {SPEAKERS?.slice(0, 3)?.map((speaker, index) => {
          return <SpeakerCard speaker={speaker} key={index} />;
        })}
      </section>
      <section className="flex md:flex-row  flex-col md:space-x-4 space-y-16 text-center md:space-y-0 justify-center">
        <div>
          <Link
            className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            href={"/speakers"}
          >
            View all spakers
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
