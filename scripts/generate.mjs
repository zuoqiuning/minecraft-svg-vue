import fs from 'fs';
import path from 'path';

// ⚠️ 注意这里：换成你刚才导出的完美 SVG 所在的文件夹路径
const srcDir = 'D:\\Desktop\\minecraft-svgs';
const destDir = path.resolve(process.cwd(), 'src/components');
const indexFile = path.resolve(process.cwd(), 'src/index.ts');
const dtsFile = path.resolve(process.cwd(), 'src/index.d.ts');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
let count = 0;
let exports = "";
let dtsExports = "declare module 'minecraft-svg-vue' {\n  import { DefineComponent } from 'vue';\n";

// 辅助函数：把 iron_ingot 转为 IronIngot (大驼峰)
function toPascalCase(str) {
    return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const files = fs.readdirSync(srcDir);

files.forEach(file => {
    if (file.endsWith('.svg')) {
        const filePath = path.join(srcDir, file);
        let svgContent = fs.readFileSync(filePath, 'utf-8');
        
        // 提取大驼峰组件名
        const rawName = file.replace('.svg', '');
        const componentName = toPascalCase(rawName);
        
        // 为了组件的灵活性，去掉原本的 width/height 属性（让用户能自由传尺寸）
        svgContent = svgContent.replace(/width="[^"]*"/, '').replace(/height="[^"]*"/, '');

        // 拼接生成 Vue 组件
        const vueCode = `<template>\n  ${svgContent.replace('<svg', '<svg v-bind="$attrs"')}\n</template>\n\n<script setup lang="ts">\nimport { useAttrs } from 'vue';\ndefineOptions({ name: '${componentName}', inheritAttrs: false });\nconst attrs = useAttrs();\n</script>\n`;
        
        // 写入 src/components
        fs.writeFileSync(path.join(destDir, `${componentName}.vue`), vueCode, 'utf-8');
        
        // 组装导出
        exports += `export { default as ${componentName} } from './components/${componentName}.vue';\n`;
        dtsExports += `  export const ${componentName}: DefineComponent<{}, {}, any>;\n`;
        count++;
    }
});

dtsExports += "}\n";
fs.writeFileSync(indexFile, exports, 'utf-8');
fs.writeFileSync(dtsFile, dtsExports, 'utf-8');
console.log(`\n✅ 完美！成功生成了 ${count} 个 Vue 原生 SVG 组件！`);
