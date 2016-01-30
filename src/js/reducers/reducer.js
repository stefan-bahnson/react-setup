import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

function messages(state = [], action = {}) {
    switch (action.type) {
        case 'SET_STATE':
            console.log(action);
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        default:
            console.log('default');
            return state;
    }
}

//let store = createStore(messages);

let store = applyMiddleware(thunk)(createStore)(messages);

export { store }