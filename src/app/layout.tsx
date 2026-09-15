import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bangla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iSpeed | Premium Optical Fiber Internet in Southern Bangladesh",
  description:
    "Ultra-fast optical fiber internet across suburban and rural Southern Bangladesh, plus professional ISP & fiber technician training.",
  keywords: [
    "iSpeed",
    "ISP",
    "Internet Service Provider",
    "Optical Fiber",
    "Bangladesh",
    "Southern Bangladesh",
    "Fiber Technician Training",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-[#05070B] text-[#F8FAFC] antialiased selection:bg-[#00C8FF]/20 selection:text-[#00C8FF]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
