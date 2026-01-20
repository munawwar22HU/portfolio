"use client";

import { contact, profile } from "@/data/content";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function IconMail() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" opacity="0.9" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5h3l1.2 4-2 1.2c1.6 3.2 3.9 5.5 7.1 7.1l1.2-2 4 1.2v3c0 1-0.8 1.8-1.8 1.8C10.2 20.8 3.2 13.8 3.2 5.3c0-1 .8-1.8 1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.72.75 12.2c0 5.2 3.44 9.62 8.2 11.18.6.12.82-.27.82-.58v-2.04c-3.34.75-4.04-1.47-4.04-1.47-.55-1.43-1.35-1.81-1.35-1.81-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.27 1.86 1.27 1.08 1.9 2.84 1.35 3.53 1.03.11-.81.42-1.35.77-1.66-2.66-.31-5.46-1.36-5.46-6.05 0-1.34.46-2.44 1.23-3.3-.13-.31-.54-1.58.12-3.29 0 0 1-.33 3.3 1.26.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.3-1.59 3.3-1.26 3.3-1.26.66 1.71.25 2.98.12 3.29.77.86 1.23 1.96 1.23 3.3 0 4.7-2.8 5.73-5.47 6.04.43.38.82 1.13.82 2.29v3.39c0 .32.22.71.83.58 4.75-1.56 8.19-5.98 8.19-11.18C23.25 5.72 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C3.33 3.5 2 4.85 2 6.52c0 1.64 1.3 3 2.92 3h.03c1.68 0 2.98-1.36 2.98-3C7.93 4.85 6.65 3.5 4.98 3.5zM2.4 21.5h5.2V10.1H2.4V21.5zM9.4 10.1v11.4h5.2v-6.35c0-1.7.32-3.35 2.43-3.35 2.08 0 2.1 1.95 2.1 3.46v6.24h5.2v-7.25c0-3.56-1.9-5.22-4.44-5.22-2.05 0-2.97 1.14-3.48 1.95h-.03V10.1H9.4z" />
    </svg>
  );
}

function ContactCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-br from-white/[0.03] to-violet-500/5 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/40 hover:bg-gradient-to-br hover:from-white/[0.05] hover:to-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20 group">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_350px_at_85%_50%,rgba(124,58,237,0.2),rgba(59,130,246,0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-violet-400/10" />
      <div className="relative">
        <h3 className="text-sm font-bold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide mb-5">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}

function Item({
  icon,
  label,
  text,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  href?: string;
}) {
  return (
    <motion.div
      className="flex items-start gap-4"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-violet-300 ring-1 ring-violet-400/20 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">{label}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mt-1 block text-sm text-zinc-300 underline decoration-violet-400/30 underline-offset-4 transition-colors duration-200 hover:text-violet-200 hover:decoration-violet-400/60"
          >
            {text}
          </a>
        ) : (
          <p className="mt-1 text-sm text-zinc-400 break-words">{text}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const emailHref = profile.links.email;
  const githubHref = profile.links.github;
  const linkedinHref = profile.links.linkedin;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {contact.blurb}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactCard title="Contact Information">
              <div className="grid gap-6 sm:grid-cols-3">
                <Item
                  icon={<IconMail />}
                  label={contact.info.emailLabel}
                  text={contact.info.emailText}
                  href={emailHref}
                />
                <Item
                  icon={<IconPhone />}
                  label={contact.info.phoneLabel}
                  text={contact.info.phoneText}
                />
                <Item
                  icon={<IconPin />}
                  label={contact.info.locationLabel}
                  text={contact.info.locationText}
                />
              </div>
            </ContactCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactCard title="Social Links">
              <div className="grid gap-6 sm:grid-cols-2">
                <Item
                  icon={<IconGithub />}
                  label={contact.social.githubLabel}
                  text={contact.social.githubText}
                  href={githubHref}
                />
                <Item
                  icon={<IconLinkedIn />}
                  label={contact.social.linkedinLabel}
                  text={contact.social.linkedinText}
                  href={linkedinHref}
                />
              </div>
            </ContactCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactCard title="Quick Response">
              <p className="text-sm text-zinc-300 leading-relaxed">{contact.quick[0]}</p>
              <div className="mt-5 text-sm text-zinc-300">
                <p className="font-semibold text-white mb-2">Best times to reach me:</p>
                <p className="text-zinc-400">{contact.quick[1]}</p>
                <p className="mt-2 text-zinc-400">{contact.responseTimeText}</p>
              </div>
            </ContactCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
