"use client";

import { profile, resume } from "@/data/content";
import { QRCodeCanvas } from "qrcode.react";

function QuickAccess() {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-lg font-semibold text-white">Quick Access</h3>
      <p className="mt-2 text-sm text-zinc-400">
        Scan these QR codes with your phone to quickly access my resume and
        LinkedIn profile
      </p>

      <div className="mt-6 grid grid-cols-2 gap-6 max-w-md mx-auto">
        {/* Resume QR */}
        <div className="premium-card">
          <div className="relative p-4 text-center">
            <p className="mb-2 text-xs text-zinc-400">Resume PDF</p>
            <div className="aspect-square rounded-lg bg-black/30 flex items-center justify-center">
              <QRCodeCanvas
                value="https://munawwaranwar.com/resume.pdf"
                size={160}
                bgColor="transparent"
                fgColor="#ffffff"
                level="H"
              />
            </div>
          </div>
        </div>

        {/* LinkedIn QR */}
        <div className="premium-card">
          <div className="relative p-4 text-center">
            <p className="mb-2 text-xs text-zinc-400">LinkedIn Profile</p>
            <div className="aspect-square rounded-lg bg-black/30 flex items-center justify-center">
              <QRCodeCanvas
                value="https://linkedin.com/in/munawwar-anwar"
                size={160}
                bgColor="transparent"
                fgColor="#ffffff"
                level="H"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Resume() {
  return (
    <section id="resume" className="section section-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Resume
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Download or view my complete professional resume with detailed
            experience, skills, and achievements.
          </p>
        </div>

        {/* Summary Cards */}
        {/* <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="premium-card">
            <div className="relative p-6 text-center">
              <p className="text-sm font-semibold text-white">Current Role</p>
              <p className="mt-3 text-sm text-zinc-400">{resume.currentRole}</p>
            </div>
          </div>

          <div className="premium-card">
            <div className="relative p-6 text-center">
              <p className="text-sm font-semibold text-white">Education</p>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                {resume.education.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
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
        </div> */}

        <div className="mt-12 premium-card overflow-hidden">
          <div className="border-b border-white/10 px-5 py-4 text-sm text-zinc-400 text-center">
            Resume Preview
          </div>

          <div className="relative h-[75vh] w-full bg-black/30">
            {/* optional: premium fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-black/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-black/50 to-transparent" />

            <iframe
              title="Resume Preview"
              // IMPORTANT: use the SAME absolute URL you use in QR / buttons
              src={`https://munawwaranwar.com/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
              className="h-full w-full"
              style={{ border: "0" }}
            />
          </div>
        </div>


        <QuickAccess />


      </div>
    </section>
  );
}
