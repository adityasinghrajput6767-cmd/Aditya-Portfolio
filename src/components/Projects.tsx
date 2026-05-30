"use client";
import { useState } from "react";
import { PROJECTS, CaseStudy } from "@/data/content";
import Modal from "./Modal";

export default function Projects() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section
      id="projects"
      className="px-[clamp(1rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)]"
      style={{ background: "#f2f0ec" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div
          className="flex items-baseline justify-between gap-4 mb-12 flex-wrap"
          style={{ borderTop: "1px solid rgba(15,14,13,0.18)", paddingTop: "1.5rem" }}
        >
          <span className="text-[11px] tracking-[0.1em] uppercase" style={{ color: "#9a9490" }}>
            02 — Projects
          </span>
          <h2
            className="font-normal tracking-[-0.01em]"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(1.8rem,4vw,3rem)",
              color: "#0f0e0d",
            }}
          >
            Things I&apos;ve <em className="italic" style={{ color: "#c84b0f" }}>built</em>
          </h2>
        </div>

        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            background: "rgba(15,14,13,0.10)",
          }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="flex flex-col justify-between cursor-pointer transition-colors duration-150 group"
              style={{
                background: "#f2f0ec",
                padding: "clamp(1.5rem,3vw,2rem)",
                minHeight: "260px",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#e8e5e0"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#f2f0ec"; }}
              onClick={() => setActive(p)}
            >
              <div>
                <div className="text-[11px] tracking-[0.08em] uppercase mb-4" style={{ color: "#9a9490" }}>
                  {p.chip}
                </div>
                <div
                  className="leading-[1.2] mb-3"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "1.4rem",
                    color: "#0f0e0d",
                  }}
                >
                  {p.name}
                </div>
                <p className="text-[13px] leading-[1.6]" style={{ color: "#4a4640" }}>
                  {p.desc}
                </p>
              </div>
              <div className="flex items-end justify-between mt-6">
                <div className="flex gap-4 flex-wrap">
                  {p.nums.map((n) => (
                    <span key={n} className="text-[12px] font-medium" style={{ color: "#1a6b47" }}>
                      {n}
                    </span>
                  ))}
                </div>
                <span
                  className="text-[1.2rem] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: "#9a9490", lineHeight: 1 }}
                >
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
