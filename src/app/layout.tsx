import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrunali Patil — Full-Stack Developer",
  description: "Full-stack developer building AI-integrated web applications with React, Next.js, TypeScript, and Python.",
  keywords: ["full-stack developer", "React", "Next.js", "TypeScript", "Mrunali Patil"],
  authors: [{ name: "Mrunali Patil" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}