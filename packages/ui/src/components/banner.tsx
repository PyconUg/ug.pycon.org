"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [isShowed, setIsShowed] = useState(true);

  return (
    <>
      {isShowed ? (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-yellow-500 via-black to-red-500 opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-red-500 via-black to-yellow-500 opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <p>
            🎉 <span className="font-bold">Big Announcement!</span> 🌍 PyCon Uganda to Host PyCon Africa 2026!
            <Link
              href="https://twitter.com/pyconafrica/status/1784915709513892285?t=OKuV23QLnKtH4ulO2G2XZA&s=19"
              target="_blank"
              className="whitespace-nowrap font-bold underline text-blue-600 ml-8"
            >
              Read More
            </Link>
          </p>
          <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={() => setIsShowed(false)}>
              <span className="sr-only">Dismiss</span>
              <Cross2Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}