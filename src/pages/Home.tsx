import { Hero } from "../sections/Hero";
import { IndustriesMarquee } from "../sections/IndustriesMarquee";
import { PortfolioShowcase } from "../sections/PortfolioShowcase";
import { ServicesPreview } from "../sections/ServicesPreview";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { Testimonials } from "../sections/Testimonials";
import { TrustGrid } from "../sections/Trust";
import { PageWrap } from "../components/ui";

export function HomePage({ onNav }: { onNav: (id: string) => void }) {
  return (
    <PageWrap>
      <Hero onNav={onNav} />
      <IndustriesMarquee />
      <PortfolioShowcase limit={5} onNav={onNav} />
      <ServicesPreview onNav={onNav} />
      <ProcessTimeline compact />
      <TrustGrid />
      <Testimonials />
    </PageWrap>
  );
}
