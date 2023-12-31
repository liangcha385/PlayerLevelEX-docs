---
title: Mythicmobs 扩展
icon: gears
order: 3
category:
  - 使用指南
tag:
  - 扩展功能
  - Mythicmobs
---

此处说明如何实现 PlayerLevelEX 的Mythicmob扩展

<!-- more -->

::: caution 关于 Mythicmobs 扩展
正常使用扩展请安装==Mythicmobs==前置  
_你不安装Mythicmobs插件咋实现这个_
::: 

现在，你可以在Mythicmobs中配置PlayerLevel经验的掉落：
```yml
Drops:
  - PlayerExp [经验值数量] [掉落几率]
```
比如
```yml
Drops:
  - PlayerExp 50 0.1
  - PlayerExp 20 0.8
```
下面是一个完整的mm怪物实例：
```yml
PlayerLevelEX:
  Type: ZOMBIE
  Display: '示例怪物'
  Health: 5
  Damage: 0
  Drops:
  - PlayerExp 10 1
  - PlayerExp 5 0.5
  Options:
    MovementSpeed: 0.1
    AlwaysShowName: true
    PreventOtherDrops: true
    MaxCombatDistance: 12
    FollowRange: 6
  Modules:
    ThreatTable: true
```
