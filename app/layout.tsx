import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import GoogleAnalytics from "./GoogleAnalytics";
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

const githubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = githubPages
  ? "https://beniskillen.github.io/Growth-Labs"
  : "https://growthlabsconsulting.xyz";
const pagesBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Growth Labs — Engineering revenue systems from first principles",
    template: "%s · Growth Labs",
  },
  description:
    "Operator-led growth studio: diagnose the constraint, engineer the revenue system, and measure CAC, LTV and CTR before scaling.",
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
      <head>
        <link
          rel="icon"
          href={`${pagesBase}/favicon.ico?v=3`}
          sizes="48x48"
        />
        <link
          rel="icon"
          href={`${pagesBase}/favicon.png?v=3`}
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href={`${pagesBase}/apple-touch-icon.png?v=3`}
        />
        <link rel="shortcut icon" href={`${pagesBase}/favicon.ico?v=3`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        <GoogleAnalytics />
        <script dangerouslySetInnerHTML={{ __html: studioBootScript }} />
        <StudioProvider>{children}</StudioProvider>
      </body>
    </html>
  );
}
