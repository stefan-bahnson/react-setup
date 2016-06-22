import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'


const items = [
  { text: 'text1'},
  { text: 'text2'},
  { text: 'text3'},
  { text: 'text4'},
];

ReactDOM.render(
  <App text="eidel" header="title text" items={items}/>,
  document.getElementById('app')
);

