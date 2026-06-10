"use client";
import { portfolio } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">
              I ship products,<br />
              <span className="gradient-text">not just code.</span>
            </h2>
            {portfolio.about.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#94A3B8] leading-relaxed mb-4 text-sm">
                {para}
              </p>
            ))}

            {/* Education card */}
            <div className="mt-6 p-4 rounded-lg border border-[#2A3347] bg-[#161B27]/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F1F5F9]">{portfolio.education.degree}</div>
                  <div className="text-xs text-[#64748B] mt-0.5">{portfolio.education.institution}</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-[#64748B]">{portfolio.education.period}</span>
                    <span className="code-tag">SGPA {portfolio.education.sgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: stack + community */}
          <div className="space-y-6">
            {/* Current stack focus */}
            <div className="p-5 rounded-xl border border-[#2A3347] bg-[#161B27]/60">
              <div className="text-xs font-mono text-indigo-400 mb-3">// current focus</div>
              <div className="space-y-2">
                {[
                  { label: "Frontend", tech: "React · Next.js · TypeScript" },
                  { label: "Backend", tech: "FastAPI · Node.js · REST" },
                  { label: "AI layer", tech: "OpenAI · Gemini · Agent arch" },
                  { label: "Data", tech: "Supabase · PostgreSQL · MongoDB" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 text-sm">
                    <span className="text-[#64748B] w-20 flex-shrink-0">{row.label}</span>
                    <span className="text-[#94A3B8] font-mono text-xs">{row.tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community */}
            <div className="p-5 rounded-xl border border-[#2A3347] bg-[#161B27]/60">
              <div className="text-xs font-mono text-indigo-400 mb-3">// community</div>
              <div className="space-y-2.5">
                {[
                  "Google Women Techmakers — Member",
                  "Google Developer Group (GDG) — Member",
                  "Enterprising Technopreneur Fellow — HCDS Technologies",
                  "NIRMAN Hackathon 2026 Participant",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                    <span className="text-indigo-400 mt-0.5">▸</span>
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

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-indigo-400">//</span>
      <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest">{children}</span>
      <div className="flex-1 h-px bg-[#2A3347]" />
    </div>
  );
}
