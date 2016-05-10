import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import InstaMail from './components/InstaMail'
import SnailMail from './components/SnailMail'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={InstaMail}/>
                <Route path="/snailmail" component={SnailMail}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);