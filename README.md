# Minecraft SVG Vue

基于 Minecraft Java 26.3 版本原版游戏素材提取并转换的 Vue 3 SVG 图标库。包含了该版本中所有的物品图标（共 831 个），提供无缝隙的像素级高清渲染体验。

## 特性

- 原版色彩：直接提取自 Minecraft Java 26.3 原版游戏 assets 材质，还原度极高。
- 无缝隙渲染：生成脚本采用同行同色合并技术与极细同色描边技术，无论放大多少倍，绝不漏出背景底色。
- 完美按需加载：每个图标都是独立的 Vue 组件，完美支持 Tree-shaking，打包后体积极小。
- TypeScript 支持：内置完整的类型声明，提供开箱即用的代码补全提示。
- 零依赖：纯原生 Vue 3 组件，不需要任何额外的 SVG 解析插件或 Loader。

## 安装

```bash
npm install minecraft-svg-vue
# 或
pnpm add minecraft-svg-vue
# 或直接从 GitHub 安装
pnpm add github:zuoqiuning/minecraft-svg-vue
```

## 使用方法

为了保证图标的高清像素边缘，在使用时请务必通过 CSS 为其添加 image-rendering: pixelated; 样式。

### 方式一：按需引入（推荐）
```vue
<template>
  <div class="inventory">
    <IronIngot width="64" height="64" class="mc-icon" />
    <DiamondSword width="48" height="48" class="mc-icon" />
  </div>
</template>

<script setup lang="ts">
import { IronIngot, DiamondSword } from 'minecraft-svg-vue'
</script>

<style scoped>
.mc-icon {
  image-rendering: pixelated;
  transition: transform 0.2s;
}
.mc-icon:hover {
  transform: scale(1.1);
}
</style>
```

### 方式二：全局注册
如果你需要在项目中大量使用图标，可以在入口文件（如 main.ts）中全局注册：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import * as McIcons from 'minecraft-svg-vue'

const app = createApp(App)

// 注册所有图标
for (const [key, component] of Object.entries(McIcons)) {
  app.component(key, component)
}

app.mount('#app')
```

### 方式三：精确路径引入（体积最小）
```vue
<script setup lang="ts">
import IronIngot from 'minecraft-svg-vue/dist/components/IronIngot.vue.mjs'
</script>
```

## 可用图标列表
包含 Minecraft Java 26.3 中的所有物品图标，如 Apple, IronIngot, DiamondSword, GrassBlock, EnderPearl 等。组件命名遵循大驼峰命名法（PascalCase），绝大多数与游戏内 ID 的英文翻译对应。

## 开源协议
本项目基于 MIT License 开源。

## 图标速查表
本项目包含 831 个 Minecraft 物品图标。为了方便查找，我们提供了一份完整的[图标 ID 与 Vue 导入名称对照表](./ICONS.md)。

在开发时，你可以直接打开此表，按 Ctrl+F 搜索物品 ID 即可复制对应的 import 代码。
