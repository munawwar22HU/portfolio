export default function Section({
  id,
  title,
  subtitle,
  children,
  align = "left",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className="section">
      <div className={align === "center" ? "text-center" : ""}>
        <div className="mb-6">
          <h2
            className={
              align === "center"
                ? "text-5xl font-semibold tracking-tight text-white sm:text-6xl"
                : "section-title"
            }
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className={
                align === "center"
                  ? "mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg"
                  : "section-subtitle"
              }
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      {children}
    </section>
  );
}
