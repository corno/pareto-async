import * as api from "pareto-async-api"

export function rewrite(
): api.Rewrite {
    return (source, rewrite) => {
        return {
            execute: (cb => {
                source.execute((v) => {
                    cb(rewrite(v))
                })
            })
        }
    }
}