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
> /playerlevel debug \<dependencies\>

**别称** 
> /exp 
> /level 

插件自检  
*dependencies* 参数可检查插件所需前置  

## playerlevel levelup
<Badge text="玩家" color="#242378" />

**用法** 
> /playerlevel levelup  

**别称** 
> /exp 
> /level 

消耗经验值进行升级
