"use client";
import { useState } from "react";
import { EXPERIENCE } from "@/data/content";

export default function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="px-[clamp(1rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)]"
      style={{ background: "#faf9f7" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <div
          className="flex items-baseline justify-between gap-4 mb-12 pb-6 flex-wrap"
          style={{ borderTop: "1px solid rgba(15,14,13,0.18)", paddingTop: "1.5rem" }}
        >
          <span className="text-[11px] tracking-[0.1em] uppercase" style={{ color: "#9a9490" }}>
            01 — Experience
          </span>
          <h2
            className="font-normal tracking-[-0.01em]"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(1.8rem,4vw,3rem)",
              color: "#0f0e0d",
            }}
          >
            Where I&apos;ve <em className="italic" style={{ color: "#c84b0f" }}>operated</em>
          </h2>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-px" style={{ background: "rgba(15,14,13,0.10)" }}>
          {EXPERIENCE.map((exp) => {
            const isOpen = open === exp.id;
            return (
              <div
                key={exp.id}
                className="cursor-pointer transition-colors duration-150"
                style={{ background: isOpen ? "#f2f0ec" : "#faf9f7" }}
                onMouseEnter={(e) => {
                  if (!isOpen) (e.currentTarget as HTMLDivElement).style.background = "#f2f0ec";
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) (e.currentTarget as HTMLDivElement).style.background = "#faf9f7";
                }}
                onClick={() => setOpen(isOpen ? null : exp.id)}
              >
                {/* Top row */}
                <div
                  className="flex items-center justify-between gap-4 flex-wrap"
                  style={{ padding: "clamp(1.25rem,2.5vw,1.75rem) clamp(1rem,3vw,2rem)" }}
                >
                  <div>
                    <div className="text-[clamp(1rem,2vw,1.2rem)] font-medium" style={{ color: "#0f0e0d", marginBottom: "4px" }}>
                      {exp.role}
                    </div>
                    <div className="text-[13px]" style={{ color: "#9a9490" }}>{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] whitespace-nowrap" style={{ color: "#9a9490" }}>{exp.period}</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 text-[16px] font-light select-none"
                      style={{
                        background: isOpen ? "#0f0e0d" : "#e8e5e0",
                        color: isOpen ? "#faf9f7" : "#0f0e0d",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>

                {/* Expandable body */}
                {isOpen && (
                  <div style={{ padding: "0 clamp(1rem,3vw,2rem) clamp(1.25rem,2.5vw,1.75rem)" }}>
                    <ul className="flex flex-col gap-3.5 list-none">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3.5 text-[14px] leading-[1.65]" style={{ color: "#4a4640" }}>
                          <span className="flex-shrink-0 text-[13px] mt-0.5" style={{ color: "#c84b0f" }}>→</span>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex flex-wrap gap-1.5 mt-5 pt-5"
                      style={{ borderTop: "1px solid rgba(15,14,13,0.10)" }}
                    >
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-full"
                          style={{ background: "#e8e5e0", color: "#4a4640" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
