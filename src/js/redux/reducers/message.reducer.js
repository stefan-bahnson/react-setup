export default function messages(state = [], action = {}) {
  switch (action.type) {
    case 'SET_STATE':
      console.log(action);
      // returns previousState + nextState as the new state
      return [
        ...state,
        {
          text: action.text,
          pos: action.position
        }
      ];
    default:
      // if no action type is matched we return the current state
      return state;
  }
}