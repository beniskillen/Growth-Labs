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
    default: "Growth Labs — AI growth systems for founder-led businesses",
    template: "%s · Growth Labs",
  },
  description:
    "Operator-led AI growth systems: diagnose the bottleneck, build the workflow, train the team and measure the result.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Growth Labs — Turn AI into a revenue system",
    description:
      "Diagnosis first. Systems second. Results measured.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Labs — Turn AI into a revenue system",
    description: "Diagnosis first. Systems second. Results measured.",
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
