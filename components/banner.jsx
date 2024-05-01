"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [isShowed, setIsShowed] = useState(true);

  return (
    <>
      {isShowed ? (
        <div className="bg-gray-200 md:py-4 lg:px-24 md:px-16 px-6 py-2 text-center text-sm text-gray-900">
          <div className="container flex items-center justify-between">
            <p>
              🎉 <span className="font-bold">Big Announcement!</span> 🌍 Join us
              for PyCon Uganda 2024, paving the way to PyCon Africa 2026 🇺🇬 !
            </p>
            <div className="flex flex-row items-center space-x-4">
              <span className="text-blue-400">
                <Link
                  href="https://twitter.com/pyconafrica/status/1784915709513892285?t=OKuV23QLnKtH4ulO2G2XZA&s=19"
                  target="_blank"
                  className="underline"
                >
                  Read More
                </Link>
              </span>
              <button
                className="rounded-full text-gray-900 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                size="icon"
                variant="ghost"
                onClick={() => setIsShowed(false)}
              >
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Dismiss</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
