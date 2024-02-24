"use client";
import KeynoteSpeakerCard from "@/components/speakers/keynote-speaker-card";
import { KEYNOTESPEAKERS } from "@/components/speakers/keynote-speakers-data";
import ToBeAnnounced from "@/components/to-be-announced";
import Image from "next/image";
import Link from "next/link";

export default function KeyNotes() {
  return (
    <main className="space-y-14 my-20 bg-[#f6f7fd] py-[80px]">
      <section className="">
        <div className="flex flex-col justify-center items-center text-[#0e1b4d]">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Keynote Speakers
          </h1>
        </div>
      </section>
      <ToBeAnnounced />
    </main>
  );
}
