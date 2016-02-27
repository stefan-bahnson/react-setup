import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import DevTools from '../components/DevTools'

/*
    messages reducer
 */
function messages(state = [], action = {}) {
    switch (action.type) {
        case 'SET_STATE':
            console.log(action);
            // returns previousState + nextState as the new state
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        default:
            // if no action type is matched we return the current state
            return state;
    }
}

const store = createStore(messages, {}, compose(
    applyMiddleware(thunk),
    DevTools.instrument()
));

export { store }