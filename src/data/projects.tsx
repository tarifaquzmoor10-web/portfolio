import {
  palettes, RestaurantContent, RealEstateContent, EducationContent, HealthcareContent,
  LawContent, FitnessContent, TravelContent, EcomContent, CorporateContent, SaaSContent,
  SmallContent,
} from "../components/Mockups";
import { photos } from "./photos";
import type { ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  industry: string;
  paletteKey: keyof typeof palettes;
  challenge: string;
  solution: string;
  results: string[];
  desktop: ReactNode;
  tablet: ReactNode;
  mobile: ReactNode;
  tags: string[];
  photo: string;
};

const p = (key: keyof typeof palettes) => palettes[key];

export const projects: Project[] = [
  {
    id: "maison-lumiere",
    title: "Maison Lumière",
    industry: "Luxury Restaurant",
    paletteKey: "restaurant",
    challenge: "A Michelin-starred Parisian restaurant needed a digital presence as refined as its cuisine and a frictionless reservation flow.",
    solution: "An editorial cinematic site with an integrated reservation engine, multilingual menus and chef storytelling.",
    results: ["+182% online reservations", "+64% direct bookings", "8.2s avg. session"],
    tags: ["Hospitality", "Editorial", "Reservations"],
    photo: photos.restaurant,
    desktop: <RestaurantContent p={p("restaurant")} img={photos.restaurant} />,
    tablet: <SmallContent p={p("restaurant")} tag="Maison Lumière" title="Where every dish tells a story" accent />,
    mobile: <SmallContent p={p("restaurant")} tag="Maison" title="Reserve your evening" accent />,
  },
  {
    id: "north-harbor",
    title: "North Harbor Realty",
    industry: "Real Estate Agency",
    paletteKey: "realestate",
    challenge: "Premium real estate brokerage required a curated catalogue experience to showcase trophy properties.",
    solution: "A cinematic property explorer with smart filtering, virtual tours and broker storytelling.",
    results: ["+212% qualified leads", "3.4x time on listings", "$48M closed via site"],
    tags: ["Real Estate", "Catalogue", "Lead Gen"],
    photo: photos.realestate,
    desktop: <RealEstateContent p={p("realestate")} img={photos.realestate} img2={photos.realestateAlt} />,
    tablet: <SmallContent p={p("realestate")} tag="North·Harbor" title="Iconic homes. Elevated living." />,
    mobile: <SmallContent p={p("realestate")} tag="N·H" title="Find your address" />,
  },
  {
    id: "atlas-advisory",
    title: "Atlas Advisory",
    industry: "Education Consultancy",
    paletteKey: "education",
    challenge: "A premium study-abroad advisory needed to convert international students with trust and clarity.",
    solution: "Program matching, university explorer and counselor booking — all in a calm premium interface.",
    results: ["+148% counseling bookings", "5.6x application starts", "92 NPS"],
    tags: ["Education", "Conversion", "Booking"],
    photo: photos.education,
    desktop: <EducationContent p={p("education")} img={photos.education} />,
    tablet: <SmallContent p={p("education")} tag="Atlas Advisory" title="Your global education journey" accent />,
    mobile: <SmallContent p={p("education")} tag="Atlas" title="Book counseling" accent />,
  },
  {
    id: "lumen-health",
    title: "Lumen Health",
    industry: "Multi-specialty Healthcare",
    paletteKey: "healthcare",
    challenge: "A growing hospital network needed unified specialty discovery and seamless patient booking.",
    solution: "A trust-led platform with doctor finder, instant booking and editorial health content.",
    results: ["+220% appointment bookings", "+38% organic traffic", "1.6s LCP"],
    tags: ["Healthcare", "Booking", "Trust"],
    photo: photos.healthcare,
    desktop: <HealthcareContent p={p("healthcare")} img={photos.healthcare} />,
    tablet: <SmallContent p={p("healthcare")} tag="+ Lumen" title="Care that understands you" />,
    mobile: <SmallContent p={p("healthcare")} tag="+L" title="Book appointment" />,
  },
  {
    id: "sterling-vane",
    title: "Sterling & Vane",
    industry: "Corporate Law Firm",
    paletteKey: "law",
    challenge: "A century-old law firm needed digital presence that conveyed gravitas and modern credibility.",
    solution: "An editorial site combining heritage storytelling, practice areas and partner profiles.",
    results: ["+96% enterprise inquiries", "+3.1x partner discovery", "Top 1% Lighthouse"],
    tags: ["Legal", "Editorial", "Heritage"],
    photo: photos.law,
    desktop: <LawContent p={p("law")} img={photos.law} />,
    tablet: <SmallContent p={p("law")} tag="Sterling & Vane" title="Counsel built on century-old trust" />,
    mobile: <SmallContent p={p("law")} tag="S&V" title="Speak to counsel" />,
  },
  {
    id: "forge-61",
    title: "FORGE/61",
    industry: "Fitness Brand",
    paletteKey: "fitness",
    challenge: "An elite training program needed a bold high-energy platform that converted athletes into members.",
    solution: "Kinetic typography, program builder and membership flow with class scheduling.",
    results: ["+340% memberships", "+72% retention", "4.9★ avg rating"],
    tags: ["Fitness", "Membership", "Brand"],
    photo: photos.fitness,
    desktop: <FitnessContent p={p("fitness")} img={photos.fitness} />,
    tablet: <SmallContent p={p("fitness")} tag="FORGE/61" title="Built different." accent />,
    mobile: <SmallContent p={p("fitness")} tag="F/61" title="Join now" accent />,
  },
  {
    id: "wanderbound",
    title: "Wanderbound",
    industry: "Travel Agency",
    paletteKey: "travel",
    challenge: "A bespoke travel agency required a sense of wanderlust matched by a powerful itinerary builder.",
    solution: "Editorial destination guides, custom itinerary requests and concierge-led booking flow.",
    results: ["+256% itinerary requests", "+88% avg booking value", "3.2x repeat bookings"],
    tags: ["Travel", "Editorial", "Concierge"],
    photo: photos.travel,
    desktop: <TravelContent p={p("travel")} img={photos.travel} />,
    tablet: <SmallContent p={p("travel")} tag="Wanderbound" title="The world, curated by hand." />,
    mobile: <SmallContent p={p("travel")} tag="W" title="Plan your trip" />,
  },
  {
    id: "noir-bloom",
    title: "Noir & Bloom",
    industry: "Premium E-Commerce",
    paletteKey: "ecommerce",
    challenge: "A luxury fashion label needed a high-converting flagship store with editorial storytelling.",
    solution: "Cinematic product pages, edit drops, optimized checkout and personalized recommendations.",
    results: ["+318% conversions", "+47% AOV", "0.9s checkout"],
    tags: ["E-Commerce", "Fashion", "Conversion"],
    photo: photos.ecommerce,
    desktop: <EcomContent p={p("ecommerce")} img={photos.ecommerce} />,
    tablet: <SmallContent p={p("ecommerce")} tag="Noir & Bloom" title="The Velvet Drop, AW26" />,
    mobile: <SmallContent p={p("ecommerce")} tag="N&B" title="Shop the edit" />,
  },
  {
    id: "northpeak",
    title: "Northpeak Capital",
    industry: "Corporate / Investment",
    paletteKey: "corporate",
    challenge: "An investment firm needed an institutional-grade site to attract LPs and portfolio founders.",
    solution: "Calm corporate interface, thought-leadership engine and discreet investor portal.",
    results: ["+128% investor inquiries", "+58% LP conversions", "Trusted by 7 Fortune 500"],
    tags: ["Corporate", "Investment", "Editorial"],
    photo: photos.corporate,
    desktop: <CorporateContent p={p("corporate")} img={photos.corporate} />,
    tablet: <SmallContent p={p("corporate")} tag="Northpeak" title="Capital with conviction." />,
    mobile: <SmallContent p={p("corporate")} tag="◆" title="Investor login" />,
  },
  {
    id: "pulsefield",
    title: "Pulsefield",
    industry: "SaaS Startup Platform",
    paletteKey: "saas",
    challenge: "A B2B observability SaaS needed a launch site that converted technical buyers at scale.",
    solution: "Product-led storytelling, interactive dashboards, integrations gallery and pricing engine.",
    results: ["+402% trial signups", "+91% demo conversions", "$2.4M ARR in 90 days"],
    tags: ["SaaS", "Product-Led", "B2B"],
    photo: photos.saas,
    desktop: <SaaSContent p={p("saas")} img={photos.saas} />,
    tablet: <SmallContent p={p("saas")} tag="Pulsefield" title="Observability, reimagined." accent />,
    mobile: <SmallContent p={p("saas")} tag="◇" title="Start free" accent />,
  },
];
