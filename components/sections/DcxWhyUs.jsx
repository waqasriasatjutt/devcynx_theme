export const meta = {
  name: "Devcynx Why Us",
  slug: "dcx-why-us",
  category: "Devcynx",
  sequence: 100,
  description: "Why us section - left intro + right 6-card glow grid.",
};

export default function DcxWhyUs({
  eyebrow = "why_devcynx/",
  heading = "We write code. We ship. We stay.",
  lede = "Odoo partners come and go. We build long-term relationships - some clients for 5+ years. Here's what makes the difference.",
  items_json = JSON.stringify([
    { t: "Senior engineers only", d: "Every project led by engineers with 5+ years of Odoo. No juniors learning on your dime." },
    { t: "Own the outcome",        d: "We deploy, monitor, and fix. If something breaks in production, we own it." },
    { t: "Transparent pricing",    d: "Fixed-price scopes or honest T&M. No surprise invoices, ever." },
    { t: "Direct access",          d: "Slack/WhatsApp with the engineer writing your code. No PM middleman." },
    { t: "Compliance-first",       d: "ZATCA, FBR, GST, MTD, WPS - localization baked in, not bolted on." },
    { t: "Stack agnostic",         d: "On-prem, Docker, Kubernetes, Odoo.sh - we deploy where you need." },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className="section glow dcx-whyus">
      <div className="container-site">
        <div className="dcx-whyus-grid">
          <div className="dcx-whyus-intro">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
          <div className="grid-2 dcx-whyus-cards">
            {items.map(function (x, i) {
              return (
                <div key={i} className="card dcx-whyus-card">
                  <div className="dcx-whyus-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="dcx-whyus-card-title">{x.t}</h3>
                  <p className="dcx-whyus-card-desc">{x.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
