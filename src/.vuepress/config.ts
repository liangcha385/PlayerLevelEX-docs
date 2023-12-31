import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/PlayerLevelEX-docs/",

  lang: "zh-CN",
  title: "PlayerLevelEX",
  description: "PlayerLevelEX 的文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
