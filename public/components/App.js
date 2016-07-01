import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Growl from './Growl';
import Inbox from './Inbox';
import Header from './Header';
import Compose from './Compose';
import DevTools from './DevTools';

import '../sass/main.scss';

const App = ({ growl, children }) => {
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
          {children}
        </Compose>
        <Inbox />
      </div>
    </div>
  );
};

App.propTypes = {
  growl: PropTypes.shape({ show: PropTypes.bool }),
};

function mapStateToProps(state) {
  return {
    growl: state.growl
  }
}

export default connect(mapStateToProps)(App);