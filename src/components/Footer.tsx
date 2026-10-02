import { profile } from "../data/profile";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 text-center text-xs text-mist/60">
      <p>
        © {currentYear} {profile.name}. Built with React, TypeScript &amp;
        Tailwind CSS.
      </p>
    </footer>
  );
}
