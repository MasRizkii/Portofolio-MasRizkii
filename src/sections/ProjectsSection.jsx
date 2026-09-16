import { motion } from "motion/react";
import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";

function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#584860] py-24">
      <Container>
        <SectionHeader
          eyebrow="Featured Projects"
          title="Some Of My Recent Work"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.18,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;