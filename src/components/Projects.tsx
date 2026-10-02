import {
  freelanceNote,
  freelancePeriod,
  freelanceProjects,
} from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" eyebrow="Freelance" title="Projects" />

      <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-mist">{freelanceNote}</p>
        <span className="font-semibold text-gold-soft">{freelancePeriod}</span>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {freelanceProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <SpotlightCard className="glass group h-full rounded-2xl transition hover:-translate-y-1 hover:border-gold/30">
              <article className="flex h-full flex-col p-6">
                <h3 className="font-display font-bold text-white transition group-hover:text-gold-soft">
                  {project.name}
                </h3>
                <p className="text-xs text-mist">{project.tagline}</p>
                <p className="mt-1 text-xs font-semibold text-gold-soft">
                  {project.period}
                </p>

                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-mist">
                  {project.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
