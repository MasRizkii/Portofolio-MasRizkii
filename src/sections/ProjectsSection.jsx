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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;