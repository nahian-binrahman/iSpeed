"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Wifi, GraduationCap, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const southernDistricts = [
  "Barishal",
  "Patuakhali",
  "Bhola",
  "Pirojpur",
  "Jhalokathi",
  "Barguna",
  "Bagerhat",
  "Khulna",
];

export function ContactForms() {
  // Connection Form State
  const [connectionSubmitted, setConnectionSubmitted] = useState(false);
  const [connectionData, setConnectionData] = useState({
    fullName: "",
    mobileNumber: "",
    district: "",
    area: "",
    connectionType: "Home Internet",
    address: "",
    additionalInfo: "",
  });

  // Training Form State
  const [trainingSubmitted, setTrainingSubmitted] = useState(false);
  const [trainingData, setTrainingData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    district: "",
    trainingType: "ISP Entrepreneur Training",
  });

  const handleConnectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConnectionSubmitted(true);
  };

  const handleTrainingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrainingSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 border-t border-white/[0.08]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
          {/* 1. RESELLER PARTNERSHIP REQUEST FORM */}
          <div id="connection-form" className="rounded-3xl border border-white/[0.08] bg-[#0D1420] p-5 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8FF]/30 bg-[#00C8FF]/5 px-3 py-1 text-xs font-semibold text-[#00C8FF] mb-3">
                <Wifi className="h-3.5 w-3.5" />
                <span>ISP Reseller Partnership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Want to Become an iSpeed Reseller?
              </h2>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Start or expand your local ISP business with dedicated wholesale fiber bandwidth, network routing, and full technical backing from iSpeed.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <a href="tel:+8801778298484" className="rounded-md border border-[#00C8FF]/30 bg-[#00C8FF]/10 px-2.5 py-1 text-[#00C8FF] hover:bg-[#00C8FF]/20 transition-colors">
                  📞 Reseller Hotline: +8801778298484
                </a>
                <span className="rounded-md border border-pink-500/30 bg-pink-500/10 px-2.5 py-1 text-pink-400 font-medium">
                  bKash Payment: +8801818336501
                </span>
              </div>

              {connectionSubmitted ? (
                <div className="mt-8 rounded-2xl border border-[#00C8FF]/40 bg-[#00C8FF]/10 p-6 text-center animate-in fade-in duration-300">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00C8FF]/20 text-[#00C8FF] mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F8FAFC]">
                    Thank you. Your reseller application has been received!
                  </h4>
                  <p className="mt-1 text-xs text-[#94A3B8]">
                    Our network operations team will contact you shortly to discuss bandwidth rates and coverage.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 text-xs"
                    onClick={() => setConnectionSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleConnectionSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Contact / Owner Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={connectionData.fullName}
                        onChange={(e) => setConnectionData({ ...connectionData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={connectionData.mobileNumber}
                        onChange={(e) => setConnectionData({ ...connectionData, mobileNumber: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-base sm:text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        District *
                      </label>
                      <select
                        required
                        value={connectionData.district}
                        onChange={(e) => setConnectionData({ ...connectionData, district: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-base sm:text-sm text-[#F8FAFC] focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      >
                        <option value="">Select District</option>
                        {southernDistricts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Target Area / Union *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dhemoshia, Badarkhali"
                        value={connectionData.area}
                        onChange={(e) => setConnectionData({ ...connectionData, area: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-base sm:text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Reseller Plan / Type *
                      </label>
                      <select
                        value={connectionData.connectionType}
                        onChange={(e) => setConnectionData({ ...connectionData, connectionType: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-base sm:text-sm text-[#F8FAFC] focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      >
                        <option value="New ISP Reseller Setup">New ISP Reseller Setup</option>
                        <option value="Wholesale Bandwidth (50-200 Mbps)">Wholesale Bandwidth (50-200 Mbps)</option>
                        <option value="Bulk Bandwidth (200-500+ Mbps)">Bulk Bandwidth (200-500+ Mbps)</option>
                        <option value="Existing Reseller Line Migration">Existing Reseller Line Migration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Reseller Brand / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dhemoshia Online / CyberNet"
                        value={connectionData.address}
                        onChange={(e) => setConnectionData({ ...connectionData, address: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-base sm:text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                      Address *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Road / Village / Holding Number"
                      value={connectionData.address}
                      onChange={(e) => setConnectionData({ ...connectionData, address: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-base sm:text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                      Additional Information
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific instructions or requirements..."
                      value={connectionData.additionalInfo}
                      onChange={(e) => setConnectionData({ ...connectionData, additionalInfo: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    <span>Apply for Reseller Partnership</span>
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* 2. TRAINING INTEREST FORM */}
          <div id="training-form" className="rounded-3xl border border-white/[0.08] bg-[#0D1420] p-5 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#168BFF]/30 bg-[#168BFF]/5 px-3 py-1 text-xs font-semibold text-[#168BFF] mb-3">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>iSpeed Academy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Interested in Training?
              </h2>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Enroll your interest for practical ISP business or fiber technician courses in Southern Bangladesh.
              </p>

              {trainingSubmitted ? (
                <div className="mt-8 rounded-2xl border border-[#168BFF]/40 bg-[#168BFF]/10 p-6 text-center animate-in fade-in duration-300">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#168BFF]/20 text-[#168BFF] mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F8FAFC]">
                    Thank you. Your training interest has been received.
                  </h4>
                  <p className="mt-1 text-xs text-[#94A3B8]">
                    Our academy coordinator will reach out with the upcoming batch syllabus and schedules.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 text-xs"
                    onClick={() => setTrainingSubmitted(false)}
                  >
                    Submit Another Interest
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleTrainingSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={trainingData.fullName}
                      onChange={(e) => setTrainingData({ ...trainingData, fullName: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={trainingData.mobileNumber}
                        onChange={(e) => setTrainingData({ ...trainingData, mobileNumber: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={trainingData.email}
                        onChange={(e) => setTrainingData({ ...trainingData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                      District *
                    </label>
                    <select
                      required
                      value={trainingData.district}
                      onChange={(e) => setTrainingData({ ...trainingData, district: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF]"
                    >
                      <option value="">Select District</option>
                      {southernDistricts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                      Training Type *
                    </label>
                    <select
                      value={trainingData.trainingType}
                      onChange={(e) => setTrainingData({ ...trainingData, trainingType: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070B] px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:border-[#168BFF] focus:outline-none focus:ring-1 focus:ring-[#168BFF]"
                    >
                      <option value="ISP Entrepreneur Training">ISP Entrepreneur Training</option>
                      <option value="Fiber Technician Training">Fiber Technician Training</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg" variant="secondary" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      <span>Submit Interest</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
