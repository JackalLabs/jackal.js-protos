import { defineConfig } from "vite"

import typescript from "@rollup/plugin-typescript"
import { resolve } from "path"
import { typescriptPaths } from "rollup-plugin-typescript-paths"
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: './',
  plugins: [
    tsconfigPaths(),
    dts({
      include: ["src"],
      rollupTypes: true,
      logLevel: 'error'
    }),
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
        replacement: "@jackallabs/protobufjs",
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
    rollupOptions: {
      input: resolve(__dirname, "src/index.ts"),
      preserveEntrySignatures: 'allow-extension',
      output: [
        {
          dir: './dist',
          entryFileNames: 'index.cjs.js',
          format: 'cjs',
          name: 'Jackal.js-protos',
          plugins: []
        },
        {
          dir: './dist',
          entryFileNames: 'index.esm.js',
          format: 'esm',
          name: 'Jackal.js-protos',
          plugins: [
            nodePolyfills({ include: ['buffer', 'util'] })
          ]
        }
      ],
      external: [
        /@cosmjs.*/,
        /cosmjs-types*/,
        'grpc-web',
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
