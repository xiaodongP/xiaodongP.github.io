# 晓东的笔记

这是 [xiaodongP.github.io](https://xiaodongP.github.io) 的源码仓库，基于 [Jekyll](https://jekyllrb.com/) 和 [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 搭建。

网站主要用于记录：

- 计算机图形学与几何处理学习笔记
- 渲染引擎、C++、CMake 等工程实践
- 源码阅读和调试过程
- 扑克、桌游与系统设计相关思考

## 本地运行

需要先安装 Ruby 和 Bundler。

```bash
bundle install
bundle exec jekyll serve
```

然后访问 <http://127.0.0.1:4000>。

也可以使用仓库中的脚本：

```bash
bash tools/run.sh
```

## 写作约定

文章放在 `_posts/` 目录，文件名格式为：

```text
YYYY-MM-DD-title.md
```

常用 front matter：

```yaml
---
title: 文章标题
date: 2026-01-01 20:00:00 +0800
categories: [Graphics, Geometry Processing]
tags: [mesh, vsa, code-reading]
---
```

## 部署

推送到 `main` 或 `master` 后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 访问统计

站点使用 Chirpy 内置的 Umami Analytics 配置来统计访问人数和访问来源地区。Umami 可以在后台查看页面浏览量、访客数、来源、设备和国家/地区等信息。

启用步骤：

1. 注册或登录 [Umami Cloud](https://cloud.umami.is/)，也可以使用自己部署的 Umami。
2. 添加网站 `xiaodongP.github.io`。
3. 复制 Umami 后台生成的 `Website ID`。
4. 在 `_config.yml` 中填写：

```yaml
analytics:
  umami:
    id: "你的 Website ID"
    domain: https://cloud.umami.is
```

如果使用自部署 Umami，把 `domain` 改成自己的 Umami 地址，例如 `https://analytics.example.com`。

注意：统计脚本通常只会在 production 构建中生效。GitHub Actions 部署时已经设置了 `JEKYLL_ENV=production`。
