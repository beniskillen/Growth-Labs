import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import StudioProvider from "./studio/StudioProvider";
import { studioBootScript } from "./studio/keys";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://beniskillen.github.io/Growth-Labs";
const pagesBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Growth Labs — Engineering revenue systems from first principles",
    template: "%s · Growth Labs",
  },
  description:
    "Operator-led growth studio: diagnose the constraint, engineer the revenue system, and measure CAC, LTV and CTR before scaling.",
  icons: {
    icon: [
      { url: `${pagesBase}/favicon.ico?v=2`, sizes: "48x48" },
      {
        url: `${pagesBase}/favicon.png?v=2`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: `${pagesBase}/apple-touch-icon.png?v=2`,
    shortcut: `${pagesBase}/favicon.ico?v=2`,
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        <script dangerouslySetInnerHTML={{ __html: studioBootScript }} />
        <StudioProvider>{children}</StudioProvider>
      </body>
    </html>
  );
}
