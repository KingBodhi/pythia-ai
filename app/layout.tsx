import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pythia AI | Intelligence Amplified",
    template: "%s | Pythia AI"
  },
  description: "Topological Super Intelligence for the Alpha Protocol Network. Pythia AI orchestrates compute resources across a global mesh, optimizing between task execution and Bitcoin mining for maximum collective return.",
  keywords: ["AI", "machine learning", "distributed computing", "Alpha Protocol", "mesh network", "Bitcoin mining", "active inference"],
  authors: [{ name: "Pythia AI" }],
  openGraph: {
    title: "Pythia AI | Intelligence Amplified",
    description: "Topological Super Intelligence for the Alpha Protocol Network",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pythia AI | Intelligence Amplified",
    description: "Topological Super Intelligence for the Alpha Protocol Network",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
