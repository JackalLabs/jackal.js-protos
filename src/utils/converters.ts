export function snakeToCamel(key: string): string {
  return key.replace(/(_[a-z])/g, ($1) => {
    return $1.toUpperCase()
      // .replace('-', '')
      .replace('_', '')
  })
}

export function camelToSnake(key: string): string {
  return key.replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`)
}

export function forAmino(msg: any) {
  console.log('forAmino() in')
  console.log(msg)
  const sorted = Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const snakeKey = camelToSnake(key)
      acc[snakeKey] = msg[key]

      return acc
    }, {} as any)
  console.log('forAmino() out')
  console.log(sorted)
  return sorted
}

export function wasAmino(msg: any) {
  console.log('wasAmino() in')
  console.log(msg)
  const sorted = Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const camelKey = snakeToCamel(key)
      acc[camelKey] = msg[key]

      return acc
    }, {} as any)
  console.log('wasAmino() out')
  console.log(sorted)
  return sorted
}

export function forAminoV3(msg: any) {
  console.log('forAminoV3() in')
  console.log(msg)
  const sorted = Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const camelKey = snakeToCamel(key)
      acc[camelKey] = msg[key]

      return acc
    }, {} as any)
  console.log('forAminoV3() out')
  console.log(sorted)
  return sorted
}

export function wasAminoV3(msg: any) {
  console.log('wasAminoV3() in')
  console.log(msg)
  const sorted = Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const snakeKey = camelToSnake(key)
      acc[snakeKey] = msg[key]

      return acc
    }, {} as any)
  console.log('wasAminoV3() out')
  console.log(sorted)
  return sorted
}

export function sortAmino(msg: any) {
  console.log('sortAmino() in')
  console.log(msg)
  const sorted = Object.keys(msg)
    .sort()

  console.log(sorted)

  return sorted
    .reduce((acc, key) => {
      acc[key] = msg[key]
      return acc
    }, {} as any)
}

// export function isNotEmpty(val: string): boolean {
//   return !!val && val !== "0"
// }
// export function isNotEmptyBool(val: boolean): boolean {
//   return !!val && val !== "0"
// }
