import { HiEnvelope } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import SocialLinks from "../components/common/SocialLinks";

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <Container className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
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
            <FaWhatsapp className="text-lg text-green-400" />
          </Button>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-[#c05cff]">
            Follow Me
          </p>

          <div className="mt-4">
            <SocialLinks />
          </div>

          <div className="mt-7 space-y-4 text-sm text-[#bbb4c0]">
            <a
              href="mailto:mohammadrizki.ramadhani24@gmail.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <HiEnvelope className="text-lg text-[#c05cff]" />
              mohammadrizki.ramadhani24@gmail.com
            </a>

            <a
              href="https://wa.me/6287707001216"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <FaWhatsapp className="text-lg text-green-400" />
              +62 877-0700-1216
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;