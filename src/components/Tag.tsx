export default function Tag({ children }: { children: string }) {
  return (
    <span className="pill border-violet-400/25 bg-violet-500/10 text-violet-200 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-500/15 hover:shadow-[0_0_10px_rgba(168,85,247,0.15)]">
      {children}
    </span>
  );
}
