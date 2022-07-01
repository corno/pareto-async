import * as api from "pareto-async-api"
import { createDictionary } from "./createDictionary"
import { createDictionaryMapper } from "./createDictionaryMapper"

export function createRawDictionaryMapper<T, NT>(
    dictionary: { [key: string]: T },
    callback: (v: T, key: string) => api.IAsync<NT> | null
): api.IAsync<api.IDictionary<NT>> {
    return createDictionaryMapper(
        createDictionary(dictionary),
        callback,
    )
}