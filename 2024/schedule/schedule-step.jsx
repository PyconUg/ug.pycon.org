import Image from "next/image";
import Link from "next/link";

export default function ScheduleStep({ stepData }) {
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
      <div className="space-y-0 md:space-y-2 items-center flex space-x-8">
        {" "}
        {stepData?.speakerAvatar && (
          <Image
            src={stepData?.speakerAvatar}
            width={50}
            height={50}
            className="w-20 h-20"
          />
        )}
        <div>
          <p className="text-gray-500">{stepData?.duration}</p>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {stepData?.title && (
                <h3 className=" font-bold leading-tight capitalize text-pyconug-darkBlue">
                  {stepData?.title}
                </h3>
              )}
              {stepData?.speaker && (
                <p className="capitalize text-gray-500">
                  {" "}
                  <span className=" pr-2 text-gray-500">
                    Speaker(s)/Facilitator(s):{" "}
                  </span>
                  <span className="underline"> {stepData?.speaker}</span>
                </p>
              )}
              {stepData?.room && (
                <p className="capitalize text-gray-500">
                  {" "}
                  <span className=" pr-2 text-gray-500">Room:</span>
                  {stepData?.room}
                </p>
              )}
            </div>
            {stepData?.workshopSpeaker && (
              <div>
                <h3 className=" font-bold leading-tight capitalize ">
                  {stepData?.workshopTitle}
                </h3>

                {stepData?.workshopSpeaker && (
                  <p className="capitalize text-gray-500">
                    {" "}
                    <span className=" pr-2 text-gray-500">
                      Speaker(s)/Facilitator(s):{" "}
                    </span>
                    <span className="underline">
                      {" "}
                      {stepData?.workshopSpeaker}
                    </span>
                  </p>
                )}
              </div>
            )}
          </section>
          {stepData?.hasMany && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stepData?.sessions?.map((session) => {
                return (
                  <div key={session?.room}>
                    {session?.title && (
                      <h3 className=" font-bold leading-tight capitalize text-pyconug-darkBlue">
                        {session?.title}
                      </h3>
                    )}
                    {session?.speaker && (
                      <p className="capitalize text-gray-500">
                        {" "}
                        <span className=" pr-2 text-gray-500">
                          Speaker(s)/Facilitator(s):{" "}
                        </span>
                        <span className="underline"> {session?.speaker}</span>
                      </p>
                    )}
                    {session?.room && (
                      <p className="capitalize text-gray-500">
                        {" "}
                        <span className=" pr-2 text-gray-500">Room:</span>
                        {session?.room}
                      </p>
                    )}
                  </div>
                );
              })}
            </section>
          )}
        </div>
      </div>
    </li>
  );
}
