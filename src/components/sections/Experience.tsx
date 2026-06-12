"use client";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "./About";
import { useReveal } from "@/lib/useReveal";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="py-24 px-6 bg-white/50 dark:bg-[#1F0F1D]/50">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold text-[#3A1B26] dark:text-[#F8E7EE]">Where I&apos;ve worked</h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#F9A8D4] dark:bg-[#BE185D]/30 hidden sm:block" />
          <div className="space-y-6">
            {portfolio.experience.map((exp, i) => (
              <div key={i} className="relative sm:pl-12 group">
                <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full border border-[#F9A8D4] dark:border-[#BE185D]/40 bg-[#F2D5DC] dark:bg-[#120813] items-center justify-center group-hover:border-[#DB2777] dark:group-hover:border-[#F472B6] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#F9A8D4] dark:bg-[#BE185D] group-hover:bg-[#DB2777] dark:group-hover:bg-[#F472B6] transition-colors" />
                </div>
                <div className="p-5 rounded-xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D] hover:border-[#DB2777]/40 dark:hover:border-[#F472B6]/40 transition-all duration-200 hover:shadow-md hover:shadow-[#DB2777]/5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-[#3A1B26] dark:text-[#F8E7EE] text-sm">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#DB2777] dark:text-[#F472B6] text-sm font-medium">{exp.org}</span>
                        <span className="code-tag text-[10px]">{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-mono text-[#6B4A57] dark:text-[#BE185D]">{exp.period}</div>
                      <div className="text-xs text-[#6B4A57] dark:text-[#BE185D] mt-0.5">{exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#6B4A57] dark:text-[#F9A8D4]/80">
                        <span className="text-[#DB2777] dark:text-[#F472B6] mt-0.5 flex-shrink-0">&#9658;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#3A1B26] dark:text-[#F8E7EE] mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-[#DB2777] dark:text-[#F472B6]">//</span>
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolio.certifications.map((cert) => (
              <div key={cert.name} className="p-3.5 rounded-lg border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D] hover:border-[#DB2777]/40 dark:hover:border-[#F472B6]/40 transition-colors">
                <div className="text-xs font-medium text-[#3A1B26] dark:text-[#F8E7EE] leading-snug">{cert.name}</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-[#6B4A57] dark:text-[#BE185D]">{cert.issuer}</span>
                  <span className="text-[10px] font-mono text-[#DB2777] dark:text-[#F472B6]/80">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}