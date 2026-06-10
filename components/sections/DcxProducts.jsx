export const meta = {
  name: "Devcynx Products",
  slug: "dcx-products",
  category: "Devcynx",
  sequence: 70,
  description: "Production-ready Odoo modules listed as product cards.",
};

export default function DcxProducts({
  eyebrow = "products/",
  heading = "30+ production-ready Odoo modules.",
  lede = "Battle-tested modules: HRMS suite, SaaS Kit, dashboards, industry POS - all on the Odoo Apps Store.",
  cta_label = "All products →",
  cta_href = "/products",
  bg = "default",
  items_json = JSON.stringify([
    { category: "HR & Payroll",   title: "WT HRMS Core",       tagline: "Full community HR + Payroll suite for Odoo 19. Multi-country, audit-grade.", slug: "wt-hrms-core" },
    { category: "SaaS",           title: "WT SaaS Odoo Kit",   tagline: "Build your own Odoo SaaS - multi-stack control plane with tenants, backups, deploys.", slug: "wt-saas-odoo-kit" },
    { category: "Sales",          title: "WT Sale Dashboard",  tagline: "Live KPI dashboards on sale.order - pipeline, margins, salesperson scorecards.", slug: "wt-sale-dashboard" },
    { category: "Industry POS",   title: "WT Salon Management", tagline: "Bookings, sessions, chairs, dashboard, reports, walk-ins.", slug: "wt-salon-management" },
    { category: "Industry POS",   title: "WT POS Saloon",      tagline: "POS screen tailored for salons - kanban, booking, walk-in, payment tracking.", slug: "wt-pos-saloon" },
    { category: "Logistics",      title: "Way4Tech Logistics", tagline: "Fleet, shipments, drivers, fuel, maintenance, route optimization for transport.", slug: "way4tech-logistics" },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className={"section dcx-products " + (bg === "alt" ? "alt" : "")}>
      <div className="container-site">
        <div className="dcx-section-head">
          <div className="dcx-section-head-text">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
          {cta_label ? <a href={cta_href} className="btn btn-outline dcx-section-cta">{cta_label}</a> : null}
        </div>
        <div className="grid-3 dcx-products-grid">
          {items.map(function (p, i) {
            return (
              <a key={i} href={"/products/" + p.slug} className="card dcx-product-card">
                <div className="dcx-product-cat">{p.category}</div>
                <h3 className="dcx-product-title">{p.title}</h3>
                <p className="dcx-product-tagline">{p.tagline}</p>
                <span className="dcx-product-link">$ open product →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
