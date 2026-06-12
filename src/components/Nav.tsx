"use client";
import { useState, useEffect } from "react";
import { portfolio } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#F2D5DC]/90 dark:bg-[#120813]/90 backdrop-blur-md border-b border-[#F9A8D4] dark:border-[#BE185D]/30"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-[#DB2777] dark:text-[#F472B6] hover:text-[#EC4899] transition-colors">
          <span className="text-[#6B4A57] dark:text-[#BE185D]">~/</span>mrunali
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-sm text-[#6B4A57] dark:text-[#F9A8D4] hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors duration-200 relative group">
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#DB2777] dark:bg-[#F472B6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {mounted && (
            <button onClick={toggleTheme}
              className="w-8 h-8 rounded-lg border border-[#F9A8D4] dark:border-[#BE185D]/50 bg-white/70 dark:bg-[#1F0F1D] flex items-center justify-center text-[#DB2777] dark:text-[#F472B6] hover:border-[#DB2777] dark:hover:border-[#F472B6] transition-all"
              aria-label="Toggle theme">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}

          <a href="#contact"
            className="text-sm px-5 py-2 rounded-lg bg-[#DB2777] hover:bg-[#EC4899] dark:bg-[#EC4899] dark:hover:bg-[#F472B6] text-white font-medium transition-all duration-200 shadow-md shadow-[#DB2777]/20">
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button onClick={toggleTheme}
              className="w-8 h-8 rounded-lg border border-[#F9A8D4] dark:border-[#BE185D]/50 bg-white/70 dark:bg-[#1F0F1D] flex items-center justify-center text-[#DB2777] dark:text-[#F472B6] transition-all"
              aria-label="Toggle theme">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#DB2777] dark:text-[#F472B6] hover:text-[#EC4899] transition-colors"
            aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F2D5DC]/95 dark:bg-[#120813]/95 backdrop-blur-md border-b border-[#F9A8D4] dark:border-[#BE185D]/30 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-[#6B4A57] dark:text-[#F9A8D4] hover:text-[#DB2777] dark:hover:text-[#F472B6] border-b border-[#F9A8D4] dark:border-[#BE185D]/20 last:border-0 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center px-5 py-2 rounded-lg bg-[#DB2777] text-white text-sm font-medium">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}