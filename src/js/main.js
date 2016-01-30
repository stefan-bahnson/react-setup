import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './reducers/reducer'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Inbox from './components/Inbox'

/*
    Redux passes down state from our store to our components,
    even if we use React Router in this case.
 */
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/inbox" component={Inbox}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);