# STUDIO YYH. - Personal Portfolio

一个现代化的个人作品集网站，展示我的项目和技能。

## 关于我

**Youthful, Yummy, Happy** - YYH 的个人主页

热爱跆拳道、网球、游泳和计算机编程。通过技术创造有趣的应用，让生活更美好。

## 技术栈

- **React 19** - 现代化的用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Vite 7** - 快速的构建工具和开发服务器
- **Tailwind CSS v4** - 实用的 CSS 框架
- **Lucide React** - 精美的图标库
- **React Icons** - 丰富的图标集合
- **ESLint** - 代码质量检查

## 功能特性

- 🌙 深色/浅色主题切换
- 🌐 中英文双语支持
- 📱 响应式设计，适配各种设备
- 🚀 快速加载和流畅的动画效果
- 🎨 现代化的 UI 设计
- ✨ 暖纸白 / 炭黑双主题，定制 YYH 折带 SVG、分行入场与轻微指针视差
- 🔗 社交媒体链接集成

## 项目展示

### Cicada English (知了英语)

AI 驱动的英语阅读训练平台。

### Chat-O-Matic (聊聊机)

随问随答的小小智能伙伴。

### Sesame Explainer (芝麻问答)

智能问答系统，提供详细解答和知识解释。

### LingXi (灵犀)

一个智能员工关系助手。

### Hire Lens

AI 智能招聘辅助工具。

### Fantasia

AI 驱动的智能写作助手。

### JianMian (简面)

一个 AI 智能简历和面试助手。

### Chez Liliane

一个烘焙爱好者的个人主页，分享烘焙经验和美味的配方。

### Recipe Rover (食旅星球)

通过智能配料匹配，探索世界各地的美食食谱。

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 联系方式

- **GitHub**: [phoenixlwpapix](https://github.com/phoenixlwpapix)
- **Email**: phoenixlwp@gmail.com

## 许可证

本项目为个人作品集，保留所有权利。

## 2026-09 视觉改版

主页采用个人创作展厅方向，以暖纸白、墨黑、朱橙和非对称排版呈现作品与生活。

- **Hero**：定制 YYH 折带 SVG 替换粒子地球 / 波浪背景，采用分行揭示、一次性归位、桌面微幅指针响应；支持的浏览器中提供滚动退出效果。
- **精选作品**：Voce、ConjuGO、海豚英语。前两个使用公开页面真实截图，海豚英语使用原项目品牌吉祥物制作封面（非界面截图）。
- **完整目录**：保留全部 16 个应用，精选之外默认展示 5 项，可展开剩余目录；仅为有仓库地址的项目显示 GitHub 链接。
- **生活足迹**：保留 13 张真实照片，错落摄影带支持拖动和前后按钮，不自动轮播。
- **导航与页尾**：当前章节指示、邮件联系、GitHub / 博客链接；移除无个人地址的 LinkedIn 入口。
- **语言与主题**：首次访问默认中文、浅色，切换后本地记忆；同步页面语言、标题和浏览器主题色。
- **可访问性**：跳转内容链接、键盘焦点样式、语义链接、减少动态效果支持；手机端不启用鼠标视差。
- **实现**：继续使用 React 19 + Vite + TypeScript + Tailwind v4，复用 Embla；新首屏不加载 WebGL 背景，不新增运行时依赖。

### 素材维护

精选素材位于 `public/images/projects/`。Voce 当前截图为公开登录页，ConjuGO 为练习界面；海豚英语线上连接及本地后端加载未成功，因此采用现有吉祥物。后续可替换为新的产品截图，并同步 `src/components/Showcase.tsx`。

### 验证命令

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

现有 ESLint 配置仅覆盖 JS / JSX，TS / TSX 静态检查由 TypeScript 编译器承担。手动或浏览器验证需覆盖中英文、明暗主题、手机 / 平板 / 桌面、目录展开收起、照片切换与减少动态效果。
