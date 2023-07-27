"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import {
  PYCON_DAY1_SCHEDULE,
  PYCON_DAY2_SCHEDULE,
  PYCON_DAY3_SCHEDULE,
} from "@/components/shop/data";
import Step from "@/components/shop/step";
import SpeakerStep from "@/components/schedule/speaker-step";

export default function SchedulePage() {
  const Tabs = [
    { id: 1, title: "Day 1 (23rd September)" },
    { id: 2, title: "Day 2 (24th September)" },
    { id: 3, title: "Day 3 (25th September)" },
  ];
  return (
    <main>
      {" "}
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              PyCon Ug Schedule
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-base p-4 font-medium">
              Timetable of sessions for Pycon Uganda 2023
            </p>
          </div>
        </div>
      </section>
      <section className="mx-36 my-16">
        <Tab.Group>
          <Tab.List className="flex flex-col md:flex-row  md:justify-between">
            {Tabs?.map((tab) => (
              <Tab as={Fragment} key={tab?.id}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "border-none bg-pyconug-darkBlue text-white  text-xl font-semibold   w-64 h-12"
                        : "border border-pyconug-lightBlue hover:bg-gray-100 text-xl font-semibold w-64 h-12"
                    }
                  >
                    {tab?.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mx-24">
            <Tab.Panel className="ml-4 pt-8">
              <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
                {PYCON_DAY1_SCHEDULE?.map((step, index) => (
                  <SpeakerStep
                    key={index}
                    title={step?.title}
                    duration={step?.duration}
                    speaker={step?.speaker}
                  />
                ))}
              </ol>
            </Tab.Panel>
            <Tab.Panel className="ml-4 pt-8">
              <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
                {PYCON_DAY2_SCHEDULE?.map((step, index) => (
                  <SpeakerStep
                    key={index}
                    title={step?.title}
                    duration={step?.duration}
                    speaker={step?.speaker}
                  />
                ))}
              </ol>
            </Tab.Panel>
            <Tab.Panel className="ml-4 pt-8">
              <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
                {PYCON_DAY3_SCHEDULE?.map((step, index) => (
                  <SpeakerStep
                    key={index}
                    title={step?.title}
                    duration={step?.duration}
                    speaker={step?.speaker}
                  />
                ))}
              </ol>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </main>
  );
}
