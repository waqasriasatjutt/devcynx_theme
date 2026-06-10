export const meta = {
  name: "Devcynx Case Studies",
  slug: "dcx-case-studies",
  category: "Devcynx",
  sequence: 80,
  description: "Real deployment proof: industry chip, country chip, title, tagline, metric pills.",
};

export default function DcxCaseStudies({
  eyebrow = "proof/",
  heading = "Real deployments. Real numbers.",
  lede = "500+ go-lives across hotels, hospitals, pharmacies, construction, distribution, and more.",
  bg = "alt",
  items_json = JSON.stringify([
    { industry: "Hospitality", country: "Saudi Arabia", title: "Boutique hotel chain Riyadh",
      tagline: "8-property rollout - PMS, F&B POS, integrated payroll, ZATCA Phase 2.",
      metrics: [{ v: "8", k: "properties" }, { v: "65%", k: "labor cost down" }], slug: "boutique-hotel-riyadh" },
    { industry: "Healthcare", country: "UAE", title: "Multi-specialty clinic network",
      tagline: "Centralized EMR + inventory + payroll for 4 clinics, doctor scorecards.",
      metrics: [{ v: "4", k: "clinics" }, { v: "3x", k: "throughput" }], slug: "uae-clinic-network" },
    { industry: "Logistics", country: "Pakistan", title: "National freight company",
      tagline: "Fleet, driver scorecards, real-time GPS, fuel reconciliation, automated billing.",
      metrics: [{ v: "120", k: "trucks" }, { v: "−22%", k: "fuel waste" }], slug: "pk-distributor" },
    { industry: "Retail",     country: "Qatar", title: "30-store fashion retailer",
      tagline: "Multi-store inventory + omnichannel + loyalty + ZATCA POS.",
      metrics: [{ v: "30", k: "stores" }, { v: "98%", k: "stock accuracy" }], slug: "gcc-hotel-chain" },
    { industry: "Manufacturing", country: "Germany", title: "Precision machining plant",
      tagline: "MRP + MES + quality + maintenance, shop-floor terminals.",
      metrics: [{ v: "+18%", k: "OEE" }, { v: "−40%", k: "downtime" }], slug: "saudi-construction" },
    { industry: "Food",        country: "Germany", title: "Bakery franchise — Lena Food",
      tagline: "Production planning, simulation wizard, A6 nutrition label, BIO BoM, delivery photo.",
      metrics: [{ v: "6", k: "tenants" }, { v: "100%", k: "BoM auditable" }], slug: "ksa-pharmacy-chain" },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className={"section dcx-case-studies " + (bg === "alt" ? "alt" : "")}>
      <div className="container-site">
        <div className="dcx-section-head-narrow">
          <div className="dcx-section-head-text">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
        </div>
        <div className="grid-3 dcx-case-grid">
          {items.map(function (cs, i) {
            return (
              <a key={i} href={"/case-studies/" + cs.slug} className="card dcx-case-card">
                <div className="dcx-case-chips">
                  <span className="chip">{cs.industry}</span>
                  <span className="chip">{cs.country}</span>
                </div>
                <h3 className="dcx-case-title">{cs.title}</h3>
                <p className="dcx-case-tagline">{cs.tagline}</p>
                <div className="dcx-case-metrics">
                  {(cs.metrics || []).map(function (m, j) {
                    return (
                      <span key={j} className="dcx-case-metric">
                        <span className="dcx-case-metric-v">{m.v}</span> <span className="dcx-case-metric-k">{m.k}</span>
                      </span>
                    );
                  })}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
