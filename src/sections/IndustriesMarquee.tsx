import { Eyebrow } from "../components/ui";

const industries = [
  "Healthcare", "Education", "Real Estate", "Restaurants", "E-Commerce", "Construction",
  "Travel", "Fitness", "Law Firms", "Corporate", "Startups", "Personal Brands",
];

const Icon = ({ name }: { name: string }) => {
  const map: Record<string, string> = {
    Healthcare: "✚", Education: "◷", "Real Estate": "⌂", Restaurants: "❖",
    "E-Commerce": "◇", Construction: "▲", Travel: "✈", Fitness: "✦",
    "Law Firms": "⚖", Corporate: "◆", Startups: "▴", "Personal Brands": "✺",
  };
  return <span className="text-[var(--color-electric-2)] text-xl">{map[name] ?? "•"}</span>;
};

export function IndustriesMarquee() {
  const items = [...industries, ...industries];
  return (
    <section className="relative py-20 border-y border-white/8 overflow-hidden bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col items-center text-center gap-3">
        <Eyebrow>Industries we serve</Eyebrow>
        <p className="text-white/55 text-sm max-w-xl">Trusted by ambitious teams across every category that values craft and conversion.</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-marquee w-max">
          {items.map((it, i) => (
            <div key={i} className="glass rounded-full px-6 py-3 flex items-center gap-3 whitespace-nowrap shrink-0">
              <Icon name={it} />
              <span className="text-white/80 text-sm font-medium tracking-wide">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
