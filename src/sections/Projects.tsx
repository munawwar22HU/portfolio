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
                <p className="mt-4 text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {p.summary}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelected(p)}
                  className={[
                    "mt-6 w-full rounded-lg px-3 py-2 text-xs font-medium",
                    "border border-white/10 bg-white/10 text-white",
                    "transition hover:bg-white/15 hover:border-white/20",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                  ].join(" ")}
                >
                  View Details
                </button>
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
              <p className="text-xs font-semibold text-zinc-400">Approach</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                {selected.detail.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-400">Results</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                {selected.detail.results.map((r) => (
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

            {selected.detail.links?.length ? (
              <div className="flex flex-wrap gap-3">
                {selected.detail.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-zinc-200 underline decoration-white/15 underline-offset-4 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
