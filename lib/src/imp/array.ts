import * as api from "pareto-async-api"
import { createCounter } from "./createCounter"

export function array() {
    function array<T>(
        array: api.IAsync<T>[],
    ): api.IAsync<T[]> {
        return {
            execute: (cb) => {
                const temp: T[] = []
                createCounter()(
                    (counter) => {
                        array.forEach((v) => {
                            counter.increment()
                            v.execute((v) => {
                                temp.push(v)
                                counter.decrement()
                            })
                        })
                    },
                    () => {
                        cb(temp)
                    }
                )
            }
        }
    }
    return array
}
