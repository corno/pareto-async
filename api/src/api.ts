import { IAsync, ICache, ICounter, IDictionary, Tuple2Result, Tuple3Result } from "./interface"

export type CreateCache = <T>(
    get: (key: string) => IAsync<T>
) => ICache<T>

export type CreateCounter = (
    callback: ($: ICounter) => void,
    onEnd: () => void,
) => void

export type CreateDictionary = <T>(source: { [key: string]: T }) => IDictionary<T>

export type Dictionary = <T>(
    dictionary: IDictionary<IAsync<T>>,
) => IAsync<IDictionary<T>>

export type RawDictionary = <T>(
    $: { [key: string]: IAsync<T> },
) => IAsync<IDictionary<T>>

export type Array = <T>(
    array: IAsync<T>[],
) => IAsync<T[]>

export type Rewrite = <Out, In>(
    source: IAsync<In>,
    rewrite: (source: In) => Out
) => IAsync<Out>

export type Value = <T>(
    v: T
) => IAsync<T>

export type Tuple2 = <T1, T2>(
    cb1: IAsync<T1>,
    cb2: IAsync<T2>,
) => IAsync<Tuple2Result<T1, T2>>

export type Tuple3 = <T1, T2, T3> (
    cb1: IAsync<T1>,
    cb2: IAsync<T2>,
    cb3: IAsync<T3>,
) => IAsync<Tuple3Result<T1, T2, T3>>

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