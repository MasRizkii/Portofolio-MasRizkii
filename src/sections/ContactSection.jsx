import { HiEnvelope, HiPhone } from "react-icons/hi2";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import SocialLinks from "../components/common/SocialLinks";

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <Container className="relative grid w-full min-w-0 max-w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="w-full min-w-0 max-w-full">
          <p className="text-xs font-medium uppercase tracking-wider text-[#c05cff]">
            Let&apos;s work together
          </p>

          <h2 className="mt-3 text-3xl font-medium md:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#bbb4c0] md:text-base">
            I&apos;m always open to discussing new projects and
            opportunities. Let&apos;s create something amazing together!
          </p>

          <Button href="https://wa.me/6287707001216" className="mt-7">
            Contact Me
            <HiPhone />
          </Button>
        </div>

        <div className="glass-card w-full max-w-full overflow-hidden rounded-2xl p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-[#c05cff]">
            Follow Me
          </p>

          <div className="mt-4">
            <SocialLinks />
          </div>

          <div className="mt-7 space-y-4 text-sm text-[#bbb4c0]">
            <a
              href="mailto:mohammadrizki.ramadhani24@gmail.com"
              className="flex min-w-0 items-center gap-3 transition hover:text-white"
            >
              <HiEnvelope className="shrink-0 text-lg text-[#c05cff]" />
              <span className="break-all">mohammadrizki.ramadhani24@gmail.com</span>
            </a>

            <a
              href="tel:+628770700-1216"
              className="flex min-w-0 items-center gap-3 transition hover:text-white"
            >
              <HiPhone className="shrink-0 text-lg text-[#c05cff]" />
              <span>+62 877-0700-1216</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;