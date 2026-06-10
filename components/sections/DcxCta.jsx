export const meta = {
  name: "Devcynx CTA Banner",
  slug: "dcx-cta",
  category: "Devcynx",
  sequence: 120,
  description: "Glow CTA banner with two action buttons.",
};

export default function DcxCta({
  heading = "Let's scope your Odoo project.",
  subheading = "Free 30-minute consultation. We'll review your current stack, identify gaps, and propose a path forward — no commitment.",
  cta1_label = "Start a project",
  cta1_href = "/contact",
  cta2_label = "WhatsApp us",
  cta2_href = "https://wa.me/923154114748",
} = {}) {
  return (
    <section className="section dcx-cta-section">
      <div className="container-site">
        <div className="dcx-cta-card">
          <div className="dcx-cta-glow-a"></div>
          <div className="dcx-cta-glow-b"></div>
          <div className="dcx-cta-pattern"></div>
          <div className="dcx-cta-content">
            <div className="eyebrow">ready_to_ship/</div>
            <h2 className="h2 dcx-cta-heading">{heading}</h2>
            <p className="lede dcx-cta-sub">{subheading}</p>
            <div className="dcx-cta-buttons">
              <a href={cta1_href} className="btn btn-primary">{cta1_label}</a>
              {cta2_label ? <a href={cta2_href} target="_blank" rel="noopener" className="btn btn-outline">{cta2_label}</a> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
