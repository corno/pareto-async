import * as api from "pareto-async-api"


export function valueImp<T>(
    v: T
): api.IAsync<T> {
    return {
        execute: (cb) => {
            cb(v)
        }
    }
}

export function value() {
    return valueImp
}