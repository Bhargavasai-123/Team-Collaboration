"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "In The Press", href: "#press" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isMenuOpen || isScrolled ? "bg-[#E2EBEB] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-screen py-4 md:px-8">
        <Link href="#home" className="flex items-center">
          {isMenuOpen || isScrolled ? (
            <div className="relative h-16 w-36">
              <Image
                src="/images/Recircularity_Logo.png"
                alt="ReCircularity Logo"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="relative h-16 w-36">
              <Image
                src="/images/Recircularity_Logo_white.png"
                alt="ReCircularity Logo"
                fill
                className="object-contain"
              />
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isMenuOpen || isScrolled ? "text-[#024242]" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none pr-5 ${
            isMenuOpen || isScrolled ? "text-[#024242]" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 left-0 w-full bg-[#E2EBEB] shadow-md transition-transform duration-300 transform ${
          isMenuOpen ? "translate-y-20" : "-translate-y-full"
        } md:hidden flex flex-col items-center space-y-4 py-4`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.href);
            }}
            className="text-lg font-medium text-[#024242] hover:opacity-80"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
