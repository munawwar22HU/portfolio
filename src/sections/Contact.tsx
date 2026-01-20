"use client";

import { contact, profile } from "@/data/content";

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
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/35 p-7 sm:p-8 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_85%_50%,rgba(124,58,237,0.22),rgba(124,58,237,0.06),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      <div className="relative">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <div className="mt-6">{children}</div>
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
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/20">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-200">{label}</p>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-sm text-zinc-400 underline decoration-white/15 underline-offset-4 hover:text-zinc-200"
          >
            {text}
          </a>
        ) : (
          <p className="mt-1 text-sm text-zinc-400">{text}</p>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const emailHref = profile.links.email; 
  const githubHref = profile.links.github;
  const linkedinHref = profile.links.linkedin;

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">Get In Touch</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {contact.blurb}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
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

          <ContactCard title="Quick Response">
            <p className="text-sm text-zinc-400">{contact.quick[0]}</p>
            <div className="mt-5 text-sm text-zinc-400">
              <p className="font-semibold text-zinc-200">Best times to reach me:</p>
              <p className="mt-1">{contact.quick[1]}</p>
              <p className="mt-2">{contact.responseTimeText}</p>
            </div>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
