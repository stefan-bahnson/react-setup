import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

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


/*
    ## Without middleware ##
    let store = createStore(messages);

    You can also combine several reducers into the store:

    const reducers = combineReducers({
        messages,
        ...
    });

    createStore(reducers);
 */

let store = applyMiddleware(thunk)(createStore)(messages);

export { store }