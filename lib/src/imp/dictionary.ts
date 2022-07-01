import * as api from "pareto-async-api"
import { createCounter } from "./createCounter"
import { createDictionary } from "./createDictionary"

export function dictionary<T>(
    dictionary: api.IDictionary<api.IAsync<T>>,
): api.IAsync<api.IDictionary<T>> {
    return {
        execute: (cb) => {
            const temp: { [key: string]: T } = {}
            createCounter(
                (counter) => {
                    dictionary.forEach((v, k) => {
                        counter.increment()
                        v.execute((v) => {
                            temp[k] = v
                            counter.decrement()
                        })
                    })
                },
                () => {
                    cb(createDictionary(temp))
                }
            )
        }
    }
}