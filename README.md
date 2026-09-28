# nvirellia.im

Noa 的门廊站。单页，Astro 静态输出，版式移植自 Sadgrl 的 [Skyline [R]](https://codepen.io/sadness97/pen/jOaqGdZ)（CreateBlog 的 [Skyline](https://www.createblog.com/website-templates/36491-skyline/) 抢救版）。

页面只使用公开来源里已经写过的话和链接：

- GitHub 个人主页 README：[AsterisMono/AsterisMono](https://github.com/AsterisMono/AsterisMono)
- 植物标本室：[herbarium.requiem.garden](https://herbarium.requiem.garden/) 与 [AsterisMono/herbarium](https://github.com/AsterisMono/herbarium)（`关于我.md`、分区目录、若干笔记标题）
- 上述 README 里点名的 featured / other 作品

完整笔记留在标本室。门廊只放分区和几篇标题，点出去。

Skyline 区域对应关系：

| 区域 | 内容 |
| --- | --- |
| 顶栏横幅 | Skyline 版式本身 |
| 导航 Home / Site / Content / About / Blog / Info | 英雄区、作品、标本室、关于、标本室全文、别处 |
| 左栏 | 欢迎题词、分区、笔记标题 |
| 中栏 | 英雄区、关于、作品 |
| 右栏 | 别处、链接、featured 作品 |

## 本地

需要 Node.js 22 或更新版本。

```bash
npm install
npm run dev
```

开发服务器默认在 <http://localhost:4321>。

```bash
npm run build
npm run preview
```

`npm run build` 生成完全静态的 `dist/`。把这个目录交给任意静态托管即可（Cloudflare Pages、GitHub Pages、nginx）。站点地址写在 `astro.config.mjs` 的 `site`，默认 `https://nvirellia.im`。

## 改颜色

颜色集中在 `src/styles/global.css` 的 `:root`。Tailwind 主题用 `@theme inline` 引用同一组变量，改一处，栏、字和链接一起变。横幅图是 `public/skyline-banner.png`。
