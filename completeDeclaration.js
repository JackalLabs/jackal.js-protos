import fs from 'fs'
const filepath = './dist/index.d.ts'
const data = fs.readFileSync(filepath)
fs.writeFileSync(filepath, `declare module 'jackal.js-protos' {\n${data}\n}`)
