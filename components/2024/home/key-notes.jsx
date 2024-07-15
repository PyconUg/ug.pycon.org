"use client";
import { KEYNOTESPEAKERS_2024 } from "@/2024/speakers/keynote-speakers-data";
import KeynoteSpeakerCard from "@/components/speakers/keynote-speaker-card";
import { KEYNOTESPEAKERS } from "@/components/speakers/keynote-speakers-data";
import ToBeAnnounced from "@/components/to-be-announced";
import Image from "next/image";
import Link from "next/link";
import KeynoteSpeakerCards from "@/components/speakers/keynote-speaker-cards";

export default function KeyNotes() {
  return (
    <main className="space-y-14 bg-[#f6f7fd]">
      <section className="">
        <div className="flex flex-col justify-center items-center text-[#0e1b4d]">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Keynote Speakers
          </h1>
        </div>
      </section>
      <KeynoteSpeakerCards data={KEYNOTESPEAKERS_2024} />
    </main>
  );
}
