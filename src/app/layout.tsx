import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio — Projects & work",
    template: "%s — Portfolio",
  },
  description:
    "Developer portfolio showcasing selected projects, stack, and links to source and demos.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Portfolio",
    title: "Portfolio — Projects & work",
    description:
      "Developer portfolio showcasing selected projects, stack, and links to source and demos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Projects & work",
    description:
      "Developer portfolio showcasing selected projects, stack, and links to source and demos.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
