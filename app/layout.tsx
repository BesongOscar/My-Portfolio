import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import DotGridBackground from "@/components/DotGridBackground";
import { Analytics } from "@vercel/analytics/next"

// Configure Geist Sans font with CSS variable for global usage
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font with CSS variable for code/monospace text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced metadata for SEO and social sharing
export const metadata: Metadata = {
  title: {
    default: "Besong Oscar - Software Developer Portfolio",
    template: "%s | Besong Oscar",
  },
  description:
    "Software Developer specializing in modern web applications with Next.js, React, and mobile development with React Native and Flutter. View my projects and get in touch.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "Next.js",
    "React",
    "React Native",
    "Flutter",
    "Portfolio",
    "Besong Oscar",
  ],
  authors: [{ name: "Besong Oscar" }],
  creator: "Besong Oscar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Besong Oscar - Software Developer Portfolio",
    description:
      "Software Developer specializing in modern web applications with Next.js, React, and mobile development with React Native and Flutter.",
    siteName: "Besong Oscar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Besong Oscar - Software Developer Portfolio",
    description:
      "Software Developer specializing in modern web applications with Next.js, React, and mobile development with React Native and Flutter.",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


/**
 * Root layout component
 * Wraps all pages with consistent layout including fonts and navigation
 * @param children - Page content to be rendered
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <DotGridBackground />
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar/>
        <main id="main-content">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
