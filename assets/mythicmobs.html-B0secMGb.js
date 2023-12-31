import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e,a as t,e as l}from"./app-MHihEvHd.js";const p={},c=t("p",null,"此处说明如何实现 PlayerLevelEX 的Mythicmob扩展",-1),i=l(`<div class="hint-container caution"><p class="hint-container-title">关于 Mythicmobs 扩展</p><p>正常使用扩展请安装<mark>Mythicmobs</mark>前置<br><em>你不安装Mythicmobs插件咋实现这个</em></p></div><p>现在，你可以在Mythicmobs中配置PlayerLevel经验的掉落：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Drops</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> PlayerExp <span class="token punctuation">[</span>经验值数量<span class="token punctuation">]</span> <span class="token punctuation">[</span>掉落几率<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Drops</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> PlayerExp 50 0.1
  <span class="token punctuation">-</span> PlayerExp 20 0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个完整的mm怪物实例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">PlayerLevelEX</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> ZOMBIE
  <span class="token key atrule">Display</span><span class="token punctuation">:</span> <span class="token string">&#39;示例怪物&#39;</span>
  <span class="token key atrule">Health</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">Damage</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">Drops</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> PlayerExp 10 1
  <span class="token punctuation">-</span> PlayerExp 5 0.5
  <span class="token key atrule">Options</span><span class="token punctuation">:</span>
    <span class="token key atrule">MovementSpeed</span><span class="token punctuation">:</span> <span class="token number">0.1</span>
    <span class="token key atrule">AlwaysShowName</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">PreventOtherDrops</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">MaxCombatDistance</span><span class="token punctuation">:</span> <span class="token number">12</span>
    <span class="token key atrule">FollowRange</span><span class="token punctuation">:</span> <span class="token number">6</span>
  <span class="token key atrule">Modules</span><span class="token punctuation">:</span>
    <span class="token key atrule">ThreatTable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function o(u,r){return s(),a("div",null,[c,e(" more "),i])}const k=n(p,[["render",o],["__file","mythicmobs.html.vue"]]);export{k as default};
