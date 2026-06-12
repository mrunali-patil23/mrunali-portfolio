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
    <section id="skills" className="py-24 px-6 bg-[#F2D5DC] dark:bg-[#120813]">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold text-[#3A1B26] dark:text-[#F8E7EE]">What I work with</h2>
        <p className="mt-2 text-sm text-[#6B4A57] dark:text-[#F9A8D4]/60 max-w-xl">
          Focused on the full JavaScript/TypeScript stack plus Python for backend services.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(portfolio.skills).map(([category, items]) => (
            <div key={category} className="p-5 rounded-xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D] hover:border-[#DB2777]/50 dark:hover:border-[#F472B6]/40 hover:shadow-md hover:shadow-[#DB2777]/5 transition-all duration-200 group">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-[#DB2777] dark:text-[#F472B6] text-sm">{categoryIcons[category] ?? "▸"}</span>
                <span className="text-xs font-medium text-[#6B4A57] dark:text-[#BE185D] uppercase tracking-wider">{category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-[#F2D5DC] dark:bg-[#120813] border border-[#F9A8D4] dark:border-[#BE185D]/20 text-[#6B4A57] dark:text-[#F9A8D4] font-mono group-hover:border-[#EC4899]/40 dark:group-hover:border-[#BE185D]/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#3A1B26] dark:text-[#F8E7EE] mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-[#DB2777] dark:text-[#F472B6]">//</span>
            Achievements
          </h3>
          <div className="space-y-2">
            {portfolio.achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg border border-[#F9A8D4] dark:border-[#BE185D]/20 bg-white dark:bg-[#1F0F1D] hover:border-[#DB2777]/40 dark:hover:border-[#F472B6]/30 transition-colors">
                <span className="text-[#EC4899] dark:text-[#F472B6] text-xs mt-0.5 flex-shrink-0">&#9733;</span>
                <span className="text-sm text-[#6B4A57] dark:text-[#F9A8D4]/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}