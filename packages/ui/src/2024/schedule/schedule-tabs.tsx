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

export default function ScheduleTabs() {
  return (
    <Tab.Group>
      <ScheduleTab data={Tabs} />
      <Tab.Panels className="">
        <SchedulePanel data={PYCON_DAY1_SCHEDULE} />
        <SchedulePanel data={PYCON_DAY2_SCHEDULE} />
        <SchedulePanel data={PYCON_DAY3_SCHEDULE} />
        <SchedulePanel data={PYCON_DAY4_SCHEDULE} />
        <SchedulePanel data={PYCON_DAY5_SCHEDULE} />
      </Tab.Panels>
    </Tab.Group>
  );
}
