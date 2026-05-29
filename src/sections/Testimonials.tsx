import { motion } from "framer-motion";
import { Reveal, SectionTitle } from "../components/ui";

const testimonials = [
  {
    name: "Amelia Hart",
    role: "CEO, Maison Lumière",
    industry: "Hospitality",
    initials: "AH",
    rating: 5,
    result: "+182% reservations",
    review: "Dior Studios translated the soul of our restaurant into a digital experience that feels as considered as our tasting menu. Reservations have never been stronger.",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Daniel Mercer",
    role: "Founder, Pulsefield",
    industry: "SaaS",
    initials: "DM",
    rating: 5,
    result: "$2.4M ARR in 90 days",
    review: "The most impressive engineering and design partner we've worked with. Our launch site converted technical buyers from day one.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Priya Anand",
    role: "MD, Atlas Advisory",
    industry: "Education",
    initials: "PA",
    rating: 5,
    result: "+148% counseling bookings",
    review: "They understood the trust we need to build with parents and students across continents. Bookings tripled within the first quarter.",
    color: "from-violet-400 to-indigo-500",
  },
  {
    name: "Marcus Vane",
    role: "Senior Partner, Sterling & Vane",
    industry: "Law",
    initials: "MV",
    rating: 5,
    result: "Enterprise inquiries doubled",
    review: "An editorial gravitas that perfectly mirrors our hundred-year reputation. A genuinely premium partner from first call to launch.",
    color: "from-yellow-400 to-amber-600",
  },
  {
    name: "Sofia Rinaldi",
    role: "Brand Director, Noir & Bloom",
    industry: "E-Commerce",
    initials: "SR",
    rating: 5,
    result: "+318% conversions",
    review: "Dior Studios delivered a flagship store that finally matches the craft of our collections. The shopping experience is a brand asset on its own.",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Dr. Henrik Lund",
    role: "Director, Lumen Health",
    industry: "Healthcare",
    initials: "HL",
    rating: 5,
    result: "+220% appointments",
    review: "Patient trust starts the moment they land. The new platform has measurably moved every metric we care about.",
    color: "from-teal-400 to-cyan-500",
  },
];

const Star = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#5ea8ff"><path d="M12 .5l3.7 7.5 8.3 1.2-6 5.8L19.4 23 12 19l-7.4 4 1.4-8L0 9.2l8.3-1.2z"/></svg>
);

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-electric)]/8 blur-[140px]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          align="center"
          eyebrow="Client voices"
          title={<>Trusted by founders, <span className="font-serif-display italic text-gradient-blue">loved by their customers.</span></>}
          subtitle="Real stories from teams who've launched and scaled with Dior Studios."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-2xl p-7 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} />)}
                </div>
                <p className="text-white/85 leading-relaxed text-[15px] flex-1">"{t.review}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/8">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-black font-display font-semibold text-sm`}>
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-white/55 text-xs">{t.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{t.industry}</div>
                    <div className="text-xs text-[var(--color-electric-2)] font-medium">{t.result}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
