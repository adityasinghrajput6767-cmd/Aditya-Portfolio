"use client";
import { STATS } from "@/data/content";

export default function StatsStrip() {
  return (
    <div
      className="py-[clamp(2rem,4vw,3rem)] px-[clamp(1rem,5vw,4rem)]"
      style={{ background: "#0f0e0d", color: "#faf9f7" }}
    >
      <div
        className="max-w-[1100px] mx-auto grid gap-y-[clamp(1.5rem,3vw,2.5rem)] gap-x-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
      >
        {STATS.map((s) => (
          <div key={s.label}>
            <div
              className="leading-none tracking-[-0.02em] mb-1.5"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "#faf9f7",
              }}
            >
              {s.num}
              {s.sup && (
                <sup
                  className="font-sans font-normal"
                  style={{ fontSize: "0.5em", verticalAlign: "super", color: "rgba(250,249,247,0.5)" }}
                >
                  {s.sup}
                </sup>
              )}
            </div>
            <div className="text-[12px] leading-[1.4] max-w-[140px]" style={{ color: "rgba(250,249,247,0.55)" }}>
              {s.label}
            </div>
            <div className="text-[11px] mt-1 italic" style={{ color: "rgba(250,249,247,0.3)" }}>
              {s.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
