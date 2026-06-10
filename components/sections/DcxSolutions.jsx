export const meta = {
  name: "Devcynx Industry Solutions",
  slug: "dcx-solutions",
  category: "Devcynx",
  sequence: 60,
  description: "Industry solutions on darker glow background - 9 cards with icon, title, tagline.",
};

export default function DcxSolutions({
  eyebrow = "industries/",
  heading = "Tailored Odoo for your vertical.",
  lede = "20 industry-ready Odoo solutions built from hundreds of real deployments - hospitals, restaurants, construction, schools, and more.",
  cta_label = "All 20 industries →",
  cta_href = "/solutions",
  items_json = JSON.stringify([
    { icon: "🏥", title: "Healthcare / Hospitals",      tagline: "Patient management, OPD/IPD, pharmacy, lab, radiology, insurance billing.", slug: "hospital-management" },
    { icon: "🍽️", title: "Restaurants & Cafes",          tagline: "Multi-outlet POS, kitchen display, table reservations, recipes, food cost.", slug: "restaurant-fnb" },
    { icon: "🏗️", title: "Construction",                  tagline: "Projects, BOQ, subcontractor management, equipment, multi-site materials.", slug: "construction" },
    { icon: "🏫", title: "Education / Schools",            tagline: "Admissions, attendance, exams, fees, transport, parents portal.", slug: "school-management" },
    { icon: "💇", title: "Salon / Spa",                     tagline: "Bookings, walk-ins, services, packages, commission, POS.", slug: "salon-spa" },
    { icon: "🚛", title: "Logistics & Transport",          tagline: "Fleet, drivers, shipments, fuel, maintenance, route optimization.", slug: "logistics-transport" },
    { icon: "🛍️", title: "Retail Chains",                  tagline: "Multi-store inventory, transfers, loyalty, omnichannel, ZATCA-compliant POS.", slug: "retail-stores" },
    { icon: "🏭", title: "Manufacturing",                   tagline: "MRP, BOM, work orders, MES, quality, maintenance, batch tracking.", slug: "manufacturing-industry" },
    { icon: "💊", title: "Pharmacies",                       tagline: "Drug master, batch + expiry tracking, prescription module, insurance.", slug: "pharmacy" },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className="section glow dcx-solutions">
      <div className="container-site">
        <div className="dcx-section-head">
          <div className="dcx-section-head-text">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
          {cta_label ? <a href={cta_href} className="btn btn-outline dcx-section-cta">{cta_label}</a> : null}
        </div>
        <div className="grid-3 dcx-solutions-grid">
          {items.map(function (s, i) {
            return (
              <a key={i} href={"/solutions/" + s.slug} className="card dcx-solution-card">
                <div className="dcx-solution-head">
                  <span className="dcx-solution-icon">{s.icon}</span>
                  <h3 className="h3 dcx-solution-title">{s.title}</h3>
                </div>
                <p className="dcx-solution-tagline">{s.tagline}</p>
                <span className="dcx-solution-link">// details →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
