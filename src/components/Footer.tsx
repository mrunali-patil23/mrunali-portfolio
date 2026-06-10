import { portfolio } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#2A3347]/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#64748B]">
          <span className="text-indigo-400">~/</span>mrunali-patil — built with Next.js & Tailwind
        </div>
        <div className="flex items-center gap-4 text-xs text-[#64748B]">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#94A3B8] transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#94A3B8] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            className="hover:text-[#94A3B8] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
