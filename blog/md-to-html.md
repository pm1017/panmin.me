---
slug: md-to-html
title: Markdown 转换成 HTML
authors: [pm1017]
date: 2025-07-15
tags: [md, docusaurus]
---

Markdown（`.md` 文件）作为一种轻量级标记语言，被广泛应用于文档编写、博客、说明书等场景。而在现代文档框架中，如 [Docusaurus](https://docusaurus.io/)，你只需编写 `.md` 文件，最终就能生成美观的 HTML 网页。那么，这一“魔法”背后的原理到底是什么？本文将带你一探究竟。

<!-- truncate -->

## 一、Markdown 是什么？

Markdown 是由 John Gruber 创建的一种简洁的标记语言，其目标是用易读易写的纯文本格式编写文档，并能够直接转换为结构化的 HTML 内容。

举个例子：

```text
# 项目介绍

这是一个**很棒的**项目。
```

转换成 HTML 后就是：

```html
<h1>项目介绍</h1>
<p>这是一个<strong>很棒的</strong>项目。</p>
```

## 二、Docusaurus 是什么？

[Docusaurus](https://docusaurus.io/) 是由 Facebook 开发的静态网站生成器，主要用于构建文档网站、博客和项目主页。它基于 React 和 Webpack，最大的特点是对 Markdown 支持非常友好。你只需要写 Markdown 文件，Docusaurus 就会帮你：

- 解析 Markdown 内容
- 转换成 HTML
- 嵌入在 React 组件中
- 构建为一个完整的静态网站

## 三、Docusaurus 是如何将 Markdown 转成 HTML 的？

Docusaurus 采用了一整套 Markdown 转换流程，其核心步骤如下：

### 1. **读取 `.md` 文件**

Docusaurus 会扫描你项目中的 `docs/` 或 `blog/` 目录，收集其中所有 `.md` 或 `.mdx` 文件。

---

### 2. **使用 `remark` 和 `rehype` 解析 Markdown**

Docusaurus 内部使用了两大工具：

| 工具     | 作用                                         |
| -------- | -------------------------------------------- |
| `remark` | 将 Markdown 转换为抽象语法树（Markdown AST） |
| `rehype` | 将 AST 转换为 HTML 的 AST，再生成最终 HTML   |

这套工具组合非常强大，并且可以通过插件（如支持 Mermaid、LaTeX 等）进行扩展。

---

### 3. **包装成 React 组件**

Markdown 内容最终会被封装进一个 React 页面组件中，例如：

```jsx
export default function DocPage() {
  return (
    <Layout>
      <article>
        <h1>项目介绍</h1>
        <p>
          这是一个<strong>很棒的</strong>项目。
        </p>
      </article>
    </Layout>
  );
}
```

这使得整个网站结构统一、可组合、可编程。

---

### 4. **静态构建成 HTML 文件**

通过构建命令：

```bash
npm run build
```

Docusaurus 会将这些 React 页面静态渲染成纯 HTML 文件，并输出到 `build/` 目录。你可以将这个目录直接部署到 GitHub Pages、Vercel、Netlify 等平台。

## 四、支持扩展的 Markdown：MDX

Docusaurus 支持 [MDX](https://mdxjs.com/)，这是一种扩展的 Markdown 格式，允许你在 Markdown 中直接写 React 组件：

```mdx
# 项目介绍

欢迎来到本站！

<CustomComponent name="Docusaurus" />
```

MDX 使 Markdown 更具表现力和交互性，非常适合用于构建现代文档或组件库文档。

## 五、Mermaid、数学公式等扩展如何实现？

Docusaurus 允许通过插件或主题扩展 Markdown 能力，例如：

- Mermaid 图表：`@docusaurus/theme-mermaid`
- 数学公式：`remark-math` + `rehype-katex`
- 图片缩放、视频插入、自定义容器等

你只需要安装对应插件并配置 `docusaurus.config.js`，即可实现这些高级功能。

## 六、小结：Markdown 到 HTML 的转换路径图

```text
📄 .md 文件
   ↓（remark 解析）
🧠 Markdown AST
   ↓（rehype 转换）
📜 HTML AST
   ↓（React 包装）
🧩 React 组件
   ↓（静态构建）
🌐 HTML 网页
```
