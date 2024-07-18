"use client";
import { SPEAKERS_2024 } from "@/2024/speakers/speakers-data";
import SpeakerCards from "@/components/speakers/keynote-speaker-cards";
import { KEYNOTESPEAKERS_2024 } from "@/2024/speakers/keynote-speakers-data";

export default function Speakers() {
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
            <p className="text-base p-4 font-medium">
              Discover the Voices of PyCon Uganda 2024!
            </p>
          </div>
        </div>
      </section>

      <section>
        {SPEAKERS_2024?.length == 0 ? (
          <div className="my-14 mx-8">
            <span className="">We shall be releasing the list of speakers soon!</span>
          </div>
        ) : (
          <>
            <div className="relative mt-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 text-3xl font-semibold leading-6 text-pyconug-lightBlue">KEYNOTE SPEAKERS</span>
                </div>
            </div>
            <SpeakerCards data={KEYNOTESPEAKERS_2024}/>
            <div className="relative mt-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-pyconug-darkBlue border-8" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-3xl font-semibold leading-6 text-pyconug-lightBlue">MORE SPEAKERS</span>
                </div>
            </div>
            <SpeakerCards data={SPEAKERS_2024} />
          </>
        )}
      </section>
    </>
  );
}
