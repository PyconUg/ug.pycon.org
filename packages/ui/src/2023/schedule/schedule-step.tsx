export default function ScheduleStep({
stepData
}) {
  return (
    <li className="mb-10 mt-5 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="#F1DB2F"
            stroke="black"
            strokeWidth="2"
          />

          <circle cx="50" cy="50" r="2" fill="black" />

          <line
            x1="50"
            y1="50"
            x2="50"
            y2="30"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <line
            x1="50"
            y1="50"
            x2="65"
            y2="50"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <line
            x1="50"
            y1="50"
            x2="50"
            y2="70"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <div className="space-y-2">
        {" "}
        <p className="text-gray-400">{stepData?.duration}</p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className=" font-bold leading-tight capitalize">{stepData?.title}</h3>
            {stepData?.speaker && (
              <p className="text-gray-600">
                {" "}
                <span className="font-bold capitalize">
                  Speaker(s)/Facilitator(s):{" "}
                </span>
                {stepData?.speaker}
              </p>
            )}
          </div>
          {stepData?.workshopSpeaker && (
            <div>
              <h3 className=" font-bold leading-tight capitalize">
                {stepData?.workshopTitle}
              </h3>
              {stepData?.workshopSpeaker && (
                <p className="text-gray-600">
                  {" "}
                  <span className="font-bold capitalize">
                    Speaker(s)/Facilitator(s):{" "}
                  </span>
                  {stepData?.workshopSpeaker}
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </li>
  );
}
