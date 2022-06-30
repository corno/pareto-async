import * as api from "pareto-async-api"


export function createLeafSyncCaller<T>(
    v: T
): api.IAsync<T> {
    return {
        execute: (cb) => {
            cb(v)
        }
    }
}