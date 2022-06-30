import { IAsync } from "./Async"

export type ICache<T> = {
    getEntry: (
        key: string,
    ) => IAsync<T>
}