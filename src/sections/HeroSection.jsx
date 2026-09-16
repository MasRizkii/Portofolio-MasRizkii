import { HiArrowUpRight, HiPhone } from "react-icons/hi2";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import CodeCard from "../components/cards/CodeCard";
import DecorativeDots from "../components/ui/DecorativeDots";
import LogoLoop from "../components/ui/LogoLoop";
import { lazy, Suspense } from "react";

const LightPillar = lazy(() =>
  import("../components/ui/LightPillar")
);
import GradientText from "../components/ui/GradientText";

const technologies = [
  {
    node: (
      <span
        title="HTML"
        aria-label="HTML"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#f06529]"
      >
        <SiHtml5 />
      </span>
    ),
    title: "HTML",
  },
  {
    node: (
      <span
        title="CSS"
        aria-label="CSS"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#264de4]"
      >
        <SiCss />
      </span>
    ),
    title: "CSS",
  },
  {
    node: (
      <span
        title="JavaScript"
        aria-label="JavaScript"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#f7df1e]"
      >
        <SiJavascript />
      </span>
    ),
    title: "JavaScript",
  },
  {
    node: (
      <span
        title="React"
        aria-label="React"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#61dafb]"
      >
        <SiReact />
      </span>
    ),
    title: "React",
  },
  {
    node: (
      <span
        title="Tailwind CSS"
        aria-label="Tailwind CSS"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#38bdf8]"
      >
        <SiTailwindcss />
      </span>
    ),
    title: "Tailwind CSS",
  },
  {
    node: (
      <span
        title="Laravel"
        aria-label="Laravel"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#ff2d20]"
      >
        <SiLaravel />
      </span>
    ),
    title: "Laravel",
  },
  {
    node: (
      <span
        title="PHP"
        aria-label="PHP"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#777bb4]"
      >
        <SiPhp />
      </span>
    ),
    title: "PHP",
  },
  {
    node: (
      <span
        title="MySQL"
        aria-label="MySQL"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#4479a1]"
      >
        <SiMysql />
      </span>
    ),
    title: "MySQL",
  },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-24"
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

      <Container className="relative grid items-center gap-10 py-6 sm:py-10 lg:gap-14 lg:py-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative z-30 w-full min-w-0 max-w-full">
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
            <Button href="https://wa.me/6287707001216">
              Contact Me
              <HiPhone />
            </Button>

            <Button
              href="#projects"
              variant="outline"
            >
              Show Project
              <HiArrowUpRight />
            </Button>
          </div>

          <div className="mt-10 w-full max-w-full sm:max-w-lg">
            <p className="mb-4 text-xs uppercase tracking-wider text-white/70">
              Technologies I work with
            </p>

            <div className="w-full max-w-full overflow-hidden rounded-2xl bg-white/5 p-2">
              <LogoLoop
                logos={technologies}
                speed={35}
                direction="left"
                logoHeight={44}
                gap={16}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#242424"
                ariaLabel="Technologies"
              />
            </div>
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[600px] lg:min-h-[600px]">
          <div className="absolute bottom-0 left-2 h-[600px] w-[440px] rounded-t-full bg-gradient-to-t from-[#1769e8]/30 to-[#a946f4]/5 blur-2xl md:left-10" />

          <div className="absolute bottom-[-20px] left-[-100px] z-20 flex h-[650px] w-[490px] items-end justify-center sm:left-[-50px] sm:h-[650px] sm:w-[450px] lg:left-[-100px] lg:h-[920px] lg:w-[570px] [mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0.85)_60%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0.85)_60%,transparent_92%)]">
            <span className="absolute bottom-40 text-7xl font-bold text-white/5">
              R
            </span>

            <img
              src="/images/profile/rizki.png"
              alt="Rizki, Web Developer"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="relative z-10 h-full w-full object-contain object-bottom"
            />

            {/* Gradasi menghilang di bagian bawah foto */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-[#584860] via-[#242424]/80 to-transparent"
            />
          </div>

          <div className="absolute right-[-30px] top-[120px] z-30 w-[480px] origin-top-right scale-[0.4] sm:right-[-20px] sm:w-[320px] sm:scale-[0.8] lg:right-[-140px] lg:top-[70px] lg:w-[380px] lg:scale-[0.85]">
            <CodeCard />
          </div>
        </div>
      </Container>

      {/* Gradasi menghilang di bagian bawah hero background menuju section About */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-28 sm:h-40 md:h-52 bg-gradient-to-b from-transparent via-[#242424]/75 to-[#584860]"
      />
    </section>
  );
}

export default HeroSection;