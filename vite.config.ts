import { defineConfig } from "vite"

import typescript from "@rollup/plugin-typescript"
import { resolve } from "path"
import { typescriptPaths } from "rollup-plugin-typescript-paths"
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: './',
  plugins: [
    tsconfigPaths(),
    dts({ rollupTypes: true })
  ],
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
    extensions: ['.ts']
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        /.*node_modules\/has(h(es)?)?/,
        /.*node_modules\/function-bind/,
        'protobufjs/minimal',
      ],
      plugins: [
        typescriptPaths({
          absolute: false,
          nonRelative: true,
        }),
        typescript({ tsconfig: './tsconfig.json' }),
      ],
    },
  },
})