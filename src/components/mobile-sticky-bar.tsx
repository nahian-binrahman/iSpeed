"use client";

import React from "react";
import Link from "next/link";
import { Phone, Zap } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 sm:p-3 bg-[#05070B]/95 backdrop-blur-xl border-t border-white/15 md:hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now button */}
        <a
          href="tel:+8801778298484"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#0D1420] py-3 text-sm font-bold text-white shadow-md active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 text-[#00C8FF]" />
          <span>Call Now</span>
        </a>

        {/* View Packages button */}
        <Link
          href="/packages"
          className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-black text-black shadow-lg shadow-white/10 active:scale-95 transition-transform hover:bg-slate-100"
        >
          <Zap className="h-4 w-4 text-[#E50914] fill-[#E50914]" />
          <span>View Packages</span>
        </Link>
      </div>
    </div>
  );
}
