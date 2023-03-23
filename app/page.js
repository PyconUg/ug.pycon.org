import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakerSection from "@/components/SpeakerSection";
import ScheduleSection from "@/components/ScheduleSection";
import VenueSection from "@/components/VenueSection";
import SponsorSection from "@/components/SponsorSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SpeakerSection />
      <ScheduleSection />
      <VenueSection />
      <SponsorSection />
      <NewsletterSection />
    </main>
  );
}
