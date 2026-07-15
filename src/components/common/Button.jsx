function Button({
  children,
  href = "#",
  variant = "primary",
  download = false,
  className = "",
}) {
  const variants = {
    primary: "gradient-button border border-transparent text-white",
    outline:
      "border border-white/70 bg-transparent text-white hover:border-[#b85cff] hover:text-[#cf85ff]",
  };

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;