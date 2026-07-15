import { HiOutlineUser } from "react-icons/hi2";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import StatisticCard from "../components/cards/StatisticCard";
import { statistics } from "../data/statistics";

function AboutSection() {
  return (
    <section id="about" className="bg-[#584860] py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="rounded-md bg-[#55247d] px-3 py-1 text-xs font-semibold uppercase text-[#dc9cff]">
            About Me
          </span>

          <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight md:text-4xl">
            I&apos;m passionate about creating digital solutions
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#d0c8d4]">
            With 4+ years of experience in web development, I help
            businesses and individuals bring their ideas to life through
            clean, efficient, and user-friendly code.
          </p>

          <Button href="#skills" variant="outline" className="mt-7">
            Learn more about me
            <HiOutlineUser />
          </Button>
        </div>

        <div className="grid divide-y divide-white/15 sm:grid-cols-2">
          {statistics.map((statistic, index) => (
            <div
              key={statistic.id}
              className={
                index % 2 === 0 ? "sm:border-r sm:border-white/15" : ""
              }
            >
              <StatisticCard statistic={statistic} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;