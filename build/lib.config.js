/*
 * @Description:
 * @Date: 2025-05-16 18:52:49
 * @LastEditTime: 2025-05-16 19:15:06
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "../packages/index.ts"),
      name: "my-components",
      fileName: (format) => `my-components.${format}.js`, //um--commonjs--require-没有对应关系 es--module
    },
    rollupOptions: {
      external: ["vue"], //不打包vue
      output: {
        //UMD模式下为那些外部化的依赖提供一个全局的变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
