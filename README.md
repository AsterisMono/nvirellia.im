# nvirellia.im

Noa's porch. One static Astro page, laid out as Sadgrl's [Skyline [R]](https://codepen.io/sadness97/pen/jOaqGdZ) (a rescued [Skyline](https://www.createblog.com/website-templates/36491-skyline/) layout from CreateBlog).

The page uses only what is already public:

- GitHub profile README: [AsterisMono/AsterisMono](https://github.com/AsterisMono/AsterisMono)
- The herbarium: [herbarium.requiem.garden](https://herbarium.requiem.garden/) and [AsterisMono/herbarium](https://github.com/AsterisMono/herbarium) (the about note, section folders, and a few note titles)
- Featured and other works named in that README

Full notes stay on the garden. The porch lists sections and a few titles, and links out. The live page is English. Chinese source lines are short paraphrases.

Skyline regions:

| Region | Content |
| --- | --- |
| Banner | The Skyline chrome |
| Nav: Home / Site / Content / About / Blog / Info | Hero, works, herbarium, about, the garden, elsewhere |
| Left column | Welcome epigraph, sections, note titles |
| Center | Hero, about, works |
| Right column | Elsewhere, links, featured works |

## Local

Node.js 22 or newer.

```bash
npm install
npm run dev
```

The dev server defaults to <http://localhost:4321>.

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Host that directory anywhere static (Cloudflare Pages, GitHub Pages, nginx). The canonical URL is `site` in `astro.config.mjs`, default `https://nvirellia.im`.

## Recolor

Colors live in `:root` in `src/styles/global.css`. The Tailwind theme reads those same variables through `@theme inline`. The banner image is `public/skyline-banner.png`.
