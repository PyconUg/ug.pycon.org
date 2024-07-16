"use client";
import SpeakerCard from "@pycon/ui/src/components/speakers/speaker-card";
import { SPEAKERS } from "@pycon/ui/src/components/speakers/speakers-data";
import Link from "next/link";

export default function SpeakersPage() {
  return (
    <>
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Speakers
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-base p-4 font-medium">
              See who will be speaking at PyCon Uganda 2023
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 my-16 grid-cols-1 mx-10 gap-y-10">
        {SPEAKERS?.map((speaker, index) => {
          return <SpeakerCard speaker={speaker} key={index} />;
        })}
      </section>
      <section className="flex md:flex-row  flex-col md:space-x-4 space-y-16 text-center md:space-y-0 justify-center mb-10">
        <div>
          <Link
            className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            href={"/keynote-speakers"}
          >
            View Keynote speakers
          </Link>
        </div>
      </section>
    </>
  );
}
