import { Eyebrow, PageWrap } from "../components/ui";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { TrustGrid } from "../sections/Trust";

export function ProcessPage() {
  return (
    <PageWrap>
      <section className="pt-40 pb-4 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Eyebrow>Our process</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-[1.02] max-w-4xl mx-auto">
            From idea to launch — <span className="font-serif-display italic text-gradient-blue">measured at every step.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg">
            Our nine-phase methodology has been refined across hundreds of engagements. Predictable, transparent and outcome-focused.
          </p>
        </div>
      </section>
      <ProcessTimeline />
      <TrustGrid />
    </PageWrap>
  );
}
