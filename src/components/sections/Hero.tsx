"use client";
import { useEffect, useState } from "react";
import { portfolio } from "@/lib/data";

const roles = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "AI Integration Builder",
  "TypeScript Practitioner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-xs text-[#64748B]">portfolio.tsx</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-up animate-delay-100">
            <span className="text-[#F1F5F9]">Mrunali</span>
            <br />
            <span className="gradient-text">Patil</span>
          </h1>

          {/* Typewriter role */}
          <div className="h-10 flex items-center mb-6 animate-fade-up animate-delay-200">
            <span className="text-xl sm:text-2xl font-mono text-[#94A3B8]">
              {displayed}
              <span className="animate-blink text-indigo-400">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg text-[#64748B] max-w-2xl leading-relaxed mb-10 animate-fade-up animate-delay-300">
            {portfolio.tagline}{" "}
            <span className="text-[#94A3B8]">{portfolio.subTagline}</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              See my work →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#2A3347] hover:border-indigo-500/50 text-[#94A3B8] hover:text-[#F1F5F9] text-sm font-medium rounded-lg transition-all duration-200 bg-[#161B27]/50 hover:bg-[#161B27]"
            >
              Get in touch
            </a>
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#2A3347] hover:border-[#2A3347] text-[#64748B] hover:text-[#94A3B8] text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm animate-fade-up animate-delay-500">
            {[
              { value: "3+", label: "Projects shipped" },
              { value: "2", label: "Open source programs" },
              { value: "8.42", label: "SGPA / 10" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-indigo-400 font-mono">{stat.value}</div>
                <div className="text-xs text-[#64748B] mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-[#64748B]">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
