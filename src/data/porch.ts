/**
 * Porch copy, taken only from public sources on 2026-09-28:
 * - https://github.com/AsterisMono/AsterisMono (profile README)
 * - https://github.com/AsterisMono/herbarium (about page + section folders)
 * - https://herbarium.requiem.garden/ (welcome epigraph + live note URLs)
 * Chinese source lines are short English paraphrases. Note links stay on the garden.
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
  "If a day comes when I forget how I got here,",
  "I hope these records still remember for me.",
] as const;

export const epigraphClose = "Shine freely.";

export const hero = {
  kicker: "Immutable foundations. For the post-modern age.",
  paragraphs: [
    "i'm noa. full-spectrum infrastructure person who thinks systems should be warm environments for people, not cold monuments to engineering.",
    "i like nix, kubernetes, and mass-producing immutable declarative infrastructure like everything will go down and needs to be rebuilt. i've shipped architecture for 800k+ users, and am currently working on building / integrating immutable operating systems and blockchain infrastructure.",
  ],
};

export const aboutLead = [
  "Noa Virellia, INFP-T. Tending flowers in the wires.",
  "A homebody through and through, a former VRChat permanent resident, and a gentle, steady Maine Coon.",
  "I care whether a system is elegant and its boundaries are clear, and whether the people in it are treated gently.",
];

export const aboutCraft: Rich[] = [
  ["Full-stack TypeScript. Until the tide of AGI actually comes in, living with the waves for now."],
  [
    "Junior DevOps, and a GitOps practitioner. A system deserves long trust only if it can be rebuilt in full.",
  ],
  [
    "A NixOS user, NixCN working-group member, speaker at NixCN Meetup #1, and staff for NixCN Meetup #2. A Nixpkgs contributor who maintains ",
    {
      label: "one package",
      href: "https://github.com/NixOS/nixpkgs/blob/master/pkgs/by-name/sq/sqlitestudio/package.nix",
    },
    ".",
  ],
  [
    "Sometimes fixes bugs and opens pull requests in open source, and likes tracing a problem through an unfamiliar codebase.",
  ],
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
  { name: "Kubernetes", href: `${garden}/standalone-pvc-migrate-to-pvc-template` },
  { name: "Literature", href: `${garden}/falling-light` },
  { name: "Networks", href: `${garden}/openwrt-mwan3` },
  { name: "Linux", href: `${garden}/nanopi-r2s-nixos` },
  { name: "Making", href: `${garden}/tailscale-mysterious-derper-bug` },
  { name: "Miscellany", href: `${garden}/vllm-serve` },
  { name: "Tools", href: `${garden}/vim-tips-and-tricks` },
];

/** A few note titles, paraphrased. The notes themselves stay on the garden. */
export const notes: { title: string; href: string }[] = [
  { title: "Falling light", href: `${garden}/falling-light` },
  { title: "The day she named me", href: `${garden}/lyra-and-noa` },
  { title: "Folded: February 2023", href: `${garden}/folded-2023` },
  { title: "NixOS on a NanoPi R2S", href: `${garden}/nanopi-r2s-nixos` },
  { title: "A systemd timer for taking meds", href: `${garden}/systemd-hrt-reminder` },
  { title: "Vim tips", href: `${garden}/vim-tips-and-tricks` },
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
