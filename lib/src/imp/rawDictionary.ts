import * as api from "pareto-async-api"
import { createDictionary } from "./createDictionary"
import { dictionary } from "./dictionary"

export function rawDictionary<T>(
    $: { [key: string]: api.IAsync<T> },
): api.IAsync<api.IDictionary<T>> {
    return dictionary(
        createDictionary($),
    )
}