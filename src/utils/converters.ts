export function snakeToCamel(key: string): string {
  return key.replace(/([-_][a-z])/g, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
}

export function camelToSnake(key: string): string {
  return key.replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`)
}

export function forAmino(msg: any) {
  const sorted = Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const snakeKey = camelToSnake(key)

      acc[snakeKey] = msg[key]
      return acc
    }, {} as any)
  console.log('forAmino()')
  console.log(sorted)
  return sorted
}

export function wasAmino(msg: any) {
  const sorted = Object.keys(msg)
    .reduce((acc, key) => {
      const camelKey = snakeToCamel(key)

      acc[camelKey] = msg[key]
      return acc
    }, {} as any)
  console.log('wasAmino()')
  console.log(sorted)
  return sorted
}
