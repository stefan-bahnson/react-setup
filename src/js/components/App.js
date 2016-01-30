import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

  render() {
      return (
          <div>
              <h1>React Setup</h1>
              <p>by stefanbahnson@gmail.com</p>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/inbox'>Inbox</Link></li>
              </ul>
              {this.props.children}
          </div>
      )
  }

}

export default App
