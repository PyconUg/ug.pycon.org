import React, { useState } from "react";
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
      minHeight: "12em", // Ensure a minimum height for very short sessions
    }}
  >
    <div className="flex flex-col justify-between h-full">
      <div>
        <span className="font-semibold break-words pr-1 block mb-1">{session.title}</span>
        {session.speaker && (
          <p
            className={`text-xxs sm:text-xs break-words ${COLOR_LEGEND.find((legend) => legend.color === style)?.speaker_color || "text-gray-600"}`}
          >
            {session.speaker}
          </p>
        )}
      </div>
      <div className="mt-auto">
        <span className="text-xxs sm:text-xs text-black bg-white bg-opacity-75 px-1 py-0.5 rounded inline-block">
          <time>{session.start}</time>
          <span className="mx-1">-</span>
          <time>{session.end}</time>
        </span>
      </div>
    </div>
  </div>
);

export default function ScheduleCalendar({ rooms, sessions }) {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

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

  const nextRoom = () => {
    setCurrentRoomIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const prevRoom = () => {
    setCurrentRoomIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      {/* Color Legend */}
      <div className="p-4  bg-white mb-4 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4">
          {COLOR_LEGEND.map(({ color, label }) => (
            <div key={label} className="flex items-center bg-gray-50 rounded-full px-3 py-1 transition-transform hover:scale-105">
              <div className={`w-4 h-4 ${color} border border-gray-300 rounded-full mr-2`}></div>
              <span className="text-sm text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Room Navigation */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button onClick={prevRoom} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-gray-700 uppercase tracking-wide">
          {formatString(rooms[currentRoomIndex])}
        </h2>
        <button onClick={nextRoom} className="p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-y-auto mt-4">
        {/* Mobile View */}
        <div className="md:hidden px-4">
          {sessions
            .filter((session) => session.room.includes(rooms[currentRoomIndex]))
            .map((session) => (
              <EventCard
                key={session.id}
                session={session}
                style={getSessionStyle(session)}
              />
            ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 md:divide-x">
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
    </div>
  );
}