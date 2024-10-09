import { Tab } from "@headlessui/react";
import ScheduleTab from "./schedule-tab";
import SchedulePanel from "./schedule-panel";
import {
  PYCON_DAY1_SCHEDULE,
  PYCON_DAY2_SCHEDULE,
  PYCON_DAY3_SCHEDULE,
  PYCON_DAY4_SCHEDULE,
  PYCON_DAY5_SCHEDULE,
  Tabs,
} from "./data";

const rooms = [
  "pacificHall",
  "voltaRoom",
  "videoConferenceRoom",
];

export default function ScheduleTabs() {
  return (
    <Tab.Group>
      <ScheduleTab data={Tabs} />
      <Tab.Panels className="w-full">
        <SchedulePanel rooms={rooms} sessions={PYCON_DAY1_SCHEDULE} />
        <SchedulePanel rooms={rooms} sessions={PYCON_DAY2_SCHEDULE} />
        <SchedulePanel rooms={rooms} sessions={PYCON_DAY3_SCHEDULE} />
        <SchedulePanel rooms={rooms} sessions={PYCON_DAY4_SCHEDULE} />
        <SchedulePanel rooms={rooms} sessions={PYCON_DAY5_SCHEDULE} />
      </Tab.Panels>
    </Tab.Group>
  );
}
