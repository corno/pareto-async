import * as api from "pareto-async-api"

export function rewrite<Out, In>(
    source: api.IAsync<In>,
    rewrite: (source: In) => Out
): api.IAsync<Out> {
    return {
        execute: (cb => {
            source.execute((v) => {
                cb(rewrite(v))
            })
        })
    }
}