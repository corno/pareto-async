import * as api from "pareto-async-api"
import { createCounter } from "./createCounter"

export function createArrayMapper<T, NT>(
    array: T[],
    callback: (v: T) => api.IAsync<NT> | null
): api.IAsync<NT[]> {
    return {
        execute: (cb) => {
            const temp: NT[] = []
            createCounter(
                (counter) => {
                    array.forEach((v) => {
                        counter.increment()
                        const tmp = callback(v)

                        if (tmp !== null) {

                            tmp.execute((v) => {
                                temp.push(v)
                                counter.decrement()
                            })
                        }
                    })
                },
                () => {
                    cb(temp)
                }
            )
        }
    }
}