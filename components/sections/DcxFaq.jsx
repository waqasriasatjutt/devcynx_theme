export const meta = {
  name: "Devcynx FAQ",
  slug: "dcx-faq",
  category: "Devcynx",
  sequence: 110,
  description: "FAQ accordion - left intro + right list of details/summary.",
};

export default function DcxFaq({
  eyebrow = "faq/",
  heading = "You ask. We answer.",
  lede_html = "Can't find an answer? <a href='/contact' class='dcx-faq-link'>Ask directly</a>.",
  items_json = JSON.stringify([
    { q: "What does an Odoo implementation cost?",                a: "Depends on scope - a single-module deployment from $3,000, a multi-module ERP rollout from $25,000-150,000+. We give fixed-price quotes after a 30-min discovery call." },
    { q: "How long does a typical Odoo implementation take?",     a: "Small (1-2 modules): 4-6 weeks. Mid (5-8 modules, multi-company): 3-5 months. Enterprise rollout (full suite + integrations + multi-country): 6-12 months." },
    { q: "Do you do upgrades from older Odoo versions?",          a: "Yes. We migrate 14 → 19 (or any combination), keeping all data, custom modules, and reports intact. Includes refactoring OWL JS and replacing deprecated APIs." },
    { q: "Do you offer SaaS / hosted Odoo?",                       a: "Yes. We run our own multi-tenant SaaS Kit. We can host your Odoo instance on AWS / Azure / GCP / Hetzner / our own infrastructure with auto SSL, auto backups, 99.95% SLA." },
    { q: "What about ZATCA / e-invoicing?",                        a: "ZATCA Phase 1 (B2C) and Phase 2 (B2B with cryptographic stamping + integration with Fatoora) - both supported." },
    { q: "What countries do you serve?",                          a: "MENA (Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain), South Asia (Pakistan, India), Europe (UK, Germany), North America (US, Canada) and Australia." },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className="section dcx-faq">
      <div className="container-site">
        <div className="dcx-faq-grid">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede" dangerouslySetInnerHTML={{ __html: lede_html }} />
          </div>
          <div className="dcx-faq-list">
            {items.map(function (f, i) {
              return (
                <details key={i} className="dcx-faq-item">
                  <summary className="dcx-faq-summary">
                    <span>{f.q}</span>
                    <span className="dcx-faq-plus">+</span>
                  </summary>
                  <p className="dcx-faq-answer">{f.a}</p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
