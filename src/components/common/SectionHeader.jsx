function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <header className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#c05cff]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#bbb4c0]">
          {description}
        </p>
      )}

      <span className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1769e8] to-[#a946f4]" />
    </header>
  );
}

export default SectionHeader;