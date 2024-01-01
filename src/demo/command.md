---
title: 插件命令
icon: gears
order: 2
category:
  - 使用指南
tag:
  - 插件命令
---

此处列举 PlayerLevelEX 所用的命令

<!-- more -->

[[toc]]

::: caution 关于玩家选择
命令无法选择离线的玩家
::: 

::: tip 关于参数
[args] 代表必填参数 \<args\>代表可填参数
:::

## playerlevel  
**用法**  
> /playerlevel  

**别称**  
> /exp 
> /level  

插件主命令  

## playerlevel exp 
**用法**  
> /playerlevel exp add/remove/set [玩家名称] [数值]  
> /playerlevel exp check [玩家名称]  

**别称**  
> /exp 
> /level

给予/移除/设置玩家指定数值的经验  
查询玩家经验  

## playerlevel level
**用法** 
> /playerlevel exp add/remove/set [玩家名称] [数值]  
> /playerlevel exp check [玩家名称]  

**别称** 
> /exp 
> /level  

给予/移除/设置玩家指定数值的等级  
查询玩家等级  

## playerlevel debug
**用法** 
> /playerlevel debug  
> /playerlevel debug dependencies  
<Badge text=">=2.1.4" color="#242378" />
> /playerlevel debug template levelConfig addLevel [从多少级开始] [到多少级结束] [等级名称] [升级所需经验]  

**别称** 
> /exp 
> /level 

插件自检  
*dependencies* 参数可检查插件所需前置  
<Badge text=">=2.1.4" color="#242378" />
2.1.4版本追加了一个功能：快捷配置模板命令  
有一点点的小复杂，最好自己有个专门服务器试试去  

比如我这样写
```mcfunction
/playerlevel debug template levelConfig addLevel 0 10 &8Lv.#&b{0} math#10#*#{0}#+#1
```
> 0                 代表从0级开始
> 10                代表从10级结束
> &8Lv.#&b{0}       就是每个等级的文本**{0}**替换为当前等级显示的数字，比如当我为3级时，这里的 &8Lv.#&b{0} 会解析为 &8Lv.#&b3 输出
> math#10#*#{0}#+#1 此处为kether公式，意思为 math 10 * 等级 + 1 来执行，当等级是10时，返回值为101，10级升级所需经验就是101。
>                   当然你要是嫌麻烦可以直接填int值上去


## playerlevel levelup
<Badge text="玩家" color="#242378" />

**用法** 
> /playerlevel levelup  

**别称** 
> /exp 
> /level 

消耗经验值进行升级
