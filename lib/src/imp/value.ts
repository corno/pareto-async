import * as api from "pareto-async-api"


export function value<T>(
    v: T
): api.IAsync<T> {
    return {
        execute: (cb) => {
            cb(v)
        }
    }
}