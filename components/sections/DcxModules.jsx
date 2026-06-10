export const meta = {
  name: "Devcynx Modules Grid",
  slug: "dcx-modules",
  category: "Devcynx",
  sequence: 50,
  description: "Dense 4-col Odoo modules grid - icon + category chip + title + tagline.",
};

export default function DcxModules({
  eyebrow = "modules/",
  heading = "25 Odoo ERP modules. One page each.",
  lede = "Sales, CRM, Inventory, MRP, Accounting, Payroll - we've deployed every core Odoo module at production scale.",
  cta_label = "Browse all modules →",
  cta_href = "/modules",
  bg = "default",
  items_json = JSON.stringify([
    { icon: "💼", category: "Sales", title: "Sales", tagline: "Quotations, orders, contracts, electronic signature.", slug: "sales" },
    { icon: "📧", category: "Sales", title: "CRM",   tagline: "Pipeline, leads, scoring, automation, AI lead matching.", slug: "crm" },
    { icon: "📦", category: "Operations", title: "Inventory", tagline: "Multi-warehouse, routes, transfers, putaway, barcoding.", slug: "inventory" },
    { icon: "🏭", category: "Operations", title: "Manufacturing", tagline: "MRP, BoM, work centers, MES, quality, maintenance.", slug: "manufacturing" },
    { icon: "💰", category: "Finance", title: "Accounting", tagline: "Multi-company, multi-currency, e-invoicing, ZATCA, tax engine.", slug: "accounting" },
    { icon: "🧾", category: "Finance", title: "Invoicing", tagline: "Customer invoices, vendor bills, automation, payment matching.", slug: "invoicing" },
    { icon: "🛒", category: "Commerce", title: "Point of Sale", tagline: "POS for retail, restaurants, salons - works offline.", slug: "pos" },
    { icon: "🌐", category: "Commerce", title: "eCommerce", tagline: "Website + product catalog + checkout + payments.", slug: "ecommerce" },
    { icon: "👥", category: "HR", title: "HR", tagline: "Employees, contracts, time-off, recruitment, appraisals.", slug: "hr" },
    { icon: "💸", category: "HR", title: "Payroll", tagline: "Multi-country payroll, salary structures, allowances.", slug: "payroll" },
    { icon: "⏱️", category: "HR", title: "Attendance", tagline: "Biometric, geo-fence, mobile clock-in, overtime handling.", slug: "attendance" },
    { icon: "🚚", category: "Operations", title: "Purchase", tagline: "Vendor RFQs, purchase orders, blanket orders, scoring.", slug: "purchase" },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className={"section dcx-modules " + (bg === "alt" ? "alt" : "")}>
      <div className="container-site">
        <div className="dcx-section-head">
          <div className="dcx-section-head-text">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
          {cta_label ? <a href={cta_href} className="btn btn-outline dcx-section-cta">{cta_label}</a> : null}
        </div>
        <div className="grid-4 dcx-modules-grid">
          {items.map(function (m, i) {
            return (
              <a key={i} href={"/modules/" + m.slug} className="card dcx-module-card">
                <div className="dcx-module-head">
                  <span className="dcx-module-icon">{m.icon}</span>
                  <span className="chip dcx-module-chip">{m.category}</span>
                </div>
                <h3 className="dcx-module-title">{m.title}</h3>
                <p className="dcx-module-tagline">{m.tagline}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
