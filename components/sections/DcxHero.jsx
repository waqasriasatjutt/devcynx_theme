export const meta = {
  name: "Devcynx Hero",
  slug: "dcx-hero",
  category: "Devcynx",
  sequence: 20,
  description: "Dark hero with glowing gradient, grid background, animated terminal-style accent, stats bar, code-style trust strip.",
};

export default function DcxHero({
  eyebrow = "// Odoo dev agency · 9 years · 18 countries",
  heading_before = "The Odoo platform you ",
  heading_emphasis = "wish you'd built",
  heading_after = " in-house.",
  subheading = "We design, ship, and run Odoo for ambitious teams. 500+ deployments, 1000+ custom modules, deep expertise across HRMS, POS, SaaS, manufacturing, healthcare, and more.",
  cta1_label = "Start a project",
  cta1_href = "/contact",
  cta2_label = "Browse services",
  cta2_href = "/services",
  stats_json = JSON.stringify([
    { value: "9+",    label: "years building Odoo" },
    { value: "500+",  label: "production deployments" },
    { value: "1k+",   label: "custom modules shipped" },
    { value: "18",    label: "countries served" },
  ]),
  trust_label = "trusted_in:",
  trust_json = JSON.stringify([
    { flag: "🇸🇦", title: "Saudi Arabia", href: "/countries/saudi-arabia" },
    { flag: "🇦🇪", title: "UAE",           href: "/countries/uae" },
    { flag: "🇶🇦", title: "Qatar",         href: "/countries/qatar" },
    { flag: "🇵🇰", title: "Pakistan",      href: "/countries/pakistan" },
    { flag: "🇮🇳", title: "India",         href: "/countries/india" },
    { flag: "🇬🇧", title: "UK",            href: "/countries/united-kingdom" },
    { flag: "🇺🇸", title: "US",            href: "/countries/united-states" },
    { flag: "🇩🇪", title: "Germany",       href: "/countries/germany" },
  ]),
} = {}) {
  let stats = [], trust = [];
  try { stats = JSON.parse(stats_json); } catch (_) {}
  try { trust = JSON.parse(trust_json); } catch (_) {}
  return (
    <section className="dcx-hero">
      <div className="dcx-hero-grid"></div>
      <div className="dcx-hero-glow-a"></div>
      <div className="dcx-hero-glow-b"></div>

      <div className="container-site dcx-hero-inner">
        <div className="dcx-hero-content">
          <div className="dcx-hero-eyebrow">{eyebrow}</div>
          <h1 className="h1 dcx-hero-h1">
            {heading_before}
            <span className="dcx-hero-emphasis">{heading_emphasis}</span>
            {heading_after}
          </h1>
          <p className="lede dcx-hero-sub">{subheading}</p>
          <div className="dcx-hero-ctas">
            <a href={cta1_href} className="btn btn-primary">{cta1_label}</a>
            <a href={cta2_href} className="btn btn-outline">{cta2_label}</a>
          </div>
          <div className="dcx-hero-stats">
            {stats.map(function (s, i) {
              return (
                <div key={i} className="dcx-stat">
                  <div className="dcx-stat-value">{s.value}</div>
                  <div className="dcx-stat-label">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="dcx-hero-trust">
        <div className="container-site dcx-hero-trust-inner">
          <span className="dcx-hero-trust-label">{trust_label}</span>
          {trust.map(function (c, i) {
            return (
              <a key={i} href={c.href} className="dcx-hero-trust-link">
                <span>{c.flag}</span><span>{c.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
