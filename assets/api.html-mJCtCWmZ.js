import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as l,a as n,b as s,d as o,f as i,e as c}from"./app-C_d_-dqH.js";const u={},r={href:"https://github.com/CPJiNan/PlayerLevel/blob/master/src/main/kotlin/com/github/cpjinan/plugin/playerlevel/internal/api/LevelAPI.kt",target:"_blank",rel:"noopener noreferrer"},d=c(`<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 获取玩家等级
     * @param [player] 玩家
     * @return [Int]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">getPlayerLevel</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 设置玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">setPlayerLevel</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> amount<span class="token operator">:</span> Int<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 增加玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">addPlayerLevel</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> amount<span class="token operator">:</span> Int<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token function">getLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span> <span class="token operator">+</span> amount<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 移除玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">removePlayerLevel</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> amount<span class="token operator">:</span> Int<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token function">getLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span> <span class="token operator">-</span> amount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coerceAtLeast</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 获取玩家经验
     * @param [player] 玩家
     * @return [Int]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">getPlayerExp</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getExp</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 设置玩家经验
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">setPlayerExp</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> amount<span class="token operator">:</span> Int<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setExp</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 增加玩家经验
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">addPlayerExp</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> amount<span class="token operator">:</span> Int<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setExp</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token function">getExp</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span> <span class="token operator">+</span> amount<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 移除玩家经验
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */</span>
    <span class="token keyword">fun</span> <span class="token function">removePlayerExp</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> amount<span class="token operator">:</span> Int<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setExp</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token function">getExp</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span> <span class="token operator">-</span> amount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coerceAtLeast</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 刷新玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     */</span>
    <span class="token keyword">fun</span> <span class="token function">refreshPlayerLevel</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">tickLevel</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * 玩家升级方法
     * @param [player] 玩家
     * @param [source] 来源
     */</span>
    <span class="token keyword">fun</span> <span class="token function">playerLevelUP</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">,</span> source<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;DEFAULT&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">doLevelUp</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当你调用插件API时，通常需要声明该操作的来源，用于辨别事件发生的不同场景。</p></div><p>PlayerLevel中定义了部分事件来源：</p><ul><li>SetExpEvent <ul><li>&quot;DEFAULT&quot;</li><li>&quot;EXP_ADD_COMMAND&quot;</li><li>&quot;EXP_REMOVE_COMMAND&quot;</li><li>&quot;EXP_SET_COMMAND&quot;</li><li>&quot;DEBUG_DATA_SET_COMMAND&quot;</li><li>&quot;MYTHIC_LISTENER&quot;</li></ul></li><li>LevelUpEvent <ul><li>&quot;DEFAULT&quot;</li><li>&quot;TICK_LEVEL_API&quot;</li><li>&quot;LEVEL_UP_COMMAND&quot;</li></ul></li><li>SetLevelEvent <ul><li>&quot;DEFAULT&quot;</li><li>&quot;LEVEL_ADD_COMMAND&quot;</li><li>&quot;LEVEL_REMOVE_COMMAND&quot;</li><li>&quot;LEVEL_SET_COMMAND&quot;</li><li>&quot;DEBUG_DATA_SET_COMMAND&quot;</li></ul></li><li>TickLevelEvent <ul><li>&quot;DEFAULT&quot;</li><li>&quot;EXP_ADD_COMMAND&quot;</li><li>&quot;EXP_REMOVE_COMMAND&quot;</li><li>&quot;EXP_SET_COMMAND&quot;</li><li>&quot;LEVEL_ADD_COMMAND&quot;</li><li>&quot;LEVEL_REMOVE_COMMAND&quot;</li><li>&quot;LEVEL_SET_COMMAND&quot;</li><li>&quot;DEBUG_DATA_SET_COMMAND&quot;</li></ul></li></ul>`,13);function k(v,m){const a=t("ExternalLinkIcon");return p(),l("div",null,[n("p",null,[s("详见 "),n("a",r,[s("com.github.cpjinan.plugin.playerlevel.internal.api.LevelAPI"),o(a)])]),i(" more "),d])}const y=e(u,[["render",k],["__file","api.html.vue"]]);export{y as default};
