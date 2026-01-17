"use client";

import { profile } from "@/data/content";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-bg-exact" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Location pill */}
          <span className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-zinc-200 backdrop-blur">
            {profile.locationPill}
          </span>

          {/* Title (driven by profile) */}
          <h1 className="mt-10 leading-[0.95] tracking-tight">
            <span className="block text-6xl font-semibold text-white sm:text-7xl md:text-8xl">
              {profile.headlinePrimary}
            </span>
            <span className="mt-4 block text-6xl font-semibold text-violet-300 sm:text-7xl md:text-8xl">
              {profile.headlineSecondary}
            </span>
          </h1>

          {/* Tagline / Subtag (driven by profile)
              Note: Suvin’s template highlights ONE phrase in orange.
              We’ll highlight the whole tagline if you don’t provide a phrase split.
          */}
          <p className="mt-10 max-w-3xl text-lg text-zinc-300 sm:text-xl">
            <span className="font-semibold text-orange-300">{profile.tagline}</span>
          </p>

          <p className="mt-3 max-w-3xl text-base text-zinc-400 sm:text-lg">
            {profile.subtag}
          </p>

          {/* Skill chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {profile.skillsPills.map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-200 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-base font-medium text-zinc-950 shadow-sm hover:bg-zinc-200"
            >
              View My Work <ArrowIcon />
            </a>

            <a
              href={profile.links?.resumePdf ?? "/resume.pdf"}
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/35 px-7 py-3 text-base font-medium text-zinc-100 backdrop-blur hover:bg-black/50"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          {/* Divider */}
          <div className="mt-16 h-px w-full max-w-4xl bg-white/10" />

          {/* Metrics (driven by profile) */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-10 pb-16 sm:grid-cols-3">
            {profile.metrics.map((m, i) => {
              // Suvin-style: each metric value has a different accent color
              const valueColor =
                i === 0 ? "text-violet-300" : i === 1 ? "text-orange-300" : "text-cyan-300";

              return (
                <div key={`${m.label}-${i}`} className="text-center">
                  <div className={`text-4xl font-semibold ${valueColor}`}>{m.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
