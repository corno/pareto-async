import { API } from "pareto-async-api"
import { array } from "./imp/array"
import { createCache } from "./imp/cache"
import { createCounter } from "./imp/createCounter"
import { createDictionary } from "./imp/createDictionary"
import { dictionary } from "./imp/dictionary"
import { rawDictionary } from "./imp/rawDictionary"
import { rewrite } from "./imp/rewrite"
import { tuple2, tuple3 } from "./imp/tuple"
import { value } from "./imp/value"

export * from "./imp/tuple"

export function init(): API {
    return {
        createCache: createCache,
        createCounter: createCounter(),
        createDictionary: createDictionary(),
        dictionary: dictionary(),
        rawDictionary: rawDictionary(),
        array: array(),
        rewrite: rewrite(),
        value: value(),
        tuple2: tuple2(),
        tuple3: tuple3(),
    }
}