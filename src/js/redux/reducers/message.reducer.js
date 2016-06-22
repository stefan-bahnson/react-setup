export default function messages(state = [], action = {}) {
  switch (action.type) {
    case 'SET_STATE':
      return [
        ...state,
        {
          text: action.text,
          pos: action.position
        }
      ];
    default:
      return state;
  }
}