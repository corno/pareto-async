import * as pa from "pareto-lang-api"
import * as pl from "pareto-lang-lib"

import * as api from "pareto-async-api"
import { dictionaryImp } from "./dictionary"

export function rawDictionaryImp<T>(
    $: { [key: string]: api.IAsync<T> },
): api.IAsync<pa.IReadonlyDictionary<T>> {
    return dictionaryImp(
        pl.createDictionary($),
    )
}

export function rawDictionary() {
    return rawDictionaryImp
}