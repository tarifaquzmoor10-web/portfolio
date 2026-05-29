import { motion } from "framer-motion";
import { GlassCard, Reveal, SectionTitle } from "../components/ui";

const services = [
  { title: "Custom Website Development", desc: "Bespoke marketing sites built end-to-end for ambitious brands.", icon: "◆" },
  { title: "E-Commerce Stores", desc: "High-converting storefronts with optimized checkout flows.", icon: "◇" },
  { title: "Web Applications", desc: "Production-grade web apps and internal tools at scale.", icon: "⧉" },
  { title: "Landing Pages", desc: "Single-purpose pages engineered for conversion velocity.", icon: "▢" },
  { title: "SEO Optimization", desc: "Technical and content SEO that compounds over time.", icon: "◎" },
  { title: "Maintenance & Support", desc: "Dedicated retainers for continuous evolution.", icon: "✦" },
];

export function ServicesPreview({ onNav }: { onNav?: (id: string) => void }) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Services"
            title={<>A full-stack studio for <span className="font-serif-display italic text-gradient-blue">premium brands.</span></>}
            subtitle="From strategy and brand to engineering and growth — Dior Studios is your end-to-end digital partner."
          />
          {onNav && (
            <button onClick={() => onNav("services")} className="self-start md:self-end group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              All services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <GlassCard className="h-full group">
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-electric)]/30 to-transparent border border-white/10 flex items-center justify-center text-[var(--color-electric-2)] text-xl mb-5"
                >
                  {s.icon}
                </motion.div>
                <h4 className="text-white font-display text-xl mb-2">{s.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center gap-2 text-xs text-[var(--color-electric-2)] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
