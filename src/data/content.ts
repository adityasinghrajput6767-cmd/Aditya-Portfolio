export const CONTACT = {
  email: "adityasinghrajput6767@gmail.com",
  phone: "+91 77392 86405",
  phoneHref: "tel:+917739286405",
  linkedin: "https://www.linkedin.com/in/aditya-singh-a246b82b0/",
  linkedinHandle: "aditya-singh-a246b82b0",
  location: "Bengaluru, India",
  availability: "Open for full-time Opportunities",
  relocate: "Bengaluru · Remote · Open to relocation",
};

export const STATS = [
  { num: "600", sup: "+", label: "Qualified leads per 30 days", note: "68% Tier-1 ICP match" },
  { num: "3.4", sup: "×", label: "Organic traffic growth", note: "22 SEO/AEO/GEO experiments" },
  { num: "48",  sup: "",  label: "Merchants closed solo",      note: "68% of zone conversions" },
  { num: "50",  sup: "+", label: "Growth experiments shipped", note: "Acquisition → retention" },
  { num: "22",  sup: "%", label: "CAC reduction (est.)",       note: "Windsor.ai attribution model" },
  { num: "41",  sup: "%", label: "Email open rate",            note: "Up from 18% baseline" },
];

export const EXPERIENCE = [
  {
    id: "retailone",
    role: "Growth Marketing Lead · Founder's Office",
    company: "RetailOne.ai × Vypzee · Remote",
    period: "Aug 2025 – Apr 2026",
    bullets: [
      "<strong>Organic was zero.</strong> Ran 22 SEO/AEO/GEO experiments via Ahrefs + AI-layer indexing tests (ChatGPT, Perplexity, SGE) — grew organic traffic 3.4×, built 350+ high-authority backlinks. Organic now drives ~28% of inbound pipeline.",
      "<strong>Funnel had a 66% drop-off.</strong> Diagnosed via GA4 + Mixpanel cohort analysis, rebuilt 4-stage conversion architecture with Windsor.ai attribution — projected 1.8× footfall uplift and 2.8× sales conversion vs. baseline (funnel modeling).",
      "<strong>Email was dead at 18% open rate.</strong> A/B tested 12 email sequences + 8 cross-funnel messaging experiments — lifted open rate to 41%, reply rate 2.3×. Winning config deployed across full lifecycle automation.",
      "<strong>No outbound pipeline.</strong> ICP-segmented outbound via Apollo + Apify — 600+ qualified leads in 30 days, 68% Tier-1 ICP match, 22% converted to active sales conversations.",
      "<strong>No enterprise pilots.</strong> Built multi-layer ABM pipeline across 3 ICP tiers — closed pilots with M3M Group and Brigade Group (Fortune-ranked). LinkedIn demand engine hit 4.2× inbound enterprise DMs vs. baseline.",
      "<strong>Low PLG adoption.</strong> Designed hyperlocal PLG commerce system for 40+ restaurants — 1,300+ orders in 90 days, repeat rate ↑34%, activation 38% → 54%, pipeline velocity cut ~18 days.",
      "<strong>No attribution clarity.</strong> Built cross-channel model via Windsor.ai + Coupler.io — surfaced 2 channels driving 78% of Tier-1 conversions. Blended CAC reduced ~22%.",
    ],
    tags: ["SEO/AEO/GEO","GA4","Mixpanel","Apollo","Apify","ABM","Windsor.ai","Email Automation","PLG","Ahrefs"],
  },
  {
    id: "vypzee",
    role: "Sales & GTM Strategy Intern",
    company: "Vypzee · On-site",
    period: "May – Jul 2025",
    bullets: [
      "<strong>No validated playbook, low zone conversions.</strong> Ran field GTM solo — 150+ in-person pitches. Closed 48 merchants, 68% of the zone's total conversions.",
      "<strong>Flat ₹10K fee was killing conversions.</strong> Built the case from 40+ rejection conversations, modeled impact, presented directly to founders — pricing switched to ₹2K + commission. Sign-ups improved.",
      "<strong>Existing pitch script wasn't working.</strong> Rebuilt from rejection insights — adopted into the company-wide sales playbook.",
    ],
    tags: ["Field Sales","GTM Strategy","Pricing Strategy","Sales Playbook","B2B"],
  },
];

export interface CaseSection {
  h: string;
  t: "text" | "list" | "mets";
  c: string | string[] | { n: string; l: string }[];
}

export interface CaseStudy {
  id: string;
  chip: string;
  name: string;
  desc: string;
  nums: string[];
  tag: string;
  title: string;
  sub: string;
  secs: CaseSection[];
}

export const PROJECTS: CaseStudy[] = [
  {
    id: "retailone",
    chip: "B2B SaaS · Full-stack Growth",
    name: "RetailOne.ai Growth Engine",
    desc: "Built end-to-end growth system — ICP segmentation, outbound pipeline, SEO/AEO, lifecycle automation, and ABM for an AI-first B2B SaaS startup.",
    nums: ["600+ leads/mo", "3.4× organic"],
    tag: "B2B SaaS · Growth Engine · Aug 2025–Apr 2026",
    title: "RetailOne.ai Growth Engine",
    sub: "Full-stack growth system for an AI-first B2B SaaS — ICP to pipeline to retention.",
    secs: [
      { h: "Business problem", t: "text", c: "No repeatable inbound engine, no attribution, 66% funnel drop-off between awareness and demo. The founding team needed a growth operator who could build systems — not run campaigns." },
      { h: "Hypothesis", t: "text", c: "An ICP-precise outbound engine + SEO/AEO visibility + lifecycle automation, all connected via cross-channel attribution, would compound inbound pipeline without relying on paid acquisition." },
      { h: "Experiments shipped", t: "list", c: [
        "22 SEO/AEO/GEO experiments — AI-layer indexing tests across ChatGPT, Perplexity, and SGE to capture answer-engine real estate.",
        "12 email sequence A/B tests + 8 cross-funnel messaging experiments to identify highest-converting copy frameworks.",
        "3-tier ICP segmentation via Apollo + Apify — tested messaging by company size, vertical, and intent signals.",
        "Multi-layer ABM pipeline — personalized sequences for Fortune-ranked enterprise accounts (M3M Group, Brigade Group).",
        "PLG commerce flywheel — 40+ restaurant activation with lifecycle nudges and repeat-order mechanics.",
      ]},
      { h: "Results", t: "mets", c: [
        { n: "3.4×", l: "Organic Growth" }, { n: "600+", l: "Leads / 30 Days" },
        { n: "350+", l: "Backlinks Built" }, { n: "41%",  l: "Email Open Rate" },
        { n: "22%",  l: "CAC Reduction"  }, { n: "1,300+", l: "Orders in 90 Days" },
      ]},
      { h: "What I learned", t: "list", c: [
        "AEO drives high-intent inbound at zero marginal cost — largely uncontested in B2B SaaS today.",
        "Attribution (Windsor.ai) revealed 2 channels driving 78% of Tier-1 conversions — reallocating immediately compounded ROI.",
        "Activation friction removal (38%→54%) improved pipeline velocity more than any feature push.",
      ]},
    ],
  },
  {
    id: "merchant",
    chip: "GTM · Field Sales · Pricing",
    name: "Merchant Acquisition Strategy",
    desc: "Solo field GTM — pitched, closed, and influenced pricing strategy that changed the company's sales motion entirely.",
    nums: ["48 merchants", "68% zone share"],
    tag: "GTM · Field Sales · May–Jul 2025",
    title: "Merchant Acquisition Strategy",
    sub: "Solo field GTM — 48 merchants closed, company pricing model changed, playbook rewritten.",
    secs: [
      { h: "Context", t: "text", c: "Vypzee was entering a competitive hyperlocal B2B marketplace. Merchant density was the core growth lever. My zone had no playbook and low baseline conversion." },
      { h: "What I did", t: "list", c: [
        "150+ in-person pitches — each one a structured experiment with deliberate variation in opening, framing, and objection handling.",
        "Logged and categorized 40+ rejection conversations — flat ₹10K fee emerged as the highest-frequency blocker.",
        "Built the pricing case: modeled conversion impact of switching to ₹2K + commission. Presented directly to founders.",
        "Rebuilt the pitch script from successful-closure patterns — adopted into company-wide sales playbook.",
      ]},
      { h: "Outcome", t: "mets", c: [
        { n: "48",   l: "Merchants Closed"    },
        { n: "68%",  l: "Zone Share"          },
        { n: "150+", l: "Pitches Run"         },
        { n: "1",    l: "Pricing Model Changed"},
      ]},
    ],
  },
  {
    id: "malltech",
    chip: "Primary Research · Strategy",
    name: "State of Mall Tech India 2025",
    desc: "n=100 study (MaxDiff + K-Means) mapping enterprise technology adoption intent across Indian mall retail. Drove ABM targeting.",
    nums: ["71% demand signal", "3 segments"],
    tag: "Primary Research · TAPMI",
    title: "State of Mall Tech India 2025",
    sub: "n=100 primary study (MaxDiff + K-Means) mapping enterprise tech adoption in Indian mall retail.",
    secs: [
      { h: "Objective", t: "text", c: "Map technology adoption intent and willingness-to-pay across Indian mall operators and retail brands — to identify the highest-potential ICP segment for RetailOne.ai's GTM." },
      { h: "Methodology", t: "list", c: [
        "MaxDiff Analysis — ranked technology feature priorities to isolate highest relative utility vs. stated preferences.",
        "K-Means Segmentation — clustered respondents into 3 distinct adoption cohorts.",
        "n=100 survey across mall operators, retail brand managers, and tech procurement decision-makers in Tier-1 and Tier-2 cities.",
      ]},
      { h: "Key findings", t: "list", c: [
        "71% demand signal for AI-powered footfall and conversion analytics — strongest adoption intent category.",
        "60% adoption intent for integrated platforms vs. point solutions — validated platform GTM over feature positioning.",
        "Segment 1 (Early Adopters, ~28%): Fortune-ranked operators; high budget, short sales cycles → ABM target.",
        "Segment 2 (Pragmatists, ~45%): Mid-size brands; ROI-first framing; pilot-first sales motion.",
        "Segment 3 (Laggards, ~27%): Tier-2 operators; 12–18 month cycle → deprioritize.",
      ]},
      { h: "GTM impact", t: "text", c: "Segment 1 mapped directly to ABM targeting — justified Fortune-ranked enterprise pilot outreach. 15,700/100-visitor revenue model deployed as the north-star metric for pipeline investment decisions." },
    ],
  },
  {
    id: "demandog",
    chip: "RevOps · Pipeline Engineering",
    name: "Revenue Founder Demand Gen OS",
    desc: "Architected full-funnel demand generation OS — content-to-conversion pipeline with CRM workflows across Apollo, LinkedIn, and Gmail.",
    nums: ["15+ channel experiments"],
    tag: "RevOps · Pipeline Engineering",
    title: "Revenue Founder Demand Gen OS",
    sub: "Full-funnel pipeline architecture — content-to-conversion with Apollo, LinkedIn, and Gmail orchestration.",
    secs: [
      { h: "Problem", t: "text", c: "No systematic pipeline between inbound content and outbound conversion. Leads existed but were not progressing — no nurture infrastructure, no attribution, no CRM hygiene." },
      { h: "Architecture", t: "list", c: [
        "Content-to-conversion funnel: top-of-funnel SEO/AEO content → LinkedIn warm awareness → cold outreach hits re-targeted intent signals.",
        "CRM orchestration: Apollo sequences + Gmail relationship touchpoints + LinkedIn social proof — all synced.",
        "15+ channel experiments: format, cadence, messaging, and follow-up timing tested across all three channels.",
        "Full-funnel tracking: every touchpoint attributed via custom UTM architecture and Coupler.io dashboards.",
      ]},
      { h: "Results", t: "mets", c: [
        { n: "15+",  l: "Channel Experiments"    },
        { n: "4.2×", l: "LinkedIn Inbound DMs"   },
        { n: "22%",  l: "CAC Reduction (est.)"   },
      ]},
    ],
  },
  {
    id: "flower",
    chip: "Ethnography · Consumer Research",
    name: "Flower Seller Market Study",
    desc: "Anthropology documentary on vendor survival in a perfect-competition market. Ranked 4th in TAPMI batch.",
    nums: ["Ranked 4th · TAPMI"],
    tag: "Ethnography · Consumer Research · TAPMI",
    title: "Flower Seller Market Study",
    sub: "Documentary on vendor survival dynamics in a perfect-competition market. Ranked 4th at TAPMI.",
    secs: [
      { h: "Objective", t: "text", c: "Understand how informal vendors in price-transparent, commoditized markets sustain profitability and build loyalty without differentiation, branding, or pricing power." },
      { h: "What I found", t: "list", c: [
        "Vendors compete on trust and relationship capital — not product differentiation — in commoditized markets.",
        "Price anchoring and micro-segmentation (festival buyers vs. daily buyers) drives higher realized margin despite uniform pricing signals.",
        "Marginal cost awareness and inventory management were primary survival levers — not revenue optimization.",
      ]},
      { h: "Recognition", t: "text", c: "Ranked 4th in batch at TAPMI — highest-placed from the Marketing Strategy specialization in this project category." },
    ],
  },
  {
    id: "ambulance",
    chip: "Consumer Psychology",
    name: "Ambulance Driver Psychology",
    desc: "Study of cognitive load and stress-driven decision-making in emergency responders. Top scorer in TAPMI cohort.",
    nums: ["Top scorer · cohort"],
    tag: "Consumer Psychology · TAPMI",
    title: "Ambulance Driver Psychology",
    sub: "Cognitive load and stress-driven decision-making in emergency responders. Top scorer in cohort.",
    secs: [
      { h: "Objective", t: "text", c: "Examine how cognitive load, time pressure, and environmental stress shape decision-making in ambulance drivers — a proxy for high-stakes consumer behavior under constraint." },
      { h: "Key findings", t: "list", c: [
        "Emergency responders rely on pattern-recognition heuristics, not deliberate analysis — consistent with System 1 dominance under cognitive load.",
        "Stress increases decision rigidity — responders default to trained routes even when real-time data suggests alternatives.",
        "Direct application to UX design for high-urgency consumer interfaces and emergency tech products.",
      ]},
      { h: "Recognition", t: "text", c: "Top scorer in TAPMI cohort for this research submission." },
    ],
  },
];

export const SKILLS = [
  {
    group: "Growth & Experimentation",
    pills: ["A/B Testing","Funnel Optimization","CRO","Lifecycle Automation","Activation & Retention","Pipeline Velocity"],
  },
  {
    group: "GTM & Strategy",
    pills: ["ICP Definition","Pricing Strategy","ABM","Market Research","Brand Positioning","Competitive Analysis"],
  },
  {
    group: "Analytics & Tools",
    pills: ["GA4","Mixpanel","Windsor.ai","Coupler.io","Apollo","Ahrefs","Apify","SQL (basic)"],
  },
  {
    group: "Channels",
    pills: ["SEO / AEO / GEO","Email Automation","WhatsApp Lifecycle","LinkedIn Demand Gen","Field Sales"],
  },
];

export const OPEN_ROLES = [
  "Growth Marketing Manager",
  "GTM Strategy & Revenue Operations",
  "Founder's Office Associate",
  "Growth Operations",
  "Early-stage Startup · Business Strategy",
];
