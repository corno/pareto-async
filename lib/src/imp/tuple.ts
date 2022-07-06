import * as api from "pareto-async-api"


export function tuple2Imp<T1, T2, Result>(
    cb1: api.IAsync<T1>,
    cb2: api.IAsync<T2>,
    map: ($: api.Tuple2Result<T1, T2>) => Result,
): api.IAsync<Result> {
    return {
        execute: (cb) => {
            let elem1IsSet = false
            let elem2IsSet = false

            let elem1: T1
            let elem2: T2

            function wrapup() {
                if (elem1IsSet && elem2IsSet) {
                    cb(map({ first: elem1, second: elem2 }))
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

export function tuple2() {
    return tuple2Imp
}

export function tuple3Imp<T1, T2, T3, Result>(
    cb1: api.IAsync<T1>,
    cb2: api.IAsync<T2>,
    cb3: api.IAsync<T3>,
    map: ($: api.Tuple3Result<T1, T2, T3>) => Result,
): api.IAsync<Result> {
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
                    cb(map({ first: elem1, second: elem2, third: elem3 }))
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

export function tuple3() {
    return tuple3Imp
}