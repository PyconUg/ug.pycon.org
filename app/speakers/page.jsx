"use client";
import SpeakerCard from "@/components/speakers/speaker-card";
import { SPEAKERS } from "@/components/speakers/speakers-data";

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

      <section className="grid grid-cols-3 my-16  mx-10 gap-y-10">
        {SPEAKERS?.map((speaker, index) => {
          return <SpeakerCard speaker={speaker} key={index} />;
        })}
      </section>
    </>
  );
}
