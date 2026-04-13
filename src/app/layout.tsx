import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, JetBrains_Mono, Nunito_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${jetbrains.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:py-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
