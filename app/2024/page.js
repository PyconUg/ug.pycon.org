import About from "@/components/2024/home/about-section";
import HeroSection from "@/components/2024/home/hero"; 
import KeyNotes from "@/components/2024/home/key-notes";
import Sponsors from "@/components/2024/home/sponsors";
import Tickets from "@/components/2024/home/tickets";
import Venue from "@/components/2024/home/venue"; 
import Contact from "@/components/home/sections/contact";
import Newsletter from "@/components/home/sections/newsletter"; 

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <KeyNotes />
      {/* <ScheduleSection /> */}
      <Venue />
      <Sponsors />
      <Newsletter />
      <Tickets />
      <Contact />{" "}
    </>
  );
}
