---
title: 配置文件
icon: gears
order: 2
category:
  - 使用指南
tag:
  - 插件下载
  - 插件安装
  - 插件配置
---

本篇讲述插件的配置信息

<!-- more -->

[[toc]]

## 配置文件一览
### config.yml

```yaml
# ______ _                       _                    _  #
# | ___ \ |                     | |                  | | #
# | |_/ / | __ _ _   _  ___ _ __| |     _____   _____| | #
# |  __/| |/ _` | | | |/ _ \ '__| |    / _ \ \ / / _ \ | #
# | |   | | (_| | |_| |  __/ |  | |___|  __/\ V /  __/ | #
# \_|   |_|\__,_|\__, |\___|_|  \_____/\___| \_/ \___|_| #
#                 __/ |                                  #
#                |___/                                   #

# 全局设置
options:
  # 插件更新提醒
  update: true
  # 启用bstats统计
  metrics: true
  # 启用调试模式
  debug: false
  # 数据存储相关
  database:
    # 存储方式 (LOCAL,SQL)
    use: LOCAL
    # 数据库设置
    sql:
      host: 127.0.0.1
      port: 3306
      user: root
      password: 123456
      database: PlayerLevel
  # 玩家经验达标后自动升级
  auto-level-up: true
```

### level.yml

```yml
level:
  max-level: 70
  0:
    name: "§8Lv.§b0"
    exp: 0
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "§8??? §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  1:
    name: "§8Lv.§b1"
    exp: 450
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  2:
    name: "§8Lv.§b2"
    exp: 500
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  3:
    name: "§8Lv.§b3"
    exp: 550
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  4:
    name: "§8Lv.§b4"
    exp: 610
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  5:
    name: "§8Lv.§b5"
    exp: 670
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  6:
    name: "§8Lv.§b6"
    exp: 720
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  7:
    name: "§8Lv.§b7"
    exp: 780
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  8:
    name: "§8Lv.§b8"
    exp: 840
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  9:
    name: "§8Lv.§b9"
    exp: 900
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  10:
    name: "§8Lv.§b10"
    exp: 960
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  11:
    name: "§8Lv.§b11"
    exp: 1020
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  12:
    name: "§8Lv.§b12"
    exp: 1070
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  13:
    name: "§8Lv.§b13"
    exp: 1130
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  14:
    name: "§8Lv.§b14"
    exp: 1190
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  15:
    name: "§8Lv.§b15"
    exp: 1250
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  16:
    name: "§8Lv.§b16"
    exp: 1310
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  17:
    name: "§8Lv.§b17"
    exp: 1370
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  18:
    name: "§8Lv.§b18"
    exp: 1430
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  19:
    name: "§8Lv.§b19"
    exp: 1500
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  20:
    name: "§8Lv.§b20"
    exp: 1600
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  21:
    name: "§8Lv.§b21"
    exp: 1710
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  22:
    name: "§8Lv.§b22"
    exp: 1830
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  23:
    name: "§8Lv.§b23"
    exp: 1950
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  24:
    name: "§8Lv.§b24"
    exp: 2080
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  25:
    name: "§8Lv.§b25"
    exp: 2210
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  26:
    name: "§8Lv.§b26"
    exp: 2350
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  27:
    name: "§8Lv.§b27"
    exp: 2480
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  28:
    name: "§8Lv.§b28"
    exp: 2620
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  29:
    name: "§8Lv.§b29"
    exp: 2750
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  30:
    name: "§8Lv.§b30"
    exp: 2850
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  31:
    name: "§8Lv.§b31"
    exp: 2960
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  32:
    name: "§8Lv.§b32"
    exp: 3080
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  33:
    name: "§8Lv.§b33"
    exp: 3200
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  34:
    name: "§8Lv.§b34"
    exp: 3330
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  35:
    name: "§8Lv.§b35"
    exp: 3460
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  36:
    name: "§8Lv.§b36"
    exp: 3600
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  37:
    name: "§8Lv.§b37"
    exp: 3730
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  38:
    name: "§8Lv.§b38"
    exp: 3870
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  39:
    name: "§8Lv.§b39"
    exp: 4000
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  40:
    name: "§8Lv.§b20"
    exp: 4140
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  41:
    name: "§8Lv.§b41"
    exp: 4280
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  42:
    name: "§8Lv.§b42"
    exp: 4430
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  43:
    name: "§8Lv.§b43"
    exp: 4570
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  44:
    name: "§8Lv.§b44"
    exp: 4710
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  45:
    name: "§8Lv.§b45"
    exp: 4860
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  46:
    name: "§8Lv.§b46"
    exp: 5000
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  47:
    name: "§8Lv.§b47"
    exp: 5150
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  48:
    name: "§8Lv.§b48"
    exp: 5300
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  49:
    name: "§8Lv.§b49"
    exp: 5440
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  50:
    name: "§8Lv.§b20"
    exp: 5700
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  51:
    name: "§8Lv.§b51"
    exp: 6150
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  52:
    name: "§8Lv.§b52"
    exp: 6630
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  53:
    name: "§8Lv.§b53"
    exp: 7130
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  54:
    name: "§8Lv.§b54"
    exp: 7640
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  55:
    name: "§8Lv.§b55"
    exp: 8170
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  56:
    name: "§8Lv.§b56"
    exp: 8700
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  57:
    name: "§8Lv.§b57"
    exp: 9230
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  58:
    name: "§8Lv.§b58"
    exp: 9780
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  59:
    name: "§8Lv.§b59"
    exp: 10330
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  60:
    name: "§8Lv.§b20"
    exp: 20300
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  61:
    name: "§8Lv.§b61"
    exp: 21780
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  62:
    name: "§8Lv.§b62"
    exp: 23350
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  63:
    name: "§8Lv.§b63"
    exp: 24970
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  64:
    name: "§8Lv.§b64"
    exp: 26630
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  65:
    name: "§8Lv.§b65"
    exp: 65070
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  66:
    name: "§8Lv.§b66"
    exp: 68810
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  67:
    name: "§8Lv.§b67"
    exp: 72490
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  68:
    name: "§8Lv.§b68"
    exp: 76120
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  69:
    name: "§8Lv.§b69"
    exp: 79710
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
  70:
    name: "§8Lv.§b70"
    exp: 100000
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %playerlevel_lastlevelname% }} §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
```

### zh_CN.yml

```yml
add-exp: "&7已给予玩家 &f{0} {1} &7点经验值！"
remove-exp: "&7已移除玩家 &f{0} {1} &7点经验值！"
set-exp: "&7已设置玩家 &f{0} &7的经验值为 &f{1} &7！"
check-exp: "&7玩家 &f{0} &7拥有的经验值为 &f{1} &7！"

add-level: "&7已给予玩家 &f{0} {1} &7个等级！"
remove-level: "&7已移除玩家 &f{0} {1} &7个等级！"
set-level: "&7已设置玩家 &f{0} &7的等级为 &f{1} &7！"
check-level: "&7玩家 &f{0} &7的等级为 &f{1} &7！"

level-up-success: "&a升级成功！"
level-up-fail: "&c升级所需经验不足！"
max-level: "&c已达到最大等级！"

debug-not-enabled: "&c调试模式已禁用！"
```

## 关于配置文件

通常来说你不需要去动这些配置文件即可正常操作  
这里只是简单概括下配置文件的作用，剩下的自己悟去（）  

其他两个纯字面意思，主要讲下**level.yml**文件的配置  

你要明白，这个文件用的是**kether**语句做的，虽然不影响你更改但还是建议去[kether动作库](https://kether.tabooproject.org/)这里了解一下  

接下来一段一段开始讲

```yml
level:
  max-level: 70
```

首先是**level.max-level**，顾名思义这个是玩家的最大等级，一定要先调整这个再去修改别的

```yml
level:
  0:
    name: "§8Lv.§b0"
    exp: 0
    action:
      - title "§e§lLevel UP!"
      - subtitle inline "§8??? §7→ {{ papi %playerlevel_levelname% }}" by 10 20 10
```

其次是这一段令人头皮发麻的东西，熟悉kether语句的话就没啥困难  
唯一的难点估计就是你的复制粘贴和文本编辑器的匹配项同步更改功能好不好用了

（太水了）
