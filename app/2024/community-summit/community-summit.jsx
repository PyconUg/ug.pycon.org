import Link from "next/link";
import CommunitySummitSchedule from "./community-summit-schedule";

export default function CommunitySummit() {
  return (
    <main className="flex-grow space-y-6 mb-10">
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white bg-cyan-900">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">Python Community Summit </h1>
          <p className="text-xl mb-8">at PyCon Uganda 2024</p>
        </div>
      </section>

      <div className="md:container mx-auto px-4 py-12">
        <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
          <h2 className="text-3xl font-bold mb-4">
            About Python Community Summit{" "}
          </h2>
          <p className="mb-4">
            The Python Community Summit is an annual event that brings together
            Python enthusiasts from around the world. It provides a platform for
            community members to connect, share knowledge, and collaborate on
            various Python-related topics.
          </p>
          <p className="mb-4">
            The summit features keynote sessions, workshops, panel discussions,
            and networking opportunities. Whether you are a beginner or an
            experienced Python developer, the Python Community Summit offers
            something for everyone. Join us and be a part of this vibrant and
            inclusive community!
          </p>
        </div>
      </div>

      <div className="lg:mx-20 mx-4">
        <CommunitySummitSchedule />
      </div>
    </main>
  );
}
