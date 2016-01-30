
/*
    ## Synchronous dispatch call ##

    Redux will check all our reducers for the intended action
    and update state accordingly.

    If we don't use dispatch to emit our action in the previous step,
    Redux has no way of knwing our intention.

    Try calling the action without using dispatch and see what happens.
    Spoiler! not much...
 */
export function setState(text) {
    console.log('Dispatching action >> text: ' + text);
    return {
        type: 'SET_STATE',
        text
    }
}


/*
    ## Asynchronous dispatch call ##

    Middleware enables us to return a function instead of just an action object,
    effectively allowing us to chain and sync actions.

    Here we're using a timeout to simulate an async call but you'll probably
    find this useful when making API calls and working with promises.

    e.g.

    return dispatch => {
        get('[url]')
            .then(response => dispatch(setState(response.data)))
            .catch([error])
    }

 */
export function setStateAsync(text) {
    return dispatch => {
        setTimeout(() => {
            console.log('State is on the way!');
            dispatch(setState(text))
        }, 3000)
    }
}

