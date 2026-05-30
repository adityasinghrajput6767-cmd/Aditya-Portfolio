"use client";
import { CONTACT } from "@/data/content";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        minHeight: "100svh",
        padding: "0 clamp(1rem,5vw,4rem) clamp(3rem,6vw,5rem)",
      }}
    >
      {/* Background watermark text */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap leading-none tracking-[-0.04em]"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(8rem,18vw,22rem)",
          color: "rgba(15,14,13,0.04)",
        }}
      >
        Growth
      </span>

      {/* Eyebrow */}
      <div
        className="text-[12px] tracking-[0.12em] uppercase mb-6 flex items-center gap-2.5"
        style={{ color: "#9a9490" }}
      >
        <span className="inline-block w-6 h-px" style={{ background: "#9a9490" }} />
        Growth Marketing · GTM Strategy · Founder&apos;s Office
      </div>

      {/* Headline */}
      <h1
        className="font-normal leading-[1.02] tracking-[-0.02em] mb-8"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(3rem,7vw,6.5rem)",
          color: "#0f0e0d",
          maxWidth: "820px",
        }}
      >
        I build systems
        <br />
        that{" "}
        <em className="italic" style={{ color: "#c84b0f" }}>
          drive
        </em>{" "}
        Revenue.
      </h1>

      {/* Bottom row */}
      <div className="flex items-end justify-between gap-8 flex-wrap">
        <p className="text-[15px] leading-[1.65]" style={{ color: "#4a4640", maxWidth: "440px" }}>
          Final-year BBA at TAPMI with experience across Growth Marketing,
          GTM Strategy, Founder’s Office and Product-Led Growth initiatives.
          Built and scaled acquisition systems, executed experiments,
          and translated customer insights into business outcomes.
        </p>

        <div className="flex gap-2.5 flex-shrink-0 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-[14px] font-medium px-[22px] py-[11px] rounded-full no-underline transition-all duration-200 whitespace-nowrap"
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
             
            View Case Studies
          </a>
          
<a
  href="/Aditya_Singh_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-[14px] font-medium px-[22px] py-[11px] rounded-full"
  style={{
    background: "#c84b0f",
    color: "#faf9f7",
    border: "1px solid #c84b0f"
  }}
>
  Resume ↗
</a>

          <a
            href={`mailto:${CONTACT.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-medium px-[22px] py-[11px] rounded-full no-underline transition-all duration-200 whitespace-nowrap"
            style={{ background: "transparent", color: "#0f0e0d", border: "1px solid rgba(15,14,13,0.18)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0f0e0d";
              (e.currentTarget as HTMLAnchorElement).style.color = "#faf9f7";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0f0e0d";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#0f0e0d";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(15,14,13,0.18)";
            }}
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase hidden sm:flex"
        style={{ right: "clamp(1rem,5vw,4rem)", color: "#9a9490" }}
      >
        <div
          className="w-px h-12 animate-scrollpulse"
          style={{ background: "rgba(15,14,13,0.18)" }}
        />
        Scroll
      </div>
    </section>
  );
}
