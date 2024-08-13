import { Fragment } from "react";
import { Tab } from "@headlessui/react";

export default function ScheduleTab({ data }) {
  return (
    <div className="flex justify-center py-4 w-full ">
      <Tab.List className="flex flex-col items-center md:space-y-0 space-y-2 px-2 md:px-0  w-full md:flex-row md:container  md:justify-between">
        {data?.map((tab) => (
          <Tab as={Fragment} key={tab?.id}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "border-none bg-pyconug-darkBlue text-white  text-xl font-semibold w-full  md:w-64 h-12"
                    : "border border-pyconug-lightBlue hover:bg-gray-100 text-xl font-semibold w-full  md:w-64 h-12"
                }
              >
                {tab?.title}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
    </div>
  );
}
