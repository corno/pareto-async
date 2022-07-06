import * as pa from "pareto-lang-api"
import { IAsync, ICache, Tuple2Result, Tuple3Result } from "./interface"

export type CreateCache = <T>(
    get: (key: string) => IAsync<T>
) => ICache<T>

export type Dictionary = <T>(
    dictionary: pa.IReadonlyDictionary<IAsync<T>>,
) => IAsync<pa.IReadonlyDictionary<T>>

export type RawDictionary = <T>(
    $: { [key: string]: IAsync<T> },
) => IAsync<pa.IReadonlyDictionary<T>>

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

export type Tuple2 = <T1, T2, Result>(
    cb1: IAsync<T1>,
    cb2: IAsync<T2>,
    map: ($: Tuple2Result<T1, T2>) => Result,
) => IAsync<Result>

export type Tuple3 = <T1, T2, T3, Result> (
    cb1: IAsync<T1>,
    cb2: IAsync<T2>,
    cb3: IAsync<T3>,
    map: ($: Tuple3Result<T1, T2, T3>) => Result,
) => IAsync<Result>

export type API = {
    createCache: CreateCache
    dictionary: Dictionary,
    rawDictionary: RawDictionary,
    array: Array,
    rewrite: Rewrite,
    value: Value,
    tuple2: Tuple2,
    tuple3: Tuple3,
}