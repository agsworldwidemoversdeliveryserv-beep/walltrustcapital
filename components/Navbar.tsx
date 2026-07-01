'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Private Banking", href: "/personal-banking" },
    { name: "Wealth Management", href: "/business-banking" },
    { name: "Investment Advisory", href: "/digital-banking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 shadow-2xl backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-walltrust-secondary to-walltrust-secondary/60 flex items-center justify-center shadow-xl">
              <span className="text-slate-950 font-bold text-lg">W</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Walltrust</p>
              <p className="text-sm font-semibold text-white">Private Banking</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-300 before:absolute before:left-1/2 before:-bottom-0.5 before:h-[2px] before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-walltrust-secondary before:transition-all before:duration-300 hover:text-walltrust-secondary hover:before:w-10"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="text-sm font-medium text-gray-200 hover:text-walltrust-secondary transition-colors">
                Login
              </Link>
              <Link href="/signup" className="btn-primary text-sm">
                Book a Meeting
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-down">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-gray-200 hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link
                  href="/login"
                  className="block px-4 py-3 text-center border border-white/15 rounded-2xl text-gray-200 font-semibold hover:bg-white/5 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-3 text-center btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Meeting
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
