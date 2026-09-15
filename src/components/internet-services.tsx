import React from "react";
import Link from "next/link";
import { House, Building2, Network, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: House,
    title: "Home Internet",
    subtitle: "Fast Fiber Internet for Everyday Life",
    features: [
      "Browsing",
      "Streaming",
      "Online Classes",
      "Gaming",
      "Work From Home",
    ],
    buttonText: "View Internet Packages",
    buttonHref: "/packages",
  },
  {
    icon: Building2,
    title: "Business Internet",
    subtitle: "Reliable Connectivity for Modern Businesses",
    features: [
      "Offices",
      "SMEs",
      "CCTV",
      "Cloud Software",
      "Online Business",
    ],
    buttonText: "Explore Business Solutions",
    buttonHref: "#contact",
  },
  {
    icon: Network,
    title: "Dedicated Connectivity",
    subtitle: "Advanced Solutions for Organizations",
    description:
      "Customized connectivity solutions for businesses and institutions with advanced network requirements.",
    buttonText: "Contact Us",
    buttonHref: "#contact",
  },
];

export function InternetServices() {
  return (
    <section id="internet" className="relative py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-3.5 py-1 text-xs font-semibold text-[#00C8FF] mb-4">
            <span>iSpeed Internet</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#F8FAFC]">
            Internet Solutions for Every Need
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            From homes to businesses, every connection has different requirements. iSpeed provides flexible connectivity solutions for different types of users.
          </p>
        </div>

        {/* 3 Premium Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D1420] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C8FF]/40 hover:shadow-[0_0_30px_-5px_rgba(0,200,255,0.15)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00C8FF] group-hover:border-[#00C8FF] group-hover:shadow-[0_0_15px_rgba(0,200,255,0.3)] transition-all duration-300">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#00C8FF]">
                    {item.subtitle}
                  </p>

                  {item.features ? (
                    <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-6 text-sm text-[#94A3B8]">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-[#00C8FF] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-6 border-t border-white/[0.08] pt-6">
                      <p className="text-sm leading-relaxed text-[#94A3B8]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4">
                  <Link href={item.buttonHref} className="block w-full">
                    <Button
                      variant={idx === 1 ? "default" : "secondary"}
                      className="w-full justify-center gap-2"
                    >
                      <span>{item.buttonText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#94A3B8]">
            Contact us to learn about available plans and pricing.
          </p>
        </div>
      </Container>
    </section>
  );
}
