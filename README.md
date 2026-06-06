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
