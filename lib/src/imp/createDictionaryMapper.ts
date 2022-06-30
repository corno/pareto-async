import * as api from "pareto-async-api"
import { createCounter } from "./createCounter"
import { createDictionary } from "./createDictionary"

export function createDictionaryMapper<T, NT>(
    dictionary: api.IDictionary<T>,
    callback: (v: T, key: string) => api.IAsync<NT> | null
): api.IAsync<api.IDictionary<NT>> {
    return {
        execute: (cb) => {
            const temp: { [key: string]: NT } = {}
            createCounter(
                (counter) => {
                    dictionary.forEach((v, k) => {
                        counter.increment()
                        const tmp = callback(v, k)

                        if (tmp !== null) {

                            tmp.execute((v) => {
                                temp[k] = v
                                counter.decrement()
                            })
                        }
                    })
                },
                () => {
                    cb(createDictionary(temp))
                }
            )
        }
    }
}