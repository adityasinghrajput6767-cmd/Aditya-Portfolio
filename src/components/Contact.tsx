"use client";
import { CONTACT, OPEN_ROLES } from "@/data/content";

const links = [
  { label: "Email",    val: CONTACT.email,           href: `mailto:${CONTACT.email}`, external: true  },
  { label: "Phone",    val: CONTACT.phone,            href: CONTACT.phoneHref,         external: false },
  { label: "LinkedIn", val: CONTACT.linkedinHandle,   href: CONTACT.linkedin,          external: true  },
  {
  label: "Resume",
  val: "Download Resume",
  href: "/Aditya_Singh_CV.pdf",
  external: true
},
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-[clamp(1rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)]"
      style={{ background: "#0f0e0d", color: "#faf9f7" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2
          className="font-normal leading-[1.05] tracking-[-0.02em] mb-12"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2.5rem,6vw,5rem)",
            color: "#faf9f7",
            maxWidth: "700px",
          }}
        >
          Let&apos;s build something{" "}
          <em className="italic" style={{ color: "rgba(250,249,247,0.4)" }}>
            worth measuring.
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Links */}
          <div className="flex flex-col gap-3">
            {links.map(({ label, val, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-between px-[18px] py-3.5 rounded-[10px] no-underline transition-all duration-150"
                style={{
                  background: "rgba(250,249,247,0.05)",
                  border: "1px solid rgba(250,249,247,0.10)",
                  color: "rgba(250,249,247,0.8)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(250,249,247,0.10)";
                  el.style.borderColor = "rgba(250,249,247,0.20)";
                  el.style.color = "#faf9f7";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(250,249,247,0.05)";
                  el.style.borderColor = "rgba(250,249,247,0.10)";
                  el.style.color = "rgba(250,249,247,0.8)";
                }}
              >
                <div>
                  <div className="text-[11px] tracking-[0.08em] uppercase mb-0.5" style={{ color: "rgba(250,249,247,0.35)" }}>
                    {label}
                  </div>
                  <div className="text-[14px]">{val}</div>
                </div>
                <span className="text-[1rem] transition-transform duration-150" style={{ color: "rgba(250,249,247,0.3)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Availability card */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "rgba(250,249,247,0.05)", border: "1px solid rgba(250,249,247,0.10)" }}
          >
            <div className="mb-4">
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }}
              />
              <span className="text-[12px]" style={{ color: "rgba(250,249,247,0.5)" }}>Availability</span>
            </div>
            <div className="mb-6">
              <div className="text-[15px] mb-1" style={{ color: "#faf9f7" }}>{CONTACT.availability}</div>
              <div className="text-[13px]" style={{ color: "rgba(250,249,247,0.4)" }}>{CONTACT.relocate}</div>
            </div>

            <div className="text-[11px] tracking-[0.1em] uppercase mb-2.5" style={{ color: "rgba(250,249,247,0.35)" }}>
              Targeting
            </div>
            <div className="flex flex-col">
              {OPEN_ROLES.map((role, i) => (
                <div
                  key={role}
                  className="text-[13px] py-1.5"
                  style={{
                    color: "rgba(250,249,247,0.6)",
                    borderBottom: i < OPEN_ROLES.length - 1 ? "1px solid rgba(250,249,247,0.06)" : "none",
                  }}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
