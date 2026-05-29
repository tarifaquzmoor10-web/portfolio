import { motion } from "framer-motion";
import { Globe } from "../components/Globe";
import { Particles } from "../components/Particles";
import { MagneticButton, Counter } from "../components/ui";

const floatingCards = [
  { top: "8%", left: "4%", title: "Lighthouse Score", value: "98", suffix: "/100", delay: 0 },
  { top: "20%", right: "3%", title: "Conversions", value: "+312", suffix: "%", delay: 0.4 },
  { bottom: "18%", left: "6%", title: "Avg. Load Time", value: "0.9", suffix: "s", delay: 0.8 },
  { bottom: "8%", right: "8%", title: "Active Clients", value: "50", suffix: "+", delay: 1.2 },
];

export function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Particles density={70} />
      </div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(closest-side, rgba(47,139,255,0.35), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.22em] text-white/70 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Award-winning digital studio · Trusted worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-medium leading-[0.98] tracking-tight max-w-5xl"
          >
            <span className="text-gradient">Building </span>
            <span className="font-serif-display italic text-gradient-blue">Premium </span>
            <span className="text-gradient">Digital Experiences For Modern </span>
            <span className="font-serif-display italic text-gradient-blue">Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-2xl text-white/65 text-base md:text-lg leading-relaxed"
          >
            We craft high-converting websites, digital platforms and online experiences that help ambitious businesses grow, establish credibility and generate more customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton variant="primary" onClick={() => onNav("contact")}
              icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            >
              Book A Discovery Call
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => onNav("portfolio")}>
              Explore Our Work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Globe + floating cards */}
        <div className="relative mt-16 md:mt-20 h-[520px] md:h-[560px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe size={520} />
          </div>

          {floatingCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5 + c.delay }}
              style={{
                top: c.top, left: (c as any).left, right: (c as any).right, bottom: (c as any).bottom,
              }}
              className="absolute hidden sm:block"
            >
              <div className="glass-strong rounded-2xl px-4 py-3 min-w-[170px] animate-float" style={{ animationDelay: `${i * 0.6}s` }}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">{c.title}</div>
                <div className="text-2xl font-display text-white">
                  <Counter to={parseFloat(c.value)} suffix={c.suffix} duration={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Client Satisfaction", value: "99%" },
            { label: "Global Support", value: "24/7" },
            { label: "Premium Standards", value: "A+" },
          ].map((t) => (
            <div key={t.label} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl text-gradient-blue">{t.value}</div>
              <div className="text-xs text-white/55 mt-1 uppercase tracking-[0.16em]">{t.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
