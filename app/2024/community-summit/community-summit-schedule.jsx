import Image from "next/image";
import Link from "next/link";

const scheduleData = [
  {
    time: "10:00 - 11:00",
    title: "Welcome remarks and Introductions",
    speaker: "Sumaiya Nalukwago",
    speakerDetails: "",
    avatar: "/2024/speakers/Sumaiya Nalukwago.jpeg",
  },
  {
    time: "11:00 - 12:00",
    title: "Keynote Session",
    speaker: "Sumaiya Nalukwago",
    speakerDetails: "",
    avatar: "/2024/speakers/Sumaiya Nalukwago.jpeg",
  },
  {
    time: "12:00 - 12:30",
    title:
      "From Workshops to Masterminds: Building a thriving Python Community with the Python Ho User Group.",
    speaker: "Kafui Alordo",
    speakerDetails: "",
    avatar: "/2024/speakers/KAFUI ALORDO.png",
  },
  {
    time: "12:00 - 12:30",
    title:
      "Empowering Diverse Communities with Python: Insights from Mombasa, Kenya.",
    speaker: "Chris N. Achinga",
    speakerDetails: "",
    avatar: "/2024/speakers/Chris N. Achinga.png",
  },
  {
    time: "13:00",
    title: "Lunch Break",
    speaker: "",
    avatar: "",
  },
  {
    time: "14:00 - 14:30",
    title:
      "Harnessing Collective Intelligence: Developing and Utilizing Data Science Communities",
    speaker: "Bernice Omiunu",
    speakerDetails: "",
    avatar: "/2024/speakers/Bernice Omiunu.png",
  },
  {
    time: "14:30 - 15:00",
    title: "OpenSource at Pykampala community",
    speaker: "Tobias Higenyi",
    speakerDetails: "",
    avatar: "/2024/speakers/Tobias-Higenyi.jpg",
  },
  {
    time: "15:00 - 16:00",
    title: "Discussion on Community way forward",
    speaker: "Sumaiya Nalukwago",
    speakerDetails: "",
    avatar: "/2024/speakers/Sumaiya Nalukwago.jpeg",
  },
  {
    time: "16:00 - 16:30",
    title: "Closing Remarks and End",
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

export default function CommunitySummitSchedule() {
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

            {item.title !== "Lunch Break" &&
              item.title !== "Networking Session" && <Badge label="Workshop" />}
          </div>
        ))}
      </div>
    </div>
  );
}
