"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

function IconGithub() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.72.75 12.2c0 5.2 3.44 9.62 8.2 11.18.6.12.82-.27.82-.58v-2.04c-3.34.75-4.04-1.47-4.04-1.47-.55-1.43-1.35-1.81-1.35-1.81-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.27 1.86 1.27 1.08 1.9 2.84 1.35 3.53 1.03.11-.81.42-1.35.77-1.66-2.66-.31-5.46-1.36-5.46-6.05 0-1.34.46-2.44 1.23-3.3-.13-.31-.54-1.58.12-3.29 0 0 1-.33 3.3 1.26.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.3-1.59 3.3-1.26 3.3-1.26.66 1.71.25 2.98.12 3.29.77.86 1.23 1.96 1.23 3.3 0 4.7-2.8 5.73-5.47 6.04.43.38.82 1.13.82 2.29v3.39c0 .32.22.71.83.58 4.75-1.56 8.19-5.98 8.19-11.18C23.25 5.72 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C3.33 3.5 2 4.85 2 6.52c0 1.64 1.3 3 2.92 3h.03c1.68 0 2.98-1.36 2.98-3C7.93 4.85 6.65 3.5 4.98 3.5zM2.4 21.5h5.2V10.1H2.4V21.5zM9.4 10.1v11.4h5.2v-6.35c0-1.7.32-3.35 2.43-3.35 2.08 0 2.1 1.95 2.1 3.46v6.24h5.2v-7.25c0-3.56-1.9-5.22-4.44-5.22-2.05 0-2.97 1.14-3.48 1.95h-.03V10.1H9.4z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState<(typeof NAV)[number]["id"]>("home");
  const ids = useMemo(() => NAV.map((n) => n.id), []);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        const sorted = [...visible].sort((a, b) => {
          const at = (a.target as HTMLElement).getBoundingClientRect().top;
          const bt = (b.target as HTMLElement).getBoundingClientRect().top;
          return Math.abs(at) - Math.abs(bt);
        });

        const id = (sorted[0].target as HTMLElement).id as (typeof NAV)[number]["id"];
        setActive(id);
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.01, 0.1, 0.2, 0.3],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        {/* 3-column grid to keep center nav truly centered */}
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3 sm:px-6 lg:px-8">
          {/* Left: brand */}
          <div className="justify-self-start">
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight text-violet-400 hover:text-violet-300"
            >
              Muhammad Munawwar Anwar
            </a>
          </div>

          {/* Center: nav pills */}
          <div className="hidden justify-self-center sm:block">
            <nav className="flex items-center gap-2" aria-label="Primary">
              {NAV.map((n) => {
                const isActive = active === n.id;
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => scrollTo(n.id)}
                    className={clsx(
                      "rounded-full px-5 py-2.5 text-sm transition duration-200",
                      isActive
                        ? "bg-violet-500/15 text-white ring-1 ring-violet-400/25 shadow-[0_0_30px_rgba(168,85,247,0.18)]"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {n.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: icons */}
          <div className="justify-self-end flex items-center gap-2">
            <a
              href="#"
              className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              aria-label="GitHub"
            >
              <IconGithub />
            </a>
            <a
              href="#"
              className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
            <a
              href="mailto:you@example.com"
              className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              aria-label="Email"
            >
              <IconMail />
            </a>

            {/* Mobile: keep minimal for now */}
            <button
              type="button"
              className="ml-1 inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 hover:bg-white/5 hover:text-white sm:hidden"
              aria-label="Open menu"
              onClick={() => scrollTo("contact")}
            >
              <span className="text-sm">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
