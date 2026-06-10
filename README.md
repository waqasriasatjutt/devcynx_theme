# devcynx_theme — dark + neon Odoo agency theme

A **Websites Portal theme** for [cynxsolutions.com](https://cynxsolutions.com): a dark-mode Odoo developer-agency aesthetic with a near-black canvas (`#0a0a0f`), neon-lime accent (`#84cc16`), and JetBrains-Mono detailing. 15 React/Next.js sections that drag-drop in the portal builder.

## Sections

15 reusable, fully-editable sections under `Devcynx` category in the portal palette.

| Slug | Component | What it is |
|---|---|---|
| `dcx-header` | `DcxHeader` | Sticky dark header with brand mark, 4 mega menus (Services / Modules / Industries / Countries), flat links, GitHub + CTA, mobile burger |
| `dcx-page-header` | `DcxPageHeader` | Inner-page header with grid bg + glow |
| `dcx-hero` | `DcxHero` | Dark hero with neon glow, grid pattern, stats bar, trust strip |
| `dcx-highlights` | `DcxHighlights` | 3 glowing cards row with monospace numeric labels |
| `dcx-services` | `DcxServices` | Services grid (9 cards) with category chips + `$ open <slug>` style links |
| `dcx-modules` | `DcxModules` | Dense 4-col Odoo modules grid |
| `dcx-solutions` | `DcxSolutions` | Industries on glow bg (9 cards) |
| `dcx-products` | `DcxProducts` | Production-ready Odoo modules (6 cards) |
| `dcx-case-studies` | `DcxCaseStudies` | Real deployments with metric pills (6 cards) |
| `dcx-integrations` | `DcxIntegrations` | 12 integration cards |
| `dcx-why-us` | `DcxWhyUs` | Left intro + right 6-card glow grid |
| `dcx-faq` | `DcxFaq` | FAQ accordion |
| `dcx-cta` | `DcxCta` | Glow CTA banner with grid pattern |
| **`dcx-contact-form`** | **`DcxContactForm`** | **Dynamic contact form — see below** |
| `dcx-footer` | `DcxFooter` | Brand + 5-col link grid + 5-cat sub-row + copyright |

## ⭐ Dynamic ContactForm

Every endpoint config is editable from the visual builder. No code changes needed to repoint the form anywhere.

| Prop | What it does |
|---|---|
| `endpoint` | URL to POST to. Default: `https://portal.way4tech.com/wp/api/lead`. Any URL works. |
| `method` | `POST` / `PUT` / `GET` |
| `headers_json` | JSON string of headers (auth tokens, API keys, custom headers) |
| `payload_template` | JSON template with `{{name}}` / `{{email}}` etc substitution. Empty = raw form data. |
| `source_tag` | Goes into payload as `_source` for lead attribution |
| `team_id` / `user_id` | Route to specific Odoo team / salesperson |
| `success_message` / `error_message` | After-submit text |
| Sidebar | email, phone, whatsapp, locations |

Runtime: reads `data-dcx-form-config` attribute (JSON of all config), pre-fills hidden inputs from URL query params (utm_*, service, product, country), fires `fetch(endpoint, { method, headers, body })` cross-origin.

## Design tokens

CSS variables auto-loaded from `theme.json`:

- `--primary` `#84cc16` (lime / neon)
- `--primary-bright` `#a3e635`
- `--accent` `#a78bfa` (subtle violet highlights)
- `--bg` `#0a0a0f` (near-black canvas)
- `--surface` `#13131c` (card bg)
- `--text` `#f1f5f9`
- `--muted` `#94a3b8`
- `--font-body` / `--font-display`: Inter
- `--font-mono`: JetBrains Mono (eyebrows, breadcrumbs, code)
- `--gradient-primary`: linear lime gradient

## Adding new sections

```bash
# 1. components/sections/DcxFoo.jsx — React component + meta export
# 2. components/sections/DcxFoo.css — styles
# 3. components/sections/DcxFoo.js  — optional vanilla IIFE for runtime interactivity
npm run build:sections
git add -A && git commit -m "Add DcxFoo"
git push git@github.com:waqasriasatjutt/devcynx_theme.git main:main
# Then: Websites Portal → Themes → devcynx → "Fetch from GitHub"
```

## Author

**Waqas Riasat** — Odoo dev agency, [waqasriasatjutt@gmail.com](mailto:waqasriasatjutt@gmail.com)
