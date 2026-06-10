import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrunali Patil — Full-Stack Developer",
  description:
    "Full-stack developer building AI-integrated web applications with React, Next.js, TypeScript, and Python. Open to junior roles in product-focused engineering teams.",
  keywords: ["full-stack developer", "React", "Next.js", "TypeScript", "AI integration", "Mrunali Patil"],
  authors: [{ name: "Mrunali Patil" }],
  openGraph: {
    title: "Mrunali Patil — Full-Stack Developer",
    description: "Full-stack developer building AI-integrated web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
