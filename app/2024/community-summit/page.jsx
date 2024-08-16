import ScheduleStep from "@/2024/schedule/schedule-step";
import Image from "next/image";
import Link from "next/link";

export default function CommunitySummit() {
  const PYCON_DAY1_SCHEDULE = [
    {
      title: "Welcome remarks and Introductions",
      duration: "10:00 - 1:00",
      speakerAvatar: "/2024/speakers/Sumaiya Nalukwago.jpeg",
      speaker: "Sumaiya Nalukwago",
    },
    {
      title: "Keynote Session",
      duration: "11:00 - 12:00",
      speaker: "Sumaiya Nalukwago",
      speakerAvatar: "/2024/speakers/Sumaiya Nalukwago.jpeg",
    },
    {
      title:
        "From Workshops to Masterminds: Building a thriving Python Community with the Python Ho User Group.",
      duration: "12:00 - 12:30",
      speakerAvatar: "/2024/speakers/KAFUI ALORDO.png",
      speaker: "Kafui Alordo",
    },
    {
      title:
        "Empowering Diverse Communities with Python: Insights from Mombasa, Kenya.",
      duration: "12:00 - 12:30",
      speakerAvatar: "/2024/speakers/Chris N. Achinga.png",
      speaker: "Chris N. Achinga",
    },
    {
      title: "Lunch break",
      duration: "13:00 - 14:00",
    },
    {
      title:
        "Harnessing Collective Intelligence: Developing and Utilizing Data Science Communities",
      duration: "14:00 - 14:30",
      speaker: "Bernice Omiunu",
      speakerAvatar: "/2024/speakers/Bernice Omiunu.png",
    },
    {
      title: "OpenSource at Pykampala community",
      duration: "14:30 - 15:00",
      speakerAvatar: "",
      speaker: "Tobias Higenyi",
    },
    {
      title: "Discussion on Community way forward",
      duration: "15:00 - 16:00",
      speakerAvatar: "/2024/speakers/Sumaiya Nalukwago.jpeg",
      speaker: "Sumaiya Nalukwago",
    },
    {
      title: "Closing Remarks and End",
      duration: "16:00 - 16:30",
    },
  ];
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300 justify-center">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Python Community Summit Schedule
            </h1>
            <p className="mt-4 sm:text-xl mx-5">
              Come take part in amazing community events
            </p>
            <p className="mt-4 sm:text-xl mx-5 font-bold">
              Date: 9th October 2024
            </p>
          </div>
        </div>
      </section>

      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <div class="container mx-auto">
          <h2 className="text-3xl font-bold sm:text-5xl text-black">
            About Python Community Summit
          </h2>
          <p className="mt-4 sm:text-xl mx-5">
            The Python Community Summit is an annual event that brings together
            Python enthusiasts from around the world. It provides a platform for
            community members to connect, share knowledge, and collaborate on
            various Python-related topics. The summit features keynote sessions,
            workshops, panel discussions, and networking opportunities. Whether
            you are a beginner or an experienced Python developer, the Python
            Community Summit offers something for everyone. Join us and be a
            part of this vibrant and inclusive community!
          </p>
        </div>
      </section>

      <section className="mx-8 md:mx-28 max-w-screen-xl ">
        <section className=" ">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
            {PYCON_DAY1_SCHEDULE?.map((step, index) => (
              <ScheduleStep key={index} stepData={step} />
            ))}
          </ol>
        </section>
      </section>
    </>
  );
}
