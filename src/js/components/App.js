import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

  render() {
      return (
          <div>
              <h1>React Setup</h1>
              <Link to='/'>Home</Link>
              <Link to='/inbox'>Inbox</Link>
              {this.props.children}
          </div>
      )
  }

}

export default App
