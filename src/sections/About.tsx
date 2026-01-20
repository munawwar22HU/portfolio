"use client";

import { about, experience, skillGroups } from "@/data/content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] section-surface"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32">
        {/* 1) About Me */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Me
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
            {about.text}
          </p>
        </motion.div>

        {/* 2) Work Experience */}
        <div id="experience" className="mt-24 sm:mt-32">
          <motion.h3
            className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work Experience
          </motion.h3>
          <WorkTimeline />
        </div>

        {/* 3) Technical Skills */}
        <div className="mt-24 sm:mt-32">
          <motion.h3
            className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Technical Skills
          </motion.h3>
          <SkillsCards />
        </div>

        {/* 4) Education */}
        <div id="education" className="mt-24 sm:mt-32">
          <motion.h3
            className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Education
          </motion.h3>
          <EducationCards />
        </div>
      </div>
    </section>
  );
}

/* ---------- Work Experience Timeline ---------- */

function WorkTimeline() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-50px" });

  return (
    <div ref={timelineRef} className="relative mx-auto mt-12 max-w-6xl px-4">
      {/* center line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-500/60 via-blue-400/40 via-orange-400/30 to-transparent md:block" />

      <div className="space-y-12 md:space-y-16">
        {experience.map((e, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={`${e.company}-${e.role}-${idx}`}
              className="relative"
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* dot */}
              <div className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 shadow-[0_0_25px_rgba(168,85,247,0.7),0_0_15px_rgba(59,130,246,0.5)] md:block z-10" />

              {/* card */}
              <div className={`relative md:w-[calc(50%-3rem)] ${isEven ? 'md:mr-auto md:pr-12 md:pl-0' : 'md:ml-auto md:pl-12 md:pr-0'}`}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="rounded-xl border border-violet-400/20 bg-gradient-to-br from-white/[0.03] to-violet-500/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/40 hover:bg-gradient-to-br hover:from-white/[0.05] hover:to-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-bold text-white break-words">{e.company}</div>
                      <div className="text-sm font-medium bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mt-0.5 break-words">{e.role}</div>
                    </div>
                    <div className={`text-xs text-zinc-400 font-medium flex-shrink-0 ${isEven ? 'sm:text-left' : 'sm:text-right'}`}>
                      <div className="whitespace-nowrap">{e.dates}</div>
                      <div className="mt-0.5 whitespace-nowrap">{e.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-300">
                    {e.bullets.map((b, i) => (
                      <li key={`${e.company}-${e.role}-${i}`} className="relative pl-5 break-words before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-violet-400 before:to-blue-400 before:shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Technical Skills Cards ---------- */

function SkillCard({
  title,
  icon,
  items,
  index,
}: {
  title: string;
  icon: string;
  items: string[];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -3 }}
      className="rounded-xl border border-violet-400/20 bg-gradient-to-br from-white/[0.03] to-violet-500/5 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-violet-400/40 hover:bg-gradient-to-br hover:from-white/[0.05] hover:to-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20"
    >
      {/* Icon */}
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-xl ring-1 ring-violet-400/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-xs font-bold text-white mb-2.5 uppercase tracking-wide">{title}</h4>

      {/* Skills */}
      <p className="text-xs leading-relaxed text-zinc-400">
        {items.join(", ")}
      </p>
    </motion.div>
  );
}

function SkillsCards() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {skillGroups.map((g, index) => (
        <SkillCard
          key={g.title}
          title={g.title}
          icon={g.icon}
          items={g.items}
          index={index}
        />
      ))}
    </div>
  );
}



/* ---------- Education Cards ---------- */

function EducationCards() {
  const cards = [
    {
      school: "Emory University",
      degree: "Masters, Computer Science",
      meta: "GPA: 4.0/4.0 | August 2024 - December 2025",
    },
    {
      school: "Habib University",
      degree: "Bachelors, Computer Science",
      meta: "GPA: 3.85/4.0 | August 2018 - June 2022",
    },
  ];

  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-50px" });

  return (
    <div ref={cardsRef} className="mt-12 grid gap-6 md:grid-cols-2">
      {cards.map((c, index) => (
        <motion.div
          key={c.school}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ scale: 1.01, y: -2 }}
          className="rounded-xl border border-violet-400/20 bg-gradient-to-br from-white/[0.03] to-violet-500/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/40 hover:bg-gradient-to-br hover:from-white/[0.05] hover:to-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20"
        >
          <div className="text-lg font-bold text-white">{c.school}</div>
          <div className="mt-2 text-sm font-medium bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">{c.degree}</div>
          <div className="mt-5 text-xs text-zinc-400 leading-relaxed">{c.meta}</div>
        </motion.div>
      ))}
    </div>
  );
}
