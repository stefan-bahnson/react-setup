import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setState } from '../redux/actions/message.actions';

import InputBox from './InputBox';
import Info from './Info';

const instructions = "The message will arrive instantly.";

class InstaMail extends React.Component {
  render() {
    const { setState } = this.props;
    console.log(this.props);
    return (
      <div className="InstaMail">
        <h1>InstaMail</h1>
        <InputBox handleClick={( msg =>  setState(msg) )}/>
        <Info text={ instructions } keyWord={ 'Enter' }/>
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setState }, dispatch);
}

/*
  Wrap action creator with dispatch. Compare with SnailMail.js to see the difference.
 */
export default connect(
  null, // mapStateToProps
  mapDispatchToProps
)(InstaMail);