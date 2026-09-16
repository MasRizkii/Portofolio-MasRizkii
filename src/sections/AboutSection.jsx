import { useRef, useEffect, useState } from "react";
import Container from "../components/common/Container";
import TextCounter from "../components/ui/TextCounter";

function AboutSection() {
  const containerRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const lastScrollY = useRef(0);
  const hasAnimatedOnce = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > window.innerHeight * 0.15;

      if (inView) {
        if (isScrollingUp && hasAnimatedOnce.current) {
          // Abaikan jika scroll dari bawah ke atas dan sudah pernah beranimasi
          return;
        }
        hasAnimatedOnce.current = true;
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const rafId = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="about" className="bg-[#584860] py-24">
      <Container>
        <div ref={containerRef} className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-md bg-[#55247d] px-3 py-1 text-xs font-semibold uppercase text-[#dc9cff]">
            <TextCounter
              text="About Me"
              trigger={shouldAnimate}
              delay={0}
              duration={600}
            />
          </span>

          <h2 className="mt-5 text-3xl font-medium leading-tight md:text-4xl">
            <TextCounter
              text="I'm passionate about creating digital solutions"
              trigger={shouldAnimate}
              delay={200}
              duration={1200}
            />
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#d0c8d4] md:text-base">
            <TextCounter
              text="With 4+ years of experience in web development, I help businesses and individuals bring their ideas to life through clean, efficient, and user-friendly code."
              trigger={shouldAnimate}
              delay={400}
              duration={1600}
            />
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;