"use client";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "./About";
import { useReveal } from "@/lib/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold text-[#F1F5F9]">Where I&apos;ve worked</h2>

        <div className="mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2A3347] hidden sm:block" />

          <div className="space-y-6">
            {portfolio.experience.map((exp, i) => (
              <div key={i} className="relative sm:pl-12 group">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full border border-[#2A3347] bg-[#0D1117] items-center justify-center group-hover:border-indigo-500/60 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#2A3347] group-hover:bg-indigo-500 transition-colors" />
                </div>

                <div className="p-5 rounded-xl border border-[#2A3347] bg-[#161B27]/60 hover:border-[#3A4357] transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-[#F1F5F9] text-sm">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-indigo-400 text-sm font-medium">{exp.org}</span>
                        <span className="code-tag text-[10px]">{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-mono text-[#64748B]">{exp.period}</div>
                      <div className="text-xs text-[#64748B] mt-0.5">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#F1F5F9] mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-indigo-400">//</span>
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolio.certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-3.5 rounded-lg border border-[#2A3347] bg-[#161B27]/40 hover:border-[#3A4357] transition-colors"
              >
                <div className="text-xs font-medium text-[#F1F5F9] leading-snug">{cert.name}</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-[#64748B]">{cert.issuer}</span>
                  <span className="text-[10px] font-mono text-indigo-400/70">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
