import { Tab } from "@headlessui/react";
import ScheduleCalendar from "../../components/2024/schedule-calendar";

export default function SchedulePanel({ rooms, sessions }) {
  return (
    <Tab.Panel className="pt-4">
      <ScheduleCalendar rooms={rooms} sessions={sessions} />
    </Tab.Panel>
  );
}
