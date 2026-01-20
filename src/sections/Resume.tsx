"use client";

import { profile, resume } from "@/data/content";
import { QRCodeCanvas } from "qrcode.react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function QuickAccess() {
  const qrRef = useRef(null);
  const isInView = useInView(qrRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={qrRef}
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-white">Quick Access</h3>
      <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
        Scan these QR codes with your phone to quickly access my resume and LinkedIn profile
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
        {/* Resume QR */}
        <motion.div
          className="premium-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="relative p-5 text-center">
            <p className="mb-3 text-xs font-medium text-zinc-300">Resume PDF</p>
            <div className="aspect-square rounded-lg bg-black/30 flex items-center justify-center p-2">
              <QRCodeCanvas
                value={`${typeof window !== 'undefined' ? window.location.origin : 'https://munawwaranwar.com'}/resume.pdf`}
                size={140}
                bgColor="transparent"
                fgColor="#ffffff"
                level="H"
              />
            </div>
          </div>
        </motion.div>

        {/* LinkedIn QR */}
        <motion.div
          className="premium-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="relative p-5 text-center">
            <p className="mb-3 text-xs font-medium text-zinc-300">LinkedIn Profile</p>
            <div className="aspect-square rounded-lg bg-black/30 flex items-center justify-center p-2">
              <QRCodeCanvas
                value={profile.links.linkedin}
                size={140}
                bgColor="transparent"
                fgColor="#ffffff"
                level="H"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


export default function Resume() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section section-surface scroll-mt-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Resume
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Download or view my complete professional resume with detailed experience, skills, and achievements.
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href={profile.links.resumePdf}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:from-violet-400 hover:to-purple-500 hover:shadow-xl hover:shadow-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </motion.a>
          <motion.a
            href={profile.links.resumePdf}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-200 backdrop-blur-sm transition-all duration-200 hover:border-violet-400/50 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/20 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </motion.a>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          className="mt-12 premium-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-zinc-300 text-center">
            Resume Preview
          </div>

          <div className="relative h-[75vh] w-full bg-black/30">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <iframe
              title="Resume Preview"
              src={`${typeof window !== 'undefined' ? window.location.origin : 'https://munawwaranwar.com'}/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
              className="h-full w-full"
              style={{ border: "0" }}
              loading="lazy"
            />
          </div>

          {/* Mobile fallback */}
          <div className="border-t border-white/10 p-4 text-center sm:hidden">
            <p className="text-xs text-zinc-400 mb-3">PDF viewer may not work on mobile</p>
            <a
              href={profile.links.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200 underline underline-offset-4"
            >
              Open Resume in Browser
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>

        <QuickAccess />
      </div>
    </section>
  );
}
