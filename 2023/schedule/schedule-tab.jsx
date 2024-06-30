import { Fragment } from "react";
import { Tab } from "@headlessui/react";

export default function ScheduleTab({ data }) {
  return (
    <Tab.List className="flex flex-col md:flex-row  md:justify-between">
      {data?.map((tab) => (
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
  );
}
