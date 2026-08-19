# Growth Labs

Operator-led growth studio website for Ben Killen. The public home page
engineers the brand thesis — **revenue systems from first principles** —
around a scroll-driven quantum valence diagram.

## Site

- `/` — home: revenue atom, services, partners, about
- `/landing` — original operator landing with the particle portrait
- `/audit` — 30-Minute AI Leverage Audit
- `/solutions` — custom solutions and delivery lanes
- `/partners` — partner bench, including AI Powered
- `/about` — operator story and mission

## Local preview

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Hero systems

The home page replaces the particle portrait with a 3D **revenue atom**:

- **Nucleus** — client logos from the trust bar, with **Revenue** sitting above
- **Inner valence** — Impressions, UV's, CTR%
- **Outer valence** — CAC, LTV, Page CVR %
- **Outer bound** — TAM, with *(your potential)* underneath

Scroll rotates the system. Hover or click a metric to focus that shell.
The original portrait landing remains at `/landing`.
