import HeroSection from "../2024/home/hero";
import About from "./sections/about";
import BuyTicket from "./sections/buy-ticket";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Newsletter from "./sections/newsletter";
import Speakers from "./sections/speakers";
import Sponsors from "./sections/sponsors";
import Venue from "./sections/venue";

export default function HomeComponent() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      {/* <ScheduleSection /> */}
      <Venue />
      <Sponsors />
      <Newsletter />
      <BuyTicket />
      <Contact />
    </>
  );
}
