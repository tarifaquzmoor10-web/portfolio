import { motion } from "framer-motion";

const cols = [
  { title: "Studio", links: ["About", "Process", "Industries", "Careers"] },
  { title: "Services", links: ["Custom Websites", "E-Commerce", "Web Applications", "SEO & Performance"] },
  { title: "Resources", links: ["Portfolio", "Case Studies", "Insights", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Refund Policy"] },
];

export function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer className="relative mt-32 border-t border-white/8">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[var(--color-electric)] to-transparent opacity-60" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-electric)]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-20 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[var(--color-electric)]/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-electric-2)] mb-3">Let's build something legendary</p>
            <h3 className="font-display text-3xl md:text-5xl font-medium text-gradient max-w-xl leading-tight">
              Ready to elevate your digital presence?
            </h3>
          </div>
          <button
            onClick={() => onNav("contact")}
            className="relative shine inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-medium btn-glow shrink-0"
          >
            Book A Discovery Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-electric)] to-[#1f3a8a] flex items-center justify-center">
                <span className="text-white font-display font-bold">D</span>
              </span>
              <span className="font-display font-semibold tracking-tight text-white text-lg">
                Dior Studios
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Building digital experiences that inspire trust. A premium studio for ambitious global brands.
            </p>
            <div className="flex gap-2 mt-6">
              {["X", "in", "IG", "Be"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-white/40 text-[11px] uppercase tracking-[0.25em] mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => {
                        const id = l.toLowerCase().includes("privacy") ? "privacy"
                          : l.toLowerCase().includes("terms") ? "terms"
                          : l.toLowerCase().includes("refund") ? "refund"
                          : l.toLowerCase().includes("portfolio") ? "portfolio"
                          : l.toLowerCase().includes("contact") ? "contact"
                          : l.toLowerCase().includes("about") ? "about"
                          : l.toLowerCase().includes("process") ? "process"
                          : l.toLowerCase().includes("industries") ? "industries"
                          : "services";
                        onNav(id);
                      }}
                      className="text-white/70 hover:text-white text-sm transition-colors text-left"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Dior Studios. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
