function DecorativeDots({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`dot-grid pointer-events-none absolute ${className}`}
    />
  );
}

export default DecorativeDots;