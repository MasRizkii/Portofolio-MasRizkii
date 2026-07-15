import { HiEnvelope, HiPhone } from "react-icons/hi2";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import SocialLinks from "../components/common/SocialLinks";
import TestimonialCard from "../components/cards/TestimonialCard";

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr_0.8fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#c05cff]">
            Let&apos;s work together
          </p>

          <h2 className="mt-3 text-3xl font-medium">
            Have a project in mind?
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#bbb4c0]">
            I&apos;m always open to discussing new projects and
            opportunities. Let&apos;s create something amazing together!
          </p>

          <Button href="https://wa.me/6287707001216" className="mt-7">
            Contact Me
            <HiPhone />
          </Button>
        </div>

        <TestimonialCard
          quote="Rizki is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding."
          name="Evan Valentinus"
          role="CEO, Crocodic"
          avatar="/images/testimonials/2.jpeg"
        />

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#c05cff]">
            Follow Me
          </p>

          <div className="mt-4">
            <SocialLinks />
          </div>

          <div className="mt-7 space-y-4 text-sm text-[#bbb4c0]">
            <a
              href="mailto:mohammadrizki.ramadhani24@gmail.com"
              className="flex items-center gap-3 hover:text-white"
            >
              <HiEnvelope className="text-lg text-[#c05cff]" />
              mohammadrizki.ramadhani24@gmail.com
            </a>

            <a
              href="tel:+628770700-1216"
              className="flex items-center gap-3 hover:text-white"
            >
              <HiPhone className="text-lg text-[#c05cff]" />
              +62 877-0700-1216
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;