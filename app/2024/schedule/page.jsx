"use client";
import ScheduleTabs from '../../../2024/schedule/schedule-tabs.jsx'

export default function SchedulePage() {
  return (
    <main className="">
      {" "}
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              PyCon Uganda Schedule
            </h1>
          </div>

          <div>
            <p className="text-base p-4 font-medium">
              Timetable of sessions for Pycon Uganda 2024
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <ScheduleTabs />
      </section>
    </main>
  );
}
