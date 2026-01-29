"use client";

import { profile } from "@/data/content";
import { motion, type Variants } from "framer-motion";

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

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 text-zinc-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 hero-bg-exact" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-20 text-center">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location pill */}
          <motion.span
            variants={itemVariants}
            className="rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-1.5 text-xs font-medium text-violet-200 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            {profile.locationPill}
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="mt-12 leading-[0.96] tracking-tight"
          >
            <span className="block text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {profile.headlinePrimary}
            </span>
            {/* <span className="mt-2 block text-5xl font-bold text-violet-400 sm:text-6xl md:text-7xl lg:text-8xl">
              {profile.headlineSecondary}
            </span> */}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
          >
            <span className="font-medium text-orange-400">{profile.tagline}</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.subtag}
          </motion.p>

          {/* Skill chips */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-2.5"
          >
            {profile.skillsPills.map((s, i) => {
              const colors = [
                "border-violet-400/30 bg-violet-500/10 text-violet-200 hover:border-violet-400/50 hover:bg-violet-500/15 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
                "border-blue-400/30 bg-blue-500/10 text-blue-200 hover:border-blue-400/50 hover:bg-blue-500/15 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
                "border-orange-400/30 bg-orange-500/10 text-orange-200 hover:border-orange-400/50 hover:bg-orange-500/15 hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]",
                "border-cyan-400/30 bg-cyan-500/10 text-cyan-200 hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                "border-emerald-400/30 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
              ];
              const colorClass = colors[i % colors.length];
              
              return (
                <motion.span
                  key={`${s}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-full border ${colorClass} px-4 py-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-200`}
                >
                  {s}
                </motion.span>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:from-violet-400 hover:to-purple-500 hover:shadow-xl hover:shadow-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
            >
              View My Work <ArrowIcon />
            </motion.a>

            <motion.a
              href={profile.links?.resumePdf ?? "/resume.pdf"}
              download
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-200 backdrop-blur-sm transition-all duration-200 hover:border-violet-400/50 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/20 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            >
              <DownloadIcon />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="mt-20 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/8 to-transparent"
          />

          {/* Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-12 pb-8 sm:grid-cols-3 sm:gap-8"
          >
            {profile.metrics.map((m, i) => {
              const valueColor =
                i === 0 ? "text-violet-400" : i === 1 ? "text-orange-400" : "text-cyan-400";

              return (
                <motion.div
                  key={`${m.label}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`text-4xl font-bold sm:text-5xl ${valueColor}`}>
                    {m.value}
                  </div>
                  <div className="mt-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">{m.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
