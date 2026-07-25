import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growth-labs-ben-killen.openai.site"),
  title: {
    default: "Growth Labs — Find the constraint. Install the growth system.",
    template: "%s · Growth Labs",
  },
  description:
    "Growth Labs identifies the commercial bottleneck, installs the system that fixes it, and applies AI only where it creates real leverage.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Growth Labs — Constraint first. Tools second.",
    description:
      "Growth implementation first. AI leverage second.",
    images: [{
      url: "/og.png",
      width: 1731,
      height: 909,
      alt: "Growth Labs — Constraint first. Tools second.",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Labs — Constraint first. Tools second.",
    description: "Growth implementation first. AI leverage second.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
