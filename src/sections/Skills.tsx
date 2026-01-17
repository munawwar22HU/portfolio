import Section from "@/components/Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="grid gap-4">
        {experience.map((e) => (
          <div key={`${e.company}-${e.role}`} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-semibold">{e.company}</p>
                <p className="text-sm text-zinc-300">{e.role}</p>
              </div>
              <div className="text-right text-xs text-zinc-400">
                <p>{e.dates}</p>
                <p>{e.location}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {e.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
