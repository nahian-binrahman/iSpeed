import React from "react";
import { HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What type of internet services does iSpeed provide?",
    a: "iSpeed provides Home Internet for everyday browsing, streaming, and remote work; Business Internet for offices and enterprises; and Dedicated Connectivity for organizations with customized network demands.",
  },
  {
    q: "How can I check if iSpeed is available in my area?",
    a: "You can use the Coverage Checker tool above by selecting your district and upazila, or submit a connection request so our local field team can verify optical fiber reach at your location.",
  },
  {
    q: "How do I request a new internet connection?",
    a: "Fill out the Connection Request form on this page with your contact details, district, and exact address. Our local team will contact you to arrange survey and setup.",
  },
  {
    q: "Who is the ISP Entrepreneur Training for?",
    a: "The training is tailored for young professionals, entrepreneurs, and local operators who want to understand network architecture, bandwidth management, and build a sustainable local ISP operation.",
  },
  {
    q: "What is included in Fiber Technician Training?",
    a: "It includes practical, hands-on instruction in fiber cable handling, fusion splicing, jointing, OTDR testing, ONU/OLT fundamentals, FTTH field installations, and workplace safety.",
  },
  {
    q: "How can I contact iSpeed for business internet?",
    a: "You can select 'Business Internet' in the Connection Request form or reach out through our helpline and email to discuss tailored business packages with our solutions team.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 lg:py-28 border-t border-white/[0.08]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-3.5 py-1 text-xs font-semibold text-[#00C8FF] mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
            Got Questions? We&apos;re Here to Help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Quick answers to common questions about our fiber internet and training programs.
          </p>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
