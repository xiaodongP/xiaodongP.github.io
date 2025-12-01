---
title: VSA 源码调试笔记（一）：整体流程
date: 2025-12-01
categories: [Graphics, VSA]
tags: [geometry-processing, segmentation, code-reading]
---

## 问题与背景
今天正式开始阅读和调试 VSA 的 C++ 项目代码。
目标是理解整体流程，而不是被细节淹死。

参考项目：
- GitHub: nissmar/VSA

## 工程入口 (main.cpp)
简单概述 `main()` 做了什么：
- 读取 OFF 文件并构建 Halfedge 数据结构
- 计算面法线和面积等常量
- 初始化聚类参数 p 和 treshold
- 进入变分形状逼近的主循环

用到的关键函数：
- `igl::readOFF`
- `HalfedgeBuilder::createMesh`
- 后续将深入 `computeFaceConstants()` 等逻辑

## 初步流程理解
VSA 本质上是区域分割：
- 初始化若干种子 patch
- 交替进行区域归属和代理更新
- 根据误差不断迭代直到收敛

这一部分我会在后续笔记细化。

## 遇到的坑
- OpenGL 渲染暂时关闭，方便专注算法
- CMake 配置依赖有点老旧，需要手动修补

## TODO
- 梳理误差度量公式及对应代码实现
- 查看代理（平面/二次曲面）拟合细节
- 下一篇：Face adjacency 及常量计算流程拆解
