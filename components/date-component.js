"use client";
import { useEffect, useState } from "react";

export default function DateComponent() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const targetDate = new Date(2023, 8, 23); // September is 8th month (zero-based index)
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function DateItem(params) {
    return (
      <>
        {" "}
        <p className="font-bold text-3xl"> {params.value}</p>{" "}
        <p className="text-sm text-gray-500">{params.duration}</p>
      </>
    );
  }
  return (
    <div className="bg-white shadow-lg p-6 flex space-x-8 rounded-md">
      <div className="">
        <DateItem value={countdown.days} duration={"DAYS"} />
      </div>
      <div className="">
        <DateItem value={countdown.hours} duration={"HRS"} />
      </div>
      <div className="">
        {" "}
        <DateItem value={countdown.minutes} duration={"MINS"} />
      </div>
      <div>
        {" "}
        <DateItem value={countdown.seconds} duration={"SECS"} />
      </div>
    </div>
  );
}
