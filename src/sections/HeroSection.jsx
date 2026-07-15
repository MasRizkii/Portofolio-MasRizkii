import { HiArrowDownTray, HiPhone } from "react-icons/hi2";
import { SiHtml5, SiJavascript, SiLaravel, SiReact, SiNextdotjs, SiPhp, SiTailwindcss,} from "react-icons/si";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import CodeCard from "../components/cards/CodeCard";
import DecorativeDots from "../components/ui/DecorativeDots";
import { lazy, Suspense } from "react";

const LightPillar = lazy(() =>
  import("../components/ui/LightPillar")
);
import GradientText from "../components/ui/GradientText";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <Suspense fallback={null}>
      <LightPillar
  topColor="#5227ff"
    bottomColor="#a946f4"
    intensity={0.6}
    rotationSpeed={0.12}
    interactive={false}
    glowAmount={0.004}
    pillarWidth={2.8}
    pillarHeight={0.45}
    noiseIntensity={0.2}
    mixBlendMode="screen"
    pillarRotation={-12}
    quality="low"
    className="pointer-events-none z-0 opacity-60"
/>
</Suspense>

<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#242424] via-[#242424]/75 to-[#242424]/20"
/>
      <DecorativeDots className="-left-10 top-1/2" />
      <DecorativeDots className="right-20 top-16 hidden md:block" />

      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative z-10">
          <span className="inline-flex rounded-md bg-[#55247d] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#db9dff]">
            I'm a web developer
          </span>

          <h1 className="mt-5 text-4xl font-medium leading-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <GradientText
                colors={["#5227FF", "#FF9FFC", "#B497CF"]}
                animationSpeed={5}
                direction="horizontal"
                pauseOnHover={false}
                yoyo
                className="font-bold"
            >
                Rizki
            </GradientText>
            <br />
            I build things for the web
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#bbb4c0] md:text-base">
            I&apos;m a passionate web developer specializing in building
            exceptional digital experiences with modern technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="mailto:mohammadrizki.ramadhani24@gmail.com">
              Contact Me
              <HiPhone />
            </Button>

            <Button
              href="/cv/CV-Rizki.pdf"
              variant="outline"
              download
            >
              Download CV
              <HiArrowDownTray />
            </Button>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-wider text-white/70">
              Technologies I work with
            </p>

            <div className="flex flex-wrap items-center gap-4">
  {/* HTML */}
  <span
    title="HTML"
    aria-label="HTML"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#f06529]"
  >
    <SiHtml5 />
  </span>

  {/* JavaScript */}
  <span
    title="JavaScript"
    aria-label="JavaScript"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#f7df1e]"
  >
    <SiJavascript />
  </span>

  {/* React */}
  <span
    title="React"
    aria-label="React"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#61dafb]"
  >
    <SiReact />
  </span>

  {/* Next.js */}
  <span
    title="Next.js"
    aria-label="Next.js"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-white"
  >
    <SiNextdotjs />
  </span>

  {/* Tailwind CSS */}
  <span
    title="Tailwind CSS"
    aria-label="Tailwind CSS"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#38bdf8]"
  >
    <SiTailwindcss />
  </span>

  {/* Laravel */}
  <span
    title="Laravel"
    aria-label="Laravel"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#ff2d20]"
  >
    <SiLaravel />
  </span>

  {/* PHP */}
  <span
    title="PHP"
    aria-label="PHP"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#777bb4]"
  >
    <SiPhp />
  </span>
</div>
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[600px]">
          <div className="absolute bottom-0 left-2 h-[600px] w-[440px] rounded-t-full bg-gradient-to-t from-[#1769e8]/30 to-[#a946f4]/5 blur-2xl md:left-10" />

          <div className="absolute bottom-0 left-[-50px] z-20 flex h-[660px] w-[420px] items-end justify-center overflow-hidden sm:left-[-30px] sm:h-[620px] sm:w-[430px] lg:left-[-60px] lg:h-[920px] lg:w-[570px]">
            <span className="absolute bottom-40 text-7xl font-bold text-white/5">
              R
            </span>

            <img
              src="/images/profile/rizki.png"
              alt="Rizki, Web Developer"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="relative z-10 h-full w-full object-contain object-bottom [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
            />
          </div>

          <div className="absolute right-[10px] top-[60px] z-30 w-[380px] origin-top-right scale-[0.6] sm:right-[-40px] sm:top-[50px] sm:w-[330px] sm:scale-[0.72] lg:right-[-140px] lg:top-[70px] lg:w-[380px] lg:scale-[0.85]">
            <CodeCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;