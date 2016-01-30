
/*
    ## Synchronous dispatch call ##
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
        setTimeout(() => dispatch(setState(text)), 3000)
    }
}

