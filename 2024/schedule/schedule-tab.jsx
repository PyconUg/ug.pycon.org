import { Fragment } from "react";
import { Tab } from "@headlessui/react";

export default function ScheduleTab({ data }) {
  return (
    <div className="flex justify-center pt-6 w-full bg-white">
      <Tab.List className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 px-4 md:px-8 w-full max-w-7xl">
        {data?.map((tab) => (
          <Tab as={Fragment} key={tab?.id}>
            {({ selected }) => (
              <button
                className={`
                  ${selected
                    ? "bg-pyconug-darkBlue text-white shadow-md"
                    : "bg-gray-100 text-pyconug-darkBlue hover:bg-gray-200"}
                  transition-all duration-200 ease-in-out
                  text-lg font-semibold w-full md:flex-1
                  py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-pyconug-lightBlue
                `}
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
