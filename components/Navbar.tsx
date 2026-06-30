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
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Personal Banking", href: "/personal-banking" },
    { name: "Business Banking", href: "/business-banking" },
    { name: "Digital Banking", href: "/digital-banking" },
    { name: "Cards", href: "/cards" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-walltrust-card dark:bg-walltrust-card-dark shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-walltrust-primary to-walltrust-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-walltrust-primary">Walltrust</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-walltrust-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle and CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex space-x-3">
              <Link
                href="/login"
                className="px-4 py-2 text-walltrust-primary font-semibold hover:text-walltrust-primary-dark transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="btn-primary text-sm"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-walltrust-border dark:hover:bg-walltrust-border-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-down">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-walltrust-primary hover:bg-walltrust-border dark:hover:bg-walltrust-border-dark rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-center border border-walltrust-primary text-walltrust-primary rounded-lg font-semibold hover:bg-walltrust-primary hover:text-white transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-center btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
