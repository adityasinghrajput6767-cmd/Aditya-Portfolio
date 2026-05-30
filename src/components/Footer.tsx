"use client";
export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between gap-4 flex-wrap px-[clamp(1rem,5vw,4rem)] py-8"
      style={{ borderTop: "1px solid rgba(15,14,13,0.10)", background: "#faf9f7" }}
    >
      <span className="text-[12px]" style={{ color: "#9a9490" }}>
        © 2026 Aditya Singh · Bengaluru, India
      </span>
      <span className="text-[12px]" style={{ color: "#9a9490" }}>
        All metrics from live dashboards and project deliverables
      </span>
    </footer>
  );
}
