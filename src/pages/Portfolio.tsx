import { Eyebrow, GlassCard, PageWrap, Reveal } from "../components/ui";
import { DesktopMockup, MobileMockup, palettes } from "../components/Mockups";
import { projects } from "../data/projects";

export function PortfolioPage({ onNav }: { onNav: (id: string) => void }) {
  return (
    <PageWrap>
      <section className="pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-[1.02]">
            Selected work, <span className="font-serif-display italic text-gradient-blue">crafted with care.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg">
            Premium case studies across hospitality, real estate, healthcare, SaaS and more — every project unique to its industry.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-32 py-16">
        {projects.map((p, i) => {
          const palette = palettes[p.paletteKey];
          const reverse = i % 2 === 1;
          return (
            <Reveal key={p.id}>
              <div className={`grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:col-span-7 [direction:ltr] relative pb-20 pt-4">
                  <div className="absolute inset-x-6 top-4 bottom-12 -z-10 blur-3xl opacity-70"
                    style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(47,139,255,0.16), transparent 70%)" }} />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[68%] h-10 rounded-[100%] bg-black/60 blur-2xl" />
                  <DesktopMockup palette={palette} content={p.desktop} />
                  <div className="absolute -bottom-12 right-0 md:right-8 animate-float z-20">
                    <div style={{ transform: "rotate(6deg)" }} className="origin-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]">
                      <MobileMockup palette={palette} content={p.mobile} />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 [direction:ltr]">
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">{p.industry}</div>
                  <h3 className="font-display text-3xl md:text-5xl text-gradient leading-tight mb-5">{p.title}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-1">Challenge</div>
                      <p className="text-white/80">{p.challenge}</p>
                    </div>
                    <div>
                      <div className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-1">Solution</div>
                      <p className="text-white/80">{p.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-5">
                    {p.results.map((r) => (
                      <GlassCard key={r} className="!p-3 text-center"><p className="text-xs text-white/80">{r}</p></GlassCard>
                    ))}
                  </div>
                  <div className="mt-6 relative rounded-2xl overflow-hidden glass-strong p-1.5 group">
                    <div className="relative rounded-xl overflow-hidden h-40">
                      <img src={p.photo} alt={p.title} loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass text-white/90">{p.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="glass-strong rounded-3xl p-10 md:p-14 text-center">
          <h3 className="font-display text-3xl md:text-4xl text-gradient">Become our next case study.</h3>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">Tell us about your business and we'll craft a tailored proposal within 48 hours.</p>
          <button onClick={() => onNav("contact")} className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-medium btn-glow shine">
            Start Your Project →
          </button>
        </div>
      </section>
    </PageWrap>
  );
}
