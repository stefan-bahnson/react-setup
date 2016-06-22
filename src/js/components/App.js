import React from 'react';
import {connect} from 'react-redux';

import Growl from './Growl';
import Inbox from './Inbox';
import Header from './Header';
import Compose from './Compose';
import DevTools from './DevTools';

import './../../sass/main.scss';

class App extends React.Component {

  render() {
    const {growl} = this.props;
    return (
      <div>
        <DevTools />
        {
          growl.show ?
            <Growl time={3}/>
            : null
        }
        <Header />
        <div className="Mail">
          <Compose>
            {this.props.children}
          </Compose>
          <Inbox />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    growl: state.growl
  }
}

export default connect(mapStateToProps)(App);