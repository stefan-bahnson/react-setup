import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './reducers/reducer'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App'
import Page01 from './components/Page01'
import Page02 from './components/Page02'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Page01}/>
                <Route path="/page01" component={Page01}/>
                <Route path="/page02" component={Page02}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

console.log(store.getState());