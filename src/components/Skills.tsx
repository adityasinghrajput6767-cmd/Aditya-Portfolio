"use client";
import { SKILLS } from "@/data/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-[clamp(1rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)]"
      style={{ background: "#faf9f7" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div
          className="flex items-baseline justify-between gap-4 mb-12 flex-wrap"
          style={{ borderTop: "1px solid rgba(15,14,13,0.18)", paddingTop: "1.5rem" }}
        >
          <span className="text-[11px] tracking-[0.1em] uppercase" style={{ color: "#9a9490" }}>
            03 — Skills
          </span>
          <h2
            className="font-normal tracking-[-0.01em]"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(1.8rem,4vw,3rem)",
              color: "#0f0e0d",
            }}
          >
            How I <em className="italic" style={{ color: "#c84b0f" }}>operate</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS.map((group) => (
            <div key={group.group}>
              <div
                className="text-[11px] tracking-[0.1em] uppercase mb-3"
                style={{ color: "#9a9490" }}
              >
                {group.group}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[13px] px-3 py-[5px] rounded-full transition-colors duration-150 cursor-default"
                    style={{
                      background: "#f2f0ec",
                      color: "#4a4640",
                      border: "1px solid rgba(15,14,13,0.10)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.background = "#e8e5e0"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.background = "#f2f0ec"; }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
