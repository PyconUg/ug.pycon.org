import React from "react";

const HOUR_HEIGHT = 100; // Height of each hour block in pixels

const COLOR_LEGEND = [
  { color: "bg-slate-300", label: "Breakfast/Lunch Break" },
  { color: "bg-blue-300", label: "Django Girls" },
  { color: "bg-[#9ADBEC]", label: "Community Summit" },
  { color: "bg-[#167E89]", label: "PyLadies" },
  { color: "bg-[#D8A3DD]", label: "PyData" },
  { color: "bg-[#C9A36A]", label: "Open Source Sprints" },
];

function timeToPixels(time) {
  const [hour, minutes] = time.split(":").map(Number);
  const baseHour = 7; // Starting from 7:00
  return (hour - baseHour) * HOUR_HEIGHT + (minutes / 60) * HOUR_HEIGHT;
}

function formatString(name) {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

export default function ScheduleCalendar({ rooms, sessions }) {
  const getSessionStyle = (session) => {
    if (
      session?.title.toLowerCase().includes("breakfast") ||
      session?.title.toLowerCase().includes("lunch")
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

  const ColorLegend = () => (
    <div className=" md:flex md:justify-center  w-full">
      <div className="flex flex-wrap justify-center  gap-4 p-4 bg-white rounded-lg border shadow mb-6">
        {COLOR_LEGEND.map(({ color, label }) => (
          <div key={label} className="flex items-center">
            <div className={`w-4 h-4 ${color} rounded mr-2`}></div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">
      <ColorLegend />
      <div className="min-w-full">
        {/* Mobile View */}
        <div className="md:hidden">
          {rooms.map((room) => (
            <div key={room} className="mb-8">
              <h2 className="text-xl font-bold mb-4 px-4">
                {formatString(room)}
              </h2>
              <div className="space-y-4 px-4">
                {sessions
                  .filter((session) => session.room.includes(room))
                  .map((session) => (
                    <div
                      key={session.id}
                      className={`p-4 rounded-lg  ${getSessionStyle(session)}`}
                    >
                      <div className="font-medium">{session.title}</div>
                      {session.speaker && (
                        <div className="text-sm mt-1">{session.speaker}</div>
                      )}
                      <div className="text-sm mt-2">
                        {session.start} - {session.end}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex  md:justify-center w-full">
          <div className=" md:grid container md:grid-cols-[100px,repeat(auto-fit,minmax(250px,1fr))]">
            {/* Time column */}
            <div className="sticky left-0 bg-white z-10">
              <div className="h-16 border"></div>
              {Array.from({ length: 13 }, (_, i) => i + 7).map((hour) => (
                <div key={hour} className="h-[100px] border relative">
                  <span className="absolute top-0 right-2 text-sm">
                    {hour}:00
                  </span>
                </div>
              ))}
            </div>

            {/* Room columns */}
            {rooms.map((room) => (
              <div key={room} className="border">
                <div className="h-16 border font-bold text-center py-4">
                  {formatString(room)}
                </div>
                <div
                  className="relative "
                  style={{ height: `${12 * HOUR_HEIGHT}px` }}
                >
                  {sessions
                    .filter((session) => session.room.includes(room))
                    .map((session) => (
                      <div
                        key={session.id}
                        className={`w-full p-2 border ${getSessionStyle(session)} overflow-hidden border border-gray-100`}
                        style={{
                          top: `${timeToPixels(session.start)}px`,
                          height: `${timeToPixels(session.end) - timeToPixels(session.start)}px`,
                        }}
                      >
                        <div className="text-sm font-medium">
                          {session.title}
                        </div>
                        {session.speaker && (
                          <div className="text-xs">{session.speaker}</div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
