import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="text-zinc-600">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
