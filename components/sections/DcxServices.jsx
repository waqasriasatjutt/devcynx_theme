export const meta = {
  name: "Devcynx Services Grid",
  slug: "dcx-services",
  category: "Devcynx",
  sequence: 40,
  description: "Services grid with monospace eyebrow, glowing cards, category chips. 9 service cards.",
};

export default function DcxServices({
  eyebrow = "services/",
  heading = "Every Odoo service. Under one roof.",
  lede = "From discovery to SaaS hosting, ZATCA e-invoicing to custom OWL modules. 15 productized services, 9+ years of practice.",
  cta_label = "All 15 services →",
  cta_href = "/services",
  bg = "alt",
  items_json = JSON.stringify([
    { icon: "🚀", category: "Delivery",     title: "Odoo Implementation",      tagline: "End-to-end Odoo - discovery, blueprint, data migration, go-live, hypercare.", slug: "odoo-implementation" },
    { icon: "🧩", category: "Development",  title: "Custom Module Development", tagline: "OWL/Python custom modules, exactly tailored to your workflow.", slug: "custom-module-development" },
    { icon: "🔄", category: "Migration",    title: "Odoo Version Upgrade",     tagline: "Migrate Odoo 14/15/16/17 → 19 with data, custom code, and reports preserved.", slug: "odoo-version-upgrade" },
    { icon: "🛟", category: "Support",     title: "Support & Maintenance",    tagline: "24/7 Odoo support, performance tuning, security patches, version updates.", slug: "support-maintenance" },
    { icon: "🌐", category: "Hosting",      title: "Odoo SaaS Hosting",        tagline: "Multi-tenant SaaS hosting with our own SaaS Kit - Docker, auto SSL, auto backups.", slug: "saas-hosting" },
    { icon: "📊", category: "BI",          title: "Dashboards & Reports",     tagline: "Real-time KPI dashboards, custom QWeb reports, BI integrations.", slug: "dashboards-reports" },
    { icon: "🔌", category: "Integrations", title: "Third-Party Integrations", tagline: "Shopify, Magento, eShop, Stripe, payment gateways, shipping carriers, custom APIs.", slug: "integrations" },
    { icon: "📑", category: "Compliance",   title: "ZATCA / e-Invoicing",      tagline: "Phase 1 & Phase 2 ZATCA, UAE Tax, FBR, GST, MTD-VAT - localization done right.", slug: "zatca-einvoicing" },
    { icon: "🏗️", category: "Strategy",    title: "Discovery & Blueprint",    tagline: "Pre-implementation discovery, gap analysis, blueprint document - set up to succeed.", slug: "discovery-blueprint" },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className={"section dcx-services " + (bg === "alt" ? "alt" : "")}>
      <div className="container-site">
        <div className="dcx-section-head">
          <div className="dcx-section-head-text">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
          {cta_label ? <a href={cta_href} className="btn btn-outline dcx-section-cta">{cta_label}</a> : null}
        </div>
        <div className="grid-3 dcx-services-grid">
          {items.map(function (s, i) {
            return (
              <a key={i} href={"/services/" + s.slug} className="card dcx-service-card">
                <div className="dcx-service-head">
                  <span className="dcx-service-icon">{s.icon}</span>
                  <span className="chip">{s.category}</span>
                </div>
                <h3 className="h3 dcx-service-title">{s.title}</h3>
                <p className="dcx-service-tagline">{s.tagline}</p>
                <span className="dcx-service-link">$ open {s.slug} →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
