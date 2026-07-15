function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-40 top-28 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-10 top-52 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -left-48 bottom-0 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
    </div>
  );
}

export default GradientBackground;