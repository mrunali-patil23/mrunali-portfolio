"use client";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "./About";
import { useReveal } from "@/lib/useReveal";

const stackColors: Record<string, string> = {
  "Next.js": "text-[#6B4A57] dark:text-[#F9A8D4] bg-[#F9A8D4]/30 dark:bg-[#F9A8D4]/10",
  "React": "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10",
  "TypeScript": "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-300/10",
  "Python": "text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-400/10",
  "FastAPI": "text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-400/10",
  "Supabase": "text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-400/10",
  "PostgreSQL": "text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-400/10",
  "Gemini AI": "text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-400/10",
  "OpenAI API": "text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10",
  "JavaScript": "text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-400/10",
  "Three.js": "text-[#DB2777] dark:text-[#F472B6] bg-[#F9A8D4]/30 dark:bg-[#F472B6]/10",
  "WebGL": "text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-400/10",
  "Tailwind CSS": "text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10",
  "MongoDB": "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-300/10",
  "Vite": "text-violet-700 dark:text-violet-400 bg-violet-100 dark:bg-violet-400/10",
  "Recharts": "text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-400/10",
  "Lucide React": "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-400/10",
};

function StackBadge({ name }: { name: string }) {
  const cls = stackColors[name] ?? "text-[#6B4A57] dark:text-[#F9A8D4] bg-[#F9A8D4]/20 dark:bg-[#F9A8D4]/10";
  return <span className={`text-xs px-2 py-0.5 rounded font-mono ${cls}`}>{name}</span>;
}

export default function Projects() {
  const ref = useReveal();
  const featured = portfolio.projects.filter((p) => p.featured);
  return (
    <section id="projects" className="py-24 px-6 bg-[#F2D5DC] dark:bg-[#120813]">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Featured Work</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold text-[#3A1B26] dark:text-[#F8E7EE]">Things I&apos;ve built</h2>
        <p className="mt-2 text-sm text-[#6B4A57] dark:text-[#F9A8D4]/60 max-w-xl">
          Full-stack products shipped solo — AI-integrated, production-structured, and deployed.
        </p>
        <div className="mt-10 space-y-6">
          {featured.map((project, i) => (
            <FeaturedCard key={project.name} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof portfolio.projects)[0];

function FeaturedCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <div className="group relative grid md:grid-cols-2 gap-0 rounded-2xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D] overflow-hidden hover:border-[#DB2777]/60 dark:hover:border-[#F472B6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#DB2777]/10 dark:hover:shadow-[#F472B6]/10">
      <div
        className={`relative flex flex-col justify-between min-h-56 overflow-hidden ${flip ? "md:order-2" : ""}`}
        style={project.image
          ? { backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center top" }
          : {}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A1B26]/55 via-[#3A1B26]/30 to-[#3A1B26]/75 dark:from-[#120813]/65 dark:via-[#120813]/40 dark:to-[#120813]/85" />
        {!project.image && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#DB2777]/20 to-[#F9A8D4]/10 dark:from-[#BE185D]/20 dark:to-[#F472B6]/5"
            style={{
              backgroundImage: "linear-gradient(rgba(219,39,119,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        )}
        <div className="relative p-8 pb-0">
          <span className="code-tag">{project.subtitle}</span>
          <h3 className="mt-3 text-2xl font-bold text-white drop-shadow-lg">{project.name}</h3>
        </div>
        <div className="relative p-8 pt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => <StackBadge key={s} name={s} />)}
        </div>
      </div>

      <div className={`p-8 flex flex-col justify-between ${flip ? "md:order-1" : ""}`}>
        <div>
          <p className="text-sm text-[#6B4A57] dark:text-[#F9A8D4]/80 leading-relaxed">{project.description}</p>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-[#6B4A57]/80 dark:text-[#F9A8D4]/60">
                <span className="text-[#DB2777] dark:text-[#F472B6] mt-0.5 flex-shrink-0">&#8594;</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#6B4A57] dark:text-[#F9A8D4] hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors border border-[#F9A8D4] dark:border-[#BE185D]/30 hover:border-[#DB2777]/50 dark:hover:border-[#F472B6]/50 px-3 py-2 rounded-lg bg-[#F2D5DC]/30 dark:bg-transparent">
            <GithubIcon /> GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white bg-[#DB2777] hover:bg-[#EC4899] dark:bg-[#EC4899] dark:hover:bg-[#F472B6] px-3 py-2 rounded-lg shadow-md shadow-[#DB2777]/20 transition-all">
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function GithubIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>;
}
function ExternalIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>;
}