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
    default: "Growth Labs — Engineering revenue systems from first principles",
    template: "%s · Growth Labs",
  },
  description:
    "Operator-led growth studio: diagnose the constraint, engineer the revenue system, and measure CAC, LTV and CTR before scaling.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Growth Labs — Engineer the revenue system",
    description:
      "First principles. Then high-ROI systems. Results measured.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Labs — Engineer the revenue system",
    description: "First principles. Then high-ROI systems. Results measured.",
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
