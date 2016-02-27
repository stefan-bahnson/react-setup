export function setState(text) {
    console.log('Dispatching action >> text: ' + text);
    return {
        type: 'SET_STATE',
        text
    }
}

export function setStateAsync(text) {
    return dispatch => {
        setTimeout(() => {
            console.log('State is on the way!');
            dispatch(setState(text))
        }, 3000)
    }
}

