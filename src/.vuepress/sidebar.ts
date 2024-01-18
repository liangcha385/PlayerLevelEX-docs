import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "快速使用",
      icon: "lightbulb",
      prefix: "install/",
      link: "install/",
      children: "structure",
    },
    {
      text: "关于插件",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "开发者专栏",
      icon: "laptop-code",
      prefix: "developer/",
      link: "developer/",
      children: "structure",
    },
  ],
});
