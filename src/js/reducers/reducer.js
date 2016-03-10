import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import DevTools from '../components/DevTools'

/*
 messages reducer
 */
const msgs = [
    {text: 'hello', pos: 1},
    {text: 'hello', pos: 2},
    {text: 'hello', pos: 3},
    {text: 'hello', pos: 4}
];
let pos = 1;
function messages(state = msgs, action = {}) {
    switch (action.type) {
        case 'SET_STATE':
            console.log(action);
            // returns previousState + nextState as the new state
            let arr = [
                ...state,
                {
                    text: action.text,
                    pos: pos++,
                    new: true
                }
            ];
            arr.sort((a, b) => {
                if (a.text > b.text) {
                    return 1;
                }
                if (a.text < b.text) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            return arr;
        default:
            // if no action type is matched we return the current state
            return state;
    }
}

/*
 just keep adding reducers when needed
 */
const reducers = combineReducers({
    messages
});

const store = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
    DevTools.instrument()
));

export { store }