import {
  PYCON_DAY1_SCHEDULE,
  PYCON_DAY2_SCHEDULE,
  PYCON_DAY3_SCHEDULE,
  Tabs,
} from "@/components/schedule/data";
import ScheduleTab from "@/components/schedule/schedule-tab";
import SchedulePanel from "@/components/schedule/schedule-panel";
import { Tab } from "@headlessui/react";

export default function ScheduleTabs() {
  return (
    <Tab.Group>
      <ScheduleTab data={Tabs} />
      <Tab.Panels className="md:mx-24">
        <SchedulePanel data={PYCON_DAY1_SCHEDULE} />
        <SchedulePanel data={PYCON_DAY2_SCHEDULE} />
        <SchedulePanel data={PYCON_DAY3_SCHEDULE} />
      </Tab.Panels>
    </Tab.Group>
  );
}
