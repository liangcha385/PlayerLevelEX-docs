---
title: 下载&安装
icon: gears
order: 2
category:
  - 使用指南
tag:
  - 插件下载
  - 插件安装
---

本篇讲述如何正确下载插件

<!-- more -->

[[toc]]

### 下载
::: tip 
你可以在此处获取下载链接  
[mcbbs](https://www.mcbbs.net/thread-1483100-1-1.html) 
![github](https://img.shields.io/badge/https%3A%2F%2Fgithub.com%2FCPJiNan%2FPlayerLevel?style=for-the-badge&logo=github&logoColor=%23000000&label=issue&labelColor=%23000000&color=%238B658B
)  

同样，你可能需要以下链接  
[爱发电链接](https://afdian.net/a/CPJiNan) 
[加入QQ群](https://qm.qq.com/cgi-bin/qm/qr?k=KHWK457uqBPceUIxr_9IKhdX-SSpCEl9&jump_from=webapi&authKey=wRg7BmMgCQqcbaKirMUCZJm5dkoKkdRG7udpsfSJD66Tx2pDn/3UYB7ZG8qhyBXh) 
[提交issue](https://github.com/CPJiNan/PlayerLevel/issues) 
:::  

### 安装
::: tip 
由于插件使用了 Taboolib  
请在首次启动时请确保插件处于联网状态  
:::

::: caution
你应当从正规渠道获取到本插件的 JAR 文件后再安装到服务器  
任何从第三方渠道获取的插件均不受支持  

此外，不推荐将此插件安装至任何bukkit+forge或bukkit+fabric平台的服务端上(如catserver,banner)  
因此出现的任何错误请自行承担  
:::

首先下载服务端核心 <https://api.purpurmc.org/v2/purpur/1.20.1/latest/download>  

启动后将插件放入并==重新启动==服务器

::: caution
PlayerLevel 不支持==一切形式==的热重载，  
强行进行热重载操作可能引发未知错误，请谨慎操作  
包括但不限于：  
- 通过 **Plugman**(或类似插件) 热重载 PlayerLevel  
- 通过 /reload (confirm) 指令重启服务端  
:::

重新启动后在控制台输入 /plugins 指令，若 PlayerLevel 插件为绿色且功能正常即为安装成功 :tada:  
