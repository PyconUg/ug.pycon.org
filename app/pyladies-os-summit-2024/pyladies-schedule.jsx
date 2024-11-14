import Image from "next/image";
import Link from "next/link";

const scheduleData = [
  {
    time: "7:00 - 8:00",
    title: "Registration and Swagg Pick Up",
  },
  {
    time: "8:00 - 9:00",
    title: "International Keynote",
    speaker: "Tania Allard PSF and Quansight Director",
  },
  {
    time: "9:00 - 10:00",
    title: "Introduction of Open Source Maintainers and Projects",
  },
  {
    time: "10:00 - 11:00",
    title: "BreakFast",
    tag: "breakfast",
  },
  {
    time: "11:00 - 13:00",
    title: "Open Source collaboration and Contribution",
  },
  {
    time: "13:00 - 14:00",
    title: "Lunch",
    tag: "lunch",
  },
  {
    time: "14:00 - 16:00",
    title: "Open Source collaboration and Contribution",
  },
  {
    time: "16:00 - 17:00",
    title: "Closing Keynote",
    speaker:
      "Daphine Namukisa, UI/UX Designer at Uganda Revenue Authority (URA)",
    speakerDetails: `Daphine is a passionate UI/UX designer, product manager and JavaScript frontend developer, with a deep commitment to user-centric design and innovation. 
      With a background in computer science and experience in both digital product design and project management, she has contributed to impactful projects, including digital systems at the Uganda Revenue Authority. 
      Their unique blend of technical and design expertise has driven positive change and optimized user experiences. 
      Daphine has also been recognized for my mentorship in empowering women in tech and an advocate for knowledge sharing and continuous growth within the technology community.`,
  },
  {
    time: "17:00 - 17:15",
    title: "Closing remarks",
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

export default function PyLadiesSchedule() {
  return (
    <div className="bg-white space-y-4" id="schedule">
      <Link
        href={"/pyladies-os-summit-2024/#schedule"}
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

            {item.tag && <Badge label={item.tag} />}
          </div>
        ))}
      </div>
    </div>
  );
}
