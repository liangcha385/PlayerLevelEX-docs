---
title: API
icon: gears
order: 2
category:
  - API
tag:
  - api
---

详见 [com.github.cpjinan.plugin.playerlevel.internal.api.LevelAPI](https://github.com/CPJiNan/PlayerLevel/blob/master/src/main/kotlin/com/github/cpjinan/plugin/playerlevel/internal/api/LevelAPI.kt)  

<!-- more -->

```kotlin
    /**
     * 获取玩家等级
     * @param [player] 玩家
     * @return [Int]
     */
    fun getPlayerLevel(player: Player): Int {
        return getLevel(player)
    }
```

```kotlin
    /**
     * 设置玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */
    fun setPlayerLevel(player: Player, amount: Int, source: String = "DEFAULT") {
        setLevel(player, amount, source)
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 增加玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */
    fun addPlayerLevel(player: Player, amount: Int, source: String = "DEFAULT") {
        setLevel(player, getLevel(player) + amount, source)
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 移除玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */
    fun removePlayerLevel(player: Player, amount: Int, source: String = "DEFAULT") {
        setLevel(player, (getLevel(player) - amount).coerceAtLeast(0), source)
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 获取玩家经验
     * @param [player] 玩家
     * @return [Int]
     */
    fun getPlayerExp(player: Player): Int {
        return getExp(player)
    }
```

```kotlin
    /**
     * 设置玩家经验
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */
    fun setPlayerExp(player: Player, amount: Int, source: String = "DEFAULT") {
        setExp(player, amount, source)
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 增加玩家经验
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */
    fun addPlayerExp(player: Player, amount: Int, source: String = "DEFAULT") {
        setExp(player, getExp(player) + amount, source)
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 移除玩家经验
     * @param [player] 玩家
     * @param [source] 来源
     * @param [amount]
     */
    fun removePlayerExp(player: Player, amount: Int, source: String = "DEFAULT") {
        setExp(player, (getExp(player) - amount).coerceAtLeast(0), source)
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 刷新玩家等级
     * @param [player] 玩家
     * @param [source] 来源
     */
    fun refreshPlayerLevel(player: Player, source: String = "DEFAULT") {
        tickLevel(player, source)
    }
```

```kotlin
    /**
     * 玩家升级方法
     * @param [player] 玩家
     * @param [source] 来源
     */
    fun playerLevelUP(player: Player, source: String = "DEFAULT") {
        doLevelUp(player, source)
    }
```

::: tip  
当你调用插件API时，通常需要声明该操作的来源，用于辨别事件发生的不同场景。
:::  

PlayerLevel中定义了部分事件来源：
+ SetExpEvent
  - "DEFAULT"
  - "EXP_ADD_COMMAND"
  - "EXP_REMOVE_COMMAND"
  - "EXP_SET_COMMAND"
  - "DEBUG_DATA_SET_COMMAND"
  - "MYTHIC_LISTENER"
+ LevelUpEvent
  - "DEFAULT"
  - "TICK_LEVEL_API"
  - "LEVEL_UP_COMMAND"
+ SetLevelEvent
  - "DEFAULT"
  - "LEVEL_ADD_COMMAND"
  - "LEVEL_REMOVE_COMMAND"
  - "LEVEL_SET_COMMAND"
  - "DEBUG_DATA_SET_COMMAND"
+ TickLevelEvent
  - "DEFAULT"
  - "EXP_ADD_COMMAND"
  - "EXP_REMOVE_COMMAND"
  - "EXP_SET_COMMAND"
  - "LEVEL_ADD_COMMAND"
  - "LEVEL_REMOVE_COMMAND"
  - "LEVEL_SET_COMMAND"
  - "DEBUG_DATA_SET_COMMAND"
