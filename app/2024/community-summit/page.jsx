import ScheduleStep from "@/2024/schedule/schedule-step";
import Image from "next/image";
import Link from "next/link";
import CommunitySummitSchedule from "./community-summit-schedule";

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
    <main className="flex-grow space-y-6 mb-10">
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white bg-cyan-900">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">Python Community Summit </h1>
          <p className="text-xl mb-8">at PyCon Uganda 2024</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
          <h2 className="text-3xl font-bold mb-4">
            About Python Community Summit{" "}
          </h2>
          <p className="mb-4">
            The Python Community Summit is an annual event that brings together
            Python enthusiasts from around the world. It provides a platform for
            community members to connect, share knowledge, and collaborate on
            various Python-related topics. The summit features keynote sessions,
            workshops, panel discussions, and networking opportunities. Whether
            you are a beginner or an experienced Python developer, the Python
            Community Summit offers something for everyone. Join us and be a
            part of this vibrant and inclusive community!
          </p>
          <p className="mb-4">
            We are a part of the PyData Global network that promotes discussions
            of the best practices, new approaches, and merging technologies for
            data management, processing, analytics and visualization. PyData
            Kampala approaches data science using many languages, including (but
            not limited to) Python, Julia and R.
          </p>
          <p>
            PyData Kampala follows the&nbsp;
            <Link
              target="_blank"
              href="https://numfocus.org/code-of-conduct"
              className="text-blue-600 hover:underline"
            >
              NumFocus code of conduct
            </Link>
          </p>
        </div>
      </div>

      <div className="lg:mx-20 mx-4">
        <CommunitySummitSchedule />
      </div>
    </main>
  );
}
