export const meta = {
  name: "Devcynx Highlights",
  slug: "dcx-highlights",
  category: "Devcynx",
  sequence: 30,
  description: "3 glowing cards row of key differentiators with monospace label + icon.",
};

export default function DcxHighlights({
  items_json = JSON.stringify([
    { label: "01", icon: "⚡", title: "Senior engineers only", desc: "Every project led by an engineer with 5+ years of Odoo. No juniors learning on your dime." },
    { label: "02", icon: "🛡", title: "Own the outcome",        desc: "We deploy, monitor, and fix. If something breaks in production, we own it." },
    { label: "03", icon: "🔓", title: "Transparent pricing",   desc: "Fixed-price scopes or honest T&M. No surprise invoices, ever." },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className="section dcx-highlights">
      <div className="container-site">
        <div className="grid-3 dcx-highlights-grid">
          {items.map(function (h, i) {
            return (
              <div key={i} className="card dcx-highlight-card">
                <div className="dcx-highlight-label">{h.label}</div>
                <div className="dcx-highlight-icon">{h.icon}</div>
                <h3 className="h3 dcx-highlight-title">{h.title}</h3>
                <p className="dcx-highlight-desc">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
