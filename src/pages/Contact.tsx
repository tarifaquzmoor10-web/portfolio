import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, GlassCard, PageWrap, Reveal, SectionTitle } from "../components/ui";

const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"];
const projectTypes = ["Custom Website", "E-Commerce", "Web Application", "Redesign", "SEO / Performance", "Other"];

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks of contract sign. Rush starts are possible for retainer clients." },
  { q: "Do you work with international clients?", a: "Yes — we partner with brands in 24+ countries and operate across six time zones." },
  { q: "What's the typical engagement size?", a: "Our engagements range from $15k landing pages to $250k+ enterprise platforms. We tailor proposals to your goals." },
  { q: "Do you offer ongoing support?", a: "Yes — we offer monthly retainers for maintenance, iteration and continuous growth post-launch." },
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", budget: budgets[2], type: projectTypes[0], details: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <PageWrap>
      <section className="pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-[1.02] max-w-4xl mx-auto">
            Let's build something <span className="font-serif-display italic text-gradient-blue">remarkable.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg">
            Tell us about your project — we'll respond within one business day with a tailored next-step plan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 py-16">
        {/* Form */}
        <div className="lg:col-span-7">
          <GlassCard className="!p-8 md:!p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-2xl mb-6">✓</div>
                <h3 className="font-display text-2xl text-gradient mb-2">Message received</h3>
                <p className="text-white/60 text-sm">Thank you, {form.name || "friend"}. We'll be in touch within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Name" value={form.name} onChange={(v) => update("name", v)} required />
                  <Input label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  <Input label="Phone" value={form.phone} onChange={(v) => update("phone", v)} />
                  <Input label="Company" value={form.company} onChange={(v) => update("company", v)} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select label="Budget" options={budgets} value={form.budget} onChange={(v) => update("budget", v)} />
                  <Select label="Project Type" options={projectTypes} value={form.type} onChange={(v) => update("type", v)} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-2">Project Details</label>
                  <textarea
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    rows={5}
                    placeholder="Tell us about your business, goals, timeline..."
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[var(--color-electric)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-black font-medium btn-glow shine"
                >
                  Send Inquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            )}
          </GlassCard>
        </div>

        {/* Side panel */}
        <div className="lg:col-span-5 space-y-4">
          <GlassCard>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Direct channels</div>
            <div className="space-y-3">
              <a href="https://wa.me/15555555555" className="flex items-center gap-3 p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-300">◉</span>
                <div>
                  <div className="text-white text-sm font-medium">WhatsApp</div>
                  <div className="text-white/55 text-xs">Chat with our studio</div>
                </div>
              </a>
              <a href="mailto:studio@diorstudios.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">✉</span>
                <div>
                  <div className="text-white text-sm font-medium">studio@diorstudios.com</div>
                  <div className="text-white/55 text-xs">Email our team</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 hover:bg-[var(--color-electric)]/20 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric-2)]">▷</span>
                <div>
                  <div className="text-white text-sm font-medium">Schedule a consultation</div>
                  <div className="text-white/55 text-xs">30-minute discovery call</div>
                </div>
              </a>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Pricing approach</div>
            <p className="text-white/75 text-sm leading-relaxed mb-3">
              We don't believe in one-size-fits-all pricing. Every engagement is scoped on goals, timeline and complexity.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-[var(--color-electric-2)]">▸</span>Custom solutions, not templates</li>
              <li className="flex gap-2"><span className="text-[var(--color-electric-2)]">▸</span>Tailored proposals within 48 hours</li>
              <li className="flex gap-2"><span className="text-[var(--color-electric-2)]">▸</span>Enterprise-ready engagements</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-3">Studios</div>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/75">
              {["London", "Dubai", "Singapore", "New York"].map((c) => (
                <div key={c} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{c}</div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <SectionTitle align="center" eyebrow="FAQ" title="Quick answers to common questions." />
        <div className="mt-10 space-y-2">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i*0.04}>
              <details className="glass rounded-xl group">
                <summary className="px-5 py-4 cursor-pointer flex justify-between items-center text-white">
                  <span className="text-sm">{f.q}</span>
                  <span className="text-[var(--color-electric-2)] transition-transform group-open:rotate-45 text-lg">+</span>
                </summary>
                <div className="px-5 pb-4 text-white/60 text-sm">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-2">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[var(--color-electric)] transition-colors"
      />
    </div>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[var(--color-electric)] transition-colors"
      >
        {options.map((o) => <option key={o} value={o} className="bg-[var(--color-charcoal)]">{o}</option>)}
      </select>
    </div>
  );
}
