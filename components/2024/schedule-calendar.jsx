import React from "react";

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
  { color: "bg-slate-300", label: "Breakfast/Lunch Break" },
  { color: "bg-blue-300", label: "Django Girls" },
  { color: "bg-[#9ADBEC] text-white", label: "Community Summit" },
  { color: "bg-[#167E89]", label: "PyLadies" },
  { color: "bg-[#D8A3DD]", label: "PyData" },
  { color: "bg-[#C9A36A]", label: "Open Source Sprints" },
];

export default function ScheduleCalendar({ rooms, sessions }) {
  return (
    <div>
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

      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-4">
          <div className="hidden md:block"></div>

          {rooms?.map((room) => (
            <div key={room} className="text-center font-bold capitalize">
              {formatString(room)}
            </div>
          ))}

          <div className="hidden md:block relative">
            {hours?.map((hour) => (
              <div key={hour} className="h-28 relative">
                <div className="absolute top-0 right-1 transform -translate-y-1/2">
                  {hour}:00
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-4 md:col-span-4 relative">
            <div className="grid grid-cols-4">
              {rooms.map((room) => (
                <div key={room} className="relative border-r border-t h-full">
                  {hours.map((hour) => (
                    <div key={hour} className="h-28 border-b"></div>
                  ))}
                  {sessions
                    .filter((session) => session.room.includes(room))
                    .map((session) => {
                      let bgColor = "";
                      if (
                        session?.title.toLowerCase().includes("break") ||
                        session?.title.toLowerCase().includes("lunch")
                      ) {
                        bgColor = "bg-slate-300";
                      } else if (session?.tag === "django-girls") {
                        bgColor = "bg-blue-300";
                      } else if (session?.tag === "community-summit") {
                        bgColor = "bg-[#9ADBEC]";
                      } else if (session?.tag === "pyladies") {
                        bgColor = "bg-[#167E89] text-white";
                      } else if (session?.tag === "pydata") {
                        bgColor = "bg-[#D8A3DD]";
                      } else if (session?.tag === "opensource-sprints") {
                        bgColor = "bg-[#C9A36A]";
                      }

                      return (
                        <div
                          key={session.id}
                          className={`absolute flex justify-center items-center flex-col w-full border ${bgColor} border-dashed border-gray-300 p-2 rounded-md`}
                          style={{
                            top: `${timeToPixels(session.start)}px`,
                            height: `${blockHeight(
                              session.end,
                              session.start
                            )}px`,
                          }}
                        >
                          <span className="text-sm text-center">
                            {blockHeight(session.end, session.start) === 56
                              ? truncateString(session.title, 60)
                              : truncateString(session.title)}
                          </span>
                          {session?.speaker && (
                            <span className="text-sm text-center font-semibold">
                              {session.speaker}
                            </span>
                          )}
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
