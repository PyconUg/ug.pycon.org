"use client";
import KeynoteSpeakerCard from "@/components/speakers/keynote-speaker-card";
import { KEYNOTESPEAKERS } from "@/components/speakers/keynote-speakers-data";
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
            {" "}
            <p className="text-base p-4 font-medium">
              View our exciting Keynote Speakers at PyCon Uganda 2023!
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-2 my-16 grid-cols-1 mx-20 gap-y-10">
        {KEYNOTESPEAKERS?.map((keynoteSpeaker, index) => {
          return <KeynoteSpeakerCard keynoteSpeaker={keynoteSpeaker} key={index} />;
        //   return <SpeakerCard speaker={speaker} key={index} />;
        })}
      </section>
      <section className="flex md:flex-row  flex-col md:space-x-4 space-y-16 text-center md:space-y-0 justify-center mb-10">
        <div>
          <Link
            className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            href={"/2023/speakers"}
          >
            View all speakers
          </Link>
        </div>
      </section>
    </>
  );
}
