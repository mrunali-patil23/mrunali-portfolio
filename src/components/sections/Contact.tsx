"use client";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "./About";
import { useReveal } from "@/lib/useReveal";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="py-24 px-6 bg-white/50 dark:bg-[#1F0F1D]/50">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#3A1B26] dark:text-[#F8E7EE] mb-4">
              Let&apos;s work<br />
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-sm text-[#6B4A57] dark:text-[#F9A8D4]/80 leading-relaxed mb-8 max-w-md">
              I&apos;m actively looking for junior full-stack or frontend engineering roles. If you&apos;re building something product-focused and need someone who can own a feature end-to-end, I&apos;d like to hear about it.
            </p>
            <div className="space-y-3">
              <ContactLink icon={<EmailIcon />} label="Email" value={portfolio.email} href={`mailto:${portfolio.email}`} />
              <ContactLink icon={<LinkedinIcon />} label="LinkedIn" value="mrunali-patil-39bb3730a" href={portfolio.linkedin} />
              <ContactLink icon={<GithubIcon />} label="GitHub" value="mrunali-patil23" href={portfolio.github} />
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D]">
            <div className="font-mono text-xs text-[#DB2777] dark:text-[#F472B6] mb-4">// send a message</div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#6B4A57] dark:text-[#BE185D] mb-1.5">Your name</label>
                <input type="text" placeholder="Jane Smith"
                  className="w-full bg-[#F2D5DC]/40 dark:bg-[#120813] border border-[#F9A8D4] dark:border-[#BE185D]/30 rounded-lg px-3 py-2.5 text-sm text-[#3A1B26] dark:text-[#F8E7EE] placeholder:text-[#F9A8D4] dark:placeholder:text-[#BE185D]/40 focus:outline-none focus:border-[#DB2777] dark:focus:border-[#F472B6] transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-[#6B4A57] dark:text-[#BE185D] mb-1.5">Email</label>
                <input type="email" placeholder="jane@company.com"
                  className="w-full bg-[#F2D5DC]/40 dark:bg-[#120813] border border-[#F9A8D4] dark:border-[#BE185D]/30 rounded-lg px-3 py-2.5 text-sm text-[#3A1B26] dark:text-[#F8E7EE] placeholder:text-[#F9A8D4] dark:placeholder:text-[#BE185D]/40 focus:outline-none focus:border-[#DB2777] dark:focus:border-[#F472B6] transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-[#6B4A57] dark:text-[#BE185D] mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell me about the role or project..."
                  className="w-full bg-[#F2D5DC]/40 dark:bg-[#120813] border border-[#F9A8D4] dark:border-[#BE185D]/30 rounded-lg px-3 py-2.5 text-sm text-[#3A1B26] dark:text-[#F8E7EE] placeholder:text-[#F9A8D4] dark:placeholder:text-[#BE185D]/40 focus:outline-none focus:border-[#DB2777] dark:focus:border-[#F472B6] transition-colors resize-none" />
              </div>
              <a href={`mailto:${portfolio.email}`}
                className="block w-full text-center py-2.5 bg-[#DB2777] hover:bg-[#EC4899] dark:bg-[#EC4899] dark:hover:bg-[#F472B6] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md shadow-[#DB2777]/20 active:scale-95">
                Send Message &#8594;
              </a>
              <p className="text-[10px] text-[#6B4A57] dark:text-[#BE185D] text-center">
                Opens your mail client. Or copy the email above directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg border border-[#F9A8D4] dark:border-[#BE185D]/30 bg-white dark:bg-[#1F0F1D] hover:border-[#DB2777]/50 dark:hover:border-[#F472B6]/40 hover:shadow-md hover:shadow-[#DB2777]/5 transition-all duration-200 group">
      <div className="w-8 h-8 rounded-lg bg-[#DB2777]/10 border border-[#DB2777]/15 flex items-center justify-center flex-shrink-0 text-[#DB2777] dark:text-[#F472B6] group-hover:bg-[#DB2777]/20 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-[#6B4A57] dark:text-[#BE185D]">{label}</div>
        <div className="text-xs text-[#3A1B26] dark:text-[#F9A8D4] group-hover:text-[#DB2777] dark:group-hover:text-[#F472B6] transition-colors font-mono">{value}</div>
      </div>
      <svg className="ml-auto text-[#F9A8D4] dark:text-[#BE185D]/40 group-hover:text-[#DB2777] dark:group-hover:text-[#F472B6] transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </a>
  );
}

function EmailIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>; }
function LinkedinIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>; }
function GithubIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>; }
function PhoneIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>; }