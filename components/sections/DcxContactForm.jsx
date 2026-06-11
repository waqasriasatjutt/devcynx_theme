export const meta = {
  name: "Devcynx Contact Form (dynamic)",
  slug: "dcx-contact-form",
  category: "Devcynx",
  sequence: 130,
  description: "Fully configurable contact form. Edit endpoint URL, method, headers (JSON), payload template (JSON with {{field}}), source tag, success/error messages. Defaults to portal.way4tech.com lead API.",
};

export default function DcxContactForm({
  page_eyebrow = "contact/",
  page_heading = "Let's talk Odoo.",
  page_lede = "Free 30-minute consultation. No obligation, no sales pitch - just an honest conversation about what you're trying to build.",
  form_heading = "Send us a message",
  form_subheading = "We respond within 4 business hours.",
  endpoint = "/api/forms/contact",
  method = "POST",
  headers_json = '{"Content-Type":"application/json","Accept":"application/json"}',
  payload_template = "",
  source_tag = "cynxsolutions.com",
  team_id = "",
  user_id = "",
  success_message = "Thanks! We got your message and will reply within 4 business hours.",
  error_message = "Could not submit right now. Please email hello@cynxsolutions.com or WhatsApp us.",
  sidebar_email = "hello@cynxsolutions.com",
  sidebar_alt_email = "waqasriasatjutt@gmail.com",
  sidebar_phone = "+92 315 411 4748",
  sidebar_whatsapp = "https://wa.me/923154114748",
  sidebar_locations = "Pakistan, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, UK, US, Canada, Australia, Germany",
  service_options_json = JSON.stringify([
    "New Odoo implementation",
    "Custom module / customization",
    "Odoo support / maintenance",
    "Hire Odoo developer",
    "Migration / upgrade",
    "Integration with existing systems",
    "Product inquiry (specific module)",
    "Other / consultation",
  ]),
} = {}) {
  const config = {
    endpoint, method, headers_json, payload_template,
    source_tag, team_id, user_id, success_message, error_message,
  };
  let services = [];
  try { services = JSON.parse(service_options_json); } catch (_) {}
  const locations = sidebar_locations.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
  return (
    <section className="dcx-contact-section" data-dcx-form-config={JSON.stringify(config)}>
      <div className="section glow dcx-contact-hero">
        <div className="container-site">
          <div className="dcx-contact-hero-inner">
            <div className="eyebrow">{page_eyebrow}</div>
            <h1 className="h1 dcx-contact-h1">{page_heading}</h1>
            <p className="lede dcx-contact-lede">{page_lede}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container-site">
          <div className="dcx-contact-grid">
            <div className="dcx-contact-form-wrap">
              <h2 className="h2 dcx-contact-form-h2">{form_heading}</h2>
              <p className="dcx-contact-form-sub">{form_subheading}</p>
              <form className="dcx-contact-form" data-dcx-source={source_tag}>
                <input type="text" name="_hp" tabIndex={-1} autoComplete="off" className="dcx-honeypot" aria-hidden="true" />
                <div className="dcx-form-row">
                  <div className="field"><label>Your name *</label><input type="text" name="name" required /></div>
                  <div className="field"><label>Company</label><input type="text" name="company" /></div>
                </div>
                <div className="dcx-form-row">
                  <div className="field"><label>Email *</label><input type="email" name="email" required /></div>
                  <div className="field"><label>Phone / WhatsApp</label><input type="tel" name="phone" /></div>
                </div>
                <div className="field">
                  <label>What do you need? *</label>
                  <select name="service" required>
                    <option value="">Select a service</option>
                    {services.map(function (s, i) { return <option key={i} value={s}>{s}</option>; })}
                  </select>
                </div>
                <div className="field">
                  <label>Tell us about your project *</label>
                  <textarea name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary dcx-contact-submit">Send message</button>
                <p className="dcx-contact-disclaimer">We'll never share your info. Reply within 4 business hours.</p>
                <div className="dcx-contact-result" hidden></div>
              </form>
            </div>
            <aside className="dcx-contact-sidebar">
              <div className="card dcx-contact-card">
                <h3 className="dcx-contact-card-title">direct_contact/</h3>
                <ul className="dcx-contact-list">
                  {sidebar_email ? <li><a href={"mailto:" + sidebar_email}>✉ {sidebar_email}</a></li> : null}
                  {sidebar_alt_email ? <li><a href={"mailto:" + sidebar_alt_email}>✉ {sidebar_alt_email}</a></li> : null}
                  {sidebar_whatsapp ? <li><a href={sidebar_whatsapp} target="_blank" rel="noopener">📱 WhatsApp {sidebar_phone}</a></li> : null}
                  {sidebar_phone ? <li><a href={"tel:" + sidebar_phone.replace(/\s/g, "")}>📞 {sidebar_phone}</a></li> : null}
                </ul>
              </div>
              {locations.length ? (
                <div className="card dcx-contact-card">
                  <h3 className="dcx-contact-card-title">service_areas/</h3>
                  <ul className="dcx-contact-list dcx-contact-locations">
                    {locations.map(function (l, i) { return <li key={i}>📍 {l}</li>; })}
                  </ul>
                  <p className="dcx-contact-foot">Remote-first with on-site visits available for major rollouts.</p>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
