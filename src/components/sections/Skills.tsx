"use client";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "./About";
import { useReveal } from "@/lib/useReveal";

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  Frontend: "◈",
  Backend: "⚙",
  Databases: "⬡",
  "AI / APIs": "✦",
  Tooling: "⌘",
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-[#0D1117]/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold text-[#F1F5F9]">
          What I work with
        </h2>
        <p className="mt-2 text-sm text-[#64748B] max-w-xl">
          Focused on the full JavaScript/TypeScript stack plus Python for backend services. AI API integration is a working strength, not just familiarity.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(portfolio.skills).map(([category, items]) => (
            <div
              key={category}
              className="p-5 rounded-xl border border-[#2A3347] bg-[#161B27]/60 hover:border-indigo-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-indigo-400 text-sm">
                  {categoryIcons[category] ?? "▸"}
                </span>
                <span className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#1C2333] border border-[#2A3347] text-[#94A3B8] font-mono group-hover:border-[#3A4357] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements strip */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#F1F5F9] mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-indigo-400">//</span>
            Achievements
          </h3>
          <div className="space-y-2">
            {portfolio.achievements.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-lg border border-[#2A3347]/60 bg-[#161B27]/30 hover:border-[#2A3347] transition-colors"
              >
                <span className="text-amber-400 text-xs mt-0.5 flex-shrink-0">★</span>
                <span className="text-sm text-[#94A3B8]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
