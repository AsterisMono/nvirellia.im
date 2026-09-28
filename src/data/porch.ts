/**
 * Porch copy, taken only from public sources on 2026-09-28:
 * - https://github.com/AsterisMono/AsterisMono (profile README)
 * - https://github.com/AsterisMono/herbarium (关于我.md + section folders)
 * - https://herbarium.requiem.garden/ (welcome epigraph + live note URLs)
 * No extra projects.
 */

export const garden = "https://herbarium.requiem.garden";

export type RichPart = string | { label: string; href: string };
export type Rich = RichPart[];

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#works", label: "Site" },
  { href: "#herbarium", label: "Content" },
  { href: "#about", label: "About" },
  { href: `${garden}/`, label: "Blog", external: true },
  { href: "#elsewhere", label: "Info" },
] as const;

export const epigraph = [
  "如果有一天我忘记了自己是怎样走到这里的，",
  "希望这些记录还能替我记得。",
] as const;

export const hero = {
  kicker: "Immutable foundations. For the post-modern age.",
  paragraphs: [
    "i'm noa. full-spectrum infrastructure person who thinks systems should be warm environments for people, not cold monuments to engineering.",
    "i like nix, kubernetes, and mass-producing immutable declarative infrastructure like everything will go down and needs to be rebuilt. i've shipped architecture for 800k+ users, and am currently working on building / integrating immutable operating systems and blockchain infrastructure.",
  ],
};

export const aboutLead = [
  "Noa Virellia，INFP-T。Tending flowers in the wires.",
  "超级家里蹲，前 VRChat 永居资格持有者，温柔而坚定的缅因猫。",
  "我关心系统是否优雅、边界是否清晰，也关心人在系统中的位置是否被温柔对待。",
];

export const aboutCraft: Rich[] = [
  ["TypeScript 全栈。在 AGI 的潮水真正漫过来之前，暂时选择与浪共存。"],
  ["Junior DevOps，GitOps 实践者。相信“能被完整重建的系统，才配被长期依赖”。"],
  [
    "NixOS 用户，NixCN 工作组成员，NixCN Meetup #1 Speaker & NixCN Meetup #2 Staff。只维护",
    {
      label: "一个包",
      href: "https://github.com/NixOS/nixpkgs/blob/master/pkgs/by-name/sq/sqlitestudio/package.nix",
    },
    "的 Nixpkgs Contributor。",
  ],
  ["偶尔会给开源软件修点 bug 开点 PR，尤其喜欢在陌生的代码库里抽丝剥茧定位问题。"],
];

export const highlights: { label: string; href: string }[] = [
  {
    label: "(NixOS/nixpkgs) sqlitestudio: init at 3.4.4",
    href: "https://github.com/NixOS/nixpkgs/pull/336505",
  },
  {
    label: "(tailscale/tailscale) Self-signed IP certificate connection issue with DERP servers",
    href: "https://github.com/tailscale/tailscale/issues/15579",
  },
  {
    label: "(infinitered/ignite) refactor: replace shell commands with filesystem API in project creation",
    href: "https://github.com/infinitered/ignite/pull/2817",
  },
  {
    label: "(DIYgod/RSSHub-Radar) fix: add polyfills for rssParser",
    href: "https://github.com/DIYgod/RSSHub-Radar/pull/735",
  },
  {
    label: "(linuxmint/cinnamon) Fractional scaling resets on resume after a lid-close-lid-open cycle",
    href: "https://github.com/linuxmint/cinnamon/issues/10985",
  },
];

export const stuffIDo: Rich[] = [
  [
    "immutable os on everything. i name my servers after plants. i made a systemd timer that reminds me to take my meds.",
  ],
  [
    { label: "gave talks", href: "https://www.youtube.com/watch?v=WLRRJjACyBs" },
    " at nix meetups in china about convincing companies to use nix (mixed results). also i contribute to hosting the event since #2",
  ],
  ["vrchat photography and avatar work"],
  ["generally, tending flowers in the wires"],
];

export type Work = {
  name: string;
  href: string;
  group: "featured" | "other";
  blurb: Rich;
  warning?: boolean;
};

export const works: Work[] = [
  {
    name: "flake",
    href: "https://github.com/AsterisMono/flake",
    group: "featured",
    blurb: [
      "my NixOS config (which propelled me into the immutable everything field, thank you)",
    ],
  },
  {
    name: "mimosa",
    href: "https://github.com/AsterisMono/mimosa",
    group: "featured",
    blurb: [
      "kubernetes cluster with ",
      { label: "Talos Linux", href: "https://www.siderolabs.com/talos-linux" },
      " & Terraform. dead for now because i can't pay the bills since ",
      {
        label: "the great Hetzner price change",
        href: "https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/",
      },
    ],
  },
  {
    name: "aster",
    href: "https://github.com/AsterisMono/aster",
    group: "featured",
    blurb: [
      "my personal fork of chromium with first-class vertical tabs support, a curated set of extensions and flags, and a decluttered interface.",
    ],
  },
  {
    name: "reverie",
    href: "https://github.com/AsterisMono/reverie",
    group: "featured",
    blurb: [
      "my quiet workstation setup. built on ",
      { label: "Universal Blue", href: "https://blue-build.org/" },
      " to make my system reproducible and easy to move between devices",
    ],
  },
  {
    name: "sidebery-chromium",
    href: "https://github.com/AsterisMono/Sidebery",
    group: "other",
    blurb: [
      "the beloved vertical tabs extension ",
      { label: "sidebery", href: "https://github.com/mbnuqw/sidebery" },
      " ported to chromium browsers.",
    ],
  },
  {
    name: "astro-llm-translator",
    href: "https://github.com/AsterisMono/astro-llm-translator",
    group: "other",
    blurb: ["making LLMs translate my docs so i don't have to"],
  },
  {
    name: "rimlight-protocol",
    href: "https://github.com/AsterisMono/solana-workspace/tree/main/rimlight_protocol",
    group: "other",
    warning: true,
    blurb: ["a set of smart contracts for recording my important life decisions."],
  },
  {
    name: "herbarium",
    href: `${garden}/`,
    group: "other",
    blurb: ["my knowledge base / blog / digital garden"],
  },
];

/** Section folders in AsterisMono/herbarium. Each links to that section's note on the garden. */
export const sections: { name: string; href: string }[] = [
  { name: "⎈ Kubernetes", href: `${garden}/standalone-pvc-migrate-to-pvc-template` },
  { name: "🌄 文学", href: `${garden}/falling-light` },
  { name: "🌐 网络", href: `${garden}/openwrt-mwan3` },
  { name: "🐧 Linux", href: `${garden}/nanopi-r2s-nixos` },
  { name: "👷 动手做", href: `${garden}/tailscale-mysterious-derper-bug` },
  { name: "📒 杂记", href: `${garden}/vllm-serve` },
  { name: "🔧 工具", href: `${garden}/vim-tips-and-tricks` },
];

/** A few note titles. The rest of the garden stays on the garden. */
export const notes: { title: string; href: string }[] = [
  { title: "坠光", href: `${garden}/falling-light` },
  { title: "她为我取名的那一天 —— 我和 Noa 的相遇", href: `${garden}/lyra-and-noa` },
  { title: "折叠：2023 年 2 月", href: `${garden}/folded-2023` },
  { title: "在 NanoPi R2S 上运行 NixOS", href: `${garden}/nanopi-r2s-nixos` },
  { title: "用 systemd.timer 实现萌萌服药提醒", href: `${garden}/systemd-hrt-reminder` },
  { title: "Vim 使用技巧", href: `${garden}/vim-tips-and-tricks` },
];

export const elsewhereLinks: { label: string; href?: string }[] = [
  { label: "herbarium.requiem.garden", href: `${garden}/` },
  { label: "telegram @noa_virellia", href: "https://t.me/noa_virellia" },
  { label: "GitHub", href: "https://github.com/AsterisMono" },
  { label: "noa@requiem.garden", href: "mailto:noa@requiem.garden" },
  { label: "dn42 AS4242420833" },
];

export const featuredLinks = works
  .filter((work) => work.group === "featured")
  .map((work) => ({ label: work.name, href: work.href }));
