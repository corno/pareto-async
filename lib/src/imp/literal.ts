import * as api from "pareto-async-api"


export function literal<T>(
    v: T
): api.IAsync<T> {
    return {
        execute: (cb) => {
            cb(v)
        }
    }
}