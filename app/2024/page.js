import About from "@/components/2024/home/about-section";
import HeroSection from "@/components/2024/home/hero";
import KeyNotes from "@/components/2024/home/key-notes";
import Sponsors from "@/components/2024/home/sponsors";
import Tickets from "@/components/2024/home/tickets";
import Venue from "@/components/2024/home/venue";
import Contact from "@/components/2023/home/sections/contact";
import Newsletter from "@/components/2023/home/sections/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Tickets />
      <div className="w-full h-[80vh] px-4">
        <iframe
          className="w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CaxkWrZcdQU?si=HS54xGq4b-k5gCCc&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* <KeyNotes /> */}
      {/* <ScheduleSection /> */}
      <Sponsors />
      <Venue />
      <Newsletter />
      <Contact />{" "}
    </>
  );
}
