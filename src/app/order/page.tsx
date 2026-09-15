"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send, 
  PhoneCall, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Clock 
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { packagesData, PackageItem } from "@/components/packages-section";

function OrderFormContent() {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get("package") || searchParams.get("pkg") || "standard";

  const initialPkg =
    packagesData.find(
      (p) =>
        p.id.toLowerCase() === pkgParam.toLowerCase() ||
        p.name.toLowerCase() === pkgParam.toLowerCase()
    ) || packagesData[1];

  const [selectedPackage, setSelectedPackage] = useState<PackageItem>(initialPkg);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    villageArea: "",
    holdingAddress: "",
    paymentMethod: "Cash after installation",
    notes: "",
  });

  useEffect(() => {
    const matched = packagesData.find(
      (p) =>
        p.id.toLowerCase() === pkgParam.toLowerCase() ||
        p.name.toLowerCase() === pkgParam.toLowerCase()
    );
    if (matched) {
      setSelectedPackage(matched);
    }
  }, [pkgParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#05070B] py-12 sm:py-16">
      <Container size="narrow">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-[#00C8FF] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Packages</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center sm:text-left mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-semibold text-red-400 mb-3">
            <Zap className="h-3.5 w-3.5" />
            <span>New Customer Connection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            Get Connected with <span className="text-[#00C8FF]">iSpeed Fiber</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#94A3B8]">
            Fill in your details below to schedule your optical fiber installation in Cox&apos;s Bazar.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl border border-[#00C8FF]/40 bg-[#0D1420] p-8 sm:p-12 text-center shadow-2xl animate-in fade-in duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00C8FF]/20 text-[#00C8FF] mb-4">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Order Successfully Submitted!
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-lg mx-auto">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our field team in Dhemoshia will contact you shortly on{" "}
              <strong className="text-[#00C8FF]">{formData.mobileNumber}</strong> to confirm your optical fiber setup for the{" "}
              <strong className="text-red-400">{selectedPackage.name} ({selectedPackage.speed})</strong> package.
            </p>

            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-[#05070B] max-w-md mx-auto text-left text-xs sm:text-sm text-[#94A3B8] space-y-2">
              <div className="flex justify-between">
                <span>Selected Package:</span>
                <span className="font-semibold text-white">{selectedPackage.name} ({selectedPackage.speed})</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Bill:</span>
                <span className="font-bold text-[#00C8FF]">৳{selectedPackage.price} / month</span>
              </div>
              <div className="flex justify-between">
                <span>bKash Payment:</span>
                <span className="font-semibold text-pink-400">+8801818336501</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+8801778298484"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#00C8FF] px-6 py-3 text-sm font-bold text-black hover:bg-[#00C8FF]/90 transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Hotline (+8801778298484)</span>
              </a>
              <Link
                href="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#F8FAFC] hover:bg-white/5 transition-colors"
              >
                Return to Packages
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Package Summary Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#0D1420] p-6 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                  Selected Plan
                </span>

                {/* Package selector dropdown */}
                <div className="mt-3">
                  <select
                    value={selectedPackage.id}
                    onChange={(e) => {
                      const found = packagesData.find((p) => p.id === e.target.value);
                      if (found) setSelectedPackage(found);
                    }}
                    className="w-full rounded-xl border border-white/15 bg-[#05070B] px-3.5 py-2.5 text-sm font-semibold text-[#F8FAFC] focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                  >
                    {packagesData.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — {pkg.speed} (৳{pkg.price}/mo)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Card thumbnail & pricing */}
                <div className="mt-5 overflow-hidden rounded-xl border border-white/10 relative h-36">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                    {selectedPackage.name}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#E50914] px-3 py-1 rounded-tl-lg text-white text-xs font-extrabold">
                    {selectedPackage.speed}
                  </div>
                </div>

                <div className="mt-5 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <span className="text-xs text-[#94A3B8]">Monthly Rate</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#00C8FF]">৳{selectedPackage.price}</span>
                    <span className="text-xs text-[#94A3B8]"> / month</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-xs text-[#94A3B8]">
                  {selectedPackage.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00C8FF] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Assistance Box */}
              <div className="rounded-2xl border border-white/10 bg-[#0D1420]/60 p-5 text-xs text-[#94A3B8] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#F8FAFC]">
                  <PhoneCall className="h-4 w-4 text-[#00C8FF]" /> Need Help Ordering?
                </div>
                <p>Call or WhatsApp our support line directly for immediate assistance:</p>
                <a href="tel:+8801778298484" className="block text-sm font-bold text-[#00C8FF] hover:underline">
                  +8801778298484
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-[#0D1420] p-6 sm:p-8 shadow-xl">
                <h2 className="text-xl font-bold text-[#F8FAFC]">
                  Installation & Contact Details
                </h2>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Please provide accurate information for line connection.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mohammad Rahim"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      Mobile Number (For Verification & Setup) *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                        Village / Union *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dhemoshia, Ward 2"
                        value={formData.villageArea}
                        onChange={(e) => setFormData({ ...formData, villageArea: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                        Holding / House Details *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Holding No. or Landmark"
                        value={formData.holdingAddress}
                        onChange={(e) => setFormData({ ...formData, holdingAddress: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      Preferred Payment Method
                    </label>
                    <select
                      value={formData.paymentMethod}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-2.5 text-sm text-[#F8FAFC] focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    >
                      <option value="Cash after installation">Cash after successful installation</option>
                      <option value="bKash (+8801818336501)">bKash Payment (+8801818336501)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Preferred time for technician visit, router requirements, etc."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-2 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#00C8FF] focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg" className="w-full justify-center gap-2 py-3.5 text-base font-bold bg-[#E50914] hover:bg-[#C7000B]">
                      <Send className="h-4 w-4" />
                      <span>Confirm Connection Request</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05070B] py-20 text-center text-[#94A3B8]">Loading connection form...</div>}>
      <OrderFormContent />
    </Suspense>
  );
}
