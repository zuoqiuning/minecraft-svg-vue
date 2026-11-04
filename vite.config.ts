import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // 使用 import.meta.dirname 替换 __dirname
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'MinecraftSvgVue',
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: { vue: 'Vue' }
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: { vue: 'Vue' }
        }
      ],
    },
  },
});
