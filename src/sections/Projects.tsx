"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import Modal from "@/components/Modal";
import { projects, projectFilters, type Project } from "@/data/content";

function IconFilter() {
  return (
    <svg
      className="h-4 w-4 text-zinc-400"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16M7 12h10M10 18h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M12 .5C5.73.5.75 5.72.75 12.2c0 5.2 3.44 9.62 8.2 11.18.6.12.82-.27.82-.58v-2.04c-3.34.75-4.04-1.47-4.04-1.47-.55-1.43-1.35-1.81-1.35-1.81-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.27 1.86 1.27 1.08 1.9 2.84 1.35 3.53 1.03.11-.81.42-1.35.77-1.66-2.66-.31-5.46-1.36-5.46-6.05 0-1.34.46-2.44 1.23-3.3-.13-.31-.54-1.58.12-3.29 0 0 1-.33 3.3 1.26.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.3-1.59 3.3-1.26 3.3-1.26.66 1.71.25 2.98.12 3.29.77.86 1.23 1.96 1.23 3.3 0 4.7-2.8 5.73-5.47 6.04.43.38.82 1.13.82 2.29v3.39c0 .32.22.71.83.58 4.75-1.56 8.19-5.98 8.19-11.18C23.25 5.72 18.27.5 12 .5z" />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState<(typeof projectFilters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.tags.includes(active as any));
  }, [active]);

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A showcase of projects demonstrating machine learning, visualization, and end-to-end pipeline development."
      align="center"
    >
      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <IconFilter />
        </span>

        {projectFilters.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={[
                "rounded-full px-3 py-1 text-xs transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                isActive
                  ? "bg-white text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
                  : "border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>
      {/* Grid */}
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="premium-card premium-card-hover">
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-2xl">{p.icon}</div>
                    <h3 className="mt-3 text-base font-semibold text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">{p.date}</p>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                  {p.summary}
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {p.detail.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {/* View Details */}
                  <button
                    onClick={() => setSelected(p)}
                    className="
      flex-1 h-10 rounded-lg
      bg-gradient-to-r from-violet-500 to-indigo-500
      text-sm font-medium text-white
      transition-all
      hover:from-violet-400 hover:to-indigo-400
      hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50
    "
                  >
                    View Details
                  </button>

                  {/* GitHub */}
                  {p.detail.github && (
                    <a
                      href={p.detail.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="
        h-10 w-10
        inline-flex items-center justify-center
        rounded-lg
        border border-white/10
        bg-white/5
        text-zinc-300
        transition-all
        hover:bg-white/10 hover:text-white
        hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
      "
                    >
                      <IconGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={!!selected}
        title={selected?.title ?? "Project"}
        onClose={() => setSelected(null)}
      >
        {selected ? (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl">{selected.icon}</span>
              <p className="text-xs text-zinc-400">{selected.date}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-400">Problem</p>
              <p className="mt-1 text-sm text-zinc-200">
                {selected.detail.problem}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-400">
                Key Challenges
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                {selected.detail.challenges.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-400">
                Key Outcomes
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                {selected.detail.outcomes.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-400">Tech Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selected.detail.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
