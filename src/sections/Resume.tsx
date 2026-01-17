"use client";

import { useMemo, useState } from "react";
import { profile, resume } from "@/data/content";

export default function Resume() {
  // Safe arrays (prevents .map on undefined)
  const tabs = useMemo(() => resume?.tabs ?? [], []);
  const education = useMemo(() => resume?.education ?? [], []);
  const certifications = useMemo(() => resume?.certifications ?? [], []);
  const tabCards = resume?.tabCards ?? ({} as Record<string, { title: string; subtitle: string }>);
  const currentRole = resume?.currentRole ?? "";

  // Safe initial tab
  const [tab, setTab] = useState<(typeof resume.tabs)[number] | string>(tabs[0] ?? "");

  // Safe tab card lookup
  const activeCard = tab && tabCards[tab] ? tabCards[tab] : { title: "", subtitle: "" };

  return (
    <section id="resume" className="section section-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Resume
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Download or view my complete professional resume with detailed experience,
            skills, and achievements in data analytics and machine learning.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="premium-card">
            <div className="relative p-6 text-center">
              <p className="text-sm font-semibold text-white">Current Role</p>
              <p className="mt-3 text-sm text-zinc-400">{currentRole || "—"}</p>
            </div>
          </div>

          <div className="premium-card">
            <div className="relative p-6 text-center">
              <p className="text-sm font-semibold text-white">Education</p>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                {education.length ? education.map((e: string) => <p key={e}>{e}</p>) : <p>—</p>}
              </div>
            </div>
          </div>

          <div className="premium-card">
            <div className="relative p-6 text-center">
              <p className="text-sm font-semibold text-white">Certifications</p>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                {certifications.length ? (
                  certifications.map((c: string) => (
                    <p key={c} className="underline decoration-white/15 underline-offset-4">
                      {c}
                    </p>
                  ))
                ) : (
                  <p>—</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs + Actions */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.length ? (
              tabs.map((t: string) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={[
                    "rounded-full px-4 py-2 text-xs transition",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                    tab === t
                      ? "bg-white text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
                      : "border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10",
                  ].join(" ")}
                >
                  {t}
                </button>
              ))
            ) : (
              <span className="text-xs text-zinc-500">No tabs configured</span>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-white">{activeCard.title || " "}</p>
            <p className="mt-2 text-sm text-zinc-400">{activeCard.subtitle || " "}</p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary px-6 py-2" href={profile.links.resumePdf}>
              Download PDF Resume
            </a>
            <a
              className="btn btn-ghost px-6 py-2"
              href={profile.links.resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              View in Browser
            </a>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="mt-12 premium-card">
          <div className="relative">
            <div className="border-b border-white/10 px-5 py-4 text-sm text-zinc-400 text-center">
              Resume Preview
            </div>
            <div className="h-[75vh] w-full">
              <iframe title="Resume Preview" src={resume.pdfUrl} className="h-full w-full" />
            </div>
          </div>
        </div>

        {/* Professional Certifications (optional section) */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-white">Professional Certifications</h3>
          <div className="mt-6 flex justify-center">
            <div className="premium-card max-w-sm">
              <div className="relative p-6">
                <p className="text-sm font-semibold text-white">
                  {certifications[0] ?? "—"}
                </p>
                <p className="mt-2 text-sm text-zinc-400">Issued by AWS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-white">Quick Access</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Scan these QR codes with your phone to quickly access my resume and LinkedIn profile
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="premium-card">
              <div className="relative p-4 text-center">
                <p className="mb-2 text-xs text-zinc-400">Resume PDF</p>
                <div className="aspect-square rounded-lg bg-black/30" />
              </div>
            </div>

            <div className="premium-card">
              <div className="relative p-4 text-center">
                <p className="mb-2 text-xs text-zinc-400">LinkedIn Profile</p>
                <div className="aspect-square rounded-lg bg-black/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
