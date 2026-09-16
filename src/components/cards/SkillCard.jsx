import { useEffect, useRef, useState } from "react";

function SkillCard({ skill }) {
  const Icon = skill.icon;
  const cardRef = useRef(null);
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    let frameId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Mulai animasi progress bar
          setAnimatedWidth(skill.level);

          // Animasi hitungan angka 0 ke target%
          let startTime = null;
          const duration = 1200;

          const animateNumber = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOut * skill.level);

            setDisplayPercent(current);

            if (progress < 1) {
              frameId = requestAnimationFrame(animateNumber);
            }
          };

          frameId = requestAnimationFrame(animateNumber);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [skill.level]);

  return (
    <div ref={cardRef}>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-white/90">
          <Icon className="text-lg" style={{ color: skill.color }} />
          {skill.name}
        </span>
        <span className="font-mono text-sm text-white/70">
          {displayPercent}%
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#1769e8] to-[#a946f4] transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
