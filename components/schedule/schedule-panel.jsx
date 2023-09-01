import ScheduleStep from "@/components/schedule/schedule-step";
import { Tab } from "@headlessui/react";

export default function SchedulePanel({ data }) {
  return (
    <Tab.Panel className="ml-4 pt-8">
      <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
        {data?.map((step, index) => (
          <ScheduleStep key={index} stepData={step} />
        ))}
      </ol>
    </Tab.Panel>
  );
}
