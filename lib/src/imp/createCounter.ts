import * as api from "pareto-async-api"


export function createCounter(
    callback: ($: api.ICounter) => void,
    onEnd: () => void,
) {
    let counter = 0
    let registrationsEnded = false
    let onEndHasBeenCalled = false
    function wrapup() {
        if (registrationsEnded && counter === 0) {
            if (onEndHasBeenCalled === true) {
                throw new Error("already ended")
            }
            onEndHasBeenCalled = true
            onEnd()
        }
    }
    callback({
        increment: () => {
            if (onEndHasBeenCalled) {
                throw new Error("async call done after context is ready")
            }
            counter += 1

        },
        decrement: () => {
            counter -= 1
            wrapup()
        },
    })
    registrationsEnded = true
    wrapup()
}