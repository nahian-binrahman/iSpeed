import React from "react";
import Link from "next/link";
import { MapPin, Radio, PhoneCall, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CoverageSection() {
  return (
    <section id="coverage" className="relative py-20 lg:py-28 border-t border-white/[0.08]">
      <Container>
        {/* Modern Dark Panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0D1420] to-[#0A0F18] p-5 sm:p-10 lg:p-16 shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-glow pointer-events-none opacity-50" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
                High-Speed Optical Fiber in Cox&apos;s Bazar
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
                Providing ultra-fast and uninterrupted optical fiber broadband across Dhemoshia and nearby unions. Backed by redundant fiber rings, local technician hubs, and 24/7 dedicated support.
              </p>

              {/* Coverage Stats: 21 Villages, 4 Unions, 1200+ Clients */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-xl border border-white/10 bg-[#05070B]/80 p-4 text-center">
                  <div className="text-2xl sm:text-4xl font-black text-[#00C8FF]">21</div>
                  <div className="text-xs font-medium text-[#94A3B8] mt-1">Villages Covered</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#05070B]/80 p-4 text-center">
                  <div className="text-2xl sm:text-4xl font-black text-[#168BFF]">4</div>
                  <div className="text-xs font-medium text-[#94A3B8] mt-1">Unions Covered</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#05070B]/80 p-4 text-center">
                  <div className="text-2xl sm:text-4xl font-black text-[#00C8FF]">1200+</div>
                  <div className="text-xs font-medium text-[#94A3B8] mt-1">Active Clients</div>
                </div>
              </div>

              {/* Network Details & Quick Connect */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#05070B]/70 p-5 sm:p-6 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#94A3B8]">
                  <MapPin className="h-4 w-4 text-[#00C8FF] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Central Hub:</strong> Holding no.-211, Ward no- 2, Dhemoshia, Cox&apos;s Bazar, Bangladesh
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a
                    href="tel:+8801778298484"
                    className="flex items-center gap-2 text-[#00C8FF] font-semibold hover:underline"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Hotline: +8801778298484</span>
                  </a>
                  <span className="text-white/20">•</span>
                  <span className="text-pink-400 font-medium">
                    bKash: +8801818336501
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link href="/packages">
                    <Button className="w-full sm:w-auto gap-2 bg-[#E50914] hover:bg-[#C7000B] text-white">
                      <span>View Internet Packages</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/#connection-form">
                    <Button variant="secondary" className="w-full sm:w-auto gap-2">
                      <span>Become a Reseller</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side: Network Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-2xl border border-white/10 bg-[#05070B]/80 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Radio className="h-4 w-4 text-[#00C8FF]" />
                    <span className="text-xs font-semibold text-[#F8FAFC]">Cox&apos;s Bazar Fiber Ring</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#00C8FF]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00C8FF] animate-pulse" />
                    Active Mesh
                  </span>
                </div>

                {/* Abstract CSS Network Nodes & Lines */}
                <div className="relative my-4 h-52 w-full flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" fill="none">
                    {/* Ring connections */}
                    <path
                      d="M 50 70 L 150 40 L 250 80 L 220 160 L 100 150 Z"
                      stroke="rgba(0, 200, 255, 0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 150 40 L 150 110 L 100 150"
                      stroke="rgba(22, 139, 255, 0.4)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 150 110 L 220 160"
                      stroke="rgba(22, 139, 255, 0.4)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 50 70 L 150 110 L 250 80"
                      stroke="rgba(0, 200, 255, 0.35)"
                      strokeWidth="1.5"
                    />

                    {/* Nodes */}
                    <circle cx="150" cy="110" r="7" fill="#00C8FF" className="filter drop-shadow-[0_0_8px_#00C8FF]" />
                    <circle cx="50" cy="70" r="4.5" fill="#168BFF" />
                    <circle cx="150" cy="40" r="5" fill="#00C8FF" />
                    <circle cx="250" cy="80" r="4.5" fill="#168BFF" />
                    <circle cx="100" cy="150" r="4.5" fill="#00C8FF" />
                    <circle cx="220" cy="160" r="4.5" fill="#168BFF" />

                    {/* Node Labels */}
                    <text x="130" y="130" fill="#F8FAFC" fontSize="10" fontWeight="bold">Dhemoshia Hub</text>
                    <text x="25" y="60" fill="#94A3B8" fontSize="9">Chakaria</text>
                    <text x="125" y="30" fill="#94A3B8" fontSize="9">Cox&apos;s Bazar</text>
                    <text x="235" y="70" fill="#94A3B8" fontSize="9">Badarkhali</text>
                    <text x="65" y="170" fill="#94A3B8" fontSize="9">Matamuhuri</text>
                    <text x="200" y="180" fill="#94A3B8" fontSize="9">Moheshkhali</text>
                  </svg>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-[#94A3B8]">
                  <span>21 Villages • 4 Unions</span>
                  <span className="text-[#00C8FF] font-medium">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
