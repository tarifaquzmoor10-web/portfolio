import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ current, onNav }: { current: string; onNav: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <div className={cn(
        "w-full max-w-7xl rounded-full transition-all duration-500 px-3 sm:px-4 py-2.5 flex items-center gap-3 border",
        scrolled ? "glass-strong border-white/12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "glass border-white/8"
      )}>
        <button
          onClick={() => onNav("home")}
          className="flex items-center gap-2 pl-2 pr-3 group"
        >
          <span className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-electric)] to-[#1f3a8a] flex items-center justify-center overflow-hidden shadow-[0_0_20px_-2px_rgba(47,139,255,0.6)]">
            <span className="text-white font-display font-bold text-sm">D</span>
            <span className="absolute inset-0 bg-white/20 blur-xl scale-50 group-hover:scale-100 transition-transform" />
          </span>
          <span className="font-display font-semibold tracking-tight text-white">
            Dior<span className="text-white/40 font-light"> Studios</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNav(l.id)}
              className={cn(
                "relative px-4 py-2 text-sm rounded-full transition-colors",
                current === l.id ? "text-white" : "text-white/60 hover:text-white"
              )}
            >
              {current === l.id && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </nav>

        <div className="ml-auto hidden lg:block">
          <button
            onClick={() => onNav("contact")}
            className="group relative px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium overflow-hidden shine btn-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden ml-auto w-10 h-10 rounded-full glass flex items-center justify-center"
          aria-label="Menu"
        >
          <span className="relative w-4 h-3">
            <span className={cn("absolute left-0 right-0 h-px bg-white transition-all", open ? "top-1.5 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 right-0 h-px bg-white transition-all top-1.5", open && "opacity-0")} />
            <span className={cn("absolute left-0 right-0 h-px bg-white transition-all", open ? "top-1.5 -rotate-45" : "top-3")} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 left-4 right-4 glass-strong rounded-2xl p-3"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => { onNav(l.id); setOpen(false); }}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl text-sm",
                  current === l.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                )}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { onNav("contact"); setOpen(false); }}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white text-black font-medium text-sm"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
