import type { Metadata } from "next";
import { PackagesSection } from "@/components/packages-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Internet Packages & Pricing | iSpeed Optical Fiber",
  description:
    "Explore high-speed optical fiber internet packages from 10 Mbps to 60 Mbps starting from ৳500/month with bufferless streaming and 24/7 support in Southern Bangladesh.",
};

export default function PackagesPage() {
  return (
    <>
      <PackagesSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
