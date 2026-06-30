import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walltrust Capital - Premium Digital Banking & Investment Solutions",
  description: "Experience enterprise-grade digital banking with cutting-edge financial solutions. Wealth management, investment advisory, and comprehensive financial planning.",
  keywords: ["banking", "fintech", "digital banking", "investment", "wealth management", "financial solutions", "walltrust"],
  authors: [{ name: "Walltrust Capital" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walltrustcapital.com",
    siteName: "Walltrust Capital",
    title: "Walltrust Capital - Premium Digital Banking",
    description: "Enterprise-grade digital banking and financial solutions",
    images: [
      {
        url: "https://walltrustcapital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Walltrust Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walltrust Capital - Premium Digital Banking",
    description: "Enterprise-grade digital banking and financial solutions",
    images: ["https://walltrustcapital.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}} />
        <link rel="canonical" href="https://walltrustcapital.com" />
      </head>
      <body className={`${inter.className} bg-walltrust-background dark:bg-walltrust-background-dark text-walltrust-text dark:text-walltrust-text-dark`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
