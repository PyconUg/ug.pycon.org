import Contact from "@pycon/ui/src/2024/components/home/about-section"
import HeroSection from "@pycon/ui/src/2024/components/home/hero";
import KeyNotes from "@pycon/ui/src/2024/components/home/key-notes";
import Sponsors from "@pycon/ui/src/2024/components/home/sponsors";
import Tickets from "@pycon/ui/src/2024/components/home/tickets";
import Venue from "@pycon/ui/src/2024/components/home/venue";
import About from "@pycon/ui/src/2023/components/home/sections/contact";
import Newsletter from "@pycon/ui/src/2023/components/home/sections/newsletter";

export default function HomePage() {
  return (
    <div className="space-y-16 bg-[#f6f7fd]">
      <HeroSection />
      <About />
      <Tickets />
      {/* <div className="w-full h-[80vh] px-4">
        <iframe
          className="w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CaxkWrZcdQU?si=HS54xGq4b-k5gCCc&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}
      <KeyNotes />
      {/* <ScheduleSection /> */}
      <Sponsors />
      <Venue />
      <Newsletter />
      <Contact />{" "}
    </div>
  );
}
