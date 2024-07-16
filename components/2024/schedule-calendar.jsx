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

export default function ScheduleCalendar({ rooms, sessions }) {
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-4">
        <div className="hidden md:block"></div>

        {rooms?.map((room) => (
          <div key={room} className="text-center font-bold">
            {room}
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
                  .filter((session) => session.room === room)
                  .map((session) => (
                    <div
                      key={session.id}
                      className={`absolute flex justify-center items-center flex-col w-full border ${
                        session?.title == "Lunch Break" && `bg-slate-300`
                      } border-dashed border-gray-300 p-2 rounded-md ${
                        session?.tag == "django-girls" && "bg-blue-300"
                      } `}
                      style={{
                        top: `${timeToPixels(session.start)}px`,
                        height: `${blockHeight(session.end, session.start)}px`,
                      }}
                    >
                      <span
                        className={`text-sm "text-center"
                        }  `}
                      >
                        {blockHeight(session.end, session.start) == 56
                          ? truncateString(session.title, 60)
                          : truncateString(session.title)}
                      </span>
                      {session?.speaker && (
                        <span className={`text-sm text-center font-semibold`}>
                          {session.speaker}
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
