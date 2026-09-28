# nvirellia.im

Noa's porch. One static Astro page, laid out as Sadgrl's [Xanga Classic [R]](https://codepen.io/sadness97/pen/VwzePpB).

The page uses only what is already public:

- GitHub profile README: [AsterisMono/AsterisMono](https://github.com/AsterisMono/AsterisMono)
- The herbarium: [herbarium.requiem.garden](https://herbarium.requiem.garden/) and [AsterisMono/herbarium](https://github.com/AsterisMono/herbarium) (the about note, section folders, and a few note titles)
- Featured and other works named in that README

Full notes stay on the garden. The porch lists sections and a few titles, and links out. The live page is English. Chinese source lines are short paraphrases.

Xanga slots:

| Slot | Content |
| --- | --- |
| Header | Wayfinding: home, about, works, herbarium, elsewhere, weblog |
| Profile box | Name, pronouns, the README one-liner, two or three crumbs |
| Works box | Featured four, one line each, plus a short also-list |
| Herbarium box | English sections and two or three note titles |
| Elsewhere box | Garden, telegram, GitHub, mail, DN42 |
| Journal | One short welcome. The garden holds the rest |
| Footer | Sadgrl's credit |

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

The shell is Sadgrl's Xanga Classic stylesheet at `public/xanga.css`. Colors and type are the `:root` variables in that file.
