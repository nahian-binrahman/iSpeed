import { Hero } from "@/components/hero";
import { BenefitsStrip } from "@/components/benefits-strip";
import { InternetServices } from "@/components/internet-services";
import { PackagesSection } from "@/components/packages-section";
import { CoverageSection } from "@/components/coverage-section";
import { TrainingSection } from "@/components/training-section";
import { WhyMissionLeadership } from "@/components/why-mission-leadership";
import { ContactForms } from "@/components/contact-forms";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <InternetServices />
      <PackagesSection />
      <CoverageSection />
      <TrainingSection />
      <WhyMissionLeadership />
      <ContactForms />
      <FaqSection />
      <FinalCta />
    </>
  );
}
