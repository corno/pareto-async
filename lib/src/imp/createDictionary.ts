import * as api from "pareto-async-api"
import * as pr from "pareto-runtime"

export function createDictionary<T>(source: { [key: string]: T }): api.IDictionary<T> {
    return {
        forEach: (cb) => {
            pr.Objectkeys(source).sort().forEach($ => {
                cb(source[$], $)
            })
        },
        map: <NT>(cb: (v: T, key: string) => NT) => {
            const target: { [key: string]: NT } = {}
            pr.Objectkeys(source).forEach($ => {
                target[$] = cb(source[$], $)
            })
            return createDictionary(target)
        },
        toArray: () => {
            return pr.Objectkeys(source).map($ => {
                return {
                    key: $,
                    value: source[$]
                }
            })
        }
    }
}
