import { Eyebrow, GlassCard, PageWrap, Reveal } from "../components/ui";
import {
  palettes, DesktopMockup, MobileMockup,
  RestaurantContent, RealEstateContent, EducationContent, HealthcareContent,
  LawContent, FitnessContent, TravelContent, EcomContent, CorporateContent, SaaSContent,
  SmallContent,
} from "../components/Mockups";
import type { ReactNode } from "react";

type Industry = {
  id: string;
  name: string;
  paletteKey: keyof typeof palettes;
  blurb: string;
  features: string[];
  benefits: string[];
  desktop: ReactNode;
  mobile: ReactNode;
  examples: string[];
};

const p = (k: keyof typeof palettes) => palettes[k];

const industries: Industry[] = [
  {
    id: "healthcare", name: "Healthcare", paletteKey: "healthcare",
    blurb: "Patient-first platforms that earn trust the moment they load — calm interfaces, frictionless booking, editorial credibility.",
    features: ["Doctor finder", "Appointment booking", "Specialty pages", "Insurance integrations", "Multi-language"],
    benefits: ["+220% appointments avg.", "Better patient trust", "Lower bounce rates"],
    examples: ["Hospital networks", "Clinics", "Telehealth"],
    desktop: <HealthcareContent p={p("healthcare")} />,
    mobile: <SmallContent p={p("healthcare")} tag="+L" title="Book appointment" />,
  },
  {
    id: "education", name: "Education", paletteKey: "education",
    blurb: "Conversion-led platforms for consultancies, institutions and ed-tech — built to turn interest into enrolment.",
    features: ["Program matching", "Counselor booking", "Course catalogue", "Student portals"],
    benefits: ["+148% counseling bookings", "Higher application starts"],
    examples: ["Study abroad", "Universities", "Coaching academies"],
    desktop: <EducationContent p={p("education")} />,
    mobile: <SmallContent p={p("education")} tag="Atlas" title="Book counseling" accent />,
  },
  {
    id: "restaurants", name: "Restaurants", paletteKey: "restaurant",
    blurb: "Cinematic, mouth-watering sites with reservation engines that match the soul of your kitchen.",
    features: ["Reservation engine", "Menu management", "Chef storytelling", "Loyalty integrations"],
    benefits: ["+182% reservations", "Higher direct bookings"],
    examples: ["Fine dining", "Restaurant groups", "Cafés & bars"],
    desktop: <RestaurantContent p={p("restaurant")} />,
    mobile: <SmallContent p={p("restaurant")} tag="Maison" title="Reserve your evening" accent />,
  },
  {
    id: "realestate", name: "Real Estate", paletteKey: "realestate",
    blurb: "Catalogue-grade property platforms with cinematic listings, advanced filtering and broker storytelling.",
    features: ["Listing engine", "Virtual tours", "Agent profiles", "Lead routing"],
    benefits: ["+212% qualified leads", "Higher time on listings"],
    examples: ["Brokerages", "Developers", "Luxury portfolios"],
    desktop: <RealEstateContent p={p("realestate")} />,
    mobile: <SmallContent p={p("realestate")} tag="N·H" title="Find your address" />,
  },
  {
    id: "construction", name: "Construction", paletteKey: "corporate",
    blurb: "Robust corporate platforms that showcase scale, projects, capabilities and safety credentials.",
    features: ["Project portfolio", "Capabilities", "Safety credentials", "Tender requests"],
    benefits: ["Higher tender win-rate", "Better PR & recruitment"],
    examples: ["Contractors", "Developers", "Engineering firms"],
    desktop: <CorporateContent p={p("corporate")} />,
    mobile: <SmallContent p={p("corporate")} tag="◆" title="Project portfolio" />,
  },
  {
    id: "travel", name: "Travel", paletteKey: "travel",
    blurb: "Editorial wanderlust meets a powerful itinerary engine — perfect for boutique travel and concierge brands.",
    features: ["Itinerary builder", "Destination guides", "Concierge booking", "Multi-currency"],
    benefits: ["+256% itinerary requests", "Higher avg. booking value"],
    examples: ["Bespoke agencies", "Tour operators", "Hospitality groups"],
    desktop: <TravelContent p={p("travel")} />,
    mobile: <SmallContent p={p("travel")} tag="W" title="Plan your trip" />,
  },
  {
    id: "fitness", name: "Fitness", paletteKey: "fitness",
    blurb: "High-energy brand platforms that turn ambition into memberships — built for studios, coaches and apparel.",
    features: ["Class scheduling", "Membership flow", "Trainer profiles", "Drops & merch"],
    benefits: ["+340% memberships", "Stronger brand recall"],
    examples: ["Gyms", "Coaches", "Apparel brands"],
    desktop: <FitnessContent p={p("fitness")} />,
    mobile: <SmallContent p={p("fitness")} tag="F/61" title="Join now" accent />,
  },
  {
    id: "law", name: "Law Firms", paletteKey: "law",
    blurb: "Editorial platforms that convey heritage, expertise and modern credibility for serious legal practices.",
    features: ["Practice areas", "Attorney profiles", "Insights engine", "Discreet contact"],
    benefits: ["+96% enterprise inquiries", "Higher partner discovery"],
    examples: ["Corporate law", "Litigation firms", "Boutique practices"],
    desktop: <LawContent p={p("law")} />,
    mobile: <SmallContent p={p("law")} tag="S&V" title="Speak to counsel" />,
  },
  {
    id: "ecommerce", name: "E-Commerce", paletteKey: "ecommerce",
    blurb: "Cinematic flagship stores engineered for high conversion across fashion, beauty, lifestyle and beyond.",
    features: ["Product storytelling", "Optimized checkout", "Subscriptions", "Personalization"],
    benefits: ["+318% conversions", "+47% AOV"],
    examples: ["Fashion", "Beauty", "Home & lifestyle"],
    desktop: <EcomContent p={p("ecommerce")} />,
    mobile: <SmallContent p={p("ecommerce")} tag="N&B" title="Shop the edit" />,
  },
  {
    id: "corporate", name: "Corporate", paletteKey: "corporate",
    blurb: "Institutional-grade web presences for firms that need to convey trust, scale and ambition.",
    features: ["Investor relations", "Insights hub", "Careers portal", "Press"],
    benefits: ["+128% investor inquiries", "Better enterprise pipeline"],
    examples: ["Capital markets", "Consultancies", "Conglomerates"],
    desktop: <CorporateContent p={p("corporate")} />,
    mobile: <SmallContent p={p("corporate")} tag="◆" title="Investor login" />,
  },
  {
    id: "saas", name: "SaaS", paletteKey: "saas",
    blurb: "Product-led marketing sites that convert technical buyers — built for early-stage to series-D SaaS companies.",
    features: ["Product-led storytelling", "Interactive demos", "Pricing engine", "Docs & changelog"],
    benefits: ["+402% trial signups", "+91% demo conversions"],
    examples: ["B2B SaaS", "Dev-tools", "Vertical SaaS"],
    desktop: <SaaSContent p={p("saas")} />,
    mobile: <SmallContent p={p("saas")} tag="◇" title="Start free" accent />,
  },
  {
    id: "personal", name: "Personal Brands", paletteKey: "education",
    blurb: "Editorial portfolios for founders, creators and thought leaders that command premium opportunities.",
    features: ["Editorial layouts", "Speaking & press", "Newsletter", "Booking"],
    benefits: ["Higher inbound", "Premium positioning"],
    examples: ["Founders", "Creators", "Coaches"],
    desktop: <EducationContent p={p("education")} />,
    mobile: <SmallContent p={p("education")} tag="✺" title="Work with me" accent />,
  },
];

export function IndustriesPage({ onNav }: { onNav: (id: string) => void }) {
  return (
    <PageWrap>
      <section className="pt-40 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Eyebrow>Industries</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-[1.02]">
            Built for the businesses that <span className="font-serif-display italic text-gradient-blue">demand more.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg">
            Deep industry expertise across twelve verticals — every engagement shaped by what actually moves the needle in your category.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-24 py-16">
        {industries.map((ind, i) => {
          const palette = palettes[ind.paletteKey];
          const reverse = i % 2 === 1;
          return (
            <Reveal key={ind.id}>
              <div className={`grid lg:grid-cols-12 gap-8 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:col-span-7 [direction:ltr] relative pb-16 pt-4">
                  <div className="absolute inset-x-6 top-4 bottom-10 -z-10 blur-3xl opacity-70"
                    style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(47,139,255,0.16), transparent 70%)" }} />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[66%] h-10 rounded-[100%] bg-black/60 blur-2xl" />
                  <DesktopMockup palette={palette} content={ind.desktop} />
                  <div className="absolute -bottom-12 right-0 md:right-6 animate-float z-20">
                    <div style={{ transform: "rotate(6deg)" }} className="origin-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]">
                      <MobileMockup palette={palette} content={ind.mobile} />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 [direction:ltr]">
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-electric-2)] mb-2">Industry · {String(i+1).padStart(2,"0")}</div>
                  <h3 className="font-display text-3xl md:text-5xl text-gradient leading-tight mb-4">{ind.name}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">{ind.blurb}</p>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <GlassCard className="!p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Features</div>
                      <ul className="text-xs text-white/75 space-y-1.5">
                        {ind.features.map((f) => <li key={f} className="flex gap-1.5"><span className="text-[var(--color-electric-2)]">▸</span>{f}</li>)}
                      </ul>
                    </GlassCard>
                    <GlassCard className="!p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Benefits</div>
                      <ul className="text-xs text-white/75 space-y-1.5">
                        {ind.benefits.map((b) => <li key={b} className="flex gap-1.5"><span className="text-emerald-400">✓</span>{b}</li>)}
                      </ul>
                    </GlassCard>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {ind.examples.map((e) => (
                      <span key={e} className="px-3 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-white/65">{e}</span>
                    ))}
                  </div>

                  <button onClick={() => onNav("contact")} className="mt-7 inline-flex items-center gap-2 text-sm text-[var(--color-electric-2)] hover:text-white transition-colors">
                    Discuss your {ind.name.toLowerCase()} project →
                  </button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>
    </PageWrap>
  );
}
