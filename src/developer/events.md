---
title: 插件事件
icon: gears
order: 2
category:
  - events
tag:
  - evemts
---

详见 [com.github.cpjinan.plugin.playerlevel.internal.events](https://github.com/CPJiNan/PlayerLevel/tree/master/src/main/kotlin/com/github/cpjinan/plugin/playerlevel/internal/events)  

<!-- more -->

```kotlin
// 设置玩家经验事件
package com.github.cpjinan.plugin.playerlevel.internal.events.exp
class SetExpEvent(val player: Player, var exp: Int, var source: String) : BukkitProxyEvent()
```

```kotlin
// 玩家尝试升级事件
package com.github.cpjinan.plugin.playerlevel.internal.events.level
class LevelUpEvent(val player: Player, var source: String) : BukkitProxyEvent()
```

```kotlin
// 设置玩家等级事件
package com.github.cpjinan.plugin.playerlevel.internal.events.level
class SetLevelEvent(val player: Player, var level: Int, var source: String) : BukkitProxyEvent()
```

```kotlin
// 刷新玩家等级事件
package com.github.cpjinan.plugin.playerlevel.internal.events.level
class TickLevelEvent(val player: Player, var source: String) : BukkitProxyEvent()
```
