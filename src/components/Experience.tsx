import { experience } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Where I've worked"
          title="Experience"
        />

        <div className="space-y-20">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {job.company}
                  </h3>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-soft">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm italic text-mist">{job.role}</p>
                {job.description && (
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist">
                    {job.description}
                  </p>
                )}
              </Reveal>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {job.apps.map((app, i) => (
                  <Reveal key={app.name} delay={Math.min(i * 0.06, 0.3)}>
                    <SpotlightCard className="glass group h-full rounded-2xl transition hover:border-gold/30 hover:bg-white/[0.07]">
                      <article className="p-6">
                        <h4 className="font-display font-semibold text-white transition group-hover:text-gold-soft">
                          {app.name}
                          {app.note && (
                            <span className="ml-2 font-sans text-xs font-normal italic text-gold-soft">
                              ({app.note})
                            </span>
                          )}
                        </h4>
                        {app.tagline && (
                          <p className="text-xs text-mist">{app.tagline}</p>
                        )}
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mist">
                          {app.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {app.stack && (
                          <p className="mt-3 text-xs font-medium text-mist/60">
                            {app.stack}
                          </p>
                        )}
                      </article>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
