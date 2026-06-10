"use client";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "./About";
import { useReveal } from "@/lib/useReveal";

const stackColors: Record<string, string> = {
  "Next.js": "text-[#94A3B8] bg-[#94A3B8]/10",
  "React": "text-blue-400 bg-blue-400/10",
  "TypeScript": "text-blue-300 bg-blue-300/10",
  "Python": "text-yellow-400 bg-yellow-400/10",
  "FastAPI": "text-teal-400 bg-teal-400/10",
  "Supabase": "text-green-400 bg-green-400/10",
  "PostgreSQL": "text-sky-400 bg-sky-400/10",
  "Gemini AI": "text-purple-400 bg-purple-400/10",
  "OpenAI API": "text-emerald-400 bg-emerald-400/10",
  "JavaScript": "text-amber-400 bg-amber-400/10",
  "Three.js": "text-pink-400 bg-pink-400/10",
  "WebGL": "text-orange-400 bg-orange-400/10",
  "Tailwind CSS": "text-cyan-400 bg-cyan-400/10",
  "MongoDB": "text-green-300 bg-green-300/10",
};

function StackBadge({ name }: { name: string }) {
  const cls = stackColors[name] ?? "text-[#64748B] bg-[#64748B]/10";
  return (
    <span className={`text-xs px-2 py-0.5 rounded font-mono ${cls}`}>{name}</span>
  );
}

export default function Projects() {
  const ref = useReveal();
  const featured = portfolio.projects.filter((p) => p.featured);
  const rest = portfolio.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0D1117]/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Featured Work</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold text-[#F1F5F9]">
          Things I&apos;ve built
        </h2>
        <p className="mt-2 text-sm text-[#64748B] max-w-xl">
          Two full-stack products shipped solo — both AI-integrated, both production-structured.
        </p>

        {/* Featured projects */}
        <div className="mt-10 space-y-6">
          {featured.map((project, i) => (
            <FeaturedCard key={project.name} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project) => (
              <SmallCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  flip,
}: {
  project: (typeof portfolio.projects)[0];
  flip: boolean;
}) {
  return (
    <div
      className={`group relative grid md:grid-cols-2 gap-0 rounded-2xl border border-[#2A3347] bg-[#161B27]/60 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:glow-indigo ${
        flip ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Visual panel */}
      <div
        className={`relative p-8 flex flex-col justify-between min-h-48 bg-gradient-to-br from-[#1C2333] to-[#161B27] ${
          flip ? "md:order-2" : ""
        }`}
      >
        {/* Grid pattern in bg */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative">
          <span className="code-tag">{project.subtitle}</span>
          <h3 className="mt-3 text-2xl font-bold text-[#F1F5F9] group-hover:gradient-text transition-all">
            {project.name}
          </h3>
        </div>
        <div className="relative flex flex-wrap gap-1.5 mt-6">
          {project.stack.map((s) => (
            <StackBadge key={s} name={s} />
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className={`p-8 flex flex-col justify-between ${flip ? "md:order-1" : ""}`}>
        <div>
          <p className="text-sm text-[#94A3B8] leading-relaxed">{project.description}</p>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-[#64748B]">
                <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#94A3B8] hover:text-[#F1F5F9] transition-colors border border-[#2A3347] hover:border-[#3A4357] px-3 py-2 rounded-lg"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ project }: { project: (typeof portfolio.projects)[0] }) {
  return (
    <div className="group p-5 rounded-xl border border-[#2A3347] bg-[#161B27]/60 hover:border-indigo-500/40 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="code-tag text-[10px]">{project.subtitle}</span>
          <h3 className="mt-2 font-semibold text-[#F1F5F9] text-sm">{project.name}</h3>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64748B] hover:text-indigo-400 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
      <p className="text-xs text-[#64748B] leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <StackBadge key={s} name={s} />
        ))}
      </div>
    </div>
  );
}
