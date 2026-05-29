import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard, Reveal, SectionTitle } from "../components/ui";
import { DesktopMockup, MobileMockup, TabletMockup, palettes } from "../components/Mockups";
import { projects } from "../data/projects";

export function PortfolioShowcase({ limit, onNav }: { limit?: number; onNav?: (id: string) => void }) {
  const list = limit ? projects.slice(0, limit) : projects;
  const [active, setActive] = useState(0);
  const cur = list[active];
  const palette = palettes[cur.paletteKey];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Featured Work"
            title={<>Premium case studies, <span className="font-serif-display italic text-gradient-blue">crafted with intent.</span></>}
            subtitle="A glimpse into our most loved engagements across hospitality, real estate, healthcare, SaaS and beyond."
          />
          {onNav && (
            <button onClick={() => onNav("portfolio")} className="self-start md:self-end group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              View all projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {list.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] border transition-colors ${
                i === active ? "bg-white text-black border-white" : "glass text-white/70 hover:text-white border-white/10"
              }`}
            >
              {p.industry}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7 relative pb-32 pt-6">
              {/* ambient glow behind devices */}
              <div className="absolute inset-x-6 top-6 bottom-16 -z-10 blur-3xl opacity-70"
                style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(47,139,255,0.18), transparent 70%)" }} />
              {/* soft floor shadow */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[70%] h-10 rounded-[100%] bg-black/60 blur-2xl" />

              <DesktopMockup palette={palette} content={cur.desktop} />

              <div className="absolute -bottom-14 left-1 md:left-4 hidden sm:block animate-float z-10" style={{ animationDelay: "0.9s" }}>
                <div style={{ transform: "rotate(-5deg)" }} className="origin-bottom">
                  <TabletMockup palette={palette} content={cur.tablet} />
                </div>
              </div>

              <div className="absolute -bottom-16 right-0 md:right-6 animate-float z-20">
                <div style={{ transform: "rotate(6deg)" }} className="origin-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]">
                  <MobileMockup palette={palette} content={cur.mobile} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative rounded-2xl overflow-hidden glass-strong p-1.5 mb-6 group">
                  <div className="relative rounded-xl overflow-hidden h-44">
                    <img src={cur.photo} alt={cur.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass text-white/90">Case study</div>
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-4">{cur.industry}</div>
                <h3 className="font-display text-3xl md:text-5xl text-gradient leading-tight mb-6">{cur.title}</h3>

                <div className="space-y-5 text-sm">
                  <div>
                    <div className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-1.5">Challenge</div>
                    <p className="text-white/80 leading-relaxed">{cur.challenge}</p>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-1.5">Solution</div>
                    <p className="text-white/80 leading-relaxed">{cur.solution}</p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2">
                  {cur.results.map((r) => (
                    <GlassCard key={r} className="!p-3 text-center">
                      <p className="text-xs text-white/80 leading-snug">{r}</p>
                    </GlassCard>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {cur.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-[11px] bg-white/5 text-white/65 border border-white/10">{t}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
