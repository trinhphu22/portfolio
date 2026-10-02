import type { MouseEvent, ReactNode } from "react";

/**
 * Wraps a glass card and drives the `.spotlight` radial-gradient highlight
 * (see index.css) by writing the cursor position into CSS custom properties
 * on mousemove — cheap (no React state/re-render) and GPU-friendly.
 */
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className={`spotlight ${className}`} onMouseMove={handleMouseMove}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
