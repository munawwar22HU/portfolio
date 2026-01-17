"use client";

import { about, experience, skillGroups} from "@/data/content";

export default function AboutSection() {
  return (
    <section id="about" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] section-surface">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-28">
        {/* 1) About Me */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">About Me</h2>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-relaxed text-zinc-400 sm:text-2xl">
            {about.text}
          </p>
        </div>

        {/* 2) Work Experience */}
        <div className="mt-24">
           <h3 className="text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Work Experience
          </h3>
          <WorkTimeline />
        </div>

        {/* 3) Technical Skills */}
        <div className="mt-24">
          <h3 className="text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Technical Skills
          </h3>
          <SkillsCards />
        </div>

        {/* 4) Education */}
        <div className="mt-24">
          <h3 className="text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Education
          </h3>
          <EducationCards />
        </div>
      </div>
    </section>
  );
}

/* ---------- Work Experience Timeline (Suvin-like) ---------- */

function WorkTimeline() {
  // minimal: uses your existing `experience` array
  return (
    <div className="relative mx-auto mt-10 max-w-5xl">
      {/* center line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

      <div className="space-y-16">
        {experience.map((e, idx) => {
          const left = idx % 2 === 0;
          return (
            <div key={`${e.company}-${e.role}-${idx}`} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10">
              {/* dot */}
              <div className="absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />

              {/* left column */}
              <div className={left ? "md:pr-10" : "md:pr-10 md:opacity-0 md:pointer-events-none"} />

              {/* card */}
              <div className={left ? "md:pl-10 md:col-start-1" : "md:pl-10 md:col-start-2"}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="text-sm text-zinc-200 font-semibold">{e.company}</div>
                  <div className="text-sm text-violet-300">{e.role}</div>
                  <div className="mt-2 text-xs text-zinc-400">{e.dates} • {e.location}</div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                    {e.bullets.map((b, i) => (
                      <li key={`${e.company}-${e.role}-${i}`}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* right column spacer (for alternating) */}
              <div className={!left ? "md:pl-10" : "md:pl-10 md:opacity-0 md:pointer-events-none"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Technical Skills Cards (Suvin-like) ---------- */

function SkillCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        p-6
        text-center
        backdrop-blur
        transition
        hover:border-violet-400/30
        hover:bg-white/[0.07]
      "
    >
      {/* Icon */}
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-sm font-semibold text-white">
        {title}
      </h4>

      {/* Skills */}
      <p className="mt-3 text-xs leading-relaxed text-zinc-400">
        {items.join(", ")}
      </p>
    </div>
  );
}

function SkillsCards() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {skillGroups.map((g) => (
        <SkillCard
          key={g.title}
          title={g.title}
          icon={g.icon}
          items={g.items}
        />
      ))}
    </div>
  );
}



/* ---------- Education Cards (Suvin-like) ---------- */

function EducationCards() {
  // Quick mapping using your resume.tabCards (you can replace with dedicated education data later)
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

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {cards.map((c) => (
        <div key={c.school} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="text-xl font-semibold text-white">{c.school}</div>
          <div className="mt-2 text-base text-violet-300">{c.degree}</div>
          <div className="mt-6 text-sm text-zinc-400">{c.meta}</div>
        </div>
      ))}
    </div>
  );
}
