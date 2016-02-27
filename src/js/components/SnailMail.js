import React from 'react'
import { connect } from 'react-redux'
import { setStateAsync } from '../actions/actions'

import InputBox from './InputBox'
import Info from './Info'

const instructions = "The message will arrive with a 3 second delay.";

class SnailMail extends React.Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div className="SnailMail">
                <h1>SnailMail</h1>
                <InputBox handleClick={( msg => dispatch(setStateAsync(msg)) )}/>
                <Info text={ instructions } keyWord={ 'Enter' }/>
            </div>
        );
    }
}

export default connect()(SnailMail)