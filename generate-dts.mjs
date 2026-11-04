import fs from 'fs';
const components = fs.readdirSync('./src/components');
let dts = `import { DefineComponent } from 'vue';\n\n`;

components.forEach(file => {
    const name = file.replace('.vue', '');
    dts += `export const ${name}: DefineComponent<{}, {}, any>;\n`;
});

if (!fs.existsSync('./dist')) fs.mkdirSync('./dist');
fs.writeFileSync('./dist/index.d.ts', dts);
console.log('✅ 完美的 index.d.ts 已生成到 dist 目录！');
