import Image from "next/image";
import Link from "next/link";

const scheduleData = [
  {
    time: "10:00",
    title: "Welcome Remarks and Introductions",
    speaker: "Kakaire Steven",
    speakerDetails:
      "He is a software | Machine Learning engineer with a focus in the application of Machine Learning to software Security. He has active interests in open source contribution and communities.",
    avatar: "/2024/speakers/Kakaire Steven.jpg",
  },
  {
    time: "10:30",
    title: "Career in Data, Science and Engineering",
    speaker: "Kavuma Lameck",
    speakerDetails:
      "He is an experienced data scientist with a strong bias in data visualization.",
    avatar: "/2024/speakers/Kavuma Lameck.jpg",
  },
  {
    time: "11:00",
    title: "Introduction to Python Data",
    speaker: "Kakaire Steven",
    speakerDetails:
      "He is a software | Machine Learning engineer with a focus in the application of Machine Learning to software Security. He has active interests in open source contribution and communities.",
    avatar: "/2024/speakers/Kakaire Steven.jpg",
  },
  {
    time: "11:30",
    title:
      "Live Project (Part 1): Simplifying to Amplify: Leveraging the Vizzes",
    speaker: "Lameck Kavuma",
    speakerDetails:
      "He is an experienced data scientist with a strong bias in data visualization.",
    avatar: "/2024/speakers/Kavuma Lameck.jpg",
  },
  {
    time: "13:00",
    title: "Lunch Break",
    speaker: "",
    avatar: "",
  },
  {
    time: "14:00",
    title: "Live Project (Part 2): A grip on your data with Maths",
    speaker: "Kakaire Steven",
    speakerDetails:
      "He is a software | Machine Learning engineer with a focus in the application of Machine Learning to software Security. He has active interests in open source contribution and communities.",
    avatar: "/2024/speakers/Kakaire Steven.jpg",
  },
  {
    time: "15:30",
    title: "From here forth",
    speaker: "Kakaire Steven",
    speakerDetails:
      "He is a software | Machine Learning engineer with a focus in the application of Machine Learning to software Security. He has active interests in open source contribution and communities.",
    avatar: "/2024/speakers/Kakaire Steven.jpg",
  },
  {
    time: "16:00",
    title: "Networking Session",
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

export default function PyDataSchedule() {
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
