import React from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Filter } from "lucide-react";

const HOUR_HEIGHT = 112; // Height of each hour block in pixels
const hours = Array.from({ length: 13 }, (_, i) => i + 7); // 8:00 to 18:00

function timeToPixels(time) {
  const [hour, minutes] = time.split(":").map(Number);
  const baseHour = 7; // Starting from 8:00
  return (hour - baseHour) * HOUR_HEIGHT + (minutes / 60) * HOUR_HEIGHT;
}

export function truncateString(text, textLength = 100) {
  return text.length > textLength
    ? `${text.substring(0, textLength)}...`
    : text;
}

function blockHeight(end, start) {
  return timeToPixels(end) - timeToPixels(start);
}

function formatString(name) {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

const COLOR_LEGEND = [
  {
    color: "bg-slate-300 text-gray-800",
    label: "Breakfast/Lunch Break",
    speaker_color: " text-blue-800",
  },
  {
    color: "bg-blue-300 text-gray-800",
    label: "Django Girls",
    speaker_color: " text-blue-900",
  },
  {
    color: "bg-[#9ADBEC] text-cyan-900",
    label: "Community Summit",
    speaker_color: " text-cyan-900",
  },
  {
    color: "bg-[#167E89] text-white",
    label: "PyLadies",
    speaker_color: " text-gray-100",
  },
  {
    color: "bg-[#D8A3DD] text-gray-900",
    label: "PyData",
    speaker_color: " text-purple-900",
  },
  {
    color: "bg-[#C9A36A] text-gray-100",
    label: "Open Source Sprints",
    speaker_color: " text-amber-900",
  },
];

const EventCard = ({ session, style }) => (
  <div
    className={`mb-2 rounded-lg ${style} p-2 sm:p-3 pb-6 text-xs sm:text-sm `}
    style={{
      height: `${blockHeight(session.end, session.start)}px`,
      minHeight: "9em", // Ensure a minimum height for very short sessions
    }}
  >
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <span className="font-semibold break-words pr-1">{session.title}</span>
      <div>
        <span className="text-xxs sm:text-xs text-black mt-1 sm:mt-0 bg-white bg-opacity-75 px-1 py-0.5 rounded">
          <time>{session.start}</time>
          <span className="mx-1">-</span>
          <time>{session.end}</time>
        </span>
      </div>
    </div>
    {session.speaker && (
      <p
        className={`mt-1 text-xxs sm:text-xs break-words ${COLOR_LEGEND.find((legend) => legend.color === style)?.speaker_color || "text-gray-600"}`}
      >
        {(session.speaker)}
      </p>
    )}
  </div>
);

export default function ScheduleCalendar({ rooms, sessions }) {
  const getSessionStyle = (session) => {
    if (
      session?.title.toLowerCase().includes("lunch") ||
      session?.title.toLowerCase().includes("break")
    ) {
      return COLOR_LEGEND[0].color;
    } else if (session?.tag === "django-girls") {
      return COLOR_LEGEND[1].color;
    } else if (session?.tag === "community-summit") {
      return COLOR_LEGEND[2].color;
    } else if (session?.tag === "pyladies") {
      return COLOR_LEGEND[3].color;
    } else if (session?.tag === "pydata") {
      return COLOR_LEGEND[4].color;
    } else if (session?.tag === "opensource-sprints") {
      return COLOR_LEGEND[5].color;
    }
    return "bg-gray-200 text-gray-800"; // default style
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      {/* Color Legend */}
      <div className="p-4 rounded-lg bg-white flex justify-center space-x-8 w-full">
        {COLOR_LEGEND.map(({ color, label }) => (
          <div key={label} className="flex items-center mb-2">
            <div
              className={`w-6 h-6 ${color} border border-gray-300 rounded mr-2`}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid flex-1 grid-cols-4 divide-x overflow-y-auto mt-4">
        {rooms?.map((room) => (
          <div key={room} className="p-4">
            <h2 className="mb-4 text-lg font-bold text-gray-700 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              {formatString(room)}
            </h2>
            {sessions
              .filter((session) => session.room.includes(room))
              .map((session) => (
                <EventCard
                  key={session.id}
                  session={session}
                  style={getSessionStyle(session)}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
