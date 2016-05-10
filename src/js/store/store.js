import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import DevTools from '../components/DevTools'

import messages from '../redux/reducers/message.reducer.js'

/*
  inital state for messages
 */
const initialMessages = [
  {text: 'hello'},
  {text: 'hello'},
  {text: 'hello'},
  {text: 'hello'}
];

/*
 just keep adding reducers when needed
 */
const reducers = combineReducers({
  messages
});

const store = createStore(reducers, { messages: initialMessages }, compose(
  applyMiddleware(thunk),
  DevTools.instrument()
));

export { store }