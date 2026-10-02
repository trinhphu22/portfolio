import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="blob absolute left-1/2 top-1/2 h-96 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-gold/20 via-violet/20 to-teal/20 blur-[120px]" />
      </div>

      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <div className="glass rounded-3xl px-8 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
            Let's work together
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Open to Middle/Senior React Native opportunities. Feel free to
            reach out by email or connect on LinkedIn/GitHub.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-gold-soft to-gold px-6 py-2.5 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:brightness-110"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="glass rounded-full px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/20"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-sm text-mist">
            <a className="transition hover:text-gold-soft" href={profile.githubUrl}>
              {profile.github}
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a
              className="transition hover:text-gold-soft"
              href={profile.linkedinUrl}
            >
              {profile.linkedin}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
