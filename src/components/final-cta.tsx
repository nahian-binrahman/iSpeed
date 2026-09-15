import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-glow opacity-50 pointer-events-none" />

      <Container>
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#0D1420] via-[#0A0F18] to-[#05070B] p-8 sm:p-14 lg:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-4 py-1.5 text-xs font-semibold text-[#00C8FF] mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Connect Today</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
            Ready to Upgrade Your Internet Experience?
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#94A3B8] max-w-2xl mx-auto">
            Contact iSpeed to learn more about internet connectivity for your home, business, or organization.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#connection-form" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base">
                <span>Request a Connection</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="#training-form" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 text-base">
                <Cpu className="h-4 w-4" />
                <span>Explore Training</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
