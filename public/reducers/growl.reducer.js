export default function messages(state = { show: false }, action = {}) {
  switch (action.type) {
    case 'SET_GROWL':
      return {
        show: action.show
      };
    default:
      return state;
  }
}