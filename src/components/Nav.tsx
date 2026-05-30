"use client";
import { CONTACT } from "@/data/content";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-[clamp(1rem,4vw,3rem)]"
      style={{
        background: "rgba(250,249,247,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(15,14,13,0.10)",
      }}
    >
      <span
        className="text-ink text-[1.1rem] tracking-[0.01em]"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      >
        Aditya Singh
      </span>

      <div className="flex items-center gap-1.5">
        {[
          { href: "#work",     label: "Work"     },
          { href: "#projects", label: "Projects" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-[13px] text-ink-2 no-underline px-3.5 py-1.5 rounded-full transition-all duration-150"
            style={{ border: "1px solid rgba(15,14,13,0.18)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0f0e0d";
              (e.currentTarget as HTMLAnchorElement).style.color = "#faf9f7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#4a4640";
            }}
          >
            {label}
          </a>
        ))}

        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-ink-2 no-underline px-3.5 py-1.5 rounded-full transition-all duration-150"
          style={{ border: "1px solid rgba(15,14,13,0.18)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#0f0e0d";
            (e.currentTarget as HTMLAnchorElement).style.color = "#faf9f7";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#4a4640";
          }}
        >
          LinkedIn ↗
        </a>

        <a
          href="#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium no-underline px-3.5 py-1.5 rounded-full transition-all duration-150"
          style={{ background: "#0f0e0d", color: "#faf9f7", border: "1px solid #0f0e0d" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#c84b0f";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c84b0f";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#0f0e0d";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0f0e0d";
          }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
