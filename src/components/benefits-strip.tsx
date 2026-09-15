import React from "react";
import { Zap, Activity, Headphones, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";

const benefits = [
  {
    title: "Fast Internet",
    description: "Reliable internet for everyday use, streaming, work, and business.",
    icon: Zap,
    accent: "cyan",
  },
  {
    title: "Stable Network",
    description: "Fiber-based infrastructure designed for consistent connectivity.",
    icon: Activity,
    accent: "blue",
  },
  {
    title: "Local Support",
    description: "Responsive support for customers in local communities.",
    icon: Headphones,
    accent: "cyan",
  },
  {
    title: "Modern Technology",
    description: "Future-ready infrastructure built for scalable connectivity.",
    icon: Cpu,
    accent: "blue",
  },
];

export function BenefitsStrip() {
  return (
    <section className="relative border-y border-white/[0.08] bg-[#0A0F18]/70 py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const isCyan = item.accent === "cyan";

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0D1420] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C8FF]/40 hover:shadow-[0_0_25px_-5px_rgba(0,200,255,0.15)]"
              >
                {/* Accent top line highlight on hover */}
                <div 
                  className={`absolute inset-x-6 top-0 h-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isCyan
                      ? "bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#168BFF] to-transparent"
                  }`} 
                />

                {/* Icon Badge */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isCyan
                      ? "border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00C8FF] group-hover:border-[#00C8FF] group-hover:shadow-[0_0_15px_rgba(0,200,255,0.3)]"
                      : "border-[#168BFF]/30 bg-[#168BFF]/10 text-[#168BFF] group-hover:border-[#168BFF] group-hover:shadow-[0_0_15px_rgba(22,139,255,0.3)]"
                  }`}
                >
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Card Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#F8FAFC]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
