import * as api from "pareto-async-api"

export function createCache<T>(
    get: (key: string) => api.IAsync<T>
): api.ICache<T> {
    const resolved: { [key: string]: T } = {}
    const resolving: {
        [key: string]: {
            callbacks: ((v: T) => void)[]
        }
    } = {}
    return {
        getEntry: (key) => {
            return {
                execute: (cb) => {

                    if (resolved[key] !== undefined) {
                        //console.log("\tresolved")
                        cb(resolved[key])
                    } else {
                        if (resolving[key] !== undefined) {
                            //console.log("\tresolving")
                            resolving[key].callbacks.push(cb)
                        } else {
                            //console.log("\tto be resolved")

                            const callbacks: ((v: T) => void)[] = []
                            const x = get(key)
                            callbacks.push(cb)
                            resolving[key] = {
                                callbacks
                            }
                            x.execute((v) => {
                                callbacks.forEach(($) => {
                                    $(v)
                                })
                                resolved[key] = v
                                delete resolving[key]
                            })
                        }
                    }
                }
            }
        }
    }
}