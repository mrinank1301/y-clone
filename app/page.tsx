import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PopularVisaSection } from "@/components/popular-visa-section"
import { MigrateSection } from "@/components/migrate-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { StudySection } from "@/components/study-section"
import { CoachingSection } from "@/components/coaching-section"
import { WorkSection } from "@/components/work-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navigation />
      <HeroSection />
      <PopularVisaSection />
      <MigrateSection />
      <WhyChooseSection />
      <StudySection />
      <CoachingSection />
      <WorkSection />
      <Footer />
    </main>
  )
}

