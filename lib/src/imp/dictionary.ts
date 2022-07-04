import * as pa from "pareto-lang-api"
import * as pl from "pareto-lang-lib"
import * as api from "pareto-async-api"
import { createCounter } from "./createCounter"
import { createDictionary } from "pareto-lang-lib"

export function dictionaryImp<T>(
    dictionary: pa.IReadonlyDictionary<api.IAsync<T>>,
): api.IAsync<pa.IReadonlyDictionary<T>> {
    return {
        execute: (cb) => {
            const temp: { [key: string]: T } = {}
            createCounter(
                (counter) => {
                    dictionary.toArray().forEach(($) => {
                        counter.increment()
                        $.value.execute((v) => {
                            temp[$.key] = v
                            counter.decrement()
                        })
                    })
                },
                () => {
                    cb(pl.createDictionary(temp))
                }
            )
        }
    }
}

export function dictionary() {
    return dictionaryImp

}