export const meta = {
  name: "Devcynx Header (mega menu)",
  slug: "dcx-header",
  category: "Devcynx",
  sequence: 10,
  description: "Dark sticky header with logo, 4 mega-menu dropdowns (Services, Modules, Industries, Stack), flat links (Products, Pricing, Case Studies, Blog), GitHub + 'Talk to us' CTA, mobile burger.",
};

export default function DcxHeader({
  brand_name = "devcynx",
  brand_tagline = "Odoo dev agency",
  cta_label = "Talk to us",
  cta_href = "/contact",
  github_href = "https://github.com/waqasriasatjutt",
  services_json = JSON.stringify({
    "Custom Development": [
      { slug: "odoo-implementation",  title: "Odoo Implementation",     tagline: "Discovery → blueprint → go-live", icon: "🚀" },
      { slug: "odoo-customization",   title: "Custom Modules",           tagline: "OWL + Python + QWeb",          icon: "🧩" },
      { slug: "odoo-integration",     title: "Integrations",             tagline: "REST / GraphQL / EDI",         icon: "🔗" },
      { slug: "odoo-migration",       title: "Version Migration",        tagline: "v10 → v19, code + data",       icon: "🔄" },
    ],
    "Run & Scale": [
      { slug: "odoo-support",         title: "24/7 Support",             tagline: "SLA tiers, monitoring",         icon: "🛟" },
      { slug: "saas-hosting",         title: "SaaS Hosting",             tagline: "Multi-tenant, auto-SSL",        icon: "🌐" },
      { slug: "hire-odoo-developer",  title: "Hire Engineers",           tagline: "Senior Odoo devs, NDA",         icon: "👨‍💻" },
      { slug: "zatca-einvoicing",      title: "ZATCA / e-Invoicing",     tagline: "Phase 1 + 2 compliance",        icon: "📑" },
    ],
  }),
  modules_json = JSON.stringify({
    "Sales & CRM":   [{ slug: "sales", title: "Sales", icon: "💼" }, { slug: "crm", title: "CRM", icon: "📧" }],
    "Finance":       [{ slug: "accounting", title: "Accounting", icon: "💰" }, { slug: "invoicing", title: "Invoicing", icon: "🧾" }],
    "Operations":    [{ slug: "inventory", title: "Inventory", icon: "📦" }, { slug: "manufacturing", title: "Manufacturing", icon: "🏭" }, { slug: "purchase", title: "Purchase", icon: "🚚" }],
    "Commerce":      [{ slug: "pos", title: "Point of Sale", icon: "🛒" }, { slug: "ecommerce", title: "eCommerce", icon: "🌐" }],
    "HR":            [{ slug: "hr", title: "HR", icon: "👥" }, { slug: "payroll", title: "Payroll", icon: "💸" }, { slug: "attendance", title: "Attendance", icon: "⏱️" }],
  }),
  industries_json = JSON.stringify([
    { slug: "hospital-management",     title: "Hospitals",            icon: "🏥", tagline: "EMR + pharmacy + lab" },
    { slug: "clinic-management",       title: "Clinics",               icon: "🩺", tagline: "Multi-specialty" },
    { slug: "pharmacy",                 title: "Pharmacies",            icon: "💊", tagline: "Batch + expiry tracking" },
    { slug: "restaurant-fnb",          title: "Restaurants & F&B",    icon: "🍽️", tagline: "POS + KDS + reservations" },
    { slug: "hotel-hospitality",       title: "Hotels",                icon: "🏨", tagline: "PMS + F&B + payroll" },
    { slug: "construction",             title: "Construction",          icon: "🏗️", tagline: "BOQ + multi-site" },
    { slug: "retail-stores",           title: "Retail Stores",         icon: "🛍️", tagline: "Multi-store + loyalty" },
    { slug: "school-management",       title: "Schools",                icon: "🏫", tagline: "Admissions + exams" },
    { slug: "manufacturing-industry",  title: "Manufacturing",         icon: "⚙️", tagline: "MRP + MES + quality" },
    { slug: "logistics-transport",     title: "Logistics",              icon: "🚛", tagline: "Fleet + GPS + fuel" },
    { slug: "salon-spa",               title: "Salons",                 icon: "💇", tagline: "Bookings + packages" },
    { slug: "dental-clinic",           title: "Dental",                 icon: "🦷", tagline: "Patient records" },
  ]),
  stack_json = JSON.stringify([
    { label: "GCC & ME", items: [
      { slug: "saudi-arabia", flag: "🇸🇦", title: "Saudi Arabia" },
      { slug: "uae",           flag: "🇦🇪", title: "UAE" },
      { slug: "qatar",         flag: "🇶🇦", title: "Qatar" },
      { slug: "kuwait",        flag: "🇰🇼", title: "Kuwait" },
      { slug: "oman",          flag: "🇴🇲", title: "Oman" },
      { slug: "bahrain",       flag: "🇧🇭", title: "Bahrain" },
    ]},
    { label: "Asia", items: [
      { slug: "pakistan",   flag: "🇵🇰", title: "Pakistan" },
      { slug: "india",       flag: "🇮🇳", title: "India" },
      { slug: "bangladesh",  flag: "🇧🇩", title: "Bangladesh" },
    ]},
    { label: "Europe", items: [
      { slug: "united-kingdom", flag: "🇬🇧", title: "UK" },
      { slug: "germany",         flag: "🇩🇪", title: "Germany" },
      { slug: "france",          flag: "🇫🇷", title: "France" },
    ]},
    { label: "Americas & Oceania", items: [
      { slug: "united-states", flag: "🇺🇸", title: "United States" },
      { slug: "canada",         flag: "🇨🇦", title: "Canada" },
      { slug: "australia",      flag: "🇦🇺", title: "Australia" },
    ]},
  ]),
} = {}) {
  let services = {}, modules = {}, industries = [], countries = [];
  try { services = JSON.parse(services_json); } catch (_) {}
  try { modules = JSON.parse(modules_json); } catch (_) {}
  try { industries = JSON.parse(industries_json); } catch (_) {}
  try { countries = JSON.parse(stack_json); } catch (_) {}

  return (
    <header className="dcx-header">
      <div className="container-site dcx-header-inner">
        <a href="/" className="dcx-brand">
          <span className="dcx-brand-mark">
            <span className="dcx-brand-bracket">{"</>"}</span>
          </span>
          <span className="dcx-brand-text">
            <span className="dcx-brand-name">{brand_name}</span>
            <span className="dcx-brand-tagline">{brand_tagline}</span>
          </span>
        </a>

        <nav className="dcx-nav" aria-label="Primary">
          <div className="dcx-mega-wrap">
            <button type="button" className="dcx-nav-btn">Services <span className="dcx-caret">▾</span></button>
            <div className="dcx-mega dcx-mega-w720">
              <div className="dcx-mega-grid dcx-mega-grid-2">
                {Object.entries(services).map(function (kv) {
                  return (
                    <div key={kv[0]}>
                      <div className="dcx-mega-cat">{kv[0]}</div>
                      <ul className="dcx-mega-list">
                        {kv[1].map(function (s, j) {
                          return (
                            <li key={j}>
                              <a href={"/services/" + s.slug} className="dcx-mega-item">
                                <span className="dcx-mega-icon">{s.icon}</span>
                                <span>
                                  <span className="dcx-mega-title">{s.title}</span>
                                  <span className="dcx-mega-tagline">{s.tagline}</span>
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="dcx-mega-foot">
                <span>$ ls -la services/ — all of it.</span>
                <a href="/services">All services →</a>
              </div>
            </div>
          </div>

          <div className="dcx-mega-wrap">
            <button type="button" className="dcx-nav-btn">Modules <span className="dcx-caret">▾</span></button>
            <div className="dcx-mega dcx-mega-w900">
              <div className="dcx-mega-grid dcx-mega-grid-5">
                {Object.entries(modules).map(function (kv) {
                  return (
                    <div key={kv[0]}>
                      <div className="dcx-mega-cat">{kv[0]}</div>
                      <ul className="dcx-mega-list-small">
                        {kv[1].map(function (m, j) {
                          return (
                            <li key={j}>
                              <a href={"/modules/" + m.slug} className="dcx-mega-item-small">
                                <span>{m.icon}</span><span>{m.title}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="dcx-mega-foot">
                <span>// 25 production Odoo modules. One per page.</span>
                <a href="/modules">Browse all modules →</a>
              </div>
            </div>
          </div>

          <div className="dcx-mega-wrap">
            <button type="button" className="dcx-nav-btn">Industries <span className="dcx-caret">▾</span></button>
            <div className="dcx-mega dcx-mega-w720">
              <div className="dcx-mega-grid dcx-mega-grid-3">
                {industries.map(function (s, i) {
                  return (
                    <a key={i} href={"/solutions/" + s.slug} className="dcx-mega-item">
                      <span className="dcx-mega-icon">{s.icon}</span>
                      <span>
                        <span className="dcx-mega-title">{s.title}</span>
                        <span className="dcx-mega-tagline">{s.tagline}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="dcx-mega-foot">
                <span>$ grep -r "Odoo" industries/* — 20 of them.</span>
                <a href="/solutions">All industries →</a>
              </div>
            </div>
          </div>

          <div className="dcx-mega-wrap">
            <button type="button" className="dcx-nav-btn">Countries <span className="dcx-caret">▾</span></button>
            <div className="dcx-mega dcx-mega-w720">
              <div className="dcx-mega-grid dcx-mega-grid-2">
                {countries.map(function (g, i) {
                  return (
                    <div key={i}>
                      <div className="dcx-mega-cat">{g.label}</div>
                      <ul className="dcx-mega-list-small">
                        {g.items.map(function (c, j) {
                          return (
                            <li key={j}>
                              <a href={"/countries/" + c.slug} className="dcx-mega-item-small">
                                <span>{c.flag}</span><span>{c.title}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="dcx-mega-foot">
                <span>// Localized Odoo, 18 countries.</span>
                <a href="/countries">All countries →</a>
              </div>
            </div>
          </div>

          <a href="/products" className="dcx-nav-link">Products</a>
          <a href="/pricing" className="dcx-nav-link">Pricing</a>
          <a href="/case-studies" className="dcx-nav-link">Case Studies</a>
          <a href="/blog" className="dcx-nav-link">Blog</a>
        </nav>

        <div className="dcx-header-cta">
          {github_href ? (
            <a href={github_href} target="_blank" rel="noopener" className="dcx-header-icon-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.25.8-.55v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1a4.4 4.4 0 0 1 1.2 3.1c0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.55A11.5 11.5 0 0 0 12 .5z"/></svg>
            </a>
          ) : null}
          <a href={cta_href} className="btn btn-primary dcx-cta-btn">{cta_label}</a>
          <button className="dcx-burger" type="button" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav className="dcx-mobile-nav" aria-label="Mobile">
        <div className="container-site dcx-mobile-nav-inner">
          <a href="/services">Services</a>
          <a href="/modules">Modules</a>
          <a href="/solutions">Industries</a>
          <a href="/countries">Countries</a>
          <a href="/products">Products</a>
          <a href="/pricing">Pricing</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/blog">Blog</a>
          <a href="/contact" className="dcx-mobile-cta">Contact</a>
        </div>
      </nav>
    </header>
  );
}
