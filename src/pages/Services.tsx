import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow, GlassCard, MagneticButton, PageWrap, Reveal, SectionTitle } from "../components/ui";

type Service = {
  id: string;
  title: string;
  overview: string;
  icon: string;
  features: string[];
  benefits: string[];
  deliverables: string[];
  timeline: string;
  faq: { q: string; a: string }[];
};

const services: Service[] = [
  {
    id: "custom",
    title: "Custom Website Development",
    icon: "◆",
    overview: "Bespoke marketing and brand websites engineered from a blank canvas — perfectly tailored to your story, audience and business goals.",
    features: ["Custom UI/UX design", "Headless CMS integration", "Animation systems", "Multi-language support", "Edge-deployed", "Analytics & CRO ready"],
    benefits: ["Brand differentiation", "Higher conversions", "Long-term scalability", "Editorial flexibility"],
    deliverables: ["Design system", "Production codebase", "CMS setup", "SEO foundations", "Launch playbook"],
    timeline: "6–10 weeks",
    faq: [
      { q: "Do you handle copywriting and content?", a: "Yes — we offer copywriting, content strategy and editorial direction as add-ons." },
      { q: "What stack do you build on?", a: "Typically Next.js, TypeScript, Tailwind, deployed to Vercel or Cloudflare with a headless CMS." },
    ],
  },
  {
    id: "business",
    title: "Business & Corporate Websites",
    icon: "◇",
    overview: "Polished corporate web presences that communicate credibility, attract enterprise clients and reflect your company's stature.",
    features: ["Multi-section IA", "Investor portals", "Press & insights hubs", "Careers integration", "Lead routing", "Brand guideline alignment"],
    benefits: ["Stronger enterprise positioning", "Better PR/recruitment outcomes", "Higher inbound lead quality"],
    deliverables: ["Brand-aligned site", "CMS for marketing team", "Integrations with HubSpot/Salesforce"],
    timeline: "5–9 weeks",
    faq: [
      { q: "Can you migrate from WordPress?", a: "Absolutely. We handle content migration and SEO preservation end-to-end." },
    ],
  },
  {
    id: "landing",
    title: "Landing Pages",
    icon: "▢",
    overview: "Single-purpose pages engineered for conversion velocity — perfect for product launches, campaigns and paid traffic.",
    features: ["Conversion-first design", "A/B test ready", "Form integrations", "Speed-optimized", "Heatmap instrumentation"],
    benefits: ["Lower CPA", "Higher campaign ROAS", "Rapid iteration"],
    deliverables: ["High-converting page", "Variant set", "Analytics dashboard"],
    timeline: "2–3 weeks",
    faq: [{ q: "Can you handle paid ads too?", a: "We partner with vetted growth teams for paid distribution." }],
  },
  {
    id: "ecom",
    title: "E-Commerce Stores",
    icon: "✦",
    overview: "Premium storefronts engineered to convert — from product storytelling to checkout efficiency and post-purchase journeys.",
    features: ["Shopify / Headless commerce", "PDP storytelling", "Optimized checkout", "Subscriptions", "Personalization", "Loyalty integrations"],
    benefits: ["Higher AOV", "Lower cart abandonment", "Stronger LTV"],
    deliverables: ["Storefront design", "PDP system", "Checkout optimizations"],
    timeline: "6–12 weeks",
    faq: [{ q: "Do you support Shopify Plus?", a: "Yes — Shopify Plus, BigCommerce and headless setups via commerce APIs." }],
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    icon: "✺",
    overview: "Editorial portfolios for studios, creators and founders that command attention and earn premium opportunities.",
    features: ["Editorial case studies", "Media-rich layouts", "Custom navigation", "Press inclusion"],
    benefits: ["Higher project rates", "Better client fit", "Stronger personal brand"],
    deliverables: ["Editorial site", "Case study system", "Press kit"],
    timeline: "3–6 weeks",
    faq: [{ q: "Can you write case studies?", a: "Yes — we offer editorial writing as an add-on." }],
  },
  {
    id: "webapp",
    title: "Web Applications",
    icon: "⧉",
    overview: "Production-grade web applications — internal tools, marketplaces, dashboards and SaaS MVPs engineered to scale.",
    features: ["Auth & permissions", "Real-time data", "Admin dashboards", "Payments", "Multi-tenant"],
    benefits: ["Faster time-to-market", "Lower technical debt", "Investor-grade quality"],
    deliverables: ["Web app", "Admin", "Documentation"],
    timeline: "8–16 weeks",
    faq: [{ q: "Do you offer fractional CTO support?", a: "Yes — we partner with founders on architecture and team scaling." }],
  },
  {
    id: "redesign",
    title: "Website Redesign",
    icon: "↻",
    overview: "A complete reimagining of your existing site — modernizing brand, performance and conversion without losing equity.",
    features: ["SEO preservation", "Content migration", "Brand refresh", "Performance overhaul"],
    benefits: ["Modern brand presence", "Improved rankings", "Higher conversions"],
    deliverables: ["Redesign", "Migration plan", "Launch playbook"],
    timeline: "5–9 weeks",
    faq: [{ q: "Will my SEO rankings be affected?", a: "We protect URLs, redirects, schema and content equity carefully." }],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: "◎",
    overview: "Technical and content SEO that compounds — built on audits, instrumentation and editorial rigor.",
    features: ["Technical audits", "Schema markup", "Content strategy", "Backlink strategy", "Reporting"],
    benefits: ["Sustainable organic growth", "Higher domain authority", "Lower CAC"],
    deliverables: ["SEO audit", "Strategy roadmap", "Monthly reports"],
    timeline: "Ongoing (3-month minimum)",
    faq: [{ q: "How fast will I see results?", a: "Most clients see meaningful movement within 90 days, compounding from there." }],
  },
  {
    id: "support",
    title: "Maintenance & Support",
    icon: "✦",
    overview: "Ongoing partnership — dedicated retainers covering performance, content, iteration and growth.",
    features: ["Bug fixes & monitoring", "Content updates", "Performance reviews", "Security patches", "Iteration sprints"],
    benefits: ["Peace of mind", "Continuous improvement", "Single accountable team"],
    deliverables: ["Monthly retainer", "Performance reports", "Iteration log"],
    timeline: "Ongoing",
    faq: [{ q: "Is there a minimum commitment?", a: "Three-month minimum, billed monthly." }],
  },
  {
    id: "perf",
    title: "Performance Optimization",
    icon: "⚡",
    overview: "Engineering-led performance audits and rewrites that take your site from sluggish to sub-second.",
    features: ["Core Web Vitals", "Edge caching", "Image pipelines", "Bundle audits", "Server tuning"],
    benefits: ["Higher SEO rank", "Lower bounce", "Better conversion"],
    deliverables: ["Audit report", "Optimization PRs", "Monitoring setup"],
    timeline: "2–4 weeks",
    faq: [{ q: "Can you work on existing codebases?", a: "Yes — we audit and ship PRs across React, Next.js, Vue and more." }],
  },
  {
    id: "integrations",
    title: "Custom Integrations",
    icon: "⧗",
    overview: "API integrations, CRMs, payment systems, automations — connect your stack the right way.",
    features: ["CRM/ERP integrations", "Payment gateways", "Custom APIs", "Webhooks", "Zapier/Make"],
    benefits: ["Operational efficiency", "Cleaner data", "Less manual work"],
    deliverables: ["Integration architecture", "Implementation", "Documentation"],
    timeline: "1–6 weeks",
    faq: [{ q: "Which platforms do you support?", a: "Salesforce, HubSpot, Stripe, Shopify, Notion, Airtable, and most modern APIs." }],
  },
];

export function ServicesPage({ onNav }: { onNav: (id: string) => void }) {
  const [active, setActive] = useState(services[0].id);
  const cur = services.find((s) => s.id === active)!;

  return (
    <PageWrap>
      <section className="relative pt-40 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-electric)]/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-medium text-gradient leading-[1.02]">
            Everything you need to <span className="font-serif-display italic text-gradient-blue">launch & grow.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
            From bespoke websites to enterprise web applications — we build digital products that earn trust and drive measurable outcomes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 mt-12">
        <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <div className="glass rounded-2xl p-3 space-y-1 max-h-[70vh] overflow-y-auto no-scrollbar">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
                  active === s.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${active === s.id ? "bg-[var(--color-electric)] text-white" : "bg-white/5 text-[var(--color-electric-2)]"}`}>{s.icon}</span>
                <span className="text-sm font-medium">{s.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle eyebrow={`Timeline · ${cur.timeline}`} title={cur.title} subtitle={cur.overview} />

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <GlassCard>
                  <h5 className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Features</h5>
                  <ul className="space-y-2 text-sm text-white/75">
                    {cur.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[var(--color-electric-2)]">▸</span>{f}</li>)}
                  </ul>
                </GlassCard>
                <GlassCard>
                  <h5 className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Benefits</h5>
                  <ul className="space-y-2 text-sm text-white/75">
                    {cur.benefits.map((f) => <li key={f} className="flex gap-2"><span className="text-emerald-400">✓</span>{f}</li>)}
                  </ul>
                </GlassCard>
                <GlassCard className="sm:col-span-2">
                  <h5 className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Deliverables</h5>
                  <div className="flex flex-wrap gap-2">
                    {cur.deliverables.map((d) => (
                      <span key={d} className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/80">{d}</span>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className="mt-8">
                <h5 className="font-display text-2xl text-gradient mb-4">Frequently asked</h5>
                <div className="space-y-2">
                  {cur.faq.map((f, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <details className="glass rounded-xl group">
                        <summary className="px-5 py-4 cursor-pointer flex justify-between items-center text-white">
                          <span className="text-sm">{f.q}</span>
                          <span className="text-[var(--color-electric-2)] transition-transform group-open:rotate-45 text-lg">+</span>
                        </summary>
                        <div className="px-5 pb-4 text-white/60 text-sm leading-relaxed">{f.a}</div>
                      </details>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="mt-10 glass-strong rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-2">Ready to start?</div>
                  <p className="text-white text-lg font-display">Let's tailor {cur.title} for your business.</p>
                </div>
                <MagneticButton onClick={() => onNav("contact")}>Request a Quote</MagneticButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageWrap>
  );
}
