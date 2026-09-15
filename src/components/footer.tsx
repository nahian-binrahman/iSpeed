import React from "react";
import Link from "next/link";
import { Radio, Mail, Phone, MapPin, ShieldCheck, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0F18] text-[#94A3B8]">
      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C8FF]/20 to-[#168BFF]/10 border border-[#00C8FF]/40 shadow-[0_0_15px_-3px_rgba(0,200,255,0.3)]">
                <Radio className="h-5 w-5 text-[#00C8FF]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#F8FAFC]">
                i<span className="text-[#00C8FF]">Speed</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Bringing better digital connectivity to communities across southern Bangladesh.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#00C8FF]">
              <ShieldCheck className="h-4 w-4" />
              <span>Licensed ISP & Training Provider</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F8FAFC]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/packages" className="transition-colors hover:text-[#00C8FF]">
                  Internet Packages
                </Link>
              </li>
              <li>
                <Link href="/#internet" className="transition-colors hover:text-[#00C8FF]">
                  Home Internet
                </Link>
              </li>
              <li>
                <Link href="/#internet" className="transition-colors hover:text-[#00C8FF]">
                  Business Internet
                </Link>
              </li>
              <li>
                <Link href="/#internet" className="transition-colors hover:text-[#00C8FF]">
                  Dedicated Connectivity
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Training */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F8FAFC]">
              Training
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#training" className="transition-colors hover:text-[#00C8FF]">
                  ISP Entrepreneur Training
                </Link>
              </li>
              <li>
                <Link href="#training" className="transition-colors hover:text-[#00C8FF]">
                  Fiber Technician Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F8FAFC]">
              Company & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#about" className="transition-colors hover:text-[#00C8FF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#about" className="transition-colors hover:text-[#00C8FF]">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/#connection-form" className="transition-colors hover:text-[#00C8FF]">
                  Reseller Partnership
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition-colors hover:text-[#00C8FF]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-[#00C8FF]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info & Payment */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-white/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-4 text-xs text-[#94A3B8]">
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 text-[#00C8FF] shrink-0 mt-0.5" />
            <span>Holding no.-211, Ward no- 2, Dhemoshia, Cox&apos;s Bazar, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 text-[#00C8FF] shrink-0" />
            <span>
              Phone:{" "}
              <a href="tel:+8801778298484" className="text-[#F8FAFC] font-semibold hover:text-[#00C8FF] transition-colors">
                +8801778298484
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E2136E] text-[10px] font-black text-white shrink-0">
              ৳
            </span>
            <span>
              bKash Payment:{" "}
              <a href="tel:+8801818336501" className="text-[#F8FAFC] font-bold hover:text-[#00C8FF] transition-colors">
                +8801818336501
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-[#00C8FF] shrink-0" />
            <span>21 Villages • 4 Unions • 1200+ Clients</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs text-[#94A3B8] sm:flex-row">
          <p>© iSpeed. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-[#00C8FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-[#00C8FF] transition-colors">
              Terms of Service
            </Link>
            <Link href="#faq" className="hover:text-[#00C8FF] transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
