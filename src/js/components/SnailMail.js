import React from 'react';
import {connect} from 'react-redux';
import {setStateAsync} from '../redux/actions/message.actions';
import {showGrowl} from '../redux/actions/growl.actions';

import InputBox from './InputBox'
import Info from './Info'

const instructions = "The message will arrive with a 3 second delay.";

class SnailMail extends React.Component {
  render() {
    const {dispatch, growl} = this.props;
    return (
      <div className="SnailMail">
        <h1>SnailMail</h1>
        <InputBox handleClick={( msg => {
        dispatch(setStateAsync(msg));
        dispatch(showGrowl(true));
        } )}
        disabled={growl.show ? 'disabled' : null}
        />
        <Info text={ instructions } keyWord={ 'Enter' }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    growl: state.growl
  }
}

export default connect(mapStateToProps)(SnailMail);