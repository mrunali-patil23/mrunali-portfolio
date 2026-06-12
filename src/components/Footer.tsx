import { portfolio } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white/50 dark:bg-[#1F0F1D]/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#6B4A57] dark:text-[#BE185D]">
          <span className="text-[#DB2777] dark:text-[#F472B6]">~/</span>mrunali-patil 
        </div>
        <div className="flex items-center gap-4 text-xs text-[#6B4A57] dark:text-[#BE185D]">
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors">GitHub</a>
          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors">LinkedIn</a>
          <a href={`mailto:${portfolio.email}`} className="hover:text-[#DB2777] dark:hover:text-[#F472B6] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}