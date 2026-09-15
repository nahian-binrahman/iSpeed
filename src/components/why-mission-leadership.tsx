import React from "react";
import { 
  Wifi, 
  Activity, 
  Headphones, 
  Building, 
  Lightbulb, 
  Wrench, 
  Sparkles, 
  User, 
  ShieldCheck 
} from "lucide-react";
import { Container } from "@/components/ui/container";

const whyCards = [
  {
    icon: Wifi,
    title: "Fiber-First Network",
    description: "Modern fiber-based connectivity designed for better performance.",
  },
  {
    icon: Activity,
    title: "Reliable Connectivity",
    description: "Stable internet for everyday use and business needs.",
  },
  {
    icon: Headphones,
    title: "Local Technical Support",
    description: "Customer-focused support for local communities.",
  },
  {
    icon: Building,
    title: "Business-Ready Infrastructure",
    description: "Connectivity designed for modern offices and growing businesses.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneur Development",
    description: "Helping young people understand and build ISP businesses.",
  },
  {
    icon: Wrench,
    title: "Technician Training",
    description: "Developing practical fiber networking and field skills.",
  },
];

export function WhyMissionLeadership() {
  return (
    <div id="about" className="relative space-y-24 py-20 lg:space-y-32 lg:py-28 border-t border-white/[0.08]">
      {/* 1. WHY iSPEED */}
      <section className="relative">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-3.5 py-1 text-xs font-semibold text-[#00C8FF] mb-4">
              <span>Why iSpeed</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
              More Than an Internet Provider
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0D1420] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C8FF]/40 hover:shadow-[0_0_25px_-5px_rgba(0,200,255,0.15)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00C8FF] transition-all group-hover:border-[#00C8FF] group-hover:shadow-[0_0_15px_rgba(0,200,255,0.3)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#F8FAFC]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial-glow opacity-40 pointer-events-none" />

        <Container>
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#0D1420]/90 to-[#0A0F18]/90 p-8 sm:p-14 lg:p-16 text-center backdrop-blur-xl shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C8FF]">
              Our Mission
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-[#F8FAFC] leading-tight">
              Our Goal Is Bigger Than Providing Internet.
            </h2>
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#94A3B8] font-normal max-w-3xl mx-auto">
              We want to build a digital ecosystem where rural and suburban communities can access better connectivity, young people can gain practical technology skills, and new entrepreneurs can create their own ISP businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. LEADERSHIP SECTION */}
      <section className="relative">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
              Leadership at iSpeed
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Profile 1 */}
            <div className="group rounded-2xl border border-white/[0.08] bg-[#0D1420] p-6 sm:p-8 transition-all hover:border-[#00C8FF]/40 hover:shadow-[0_0_30px_-5px_rgba(0,200,255,0.15)] text-center sm:text-left flex flex-col sm:flex-row items-center gap-6">
              <div className="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#00C8FF]/40 shadow-inner bg-[#05070B]">
                <img
                  src="/team/nahian-bin-rahman.jpg"
                  alt="Nahian Bin Rahman - Chief Technology Officer"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 rounded-full bg-[#00C8FF] ring-2 ring-[#0D1420]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F8FAFC]">
                  Nahian Bin Rahman
                </h3>
                <p className="text-sm font-semibold text-[#00C8FF] mt-1">
                  Chief Technology Officer
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  Leading iSpeed&apos;s technology, network innovation, and technical development initiatives.
                </p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="group rounded-2xl border border-white/[0.08] bg-[#0D1420] p-6 sm:p-8 transition-all hover:border-[#168BFF]/40 hover:shadow-[0_0_30px_-5px_rgba(22,139,255,0.15)] text-center sm:text-left flex flex-col sm:flex-row items-center gap-6">
              <div className="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#168BFF]/40 shadow-inner bg-[#05070B]">
                <img
                  src="/team/omar-farooq-baig.jpg"
                  alt="Omar Farooq Baig - General Manager"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 rounded-full bg-[#168BFF] ring-2 ring-[#0D1420]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F8FAFC]">
                  Omar Farooq Baig
                </h3>
                <p className="text-sm font-semibold text-[#168BFF] mt-1">
                  General Manager
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  Leading iSpeed&apos;s operations, service development, and organizational growth.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
