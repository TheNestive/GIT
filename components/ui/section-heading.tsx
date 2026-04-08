type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className={align === "center" ? "eyebrow justify-center" : "eyebrow"}>{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl leading-none text-balance text-foreground sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{description}</p>
    </div>
  );
}
