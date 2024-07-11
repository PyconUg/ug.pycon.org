import { Tab } from "@headlessui/react";
import Schedule2024 from "@/components/2024/schedule";

export default function SchedulePanel({ data }) {
  return (
    <Tab.Panel className="ml-4 pt-8">
     <Schedule2024 data={data}/>
    </Tab.Panel>
  );
}
