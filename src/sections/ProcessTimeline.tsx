import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../components/ui";
import { cn } from "../utils/cn";

const steps = [
  { n: "01", title: "Discovery", desc: "Deep stakeholder interviews, competitive audits and goal mapping to align on outcomes." },
  { n: "02", title: "Strategy", desc: "Positioning, information architecture, content strategy and measurable success criteria." },
  { n: "03", title: "Wireframing", desc: "Low-fidelity blueprints to validate flow, hierarchy and conversion paths before design." },
  { n: "04", title: "UI Design", desc: "Brand-led visual systems crafted with rigor — typography, motion, components." },
  { n: "05", title: "Development", desc: "Production-grade engineering on modern stacks with clean, maintainable codebases." },
  { n: "06", title: "Testing", desc: "Cross-device QA, accessibility audits, Lighthouse optimization and load testing." },
  { n: "07", title: "Optimization", desc: "Performance tuning, SEO foundations and CRO instrumentation pre-launch." },
  { n: "08", title: "Launch", desc: "Confident go-live with monitoring, analytics, search visibility and rollout support." },
  { n: "09", title: "Support", desc: "Ongoing partnership — iteration, content updates, A/B testing and growth." },
];

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 768px)");
    const f = () => setIsMobile(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start 75%", "end 65%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.6 });

  const n = steps.length;
  const seg = isMobile ? 168 : 200;
  const totalH = n * seg;
  const cx = isMobile ? 11 : 50;       // viewBox x (0–100) of the spine
  const amp = isMobile ? 7 : 26;       // horizontal bow amplitude
  const nodeY = (i: number) => i * seg + seg / 2;

  // Smooth serpentine bezier path passing exactly through every node.
  let d = `M ${cx} ${nodeY(0)}`;
  for (let i = 0; i < n - 1; i++) {
    const y0 = nodeY(i);
    const y1 = nodeY(i + 1);
    const dir = i % 2 === 0 ? 1 : -1;
    d += ` C ${cx + amp * dir} ${y0 + (y1 - y0) * 0.4}, ${cx + amp * dir} ${y0 + (y1 - y0) * 0.6}, ${cx} ${y1}`;
  }

  const [dot, setDot] = useState({ x: cx, y: nodeY(0) });
  const [passed, setPassed] = useState(0);

  useMotionValueEvent(progress, "change", (v) => {
    const path = pathRef.current;
    if (path) {
      const len = path.getTotalLength();
      const pt = path.getPointAtLength(len * Math.max(0, Math.min(1, v)));
      setDot({ x: pt.x, y: pt.y });
    }
    let p = 0;
    for (let i = 0; i < n; i++) if (v >= nodeY(i) / totalH - 0.02) p = i + 1;
    setPassed(p);
  });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          align="center"
          eyebrow="Our process"
          title={<>A proven path from <span className="font-serif-display italic text-gradient-blue">idea to impact.</span></>}
          subtitle="Every engagement flows through a refined nine-stage journey — designed for clarity, velocity and outcomes."
        />

        <div
          ref={wrapRef}
          className="relative mt-20 mx-auto"
          style={{ height: totalH, maxWidth: 860 }}
        >
          {/* ---- The animated motion-graphic spine ---- */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 100 ${totalH}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="spineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5ea8ff" />
                <stop offset="50%" stopColor="#2f8bff" />
                <stop offset="100%" stopColor="#1f6fe5" />
              </linearGradient>
            </defs>

            {/* faint base track */}
            <path
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            {/* glowing under-layer */}
            <motion.path
              d={d}
              fill="none"
              stroke="url(#spineGrad)"
              strokeWidth={8}
              strokeOpacity={0.25}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              style={{ pathLength: progress, filter: "blur(3px)" }}
            />
            {/* crisp drawn line */}
            <motion.path
              ref={pathRef}
              d={d}
              fill="none"
              stroke="url(#spineGrad)"
              strokeWidth={2.5}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>

          {/* ---- traveling comet (HTML, perfectly positioned) ---- */}
          <div
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${dot.x}%`, top: dot.y }}
          >
            <div className="relative">
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_18px_6px_rgba(94,168,255,0.9)]" />
              <div className="absolute -inset-2 rounded-full border border-[var(--color-electric)]/60 animate-ping" />
            </div>
          </div>

          {/* ---- nodes ---- */}
          {steps.map((s, i) => {
            const lit = i < passed;
            return (
              <div
                key={`node-${i}`}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${cx}%`, top: nodeY(i) }}
              >
                <motion.div
                  animate={{ scale: lit ? 1 : 0.7 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-display font-semibold border backdrop-blur-md transition-colors duration-500",
                    lit
                      ? "bg-[var(--color-electric)] text-white border-white/40 shadow-[0_0_22px_4px_rgba(47,139,255,0.55)]"
                      : "bg-white/5 text-white/50 border-white/15"
                  )}
                >
                  {s.n}
                </motion.div>
              </div>
            );
          })}

          {/* ---- step cards ---- */}
          {steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={`card-${i}`}
                className="absolute inset-x-0 flex items-center"
                style={{ top: i * seg, height: seg }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "pl-[26%] pr-3 md:px-0 md:w-[42%]",
                    left ? "md:mr-auto md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                  )}
                >
                  <div className="glass rounded-2xl p-5 md:p-6 group hover:border-white/20 transition-colors">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-electric-2)] mb-2">Phase {s.n}</div>
                    <h4 className="text-xl md:text-2xl font-display text-gradient">{s.title}</h4>
                    {!compact && (
                      <p className="text-white/60 leading-relaxed text-sm mt-2">{s.desc}</p>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
