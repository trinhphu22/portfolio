import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`glass mx-auto flex max-w-3xl items-center justify-between rounded-full px-5 py-2.5 transition-shadow ${
          scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <a
          href="#top"
          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft via-gold to-violet font-display text-sm font-bold text-ink shadow-inner shadow-white/20 transition hover:brightness-110"
          aria-label="Trinh Mach Huy Phu — back to top"
        >
          <span className="transition-transform group-hover:scale-110">
            TP
          </span>
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium text-mist md:flex">
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                className={`relative z-10 block rounded-full px-3 py-1.5 transition-colors ${
                  active === link.id ? "text-ink" : "hover:text-gold-soft"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-soft to-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a
          href="mailto:trinhphu3504@gmail.com"
          className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-soft to-gold px-4 py-1.5 text-xs font-semibold text-ink transition hover:brightness-110 md:inline-flex"
        >
          Hire me
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 flex max-w-3xl flex-col gap-1 rounded-2xl p-3 text-mist md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/5 hover:text-gold-soft ${
                    active === link.id ? "text-gold-soft" : ""
                  }`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
