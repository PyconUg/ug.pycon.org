"use client";
import Image from "next/image";
import TitleSection from "@/components/speakers/title-section";
import PageSection from "@/components/ui/sections/page-section";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { KEYNOTESPEAKERS } from "@/components/speakers/keynote-speakers-data";

export default function SpeakersPage() {
  const pathname = usePathname();

  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const speakerName = decodeURI(pathname.split("/").pop()); // Extract the speaker name from the pathname

    if (speakerName) {
      const speaker = KEYNOTESPEAKERS.find((speaker) => speaker.name === speakerName);
      setSpeaker(speaker);
    }
  }, []);

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

      <section className="flex justify-center my-16">
        <div className="flex flex-col md:justify-between md:flex-row md:space-x-10 max-w-6xl">
          <div className="md:w-1/3 w-full space-y-6 text-center">
            <div className="md:w-96 w-72 h-72 md:h-96 mx-auto rounded-full overflow-hidden">
              <Image src={speaker?.image} alt="" width={600} height={600} />
            </div>
          </div>{" "}
          <div className="md:w-2/3 w-full mt-14 px-4">
            <TitleSection
              name={speaker?.name}
              description={speaker?.description}
            />
            <PageSection text={speaker?.bio} />
          </div>
        </div>
      </section>
    </>
  );
}
