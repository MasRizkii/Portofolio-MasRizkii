import { useRef } from "react";
import { useInView } from "motion/react";
import Container from "../components/common/Container";
import TextCounter from "../components/ui/TextCounter";

function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section id="about" className="bg-[#584860] py-24">
      <Container>
        <div ref={containerRef} className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-md bg-[#55247d] px-3 py-1 text-xs font-semibold uppercase text-[#dc9cff]">
            <TextCounter
              text="About Me"
              trigger={isInView}
              delay={0}
              duration={600}
            />
          </span>

          <h2 className="mt-5 text-3xl font-medium leading-tight md:text-4xl">
            <TextCounter
              text="I'm passionate about creating digital solutions"
              trigger={isInView}
              delay={200}
              duration={1200}
            />
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#d0c8d4] md:text-base">
            <TextCounter
              text="With 4+ years of experience in web development, I help businesses and individuals bring their ideas to life through clean, efficient, and user-friendly code."
              trigger={isInView}
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