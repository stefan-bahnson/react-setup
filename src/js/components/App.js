import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

  render() {
      return (
          <div>
              <h1>React Setup</h1>
              <p>by stefanbahnson@gmail.com</p>
              <ul>
                <li><Link to='/page01'>page01</Link></li>
                <li><Link to='/page02'>page02</Link></li>
              </ul>
              {this.props.children}
          </div>
      )
  }

}

export default App
