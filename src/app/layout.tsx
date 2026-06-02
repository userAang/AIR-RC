import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnalyticsClient } from "@/components/analytics-client";
import { SpeedInsightsClient } from "@/components/speed-insights-client";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIR Pôle RC — Réseaux & Cybersécurité",
  description:
    "Plateforme de formation du Pôle Réseaux et Cybersécurité du club AIR (ASEBEM Innovation and Research).",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-air-bg text-air-text antialiased">
        {children}
        <AnalyticsClient />
        <SpeedInsightsClient />
      </body>
    </html>
  );
}
