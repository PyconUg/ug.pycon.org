import Image from "next/image";
import Link from "next/link";

const scheduleData = [
  {
    time: "08:30 - 09:00",
    title: "Registration & check in",
  },
  {
    time: "09:00 - 09:10",
    title: "Welcome Address",
  },
  {
    time: "09:10 - 09:30",
    title: "Keynote",
  },
  {
    time: "09:30 - 10:45",
    title: "Dive into Python",
  },
  {
    time: "10:45 - 11:00",
    title: "Breakfast",
    speaker: "",
    avatar: "",
  },
  {
    time: "11:00 - 13:00",
    title: "Dive into Python",
  },
  {
    time: "13:00",
    title: "Lunch Break",
    speaker: "",
    avatar: "",
  },
  {
    time: "14:00 - 16:45",
    title: "More Django and Deployment",
  },
  {
    time: "16:45 - 17:00",
    title: "Break",
  },
  {
    time: "17:00 - 17:30",
    title: "Fixing Bugs and AOB",
  },

  {
    time: "17:30 - 18:00",
    title: "Wrap up and announcements and photoshoot",
    speaker: "All",
    avatar: "",
  },
];

function Avatar({ src, alt }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="h-50 w-50 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden">
      {src ? (
        <Image
          className="h-full w-full object-cover"
          src={src}
          alt={alt}
          width={50}
          height={50}
        />
      ) : (
        <span className="text-gray-600 text-sm font-semibold">
          {getInitials(alt)}
        </span>
      )}
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
      {label}
    </span>
  );
}

export default function DjangoGirlsSchedule() {
  return (
    <div className="bg-white space-y-4" id="schedule">
      <Link
        href={"/2024/pydata/#schedule"}
        className="text-3xl font-bold mb-6 text-gray-800 hover:underline"
      >
        # Schedule
      </Link>
      <div className="space-y-4">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row space-y-4 items-center lg:space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="w-20 text-xl font-semibold text-gray-600">
              {item.time}
            </div>
            <div className="flex-grow flex items-center space-x-4">
              {item.avatar && <Avatar src={item.avatar} alt={item.speaker} />}
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                {item.speaker && (
                  <div className="max-w-4xl">
                    <p className="text-sm text-gray-600">{item.speaker}</p>
                    <p className="text-sm text-gray-600 hidden lg:block">
                      {item.speakerDetails}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 lg:hidden">
              {item.speakerDetails}
            </p>

            {(item.title !== "Lunch Break" ||
              item.title !== "Break" ||
              item.title !== "Breakfast") &&
              item.title !== "Networking Session" && <Badge label="Workshop" />}
          </div>
        ))}
      </div>
    </div>
  );
}
