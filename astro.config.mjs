import { defineConfig } from "astro/config";

// Static by default. `npm run build` writes the site to dist/.
export default defineConfig({
  site: "https://nvirellia.im",
  output: "static",
});
