export const meta = {
  name: "Devcynx Integrations",
  slug: "dcx-integrations",
  category: "Devcynx",
  sequence: 90,
  description: "Pre-built integrations grid - 4 cols of small horizontal cards.",
};

export default function DcxIntegrations({
  eyebrow = "integrations/",
  heading = "Connected to your stack.",
  lede = "Payment gateways, shipping carriers, eCommerce, CRM, BI, biometrics - 20+ pre-built Odoo integrations.",
  cta_label = "See all 20 integrations →",
  cta_href = "/integrations",
  bg = "default",
  items_json = JSON.stringify([
    { title: "Stripe",      category: "Payments" },
    { title: "Shopify",     category: "eCommerce" },
    { title: "WooCommerce", category: "eCommerce" },
    { title: "Magento",     category: "eCommerce" },
    { title: "PayPal",      category: "Payments" },
    { title: "Razorpay",    category: "Payments" },
    { title: "DHL",         category: "Shipping" },
    { title: "FedEx",       category: "Shipping" },
    { title: "Aramex",      category: "Shipping" },
    { title: "ZK Teco",     category: "Biometrics" },
    { title: "WhatsApp",    category: "Messaging" },
    { title: "Power BI",    category: "Analytics" },
  ]),
} = {}) {
  let items = [];
  try { items = JSON.parse(items_json); } catch (_) {}
  return (
    <section className={"section dcx-integrations " + (bg === "alt" ? "alt" : "")}>
      <div className="container-site">
        <div className="dcx-section-head-narrow">
          <div className="dcx-section-head-text">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="h2 dcx-section-h2">{heading}</h2>
            <p className="lede dcx-section-lede">{lede}</p>
          </div>
        </div>
        <div className="grid-4 dcx-int-grid">
          {items.map(function (it, i) {
            return (
              <a key={i} href={cta_href} className="card dcx-int-card">
                <span className="dcx-int-logo">{it.title.substring(0, 2).toUpperCase()}</span>
                <span>
                  <span className="dcx-int-name">{it.title}</span>
                  <span className="dcx-int-cat">{it.category}</span>
                </span>
              </a>
            );
          })}
        </div>
        {cta_label ? <div className="dcx-int-footer"><a href={cta_href} className="btn btn-outline">{cta_label}</a></div> : null}
      </div>
    </section>
  );
}
