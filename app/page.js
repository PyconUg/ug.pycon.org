import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakerSection from "@/components/SpeakerSection";
import ScheduleSection from "@/components/ScheduleSection";
import VenueSection from "@/components/VenueSection";
import SponsorSection from "@/components/SponsorSection";
import NewsletterSection from "@/components/NewsletterSection";
import BuyTicketSection from "@/components/BuyTicketSection";
import ContactUsSection from "@/components/ContactUsSection";
import DiversityPage from './financial-aid/page';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpeakerSection />
      {/* <ScheduleSection /> */}
      <VenueSection />
      <SponsorSection />
      <NewsletterSection />
      <BuyTicketSection />
      <DiversityPage/>
      <ContactUsSection />
    </>
  );
}
