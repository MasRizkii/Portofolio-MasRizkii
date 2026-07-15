import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/15 bg-[#493e50] transition duration-300 hover:-translate-y-2 hover:border-[#b85cff] hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-sky-200 via-blue-100 to-lime-300">
        <img
          src={project.image}
          alt={`Tampilan ${project.title}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#493e50]/40 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-[#c8c1cc]">
          {project.description}
        </p>

        <a
          href={project.demoUrl !== "#" ? project.demoUrl : project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-1 text-sm font-medium text-[#cf85ff]"
        >
          View Project
          <HiArrowUpRight />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
