"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Menu, 
  Wifi, 
  ArrowRight, 
  GraduationCap, 
  PhoneCall, 
  Users, 
  Home, 
  Radio,
  Zap
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Packages", href: "/packages", icon: Zap },
  { name: "Internet", href: "/#internet", icon: Wifi },
  { name: "Training", href: "/#training", icon: GraduationCap },
  { name: "About Us", href: "/#about", icon: Users },
  { name: "Contact", href: "/#contact", icon: PhoneCall },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C8FF]/20 to-[#168BFF]/10 border border-[#00C8FF]/40 shadow-[0_0_20px_-3px_rgba(0,200,255,0.35)] group-hover:border-[#00C8FF] group-hover:shadow-[0_0_25px_0px_rgba(0,200,255,0.5)] transition-all duration-300">
              <Radio className="h-6 w-6 text-[#00C8FF] transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C8FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C8FF]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-sans">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F8FAFC]">
                  i<span className="text-[#00C8FF]">Speed</span>
                </span>
                <span className="rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/30 px-1.5 py-0.5 text-[10px] font-semibold text-[#00C8FF]">
                  ISP
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#94A3B8] line-clamp-1">
                Southern Bengal Fiber Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-[#94A3B8] transition-colors duration-200 hover:text-[#F8FAFC] hover:bg-white/[0.04] rounded-lg group"
              >
                <span>{link.name}</span>
                <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#contact">
              <Button size="default" className="group gap-2">
                <span>Get Connected</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Trigger (shadcn Sheet) */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/#contact">
              <Button size="sm" variant="secondary" className="text-xs px-3 font-semibold">
                Connect
              </Button>
            </Link>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0D1420] text-[#F8FAFC] hover:border-[#00C8FF]/40 hover:text-[#00C8FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="flex flex-col justify-between overflow-y-auto max-h-screen">
                <div>
                  <SheetHeader className="pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00C8FF]/20 to-[#168BFF]/10 border border-[#00C8FF]/40">
                        <Radio className="h-5 w-5 text-[#00C8FF]" />
                      </div>
                      <div className="text-left">
                        <SheetTitle className="text-xl font-bold tracking-tight text-[#F8FAFC]">
                          i<span className="text-[#00C8FF]">Speed</span>
                        </SheetTitle>
                        <p className="text-xs text-[#94A3B8]">
                          Optical Fiber Network
                        </p>
                      </div>
                    </div>
                  </SheetHeader>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-2 py-6">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <SheetClose asChild key={link.name}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3.5 rounded-lg px-3.5 py-3 text-base font-medium text-[#94A3B8] transition-all hover:bg-white/[0.04] hover:text-[#00C8FF] active:bg-white/[0.08]"
                          >
                            <Icon className="h-5 w-5 text-[#00C8FF]/80" />
                            <span>{link.name}</span>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Drawer Bottom Action */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="rounded-xl border border-white/10 bg-[#0D1420] p-4 text-left">
                    <p className="text-xs font-semibold text-[#00C8FF] flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#00C8FF] animate-pulse"></span>
                      Dhemoshia, Cox&apos;s Bazar Coverage
                    </p>
                    <p className="mt-1 text-xs text-[#94A3B8]">
                      21 Villages • 4 Unions • 1200+ Clients
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#F8FAFC]">
                      Hotline: <a href="tel:+8801778298484" className="text-[#00C8FF]">+8801778298484</a>
                    </p>
                  </div>

                  <SheetClose asChild>
                    <Link href="/#contact" className="block w-full">
                      <Button className="w-full justify-center gap-2 py-3 text-base">
                        <span>Get Connected</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
