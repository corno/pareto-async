import * as api from "pareto-async-api"
import { createDictionary, createDictionaryImp } from "./createDictionary"
import { dictionary, dictionaryImp } from "./dictionary"

export function rawDictionaryImp<T>(
    $: { [key: string]: api.IAsync<T> },
): api.IAsync<api.IDictionary<T>> {
    return dictionaryImp(
        createDictionaryImp($),
    )
}

export function rawDictionary() {
    return rawDictionaryImp
}