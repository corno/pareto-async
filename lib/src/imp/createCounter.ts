import * as api from "pareto-async-api"


export function createCounter(
    callback: ($: api.ICounter) => void,
    onEnd: () => void,
) {
    let counter = 0
    let ended = false
    function wrapup() {
        if (counter === 0) {
            if (ended === true) {
                throw new Error("already ended")
            }
            ended = true
            onEnd()
        }
    }
    callback({
        increment: () => {
            if (ended) {
                throw new Error("async call done after context is ready")
            }
            counter += 1

        },
        decrement: () => {
            counter -= 1
            wrapup()
        },
    })
    wrapup()
}