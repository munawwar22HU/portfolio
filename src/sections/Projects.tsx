"use client";

import { useMemo, useState, useRef } from "react";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import Modal from "@/components/Modal";
import { projects, projectFilters, type Project } from "@/data/content";
import { motion, useInView } from "framer-motion";

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
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

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
      <div ref={sectionRef}>
        {/* Filters */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
            <IconFilter />
          </span>

          {projectFilters.map((t) => {
            const isActive = active === t;
            return (
              <motion.button
                key={t}
                onClick={() => setActive(t)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={[
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
                  isActive
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30"
                    : "border border-violet-400/20 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20 hover:border-violet-400/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
                ].join(" ")}
              >
                {t}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-400">No projects found for this filter.</p>
            </div>
          ) : (
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate={gridInView ? "visible" : "visible"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {filtered.map((p, index) => (
                <motion.article
                  key={p.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.08,
                      },
                    },
                  }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="premium-card premium-card-hover group overflow-hidden"
                >
                  <div className="relative p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="text-2xl mb-2 transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                          {p.icon}
                        </div>
                        <h3 className="text-base font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent leading-snug break-words">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-xs text-violet-300/70 font-medium whitespace-nowrap">{p.date}</p>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4 break-words overflow-hidden">
                      {p.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.detail.stack.slice(0, 3).map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                      {p.detail.stack.length > 3 && (
                        <span className="pill text-xs">+{p.detail.stack.length - 3}</span>
                      )}
                    </div>

                    {/* Actions */}
                  <div className="flex items-center gap-2.5">
                    {/* View Details */}
                    <motion.button
                      onClick={() => setSelected(p)}
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex-1 h-9 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-xs font-semibold text-white transition-all duration-200 hover:from-violet-400 hover:to-indigo-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
                  >
                    View Details
                  </motion.button>

                  {/* GitHub */}
                  {p.detail.github && (
                    <motion.a
                      href={p.detail.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] text-zinc-300 transition-all duration-200 hover:bg-white/[0.06] hover:text-white hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                    >
                      <IconGithub />
                    </motion.a>
                  )}
                  </div>
                </div>
              </motion.article>
              ))}
            </motion.div>
          )}
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
