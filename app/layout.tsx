import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walltrust Capital - Premium Digital Banking",
  description: "Experience the future of banking with Walltrust Capital. A fictional digital banking platform for portfolio and educational purposes.",
  keywords: ["banking", "fintech", "digital banking", "walltrust"],
  authors: [{ name: "Walltrust Capital" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
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
