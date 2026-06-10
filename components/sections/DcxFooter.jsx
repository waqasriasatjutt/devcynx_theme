export const meta = {
  name: "Devcynx Footer",
  slug: "dcx-footer",
  category: "Devcynx",
  sequence: 999,
  description: "Site footer: brand + 5-col link grid (Services/Modules/Solutions/Countries) + 5-cat sub-row + copyright.",
};

export default function DcxFooter({
  brand_name = "devcynx",
  brand_tagline = "Odoo dev agency. 9+ years, 500+ deployments, 1000+ custom modules across 18 countries.",
  email = "hello@cynxsolutions.com",
  phone = "+92 315 411 4748",
  whatsapp = "https://wa.me/923154114748",
  linkedin = "https://linkedin.com/in/waqasriasatjutt",
  github = "https://github.com/waqasriasatjutt",
  copyright_text = "Odoo dev agency. All rights reserved.",
  built_with = "// Built with Next.js · Hosted on Cloudflare · Secured by SSL.",
  copyright_year = "2026",
  services_top_json = JSON.stringify([
    { slug: "odoo-implementation",   title: "Implementation" },
    { slug: "odoo-customization",    title: "Customization" },
    { slug: "odoo-support",          title: "Support" },
    { slug: "odoo-integration",      title: "Integration" },
    { slug: "odoo-migration",        title: "Migration" },
    { slug: "hire-odoo-developer",   title: "Hire Developer" },
    { slug: "saas-hosting",          title: "SaaS Hosting" },
    { slug: "zatca-einvoicing",      title: "ZATCA" },
  ]),
  modules_top_json = JSON.stringify([
    { slug: "sales",          title: "Sales" },
    { slug: "crm",            title: "CRM" },
    { slug: "accounting",     title: "Accounting" },
    { slug: "inventory",      title: "Inventory" },
    { slug: "manufacturing",  title: "Manufacturing" },
    { slug: "pos",            title: "Point of Sale" },
    { slug: "hr",             title: "HR" },
    { slug: "payroll",        title: "Payroll" },
  ]),
  solutions_top_json = JSON.stringify([
    { slug: "hospital-management", title: "Hospital Management" },
    { slug: "clinic-management",   title: "Clinic Management" },
    { slug: "pharmacy",             title: "Pharmacy" },
    { slug: "restaurant-fnb",      title: "Restaurants & F&B" },
    { slug: "hotel-hospitality",   title: "Hotel" },
    { slug: "construction",         title: "Construction" },
    { slug: "retail-stores",       title: "Retail Stores" },
    { slug: "school-management",   title: "Schools" },
  ]),
  countries_top_json = JSON.stringify([
    { slug: "saudi-arabia",   flag: "🇸🇦", title: "Saudi Arabia" },
    { slug: "uae",             flag: "🇦🇪", title: "UAE" },
    { slug: "qatar",           flag: "🇶🇦", title: "Qatar" },
    { slug: "pakistan",        flag: "🇵🇰", title: "Pakistan" },
    { slug: "india",            flag: "🇮🇳", title: "India" },
    { slug: "united-kingdom", flag: "🇬🇧", title: "UK" },
    { slug: "united-states",  flag: "🇺🇸", title: "US" },
    { slug: "germany",         flag: "🇩🇪", title: "Germany" },
  ]),
  sub_categories_json = JSON.stringify([
    { title: "Products", items: [{ label: "WT modules →", href: "/products" }] },
    { title: "Integrations", items: [{ label: "20+ integrations →", href: "/integrations" }] },
    { title: "Case Studies", items: [{ label: "Client stories →", href: "/case-studies" }] },
    { title: "Company", items: [
      { label: "About us →", href: "/about" },
      { label: "Careers →", href: "/careers" },
    ]},
    { title: "Resources", items: [
      { label: "Guides & FAQ →", href: "/resources" },
      { label: "Blog →", href: "/blog" },
    ]},
  ]),
} = {}) {
  let services = [], modules = [], solutions = [], countries = [], subs = [];
  try { services = JSON.parse(services_top_json); } catch (_) {}
  try { modules = JSON.parse(modules_top_json); } catch (_) {}
  try { solutions = JSON.parse(solutions_top_json); } catch (_) {}
  try { countries = JSON.parse(countries_top_json); } catch (_) {}
  try { subs = JSON.parse(sub_categories_json); } catch (_) {}

  return (
    <footer className="dcx-footer">
      <div className="container-site dcx-footer-inner">
        <div className="dcx-footer-main">
          <div className="dcx-footer-brand-col">
            <div className="dcx-footer-brand-row">
              <span className="dcx-brand-mark"><span className="dcx-brand-bracket">{"</>"}</span></span>
              <span className="dcx-footer-brand-name">{brand_name}</span>
            </div>
            <p className="dcx-footer-tagline">{brand_tagline}</p>
            <div className="dcx-footer-contact-list">
              {email ? <a href={"mailto:" + email}>✉ {email}</a> : null}
              {whatsapp ? <a href={whatsapp} target="_blank" rel="noopener">💬 WhatsApp {phone}</a> : null}
              {github ? <a href={github} target="_blank" rel="noopener">{"</>"} GitHub</a> : null}
              {linkedin ? <a href={linkedin} target="_blank" rel="noopener">in LinkedIn</a> : null}
            </div>
          </div>
          <div className="dcx-footer-col">
            <div className="dcx-footer-col-title">services/</div>
            <ul className="dcx-footer-col-list">
              {services.map(function (s, i) { return <li key={i}><a href={"/services/" + s.slug}>{s.title}</a></li>; })}
              <li><a href="/services" className="dcx-footer-col-all">All services →</a></li>
            </ul>
          </div>
          <div className="dcx-footer-col">
            <div className="dcx-footer-col-title">modules/</div>
            <ul className="dcx-footer-col-list">
              {modules.map(function (m, i) { return <li key={i}><a href={"/modules/" + m.slug}>{m.title}</a></li>; })}
              <li><a href="/modules" className="dcx-footer-col-all">All 25 modules →</a></li>
            </ul>
          </div>
          <div className="dcx-footer-col">
            <div className="dcx-footer-col-title">industries/</div>
            <ul className="dcx-footer-col-list">
              {solutions.map(function (s, i) { return <li key={i}><a href={"/solutions/" + s.slug}>{s.title}</a></li>; })}
              <li><a href="/solutions" className="dcx-footer-col-all">All industries →</a></li>
            </ul>
          </div>
          <div className="dcx-footer-col">
            <div className="dcx-footer-col-title">countries/</div>
            <ul className="dcx-footer-col-list">
              {countries.map(function (c, i) { return <li key={i}><a href={"/countries/" + c.slug}>{c.flag} {c.title}</a></li>; })}
              <li><a href="/countries" className="dcx-footer-col-all">All 18 countries →</a></li>
            </ul>
          </div>
        </div>

        <div className="dcx-footer-sub">
          {subs.map(function (col, i) {
            return (
              <div key={i}>
                <div className="dcx-footer-col-title">{col.title.toLowerCase()}/</div>
                {col.items.map(function (it, j) {
                  return <a key={j} href={it.href} className="dcx-footer-sub-link">{it.label}</a>;
                })}
              </div>
            );
          })}
        </div>

        <div className="dcx-footer-bottom">
          <p>© {copyright_year} {brand_name}. {copyright_text}</p>
          <p className="dcx-footer-builtwith">{built_with}</p>
        </div>
      </div>
    </footer>
  );
}
