import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  Server, 
  Router, 
  Network, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const entrepreneurTopics = [
  "ISP Business Basics",
  "Network Planning",
  "Bandwidth Management",
  "MikroTik / Routing Concepts",
  "Customer Management",
  "Billing & Operations",
  "Troubleshooting",
  "Business Growth",
];

const technicianTopics = [
  "Fiber Optic Basics",
  "Cable Handling",
  "Splicing",
  "Jointing",
  "Fiber Testing",
  "OTDR Basics",
  "ONU / OLT Fundamentals",
  "FTTH Installation",
  "Troubleshooting",
  "Safety Practices",
];

export function TrainingSection() {
  return (
    <section id="training" className="relative py-20 lg:py-28 border-t border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-3.5 py-1 text-xs font-semibold text-[#00C8FF] mb-4">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>iSpeed Academy</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
            Building the Next Generation of Internet Entrepreneurs and Technicians
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            Practical, industry-focused training for aspiring ISP entrepreneurs and fiber technicians.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {/* AREA 1: ISP ENTREPRENEUR TRAINING */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D1420] p-8 sm:p-10 lg:p-12 transition-all hover:border-[#00C8FF]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#00C8FF] mb-2">
                  For Future Entrepreneurs
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  Want to Start Your Own ISP Business?
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                  iSpeed provides practical ISP entrepreneurship training for young people who want to start or operate an internet service business in their own area.
                </p>

                {/* Topics Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {entrepreneurTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-[#F8FAFC]/90">
                      <CheckCircle2 className="h-4 w-4 text-[#00C8FF] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="#contact">
                    <Button size="lg" className="gap-2">
                      <span>Learn About ISP Training</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Area 1 Visual: Router, Server, Network & Connected CSS Lines */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-square rounded-2xl border border-white/10 bg-[#05070B]/80 p-5 sm:p-6 flex flex-col justify-between shadow-xl scale-95 sm:scale-100">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-[#94A3B8]">
                    <span>ISP Architecture Lab</span>
                    <span className="text-[#00C8FF] font-medium">Enterprise Simulation</span>
                  </div>

                  <div className="relative my-6 flex h-40 items-center justify-around">
                    {/* SVG connecting paths */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 150">
                      <path d="M 60 75 L 150 40 L 240 75" stroke="rgba(0, 200, 255, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M 60 75 L 150 110 L 240 75" stroke="rgba(22, 139, 255, 0.4)" strokeWidth="2" />
                    </svg>

                    {/* Server Node */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] shadow-[0_0_15px_rgba(0,200,255,0.3)]">
                        <Server className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#F8FAFC]">Core Server</span>
                    </div>

                    {/* Router Node */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#168BFF]/40 bg-[#168BFF]/15 text-[#168BFF] shadow-[0_0_20px_rgba(22,139,255,0.3)]">
                        <Router className="h-7 w-7 animate-pulse" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#00C8FF]">MikroTik Router</span>
                    </div>

                    {/* Network Distribution Node */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] shadow-[0_0_15px_rgba(0,200,255,0.3)]">
                        <Network className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#F8FAFC]">Distribution</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-[#94A3B8]">
                    <span>Bandwidth Management</span>
                    <span className="text-[#00C8FF] font-medium">BGP / OSPF Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AREA 2: FIBER TECHNICIAN TRAINING */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D1420] p-8 sm:p-10 lg:p-12 transition-all hover:border-[#168BFF]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2">
                  Technical Skills
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  Training Skilled Fiber Technicians for the Future
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                  Hands-on training focused on fiber installation, maintenance, testing, and troubleshooting.
                </p>

                {/* Topics Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicianTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-[#F8FAFC]/90">
                      <CheckCircle2 className="h-4 w-4 text-[#168BFF] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="#contact">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <span>Explore Fiber Training</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Area 2 Visual: Glowing Fiber-Line Illustration using CSS */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-square rounded-2xl border border-white/10 bg-[#05070B]/80 p-5 sm:p-6 flex flex-col justify-between shadow-xl overflow-hidden scale-95 sm:scale-100">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-[#94A3B8]">
                    <span>Fiber Splicing & OTDR Lab</span>
                    <span className="text-[#168BFF] font-medium">FTTH Standards</span>
                  </div>

                  {/* Glowing Fiber Strands Illustration */}
                  <div className="relative my-4 h-40 w-full flex flex-col justify-center gap-4">
                    {/* Fiber Core 1 */}
                    <div className="relative w-full h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center">
                      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent shadow-[0_0_12px_#00C8FF]" />
                    </div>
                    {/* Fiber Core 2 (Laser Pulse) */}
                    <div className="relative w-full h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center">
                      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#168BFF] to-transparent shadow-[0_0_15px_#168BFF]" />
                    </div>
                    {/* Fiber Core 3 */}
                    <div className="relative w-full h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center">
                      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent shadow-[0_0_12px_#00C8FF]" />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-[#94A3B8] flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-[#00C8FF]" />
                        1310nm / 1550nm Laser
                      </span>
                      <span className="text-[#00C8FF] font-semibold">0.02 dB Splice Loss</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-[#94A3B8]">
                    <span>Safety Certified</span>
                    <span className="text-[#168BFF] font-medium">Hands-On Field Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
