import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";

export interface PackageItem {
  id: string;
  name: string;
  speed: string;
  speedNumber: string;
  price: number;
  image: string;
  badgeText?: string;
  features: string[];
}

export const packagesData: PackageItem[] = [
  {
    id: "normal",
    name: "Normal",
    speed: "10 Mbps",
    speedNumber: "10",
    price: 500,
    image: "/packages/pkg-normal.jpg",
    features: [
      "Phone & Computer",
      "100 Mbps BDIX",
      "100 Mbps Facebook",
      "Fixed bandwidth",
      "24/7 Support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    speed: "20 Mbps",
    speedNumber: "20",
    price: 600,
    image: "/packages/pkg-standard.jpg",
    features: [
      "Phone & Computer",
      "100 Mbps Facebook",
      "100 Mbps YouTube",
      "Uncap BDIX",
      "Fixed Bandwidth",
      "24/7 Support",
    ],
  },
  {
    id: "pro-pack",
    name: "Pro Pack",
    speed: "30 Mbps",
    speedNumber: "30",
    price: 700,
    image: "/packages/pkg-pro.jpg",
    features: [
      "100 Mbps Facebook",
      "100 Mbps YouTube",
      "Uncap BDIX",
      "Fixed Bandwidth",
      "24/7 Support",
    ],
  },
  {
    id: "rush-pack",
    name: "Rush Pack",
    speed: "40 Mbps",
    speedNumber: "40",
    price: 800,
    image: "/packages/pkg-rush.jpg",
    features: [
      "100 Mbps Facebook",
      "100 Mbps YouTube",
      "Uncap BDIX",
      "Fixed Bandwidth",
      "24/7 Support",
    ],
  },
  {
    id: "plus-pack",
    name: "Plus Pack",
    speed: "60 Mbps",
    speedNumber: "60",
    price: 1000,
    image: "/packages/pkg-plus.jpg",
    features: [
      "100 Mbps Facebook",
      "100 Mbps YouTube",
      "Uncap BDIX",
      "Fixed Bandwidth",
      "24/7 Support",
    ],
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="relative py-8 lg:py-14 bg-[#05070B]">
      <Container>
        {/* Compact Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 mb-2.5">
            <Zap className="h-3.5 w-3.5" />
            <span>High Speed Broadband Plans</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl text-[#F8FAFC]">
            Choose Your <span className="text-[#00C8FF]">Internet Package</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] max-w-2xl mx-auto">
            Ultra-fast optical fiber connections with bufferless streaming, BDIX speed boost, and 24/7 priority support.
          </p>
        </div>

        {/* Row 1: 3 cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto items-stretch">
          {packagesData.slice(0, 3).map((pkg) => (
            <PackageCard key={pkg.id} item={pkg} />
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="mt-5 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-[850px] mx-auto items-stretch">
          {packagesData.slice(3, 5).map((pkg) => (
            <PackageCard key={pkg.id} item={pkg} />
          ))}
        </div>

        {/* Bottom info banner */}
        <div className="mt-10 rounded-xl border border-white/10 bg-[#0D1420]/80 p-4 backdrop-blur text-center max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#94A3B8]">
            <span className="flex items-center gap-1.5 text-[#F8FAFC]">
              <ShieldCheck className="h-4 w-4 text-[#00C8FF]" /> Real Optical Fiber
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-[#F8FAFC]">
              <Zap className="h-4 w-4 text-red-500" /> Instant Setup & Installation
            </span>
            <span>•</span>
            <span>No Hidden Charges</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PackageCard({ item }: { item: PackageItem }) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 border border-slate-100">
      {/* Card Visual Header with Image & Badges */}
      <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={`${item.name} ${item.speed}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle dark gradient overlay at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Package Name on bottom-left */}
        <div className="absolute bottom-2.5 left-3.5 text-left">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
            {item.name}
          </h3>
        </div>

        {/* Red Speed Badge on bottom-right */}
        <div className="absolute bottom-0 right-0 rounded-tl-xl bg-[#E50914] px-3 py-1 sm:px-3.5 sm:py-1.5 text-center text-white shadow-md">
          <div className="text-base sm:text-lg font-extrabold leading-tight">{item.speedNumber}</div>
          <div className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase opacity-95">Mbps</div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 bg-white">
        {/* Features List */}
        <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-700">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#E50914] shrink-0" />
              <span className="font-medium line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price & Action Button */}
        <div className="mt-4 border-t border-slate-100 pt-3.5">
          <div className="text-left">
            <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              START FROM
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-extrabold text-[#E50914] tracking-tight">
                ৳{item.price}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
                /MONTH
              </span>
            </div>
          </div>

          <div className="mt-3">
            <Link
              href={`/order?package=${encodeURIComponent(item.id)}`}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#E50914] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm shadow-red-500/20 transition-all duration-200 hover:bg-[#C7000B] hover:shadow-md hover:shadow-red-500/30 active:scale-[0.98]"
            >
              <span>GET NOW</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
