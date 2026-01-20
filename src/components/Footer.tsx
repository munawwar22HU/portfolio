"use client";

import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-zinc-950/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p className="text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-zinc-500">
          Built with{" "}
          <span className="text-violet-300">Next.js</span> +{" "}
          <span className="text-violet-300">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
