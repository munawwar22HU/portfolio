import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Portfolio website (placeholder).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
