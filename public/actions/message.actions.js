export function setState(text) {
  return {
    type: 'SET_STATE',
    text,
  };
}

export function setStateAsync(text) {
  return dispatch => {
    setTimeout(() => {
      dispatch(setState(text));
    }, 3000);
  };
}
