"use client";
import { useEffect } from "react";
import { CaseStudy, CaseSection } from "@/data/content";
import { CONTACT } from "@/data/content";

function renderSection(sec: CaseSection) {
  return (
    <div key={sec.h}>
      <div
        className="text-[11px] tracking-[0.08em] uppercase font-semibold mt-7 mb-1.5"
        style={{ color: "#c84b0f" }}
      >
        {sec.h}
      </div>
      {sec.t === "text" && (
        <p className="text-[14px] leading-[1.7]" style={{ color: "#4a4640" }}>
          {sec.c as string}
        </p>
      )}
      {sec.t === "list" && (
        <ul className="flex flex-col gap-2.5 list-none">
          {(sec.c as string[]).map((item, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-[1.6]" style={{ color: "#4a4640" }}>
              <span className="flex-shrink-0 text-[12px] mt-0.5" style={{ color: "#c84b0f" }}>→</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      )}
      {sec.t === "mets" && (
        <div className="grid gap-2.5 mt-1.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
          {(sec.c as { n: string; l: string }[]).map((m) => (
            <div
              key={m.l}
              className="rounded-[10px] p-4 text-center"
              style={{ background: "#f2f0ec" }}
            >
              <div
                className="leading-none tracking-[-0.02em]"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "1.6rem",
                  color: "#0f0e0d",
                }}
              >
                {m.n}
              </div>
              <div className="text-[11px] mt-1" style={{ color: "#9a9490" }}>{m.l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface ModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      style={{ background: "rgba(15,14,13,0.6)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-[760px] rounded-2xl"
        style={{
          background: "#faf9f7",
          padding: "clamp(1.5rem,4vw,2.5rem)",
          animation: "mup .25s ease",
        }}
      >
        <style>{`@keyframes mup{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-[16px] transition-colors duration-150 cursor-pointer border-0"
          style={{ background: "#f2f0ec", color: "#4a4640" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8e5e0"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f2f0ec"; }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-[11px] tracking-[0.1em] uppercase mb-3" style={{ color: "#9a9490" }}>
          {project.tag}
        </div>
        <h3
          className="font-normal leading-[1.15] mb-1.5"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(1.5rem,3vw,2rem)",
            color: "#0f0e0d",
          }}
        >
          {project.title}
        </h3>
        <p className="text-[14px] leading-[1.6] mb-8" style={{ color: "#4a4640" }}>
          {project.sub}
        </p>

        {/* Sections */}
        {project.secs.map((sec) => renderSection(sec))}

        {/* Footer CTA */}
        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(15,14,13,0.10)" }}>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2.5 rounded-full no-underline transition-all duration-150"
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
            Discuss this project on LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
