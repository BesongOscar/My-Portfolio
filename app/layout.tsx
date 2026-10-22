import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import DotGridBackground from "@/components/DotGridBackground";
import { siteConfig } from "@/lib/siteConfig";

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
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Besong Oscar - Software Developer Portfolio",
    template: "%s | Besong Oscar",
  },
  description:
    "Full-stack JavaScript developer building web apps with Next.js and NestJS and cross-platform mobile apps with React Native. Based in Douala, Cameroon. View my projects and get in touch.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "Next.js",
    "React",
    "React Native",
    "Flutter",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Besong Oscar",
  ],
  authors: [{ name: "Besong Oscar" }],
  creator: "Besong Oscar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    title: "Besong Oscar - Software Developer Portfolio",
    description:
      "Full-stack JavaScript developer: Next.js, NestJS, React Native. Based in Douala, Cameroon.",
    siteName: "Besong Oscar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Besong Oscar - Software Developer Portfolio",
    description:
      "Full-stack JavaScript developer: Next.js, NestJS, React Native. Based in Douala, Cameroon.",
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
    <html lang="en" suppressHydrationWarning>
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
