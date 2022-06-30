
export type IDictionary<T> = {
    forEach: (cb: (v: T, key: string) => void) => void
    map: <NT>(cb: (v: T, key: string) => NT) => IDictionary<NT>
    toArray: () => { key: string, value: T}[]
}
