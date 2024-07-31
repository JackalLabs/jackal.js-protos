export function snakeToCamel(key: string): string {
  return key.replace(/(_[a-z])/g, ($1) => {
    return $1.toUpperCase().replace('_', '')
  })
}

export function camelToSnake(key: string): string {
  return key.replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`)
}

<<<<<<< HEAD
export function forAmino(msg: any) {
  return Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const snakeKey = camelToSnake(key)
      acc[snakeKey] = msg[key]

      return acc
    }, {} as any)
}

export function wasAmino(msg: any) {
  return Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const camelKey = snakeToCamel(key)
      acc[camelKey] = msg[key]

      return acc
    }, {} as any)
}

export function sortAmino(msg: any) {
  return Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      acc[key] = msg[key]
      return acc
    }, {} as any)
=======
export function sortAndSnake(msg: any) {
  const sorted = Object.keys(msg)
    .sort()
    .reduce((acc, key) => {
      const snakeKey = camelToSnake(key)

      acc[snakeKey] = msg[key]
      return acc
    }, {} as any)
  return sorted
}

export function sortFilterAndSnake(msg: any) {
  return sortAndSnake(msg).filter((el: any) => !!el)
}

export function sortAndCamel(msg: any) {
  const sorted = Object.keys(msg).reduce((acc, key) => {
    const camelKey = snakeToCamel(key)

    acc[camelKey] = msg[key]
    return acc
  }, {} as any)
  return sorted
}

/**
 * Safely converts Uint8Array, Uint16Array, or Uint32Array to string.
 * @param {Uint8Array | Uint16Array | Uint32Array} buf - Data View to convert.
 * @returns {string} - Converted result.
 */
export function uintArrayToString(
  buf: Uint8Array | Uint16Array | Uint32Array,
): string {
  return String.fromCharCode.apply(null, [...buf])
>>>>>>> v2-upgrade-snapshots
}
