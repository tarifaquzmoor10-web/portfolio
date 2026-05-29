import { Eyebrow, PageWrap } from "../components/ui";

type Section = { h: string; p: string[] };

const policies: Record<string, { title: string; intro: string; sections: Section[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro: "Your privacy matters to us. This policy describes how Dior Studios collects, uses and protects your information.",
    sections: [
      { h: "1. Information We Collect", p: [
        "We collect information you provide directly — such as your name, email, phone, company and project details — when you contact us, request a quote or engage our services.",
        "We also collect limited analytical data (such as page views and approximate location) to improve our services. This data is aggregated and never tied to individuals."
      ]},
      { h: "2. How We Use Information", p: [
        "We use your information to respond to inquiries, deliver services, send relevant updates and improve our offerings.",
        "We do not sell or rent your personal data to any third party under any circumstances."
      ]},
      { h: "3. Data Security", p: [
        "We protect your data using industry-standard encryption in transit and at rest. Access is limited to authorized personnel under strict access controls."
      ]},
      { h: "4. Your Rights", p: [
        "You may request access, correction or deletion of your personal data at any time by emailing privacy@diorstudios.com. We will respond within 30 days."
      ]},
      { h: "5. Cookies", p: [
        "We use minimal first-party cookies for essential site functionality and analytics. You may disable cookies in your browser without affecting site functionality."
      ]},
      { h: "6. Updates", p: [
        "We may update this policy from time to time. Material changes will be communicated via our website or directly to active clients."
      ]},
    ],
  },
  terms: {
    title: "Terms of Service",
    intro: "These Terms govern your use of Dior Studios' website and services. By engaging us you agree to these terms.",
    sections: [
      { h: "1. Engagement", p: [
        "All client engagements are governed by a separate Statement of Work (SOW) executed between you and Dior Studios. These Terms apply additionally."
      ]},
      { h: "2. Intellectual Property", p: [
        "Upon full payment, all final deliverables transfer to the client. Dior Studios retains the right to display the work in our portfolio unless an NDA prohibits it.",
        "Pre-existing tooling, frameworks and internal libraries remain the property of Dior Studios."
      ]},
      { h: "3. Payments", p: [
        "Engagements are typically billed in milestones with a 30% deposit. Invoices are payable within 14 days. Overdue accounts may pause active work."
      ]},
      { h: "4. Confidentiality", p: [
        "Both parties agree to keep confidential information shared during engagements private and to use it only for the purpose of the engagement."
      ]},
      { h: "5. Limitation of Liability", p: [
        "Dior Studios' total liability for any engagement is capped at the fees paid for that engagement. We are not liable for indirect or consequential damages."
      ]},
      { h: "6. Governing Law", p: [
        "These Terms are governed by the laws of England and Wales. Disputes will be resolved exclusively in London courts unless otherwise agreed."
      ]},
    ],
  },
  refund: {
    title: "Refund Policy",
    intro: "We stand behind our work. This Refund Policy outlines how refunds are handled across our engagement types.",
    sections: [
      { h: "1. Project Engagements", p: [
        "Project fees are billed in milestones tied to deliverables. Completed milestones are non-refundable.",
        "If a milestone has not yet been delivered, you may request a partial refund proportional to the work completed."
      ]},
      { h: "2. Discovery Deposits", p: [
        "Discovery deposits are fully refundable within 7 days of the discovery call if you decide not to proceed."
      ]},
      { h: "3. Retainers", p: [
        "Retainer fees are billed monthly in advance and are non-refundable for the current month. You may cancel future months with 30 days' notice."
      ]},
      { h: "4. Disputes", p: [
        "We always prefer a conversation first. Please email accounts@diorstudios.com with any concerns and we will work in good faith to resolve them."
      ]},
      { h: "5. Effective Date", p: [
        "This policy applies to engagements initiated on or after 1 January 2026 and supersedes prior policies."
      ]},
    ],
  },
};

export function LegalPage({ kind }: { kind: "privacy" | "terms" | "refund" }) {
  const data = policies[kind];
  return (
    <PageWrap>
      <section className="pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-gradient leading-[1.05]">{data.title}</h1>
          <p className="mt-5 text-white/60 text-base leading-relaxed">{data.intro}</p>
          <p className="mt-3 text-white/40 text-xs uppercase tracking-[0.2em]">Last updated · January 2026</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-8">
        {data.sections.map((s, i) => (
          <div key={i} className="glass rounded-2xl p-7">
            <h2 className="font-display text-xl md:text-2xl text-gradient-blue mb-3">{s.h}</h2>
            <div className="space-y-3 text-white/75 text-sm leading-relaxed">
              {s.p.map((para, j) => <p key={j}>{para}</p>)}
            </div>
          </div>
        ))}
      </section>
    </PageWrap>
  );
}
