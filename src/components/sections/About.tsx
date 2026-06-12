"use client";
import { portfolio } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-[#DB2777] dark:text-[#F472B6]">//</span>
      <span className="text-xs font-mono text-[#6B4A57] dark:text-[#BE185D] uppercase tracking-widest">{children}</span>
      <div className="flex-1 h-px bg-[#F9A8D4] dark:bg-[#BE185D]/30" />
    </div>
  );
}

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-24 px-6 bg-white/50 dark:bg-[#1F0F1D]/50">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#3A1B26] dark:text-[#F8E7EE] mb-6">
              I ship products,<br />
              <span className="gradient-text">not just code.</span>
            </h2>
            {portfolio.about.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#6B4A57] dark:text-[#F9A8D4]/80 leading-relaxed mb-4 text-sm">{para}</p>
            ))}
            <div className="mt-6 p-4 rounded-xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#DB2777]/10 border border-[#DB2777]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#3A1B26] dark:text-[#F8E7EE]">{portfolio.education.degree}</div>
                  <div className="text-xs text-[#6B4A57] dark:text-[#BE185D] mt-0.5">{portfolio.education.institution}</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-[#6B4A57] dark:text-[#BE185D]">{portfolio.education.period}</span>
                    <span className="code-tag">SGPA {portfolio.education.sgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="p-5 rounded-xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D]">
              <div className="text-xs font-mono text-[#DB2777] dark:text-[#F472B6] mb-3">// current focus</div>
              <div className="space-y-2">
                {[
                  { label: "Languages", tech: "JavaScript · TypeScript · Python" },
                  { label: "Frontend", tech: "React · Next.js · Tailwind CSS · HTML5 / CSS3" },
                  { label: "Backend", tech: "FastAPI · Node.js · REST" },
                  { label: "AI layer", tech: "OpenAI · Gemini · Agent arch" },
                  { label: "Data", tech: "Supabase · PostgreSQL · MongoDB" },
                  { label: "Tooling", tech: "Git · GitHub · VS Code · Vercel" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="text-[#6B4A57] dark:text-[#BE185D] w-20 flex-shrink-0 text-xs">{row.label}</span>
                    <span className="text-[#3A1B26] dark:text-[#F9A8D4] font-mono text-xs">{row.tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D]">
              <div className="text-xs font-mono text-[#DB2777] dark:text-[#F472B6] mb-3">// community</div>
              <div className="space-y-2.5">
                {[
                  "Google Women Techmakers — Member",
                  "Google Developer Group (GDG) — Member",
                  "Enterprising Technopreneur Fellow — HCDS Technologies",
                  "NIRMAN Hackathon 2026 Participant",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#6B4A57] dark:text-[#F9A8D4]/80">
                    <span className="text-[#DB2777] dark:text-[#F472B6] mt-0.5">&#9658;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}