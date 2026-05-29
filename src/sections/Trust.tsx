import { GlassCard, Reveal, SectionTitle } from "../components/ui";

const items = [
  { title: "Mobile Responsive", desc: "Pixel-perfect across every screen size.", icon: "▢" },
  { title: "SEO Optimized", desc: "Built to rank with technical SEO baked in.", icon: "◎" },
  { title: "Fast Performance", desc: "Sub-second loads and 95+ Lighthouse scores.", icon: "⚡" },
  { title: "Secure Development", desc: "Hardened stacks, OWASP-aligned practices.", icon: "◈" },
  { title: "Accessibility Focused", desc: "WCAG 2.2 AA across every interaction.", icon: "✥" },
  { title: "Scalable Architecture", desc: "Built to handle traffic spikes & growth.", icon: "⧉" },
  { title: "Modern Technologies", desc: "Next.js, TypeScript, edge-deployed.", icon: "◆" },
  { title: "Ongoing Support", desc: "Dedicated maintenance and improvements.", icon: "✦" },
];

export function TrustGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Why Dior"
          title={<>Engineered for trust, <span className="font-serif-display italic text-gradient-blue">designed to convert.</span></>}
          subtitle="Every Dior build ships with an uncompromising baseline — the same standards that power our enterprise engagements."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-electric-2)] text-lg mb-4">
                  {it.icon}
                </div>
                <h4 className="text-white font-display text-lg mb-1.5">{it.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{it.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
