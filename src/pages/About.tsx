import { Counter, Eyebrow, GlassCard, PageWrap, Reveal, SectionTitle } from "../components/ui";
import { Testimonials } from "../sections/Testimonials";

const values = [
  { t: "Craft over speed", d: "We ship when it's right — and only when it raises the bar." },
  { t: "Outcomes over output", d: "We measure success by what your business actually achieves." },
  { t: "Honesty over hype", d: "Transparent timelines, candid feedback, real partnership." },
  { t: "Detail over decoration", d: "Every pixel and microinteraction earns its place." },
];

const stats = [
  { v: 50, s: "+", l: "Projects Delivered" },
  { v: 24, s: "", l: "Countries Served" },
  { v: 99, s: "%", l: "Client Satisfaction" },
  { v: 312, s: "%", l: "Avg. Conversion Lift" },
];

const milestones = [
  { y: "2018", t: "Dior Studios founded", d: "Two designers and an engineer set out to build a different kind of studio." },
  { y: "2019", t: "First enterprise launch", d: "Shipped our first multi-region corporate platform." },
  { y: "2021", t: "International expansion", d: "Engagements across 12 countries; opened a distributed team model." },
  { y: "2023", t: "Studio doubled in size", d: "Award-winning launches across SaaS, hospitality and law." },
  { y: "2025", t: "Dior Labs", d: "Launched our R&D arm focused on AI-augmented product design." },
];

const team = [
  { n: "Eliana Voss", r: "Founder & Creative Director", i: "EV", c: "from-sky-400 to-indigo-500" },
  { n: "Adrian Cole", r: "Engineering Director", i: "AC", c: "from-emerald-400 to-cyan-500" },
  { n: "Maya Iyer", r: "Design Director", i: "MI", c: "from-violet-400 to-pink-500" },
  { n: "Tomás Reyes", r: "Strategy Director", i: "TR", c: "from-amber-400 to-rose-500" },
  { n: "Naomi Brandt", r: "Operations Director", i: "NB", c: "from-teal-400 to-blue-500" },
  { n: "Karim El-Sayed", r: "Brand Director", i: "KE", c: "from-orange-400 to-red-500" },
];

export function AboutPage() {
  return (
    <PageWrap>
      <section className="pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Eyebrow>About Dior Studios</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-[1.02] max-w-4xl mx-auto">
            A studio for brands that believe <span className="font-serif-display italic text-gradient-blue">craft is competitive advantage.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg">
            Dior Studios is a distributed digital agency partnering with ambitious teams across the world — from seed-stage startups to listed corporates.
          </p>
        </div>
      </section>

      {/* Story / Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-5">
        {[
          { t: "Our Story", d: "Founded by a small group of senior designers and engineers tired of templated work, Dior Studios has grown into a globally distributed studio shipping award-winning experiences from six time zones." },
          { t: "Our Mission", d: "To build digital experiences that earn trust on first sight — and convert it into lasting business outcomes for the brands we partner with." },
          { t: "Our Vision", d: "To be the most respected digital studio for ambitious global companies — defined by craft, accountability, and measurable impact." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i*0.1}>
            <GlassCard className="h-full">
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">{b.t}</div>
              <p className="text-white/80 leading-relaxed text-[15px]">{b.d}</p>
            </GlassCard>
          </Reveal>
        ))}
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="glass-strong rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient-blue">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="text-white/55 text-xs uppercase tracking-[0.2em] mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Our values" title={<>Principles we won't <span className="font-serif-display italic text-gradient-blue">compromise on.</span></>} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i*0.06}>
              <GlassCard className="h-full">
                <div className="font-display text-xl text-white mb-2">{v.t}</div>
                <p className="text-white/60 text-sm leading-relaxed">{v.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <SectionTitle align="center" eyebrow="Our journey" title="A studio shaped by every engagement." />
        <div className="mt-14 relative">
          <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-electric)]/50 via-white/10 to-transparent" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i*0.05}>
                <div className={`relative pl-10 md:pl-0 grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:pr-10 [direction:ltr]">
                    <div className="text-[var(--color-electric-2)] font-display text-3xl">{m.y}</div>
                    <div className="text-white text-lg font-display mt-1">{m.t}</div>
                    <p className="text-white/60 text-sm mt-1">{m.d}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 top-1.5">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-electric)] shadow-[0_0_14px_3px_rgba(47,139,255,0.5)]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Our team" title={<>Senior craftspeople, <span className="font-serif-display italic text-gradient-blue">global reach.</span></>} subtitle="A small, senior team — distributed across continents, united by a shared standard of work." />
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((t, i) => (
            <Reveal key={t.n} delay={i*0.05}>
              <GlassCard className="!p-7">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.c} flex items-center justify-center text-black font-display font-semibold text-lg mb-5`}>
                  {t.i}
                </div>
                <div className="font-display text-lg text-white">{t.n}</div>
                <div className="text-white/55 text-sm">{t.r}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why trust + global */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-5">
        <GlassCard className="!p-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Why Clients Trust Us</div>
          <h3 className="font-display text-3xl text-gradient mb-4">A partner, not a vendor.</h3>
          <ul className="space-y-3 text-white/75 text-sm">
            {["Fully senior teams from start to launch", "Transparent pricing and weekly demos", "Production-grade engineering and accessibility", "Outcome-driven engagements with measurable KPIs", "Long-term partnership beyond launch"].map(x => (
              <li key={x} className="flex gap-2"><span className="text-emerald-400">✓</span>{x}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="!p-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Global Approach</div>
          <h3 className="font-display text-3xl text-gradient mb-4">Local nuance, global standards.</h3>
          <p className="text-white/75 text-sm leading-relaxed">
            Dior Studios operates across six time zones with offices in London, Dubai, Singapore and New York. Our distributed model lets us pair the right specialists to your engagement — and continue building while you sleep.
          </p>
          <div className="mt-5 grid grid-cols-4 gap-2 text-xs text-white/60">
            {["London", "Dubai", "Singapore", "New York"].map(c => (
              <div key={c} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-center">{c}</div>
            ))}
          </div>
        </GlassCard>
      </section>

      <Testimonials />
    </PageWrap>
  );
}
