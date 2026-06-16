# Shaun Furtado – Portfolio

Portfolio source now uses Astro with static route generation for:

- Home page: `/`
- Blog index: `/blog/`
- Individual posts: `/blog/[slug]/`

Live site: https://shaunfurtado.is-a.dev/

> “Simplicity is not about making things easy. It is about making things clear.”

## Local development

Install and run:

```bash
npm ci
npm run dev
```

Build locally:

```bash
npm run build
```

## Content model

Blog posts live in `src/content/blog/` as Markdown or MDX and are validated by Astro content collections.

## Deployment

`main` is wired for GitHub Pages static deploy with:

- `npm run build`
- `astro build` output to `dist/`
- Automatic deployment via workflow at `.github/workflows/deploy-astro.yml`

The old Next.js iteration of this portfolio remains preserved in branch `v1`.

If you’d like to get in touch, you can reach me at `shaunf1801@gmail.com`.
