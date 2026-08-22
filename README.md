# Growth Labs

Operator-led growth studio website for Ben Killen. The public home page
engineers the brand thesis — **revenue systems from first principles** —
around a click-to-expand quantum valence diagram.

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

The home page opens on a full-viewport **revenue atom**:

- **Nucleus** — tiny *your brand* label with a cluster of atoms; client logos stay hidden until you click
- **Click** — logos expand out from the nucleus (click again to collapse)
- **Inner valence** — Impressions, UV's, CTR%
- **Outer valence** — CAC, LTV, Page CVR %
- **Outer bound** — TAM, with *(your potential)* underneath

The diagram is the above-the-fold hero. Copy and the shell walkthrough sit in a separate module below the fold so nothing is cut off. Drag to orbit. The original portrait landing remains at `/landing`.
