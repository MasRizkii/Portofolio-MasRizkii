import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import SkillCard from "../components/cards/SkillCard";
import { skillColumns } from "../data/skills";

function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <Container className="relative">
        <SectionHeader
          eyebrow="My Skills"
          title="Technologies I Master"
        />

        <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {skillColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-7">
              {column.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
