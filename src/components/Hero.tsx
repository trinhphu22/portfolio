import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import avatar from "../assets/avatar.png";
import { profile } from "../data/profile";
import { StaggerGroup, StaggerItem } from "./Stagger";

const BADGES = ["React Native", "TypeScript", "New Architecture", "Re.Pack"];

export default function Hero() {
  // Mouse-reactive parallax for the background blobs — each layer moves by
  // a different factor so the mesh feels layered rather than flat.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const layer1X = useTransform(smx, (v) => v * 20);
  const layer1Y = useTransform(smy, (v) => v * 20);
  const layer2X = useTransform(smx, (v) => v * -28);
  const layer2Y = useTransform(smy, (v) => v * -28);
  const layer3X = useTransform(smx, (v) => v * 14);
  const layer3Y = useTransform(smy, (v) => v * -14);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* gradient mesh background, drifts on its own + reacts to the cursor */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <motion.div
          style={{ x: layer1X, y: layer1Y }}
          className="blob absolute -left-24 top-[-10%] h-80 w-80 rounded-full bg-violet/30 blur-[100px]"
        />
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          className="blob blob-delay absolute right-[-10%] top-10 h-96 w-96 rounded-full bg-gold/25 blur-[110px]"
        />
        <motion.div
          style={{ x: layer3X, y: layer3Y }}
          className="blob absolute bottom-[-15%] left-1/3 h-80 w-80 rounded-full bg-teal/20 blur-[110px]"
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-gold via-violet to-teal opacity-60 blur-xl" />
          <img
            src={avatar}
            alt={profile.name}
            className="h-32 w-32 rounded-full border-2 border-white/20 object-cover sm:h-40 sm:w-40"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full min-w-0"
        >
          <p className="glass mx-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {profile.title}
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="text-white">Trinh Mach</span>
            <br />
            <span className="text-gradient">Huy Phu</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {profile.summary}
          </p>

          <StaggerGroup className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {BADGES.map((b) => (
              <StaggerItem key={b}>
                <span className="glass block rounded-full px-3 py-1 text-xs font-medium text-mist">
                  {b}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:brightness-110"
            >
              View experience
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-1.5 rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:border-white/20"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-mist">
            <span>{profile.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
            <a className="transition hover:text-gold-soft" href={profile.githubUrl}>
              {profile.github}
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
            <a
              className="transition hover:text-gold-soft"
              href={profile.linkedinUrl}
            >
              {profile.linkedin}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
