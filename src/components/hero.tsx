"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Wifi, 
  CheckCircle2, 
  Radio, 
  Headset 
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
      {/* Ambient background glow & subtle telecom grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-radial-glow pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#00C8FF] shadow-[0_0_15px_-3px_rgba(0,200,255,0.25)] mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C8FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C8FF]"></span>
              </span>
              <span>Modern Internet for Southern Bangladesh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl xl:text-7xl leading-[1.15] text-[#F8FAFC]">
              City-Speed Internet, <br />
              Now{" "}
              <span className="bg-gradient-to-r from-[#00C8FF] via-[#168BFF] to-[#00C8FF] bg-clip-text text-transparent glow-text-cyan">
                Closer to Home.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-relaxed text-[#94A3B8] max-w-2xl font-normal">
              iSpeed delivers fast, stable, and reliable optical fiber internet for homes, businesses, and institutions across Dhemoshia and Southern Bangladesh.
            </p>

            {/* Buttons */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link href="/packages" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-sm sm:text-base font-bold shadow-[0_0_20px_-3px_rgba(0,200,255,0.4)]">
                  <span>Explore Packages</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 text-sm sm:text-base">
                  <span>Contact Hotline</span>
                </Button>
              </Link>
            </div>

            {/* Micro Feature Line below buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#94A3B8]">
              <span className="flex items-center gap-1.5 font-medium text-[#F8FAFC]/90">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C8FF]"></span>
                Fiber Network
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 font-medium text-[#F8FAFC]/90">
                <span className="h-1.5 w-1.5 rounded-full bg-[#168BFF]"></span>
                Local Support
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 font-medium text-[#F8FAFC]/90">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C8FF]"></span>
                Future-Ready Connectivity
              </span>
            </div>
          </div>

          {/* Right Column: Lightweight Futuristic Network Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0 overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[320px] sm:max-w-[440px] aspect-square flex items-center justify-center scale-90 sm:scale-100">
              {/* Soft Gradient Concentric Circles */}
              <div className="absolute inset-0 rounded-full border border-white/[0.05] bg-gradient-to-tr from-[#00C8FF]/5 to-transparent animate-pulse-ring" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#00C8FF]/20" />
              <div className="absolute inset-20 rounded-full border border-white/[0.06] bg-[#0A0F18]/40 backdrop-blur-xs" />
              <div className="absolute inset-32 rounded-full border border-[#168BFF]/30 bg-gradient-to-b from-[#00C8FF]/10 to-transparent" />

              {/* Connecting Lines SVG */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 200 200 L 90 100" 
                  stroke="rgba(0, 200, 255, 0.25)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
                <path 
                  d="M 200 200 L 310 90" 
                  stroke="rgba(22, 139, 255, 0.3)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
                <path 
                  d="M 200 200 L 95 300" 
                  stroke="rgba(0, 200, 255, 0.25)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
                <path 
                  d="M 200 200 L 305 310" 
                  stroke="rgba(22, 139, 255, 0.3)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />

                {/* Glowing Network Dots */}
                <circle cx="90" cy="100" r="4" fill="#00C8FF" className="filter drop-shadow-[0_0_6px_#00C8FF]" />
                <circle cx="310" cy="90" r="4" fill="#168BFF" className="filter drop-shadow-[0_0_6px_#168BFF]" />
                <circle cx="95" cy="300" r="4" fill="#00C8FF" className="filter drop-shadow-[0_0_6px_#00C8FF]" />
                <circle cx="305" cy="310" r="4" fill="#168BFF" className="filter drop-shadow-[0_0_6px_#168BFF]" />
                
                {/* Secondary orbit dots */}
                <circle cx="200" cy="40" r="3" fill="rgba(0, 200, 255, 0.6)" />
                <circle cx="360" cy="200" r="3" fill="rgba(22, 139, 255, 0.6)" />
                <circle cx="200" cy="360" r="3" fill="rgba(0, 200, 255, 0.6)" />
                <circle cx="40" cy="200" r="3" fill="rgba(22, 139, 255, 0.6)" />
              </svg>

              {/* Central Optical Hub */}
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D1420] to-[#0A0F18] border border-[#00C8FF]/50 shadow-[0_0_35px_-5px_rgba(0,200,255,0.4)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00C8FF]/15 border border-[#00C8FF]/40">
                  <Radio className="h-7 w-7 text-[#00C8FF] animate-pulse" />
                </div>
                <div className="absolute -bottom-2 rounded-full bg-[#00C8FF] px-2 py-0.5 text-[9px] font-bold text-[#05070B] tracking-wider uppercase">
                  iSpeed Hub
                </div>
              </div>

              {/* Floating Card 1: Fiber Network / Online (Top Right) */}
              <div className="absolute -top-2 -right-2 sm:right-2 z-20 animate-float-slow">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0D1420]/90 px-4 py-2.5 shadow-xl backdrop-blur-md hover:border-[#00C8FF]/40 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00C8FF]/10 text-[#00C8FF]">
                    <Wifi className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#F8FAFC]">Fiber Network</p>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00C8FF] animate-ping" />
                      <p className="text-[11px] font-medium text-[#00C8FF]">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Stable Connection / Optimized (Bottom Left) */}
              <div className="absolute -bottom-2 -left-2 sm:left-0 z-20 animate-float-delayed">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0D1420]/90 px-4 py-2.5 shadow-xl backdrop-blur-md hover:border-[#168BFF]/40 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#168BFF]/10 text-[#168BFF]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#F8FAFC]">Stable Connection</p>
                    <p className="text-[11px] font-medium text-[#168BFF]">Optimized</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Local Support / Available (Right Edge) */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-20 animate-float-slow">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0D1420]/90 px-4 py-2.5 shadow-xl backdrop-blur-md hover:border-[#00C8FF]/40 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00C8FF]/10 text-[#00C8FF]">
                    <Headset className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#F8FAFC]">Local Support</p>
                    <p className="text-[11px] font-medium text-[#00C8FF]">Available</p>
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
