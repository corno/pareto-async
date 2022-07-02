import * as api from "pareto-async-api"

export type CreateCache = <T>(
    get: (key: string) => api.IAsync<T>
) => api.ICache<T>

export type CreateCounter = (
    callback: ($: api.ICounter) => void,
    onEnd: () => void,
) => void

export type CreateDictionary = <T>(source: { [key: string]: T }) => api.IDictionary<T>

export type Dictionary = <T>(
    dictionary: api.IDictionary<api.IAsync<T>>,
) => api.IAsync<api.IDictionary<T>>

export type RawDictionary = <T>(
    $: { [key: string]: api.IAsync<T> },
) => api.IAsync<api.IDictionary<T>>

export type Array = <T>(
    array: api.IAsync<T>[],
) => api.IAsync<T[]>

export type Rewrite = <Out, In>(
    source: api.IAsync<In>,
    rewrite: (source: In) => Out
) => api.IAsync<Out>

export type Value = <T>(
    v: T
) => api.IAsync<T>

export type Tuple2 = <T1, T2>(
    cb1: api.IAsync<T1>,
    cb2: api.IAsync<T2>,
) => api.IAsync<api.Tuple2<T1, T2>>

export type Tuple3 = <T1, T2, T3> (
    cb1: api.IAsync<T1>,
    cb2: api.IAsync<T2>,
    cb3: api.IAsync<T3>,
) => api.IAsync<api.Tuple3<T1, T2, T3>>

export type API = {
    createCache: CreateCache
    createCounter: CreateCounter
    createDictionary: CreateDictionary
    dictionary: Dictionary,
    rawDictionary: RawDictionary,
    array: Array,
    rewrite: Rewrite,
    value: Value,
    tuple2: Tuple2,
    tuple3: Tuple3,
}