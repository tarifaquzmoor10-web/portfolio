import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/** Premium SVG-based device mockups, fully styled per project. */

type Palette = {
  bg: string;
  surface: string;
  accent: string;
  accent2: string;
  text: string;
  muted: string;
};

export const palettes: Record<string, Palette> = {
  restaurant: { bg: "#0a0806", surface: "#1a130c", accent: "#c89b5a", accent2: "#f0d4a1", text: "#f7efe2", muted: "#a89379" },
  realestate: { bg: "#0b1014", surface: "#161e26", accent: "#3a7bd5", accent2: "#7fb2ff", text: "#eaf2ff", muted: "#90a4be" },
  education:  { bg: "#0a0e1a", surface: "#141a2d", accent: "#7c5cff", accent2: "#b9a4ff", text: "#f1edff", muted: "#9890c4" },
  healthcare: { bg: "#06121a", surface: "#0e2530", accent: "#13c2c2", accent2: "#7fe6e6", text: "#e4f7f7", muted: "#7fa8b0" },
  law:        { bg: "#0c0d10", surface: "#171922", accent: "#b08a4f", accent2: "#e2c997", text: "#f3eee2", muted: "#9b9384" },
  fitness:    { bg: "#0a0a0a", surface: "#161616", accent: "#d7ff39", accent2: "#f1ff8c", text: "#fafafa", muted: "#9c9c9c" },
  travel:     { bg: "#06131a", surface: "#0d2230", accent: "#ff8a3d", accent2: "#ffc285", text: "#fff4ea", muted: "#a89888" },
  ecommerce:  { bg: "#0a0a0e", surface: "#15151c", accent: "#ff4d8d", accent2: "#ff90b3", text: "#fff0f5", muted: "#a08aa0" },
  corporate:  { bg: "#080a10", surface: "#121620", accent: "#2f8bff", accent2: "#7fb6ff", text: "#f4f7ff", muted: "#8a9bb5" },
  saas:       { bg: "#06080d", surface: "#101524", accent: "#3ee5b2", accent2: "#8ff5d4", text: "#eafff7", muted: "#82a499" },
};

/* ---------- DESKTOP ---------- */
export function DesktopMockup({ palette, content }: { palette: Palette; content: ReactNode }) {
  return (
    <div className="relative w-full">
      <div className="relative rounded-[18px] glass-strong p-2.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <span className="mx-auto text-[10px] text-white/40">diorstudios.com</span>
        </div>
        <div
          className="rounded-[12px] overflow-hidden aspect-[16/10]"
          style={{ background: palette.bg, color: palette.text }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

/* ---------- TABLET ---------- */
export function TabletMockup({ palette, content }: { palette: Palette; content: ReactNode }) {
  return (
    <div className="relative w-[210px]">
      <div
        className="relative rounded-[26px] p-[6px] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.85)]"
        style={{ background: "linear-gradient(155deg,#34343c,#0b0b0e)" }}
      >
        <div className="rounded-[20px] p-[2px]" style={{ background: "#000" }}>
          <div className="rounded-[18px] overflow-hidden aspect-[3/4.1] relative" style={{ background: palette.bg, color: palette.text }}>
            {content}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(125deg, rgba(255,255,255,0.08) 0%, transparent 32%)" }} />
          </div>
        </div>
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1 h-2 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

/* ---------- MOBILE ---------- */
export function MobileMockup({ palette, content }: { palette: Palette; content: ReactNode }) {
  return (
    <div className="relative w-[152px]">
      {/* side buttons */}
      <div className="absolute -left-[1.5px] top-16 w-[2px] h-7 rounded-l bg-white/15" />
      <div className="absolute -left-[1.5px] top-28 w-[2px] h-5 rounded-l bg-white/12" />
      <div className="absolute -right-[1.5px] top-20 w-[2px] h-10 rounded-r bg-white/15" />
      <div
        className="relative rounded-[34px] p-[5px] shadow-[0_34px_64px_-16px_rgba(0,0,0,0.9)]"
        style={{ background: "linear-gradient(160deg,#33333b,#0a0a0c)" }}
      >
        <div className="rounded-[30px] p-[2px]" style={{ background: "#000" }}>
          <div className="rounded-[28px] overflow-hidden aspect-[9/19.5] relative" style={{ background: palette.bg, color: palette.text }}>
            {/* dynamic island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-20 flex items-center justify-end pr-1.5">
              <span className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            </div>
            {content}
            {/* screen reflection */}
            <div className="absolute inset-0 pointer-events-none z-30" style={{ background: "linear-gradient(125deg, rgba(255,255,255,0.12) 0%, transparent 34%)" }} />
            {/* home indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-[3px] rounded-full bg-white/30 z-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------ Project content templates (variant designs) ------ */
export function RestaurantContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: `linear-gradient(160deg, ${p.bg}, ${p.surface})` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-serif-display text-[14px]" style={{ color: p.accent2 }}>Maison Lumière</span>
        <div className="flex gap-2 text-[7px]" style={{ color: p.muted }}>
          <span>Menu</span><span>Reserve</span><span>About</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-2">
        <div className="col-span-3 rounded-md p-3 flex flex-col justify-end relative overflow-hidden"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(10,8,6,0.1), ${p.bg}), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <span className="font-serif-display text-[18px] leading-none relative" style={{ color: "#fff" }}>Where every<br/>dish is a story</span>
          <span className="text-[7px] mt-1 relative" style={{ color: p.accent2 }}>Michelin · Paris · Reservations open</span>
          <div className="mt-2 flex gap-1 relative">
            <span className="px-2 py-1 rounded-full text-[7px]" style={{ background: p.accent, color: p.bg }}>Reserve Table</span>
            <span className="px-2 py-1 rounded-full text-[7px] border" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>View Menu</span>
          </div>
        </div>
        <div className="col-span-2 grid grid-rows-3 gap-2">
          <div className="rounded-md bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
          {[1,2].map(i => (
            <div key={i} className="rounded-md" style={{ background: `linear-gradient(${i*60}deg, ${p.accent}40, ${p.surface})` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function RealEstateContent({ p, img, img2 }: { p: Palette; img?: string; img2?: string }) {
  const prices = ["$3.4M", "$5.1M", "$2.8M"];
  const places = ["Manhattan", "Beverly Hills", "Miami"];
  const imgs = [img, img2 || img, img];
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-semibold text-[12px]" style={{ color: p.text }}>NORTH·HARBOR</span>
        <div className="flex gap-2 text-[7px]" style={{ color: p.muted }}>
          <span>Buy</span><span>Sell</span><span>Rent</span><span>Agents</span>
        </div>
      </div>
      <div className="rounded-lg flex-1 p-3 flex flex-col justify-between mb-2 relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(11,16,20,0.78), rgba(13,22,32,0.55)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <span className="text-[16px] font-display relative" style={{ color: "#fff" }}>Iconic homes,<br/>elevated living.</span>
        <div className="grid grid-cols-3 gap-1.5 relative">
          {[0,1,2].map(i => (
            <div key={i} className="rounded p-1.5 flex flex-col justify-end h-12 bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.7)), url(${imgs[i]})` }}>
              <span className="text-[7px] relative" style={{ color: "#fff" }}>{prices[i]}</span>
              <span className="text-[6px] relative" style={{ color: "rgba(255,255,255,0.7)" }}>{places[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EducationContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: `linear-gradient(180deg, ${p.bg}, ${p.surface})` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-semibold text-[12px]" style={{ color: p.accent2 }}>Atlas Advisory</span>
        <div className="flex gap-2 text-[7px]" style={{ color: p.muted }}>Programs · Universities · Apply</div>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        <div className="rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundImage: `linear-gradient(160deg, rgba(10,14,26,0.55), rgba(10,14,26,0.85)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <span style={{ color: "#fff" }} className="text-[14px] font-display leading-tight relative">Your global<br/>education journey.</span>
          <div className="flex gap-1 mt-2 relative">
            <span className="px-2 py-1 rounded-full text-[7px]" style={{ background: p.accent, color: "#fff" }}>Book Counseling</span>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-1.5">
          {["Oxford", "MIT", "ETH Zürich"].map(u => (
            <div key={u} className="rounded p-1.5 flex items-center justify-between" style={{ background: p.surface }}>
              <span style={{ color: p.text }} className="text-[8px]">{u}</span>
              <span style={{ color: p.accent2 }}>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HealthcareContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-semibold text-[12px]" style={{ color: p.accent2 }}>+ Lumen Health</span>
        <span className="text-[7px]" style={{ color: p.muted }}>Specialties · Doctors · Book</span>
      </div>
      <div className="rounded-lg flex-1 p-3 flex justify-between items-end relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(120deg, rgba(6,18,26,0.88), rgba(6,18,26,0.45)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="flex flex-col gap-1 relative">
          <span className="text-[15px] font-display" style={{ color: "#fff" }}>Care that<br/>understands you.</span>
          <span className="px-2 py-1 mt-1 rounded-full text-[7px] w-fit" style={{ background: p.accent, color: "#fff" }}>Book Appointment</span>
        </div>
        <div className="grid grid-cols-2 gap-1 w-1/2">
          {["Cardio","Neuro","Ortho","Onco"].map(s => (
            <div key={s} className="rounded p-1.5 text-[7px]" style={{ background: p.surface, color: p.text }}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LawContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-serif-display text-[13px]" style={{ color: p.accent2 }}>Sterling & Vane</span>
        <span style={{ color: p.muted }} className="text-[7px]">Practice · Attorneys · Insights · Contact</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded p-3 flex flex-col justify-end relative overflow-hidden"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(12,13,16,0.45) 0%, rgba(12,13,16,0.92) 85%), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <span className="font-serif-display text-[16px] leading-tight relative" style={{ color: "#fff" }}>Counsel built on<br/>century-old trust.</span>
          <span className="text-[7px] mt-1 relative" style={{ color: p.accent2 }}>Est. 1924 · London · New York · Dubai</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {["Corporate Law","Litigation","M&A"].map(s => (
            <div key={s} className="rounded p-2 flex-1 flex flex-col justify-between" style={{ background: p.surface }}>
              <span style={{ color: p.text }} className="text-[7px]">{s}</span>
              <span style={{ color: p.accent }}>—</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FitnessContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-bold text-[12px]" style={{ color: p.accent }}>FORGE/61</span>
        <span style={{ color: p.muted }} className="text-[7px]">Programs · Coaches · Schedule</span>
      </div>
      <div className="flex-1 rounded-lg p-3 flex justify-between items-end relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(110deg, rgba(10,10,10,0.85), rgba(10,10,10,0.4)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="flex flex-col gap-1 relative">
          <span className="text-[18px] font-display font-bold" style={{ color: "#fff" }}>BUILT<br/>DIFFERENT.</span>
          <span className="px-2 py-1 mt-1 rounded text-[7px] font-bold w-fit" style={{ background: p.accent, color: p.bg }}>JOIN NOW →</span>
        </div>
        <div className="flex flex-col gap-1 items-end text-[7px] relative" style={{ color: "rgba(255,255,255,0.65)" }}>
          <span>61 SESSIONS</span>
          <span style={{ color: "#fff" }}>12-WEEK BUILD</span>
        </div>
      </div>
    </div>
  );
}

export function TravelContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-semibold text-[12px]" style={{ color: p.accent2 }}>◐ Wanderbound</span>
        <span style={{ color: p.muted }} className="text-[7px]">Destinations · Tours · Custom</span>
      </div>
      <div className="rounded-lg flex-1 p-3 flex flex-col justify-end mb-2 relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(6,19,26,0.15), rgba(6,19,26,0.85)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <span className="font-serif-display text-[18px] relative" style={{ color: "#fff" }}>The world,<br/>curated by hand.</span>
        <div className="flex gap-1 mt-1.5 relative">
          <span className="px-2 py-1 rounded-full text-[7px]" style={{ background: p.accent, color: "#fff" }}>Plan Trip</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {["Patagonia","Kyoto","Marrakech","Reykjavík"].map(c => (
          <div key={c} className="rounded p-1.5 text-[7px]" style={{ background: p.surface, color: p.text }}>{c}</div>
        ))}
      </div>
    </div>
  );
}

export function EcomContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-bold text-[12px]" style={{ color: p.text }}>Noir & Bloom</span>
        <span style={{ color: p.muted }} className="text-[7px]">Shop · Edits · Bag (2)</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        <div className="col-span-2 rounded-lg p-3 flex flex-col justify-end relative overflow-hidden"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(10,10,14,0.2), rgba(10,10,14,0.8)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <span className="font-serif-display text-[16px] relative" style={{ color: "#fff" }}>The Velvet<br/>Drop, AW26.</span>
          <span className="px-2 py-1 mt-1 rounded-full text-[7px] w-fit relative" style={{ background: "#fff", color: p.bg }}>Shop Edit</span>
        </div>
        <div className="grid grid-rows-3 gap-1">
          {[1,2,3].map(i => (
            <div key={i} className="rounded p-1.5 flex flex-col justify-between bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.65)), url(${img})` }}>
              <div className="rounded h-3 opacity-0" />
              <span style={{ color: "#fff" }} className="text-[7px] relative">${100 + i * 29}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CorporateContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-display font-semibold text-[12px]" style={{ color: p.text }}>◆ Northpeak Capital</span>
        <span style={{ color: p.muted }} className="text-[7px]">Solutions · Insights · Investors</span>
      </div>
      <div className="rounded-lg flex-1 p-3 flex flex-col justify-between relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(120deg, rgba(8,10,16,0.9), rgba(8,10,16,0.5)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="relative">
          <span className="text-[15px] font-display" style={{ color: "#fff" }}>Capital with<br/>conviction.</span>
          <p className="text-[7px] mt-1 max-w-[60%]" style={{ color: "rgba(255,255,255,0.7)" }}>Strategic investment partners for category-defining companies.</p>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[{l:"$8B",s:"AUM"},{l:"120+",s:"Portfolio"},{l:"22",s:"Markets"}].map(x => (
            <div key={x.s} className="rounded p-2" style={{ background: p.surface }}>
              <div className="text-[11px] font-display" style={{ color: p.accent2 }}>{x.l}</div>
              <div className="text-[6px]" style={{ color: p.muted }}>{x.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SaaSContent({ p, img }: { p: Palette; img?: string }) {
  return (
    <div className="w-full h-full p-3 flex flex-col text-[8px]" style={{ background: p.bg }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-semibold text-[12px]" style={{ color: p.text }}>◇ Pulsefield</span>
        <span style={{ color: p.muted }} className="text-[7px]">Product · Customers · Pricing · Login</span>
      </div>
      <div className="grid grid-cols-5 gap-2 flex-1">
        <div className="col-span-3 rounded-lg p-3 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundImage: `linear-gradient(160deg, rgba(6,8,13,0.82), rgba(6,8,13,0.55)), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="relative">
            <span className="text-[15px] font-display" style={{ color: "#fff" }}>Observability,<br/>reimagined.</span>
            <p className="text-[7px] mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>One platform. Every signal. Zero noise.</p>
          </div>
          <div className="flex gap-1">
            <span className="px-2 py-1 rounded-md text-[7px]" style={{ background: p.accent, color: "#000" }}>Start Free</span>
            <span className="px-2 py-1 rounded-md text-[7px] border" style={{ borderColor: p.muted, color: p.text }}>Watch Demo</span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg p-2 flex flex-col gap-1" style={{ background: p.surface }}>
          <div className="text-[7px]" style={{ color: p.muted }}>Live</div>
          <svg viewBox="0 0 100 40" className="w-full">
            <polyline fill="none" stroke={p.accent} strokeWidth="1.5" points="0,30 15,22 30,28 45,12 60,18 75,8 100,14" />
            <polyline fill="none" stroke={p.accent2} strokeWidth="1" strokeOpacity="0.5" points="0,34 15,30 30,32 45,22 60,26 75,18 100,22" />
          </svg>
          <div className="grid grid-cols-2 gap-1 mt-1">
            <div className="rounded p-1" style={{ background: p.bg }}>
              <div className="text-[7px]" style={{ color: p.accent2 }}>99.99%</div>
              <div className="text-[6px]" style={{ color: p.muted }}>Uptime</div>
            </div>
            <div className="rounded p-1" style={{ background: p.bg }}>
              <div className="text-[7px]" style={{ color: p.accent2 }}>4.8ms</div>
              <div className="text-[6px]" style={{ color: p.muted }}>p99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Fully designed mobile / tablet app screen — unique per palette */
export function SmallContent({ p, title, tag, accent }: { p: Palette; title: string; tag: string; accent?: boolean }) {
  const heroAccent = accent ? p.accent2 : p.accent;
  return (
    <div className="w-full h-full flex flex-col text-[6px]" style={{ background: `linear-gradient(180deg, ${p.bg}, ${p.surface})`, color: p.text }}>
      {/* status bar */}
      <div className="flex justify-between items-center px-2.5 pt-3 pb-0.5 text-[5px]" style={{ color: p.muted }}>
        <span className="font-medium">9:41</span>
        <span className="flex items-center gap-0.5">
          <span style={{ letterSpacing: "0.5px" }}>▮▮▮</span>
          <span>◖</span>
        </span>
      </div>

      {/* nav bar */}
      <div className="flex justify-between items-center px-2.5 py-1">
        <span className="font-display text-[8px] font-semibold" style={{ color: p.accent2 }}>{tag}</span>
        <div className="flex items-center gap-1" style={{ color: p.muted }}>
          <span className="text-[6px]">◎</span>
          <span className="text-[7px]" style={{ color: p.text }}>≡</span>
        </div>
      </div>

      {/* hero */}
      <div
        className="mx-2 rounded-2xl p-2.5 flex flex-col justify-end relative overflow-hidden"
        style={{
          height: "40%",
          background: `linear-gradient(180deg, transparent 25%, ${p.bg}), radial-gradient(120% 90% at 75% 15%, ${heroAccent}66, ${p.surface})`,
        }}
      >
        <div className="absolute top-1.5 left-2 px-1.5 py-0.5 rounded-full text-[5px]" style={{ background: "rgba(0,0,0,0.35)", color: p.accent2 }}>★ Featured</div>
        <span className="font-display text-[10px] leading-[1.1]" style={{ color: p.text }}>{title}</span>
        <div className="flex items-center gap-1 mt-1.5">
          <span className="px-2 py-1 rounded-full text-[6px] font-medium" style={{ background: p.accent, color: p.bg }}>Discover →</span>
          <span className="w-5 h-5 rounded-full flex items-center justify-center text-[7px]" style={{ background: "rgba(255,255,255,0.12)", color: p.text }}>♡</span>
        </div>
      </div>

      {/* category chips */}
      <div className="flex gap-1 px-2 mt-2 overflow-hidden">
        {["All", "New", "Top", "Saved"].map((c, i) => (
          <span key={c} className="px-1.5 py-0.5 rounded-full text-[5px] whitespace-nowrap" style={{ background: i === 0 ? p.accent : p.surface, color: i === 0 ? p.bg : p.muted }}>{c}</span>
        ))}
      </div>

      {/* content cards */}
      <div className="grid grid-cols-2 gap-1.5 px-2 mt-2">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-xl p-1.5 flex flex-col gap-1" style={{ background: p.surface }}>
            <div className="rounded-lg h-7 relative overflow-hidden" style={{ background: `linear-gradient(${120 + i * 80}deg, ${p.accent}, ${p.accent2})` }}>
              <span className="absolute bottom-0.5 right-1 text-[5px]" style={{ color: p.bg }}>${(i + 1) * 49}</span>
            </div>
            <div className="h-1 rounded-full w-3/4" style={{ background: p.muted, opacity: 0.55 }} />
            <div className="h-1 rounded-full w-1/2" style={{ background: p.muted, opacity: 0.3 }} />
          </div>
        ))}
      </div>

      {/* bottom tab bar */}
      <div className="mt-auto mx-2 mb-2.5 rounded-full flex justify-around items-center py-1.5" style={{ background: p.surface, border: `1px solid ${p.muted}22` }}>
        {["◇", "◎", "＋", "♡", "○"].map((g, i) => (
          <span key={i} className="text-[7px]" style={{ color: i === 0 ? p.accent2 : p.muted }}>{g}</span>
        ))}
      </div>
    </div>
  );
}

export function DeviceTriplet({
  palette, desktop, tablet, mobile, className,
}: {
  palette: Palette;
  desktop: ReactNode;
  tablet: ReactNode;
  mobile: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <DesktopMockup palette={palette} content={desktop} />
      <div className="absolute -bottom-12 -left-6 hidden md:block animate-float">
        <TabletMockup palette={palette} content={tablet} />
      </div>
      <div className="absolute -bottom-10 -right-2 md:right-10 animate-float" style={{ animationDelay: "1.5s" }}>
        <MobileMockup palette={palette} content={mobile} />
      </div>
    </div>
  );
}
