import { defineConfig } from "vite"

import typescript from "@rollup/plugin-typescript"
import { resolve } from "path"
import { copyFileSync } from "fs"
import { typescriptPaths } from "rollup-plugin-typescript-paths"
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: './',
  plugins: [
    tsconfigPaths(),
    dts({
      afterBuild: () => {
        copyFileSync("dist/index.d.ts", "dist/index.d.mts")
      },
      include: ["src"],
      rollupTypes: true,
      logLevel: 'error'
    }),
    nodePolyfills()
  ],
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
      {
        find: "protobufjs/minimal",
        replacement: "protobufjs",
      },
      {
        find: "function-bind",
        replacement: resolve(__dirname, "./node_modules", "function-bind", "implementation.js"),
      },
      {
        find: "symbol-observable/ponyfill",
        replacement: resolve(__dirname, "./node_modules", "symbol-observable", "ponyfill.js"),
      },
    ],
    extensions: ['.ts']
  },
  build: {
    manifest: true,
    minify: false,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
      name: 'Jackal.js-protos'
    },
    rollupOptions: {
      external: [
        /@cosmjs.*/,
        /cosmjs-types*/,
        'grpc-web',
        'protobufjs',
        'ts-proto',
      ],
      plugins: [
        typescriptPaths({
          absolute: false,
        }),
        typescript({ tsconfig: './tsconfig.json' }),
      ],
    },
  },
})
