import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './public/store/store'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './public/components/App'
import InstaMail from './public/components/InstaMail'
import SnailMail from './public/components/SnailMail'

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