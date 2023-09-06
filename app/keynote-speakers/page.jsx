"use client";
import KeynoteSpeakerCard from "@/components/speakers/keynote-speaker-card";
import SpeakerCard from "@/components/speakers/speaker-card";
import { KEYNOTESPEAKERS } from "@/components/speakers/keynote-speakers-data";

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
    </>
  );
}
