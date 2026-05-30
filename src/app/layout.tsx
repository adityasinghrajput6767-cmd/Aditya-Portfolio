import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Singh — Growth Marketing & GTM",
  description:
    "Aditya Singh — Growth Marketing & GTM professional. 600+ qualified leads/month, 3.4x organic traffic, 48 merchants closed. Final-year BBA at TAPMI, Bengaluru.",
  keywords:
    "Growth Marketing, GTM Strategy, Founder's Office, B2B SaaS Growth, Growth Operations, Lead Generation, Revenue Operations, Customer Acquisition",
  openGraph: {
    title: "Aditya Singh — Growth Marketing & GTM",
    description: "Builder of growth systems for AI-first B2B startups.",
    type: "website",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Aditya Singh",
      jobTitle: "Growth Marketing & GTM Strategy",
      email: "adityasinghrajput6767@gmail.com",
      telephone: "+91-7739286405",
      alumniOf: "T. A. Pai Management Institute (TAPMI)",
      knowsAbout: [
        "Growth Marketing", "GTM Strategy", "Founder's Office",
        "B2B SaaS", "Lead Generation", "Revenue Operations",
      ],
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="bg-paper text-ink font-sans text-base leading-relaxed"
        style={{ fontFamily: "'Geist', 'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
