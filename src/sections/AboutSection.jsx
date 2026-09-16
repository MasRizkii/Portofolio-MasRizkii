import Container from "../components/common/Container";

function AboutSection() {
  return (
    <section id="about" className="bg-[#584860] py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-md bg-[#55247d] px-3 py-1 text-xs font-semibold uppercase text-[#dc9cff]">
            About Me
          </span>

          <h2 className="mt-5 text-3xl font-medium leading-tight md:text-4xl">
            I&apos;m passionate about creating digital solutions
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#d0c8d4] md:text-base">
            With 4+ years of experience in web development, I help
            businesses and individuals bring their ideas to life through
            clean, efficient, and user-friendly code.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;