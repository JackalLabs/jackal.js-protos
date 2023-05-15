type NonNullable<T> = Exclude<T, undefined> // Remove undefined from T

export default NonNullable
