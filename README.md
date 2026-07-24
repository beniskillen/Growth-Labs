# Growth Labs

Operator-led AI growth studio website for Ben Killen.

## Site

- `/` — positioning, method, offers and selected work
- `/audit` — 30-Minute AI Leverage Audit
- `/solutions` — custom solutions, case files and partner bench
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

The hero portrait is rendered from `public/ben-killen.jpg` as an interactive
canvas point cloud. The website respects reduced-motion preferences and uses
the supplied portrait directly on the About page.

