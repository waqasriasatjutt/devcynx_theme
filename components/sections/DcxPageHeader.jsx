export const meta = {
  name: "Devcynx Page Header",
  slug: "dcx-page-header",
  category: "Devcynx",
  sequence: 15,
  description: "Reusable inner-page header with glow + grid bg, eyebrow + h1 + lede.",
};

export default function DcxPageHeader({
  eyebrow = "about/",
  heading = "We build Odoo. Carefully.",
  lede = "devcynx is an Odoo dev agency with 9+ years of delivery, 500+ deployments, 1000+ custom modules across 18 countries.",
  variant = "glow",
} = {}) {
  return (
    <section className={"section sm dcx-page-header dcx-page-header-" + variant}>
      <div className="dcx-page-header-bg"></div>
      <div className="container-site dcx-page-header-inner">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="h1 dcx-page-header-h1">{heading}</h1>
        {lede ? <p className="lede dcx-page-header-lede">{lede}</p> : null}
      </div>
    </section>
  );
}
