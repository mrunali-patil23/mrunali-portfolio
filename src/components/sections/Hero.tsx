"use client";
import { useEffect, useState } from "react";
import { portfolio } from "@/lib/data";

const roles = [
  "Full-Stack Developer",
  "React / Python Engineer",
  "AI Integration Builder",
  "Open Source Contributor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, mounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/10 dark:bg-[#F472B6]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#DB2777]/8 dark:bg-[#BE185D]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="font-mono text-xs text-[#6B4A57] dark:text-[#BE185D]">portfolio.tsx</span>
          </div>

          <p className="text-lg text-[#6B4A57] dark:text-[#F9A8D4] mb-2 animate-fade-up animate-delay-100">
            Hi, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3 animate-fade-up animate-delay-100">
            <span className="text-[#3A1B26] dark:text-[#F8E7EE]">Mrunali Patil</span>
          </h1>

          <div className="h-10 flex items-center mb-5 animate-fade-up animate-delay-200">
            <span className="text-xl sm:text-2xl font-semibold text-[#DB2777] dark:text-[#F472B6]">
              {displayed}
              <span className="animate-blink text-[#EC4899] dark:text-[#F472B6]">|</span>
            </span>
          </div>

          <p className="text-base text-[#6B4A57] dark:text-[#F9A8D4]/80 max-w-xl leading-relaxed mb-10 animate-fade-up animate-delay-300">
            {portfolio.tagline} {portfolio.subTagline}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
            <a href="#projects"
              className="px-6 py-3 bg-[#DB2777] hover:bg-[#EC4899] dark:bg-[#EC4899] dark:hover:bg-[#F472B6] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-[#DB2777]/25 active:scale-95">
              View Projects
            </a>
            <a href="#contact"
              className="px-6 py-3 border-2 border-[#DB2777] dark:border-[#F472B6] text-[#DB2777] dark:text-[#F472B6] hover:bg-[#DB2777]/8 dark:hover:bg-[#F472B6]/10 text-sm font-semibold rounded-lg transition-all duration-200 active:scale-95">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8 animate-fade-up animate-delay-500">
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer"
              className="text-[#6B4A57] dark:text-[#F9A8D4]/60 hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors">
              <GithubIcon />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-[#6B4A57] dark:text-[#F9A8D4]/60 hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors">
              <LinkedinIcon />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm animate-fade-up animate-delay-500">
            {[
              { value: "4+", label: "Projects shipped" },
              { value: "2", label: "Open source programs" },
              { value: "8.42", label: "SGPA / 10" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#DB2777] dark:text-[#F472B6] font-mono">{stat.value}</div>
                <div className="text-xs text-[#6B4A57] dark:text-[#F9A8D4]/60 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-[#DB2777] dark:text-[#F472B6]">
        <span className="text-xs font-mono">scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 3v10M3 9l5 4 5-4" />
        </svg>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}