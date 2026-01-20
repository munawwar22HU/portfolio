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
    <section id={id} className="section scroll-mt-24">
      <div className={align === "center" ? "text-center" : ""}>
        <div className="mb-8 sm:mb-12">
          <h2
            className={
              align === "center"
                ? "text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                : "section-title text-white"
            }
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className={
                align === "center"
                  ? "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
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
