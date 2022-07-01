import * as api from "pareto-async-api"


export function tuple2<T1, T2>(
    cb1: api.IAsync<T1>,
    cb2: api.IAsync<T2>,
): api.IAsync<api.Tuple2<T1, T2>> {
    return {
        execute: (cb) => {
            let elem1IsSet = false
            let elem2IsSet = false

            let elem1: T1
            let elem2: T2

            function wrapup() {
                if (elem1IsSet && elem2IsSet) {
                    cb({ first: elem1, second: elem2 })
                }
            }
            cb1.execute((val) => {
                elem1 = val
                elem1IsSet = true
                wrapup()
            })
            cb2.execute((val) => {
                elem2 = val
                elem2IsSet = true
                wrapup()
            })

        }
    }
}

export function tuple3<T1, T2, T3>(
    cb1: api.IAsync<T1>,
    cb2: api.IAsync<T2>,
    cb3: api.IAsync<T3>,
): api.IAsync<api.Tuple3<T1, T2, T3>> {
    return {
        execute: (cb) => {
            let elem1IsSet = false
            let elem2IsSet = false
            let elem3IsSet = false

            let elem1: T1
            let elem2: T2
            let elem3: T3

            function wrapup() {
                if (elem1IsSet && elem2IsSet && elem3IsSet) {
                    cb({ first: elem1, second: elem2, third: elem3 })
                }
            }
            cb1.execute((val) => {
                elem1 = val
                elem1IsSet = true
                wrapup()
            })
            cb2.execute((val) => {
                elem2 = val
                elem2IsSet = true
                wrapup()
            })
            cb3.execute((val) => {
                elem3 = val
                elem3IsSet = true
                wrapup()
            })

        }
    }
}