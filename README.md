# Portfolio

Personal portfolio built with Next.js (App Router) and TypeScript. No UI framework or CSS library: just hand-written CSS and two self-hosted variable fonts (Fraunces and Geist).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Edit the content

All copy, projects and links live in [`src/data/site.ts`](src/data/site.ts). Update these before publishing:

- `site.email` is currently a placeholder.
- `contact.links` only has GitHub. Add LinkedIn, the newsletter, etc.
- `projects` can take an `href` to make a project card a link.

## Structure

```
src/
  app/            layout, page, global styles and design tokens
  components/     Nav, Hero, About, Projects, Contact, Footer, Reveal
  data/site.ts    all editable content
```

Colors, type and spacing are CSS variables at the top of `src/app/globals.css`. The site follows the visitor's light or dark system preference.
