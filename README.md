# 画谱为牢 · Behind Bars 中文笔记

> "Behind Bars" 的字面是"在小节线之内"；  
> 也是一种幽默俚语："身陷囹圄"。  
>  
> 而这本书教你如何在五线谱的规则之间——  
> **规范地书写音乐，让演奏得以自由呼吸。**

## 项目简介

本项目是《Behind Bars: The Definitive Guide To Music Notation》的中文结构化笔记，使用 Docusaurus 构建。原书由 Elaine Gould 撰写，是当代权威的音乐记谱规范指南。

### 内容结构

- **前言 Preface**：写作目的、概览、适用对象等
- **Part I 一般惯例**：基础规则，适用于所有谱面
  - 基本规则
  - 和弦、附点音符、连音线
  - 临时记号与调号
  - 力度与演奏法
  - 装饰音、颤音、滑音
  - 节拍
  - 连音符
  - 反复记号
- **Part II 器乐记谱**：各类乐器专属技法规范
  - 木管与铜管乐器
  - 打击乐
  - 键盘乐器
  - 竖琴
  - 古典吉他
  - 弦乐
  - 声乐
- **Part III 排版&呈现**：总谱、分谱、美学与印刷
  - 材料准备
  - 总谱布局
  - 分谱准备
  - 电子音乐
  - 自由与选择
- **附录 Appendix**：术语索引、图示、推荐阅读等

## 技术栈

- [Docusaurus](https://docusaurus.io/) - 现代静态网站生成器
- TypeScript
- React

## 本地开发

### 安装依赖

```bash
yarn
```

### 启动开发服务器

```bash
yarn start
```

此命令会启动本地开发服务器并自动打开浏览器窗口。大多数更改都会实时反映，无需重启服务器。

### 构建

```bash
yarn build
```

此命令会在 `build` 目录中生成静态内容，可以使用任何静态内容托管服务进行部署。

### 部署

使用 SSH：

```bash
USE_SSH=true yarn deploy
```

不使用 SSH：

```bash
GIT_USER=<你的 GitHub 用户名> yarn deploy
```

如果使用 GitHub Pages 进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式。

## 版权声明

本项目为非商业用途的结构化整理与翻译摘录，  
原著版权归 **Elaine Gould** 与 **Faber Music** 所有。

如需购买原版，请访问：[Faber Music Behind Bars](https://www.fabermusic.com/shop/behind-bars-the-definitive-guide-to-music-notation-p6284)

---

> 一份好谱，不只是技术执行的地图，  
> 也是演奏者心灵呼吸的起点。  
>  
> **画谱为牢，亦为音乐而生。**
