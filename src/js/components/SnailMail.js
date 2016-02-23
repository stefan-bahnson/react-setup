import React from 'react'
import { connect } from 'react-redux'
import { setStateAsync } from '../actions/actions'

import InputBox from './InputBox'

class SnailMail extends React.Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div className="SnailMail">
                <h1>SnailMail</h1>
                <InputBox handleClick={( msg => dispatch(setStateAsync(msg)) )}/>
            </div>
        );
    }
}

export default connect()(SnailMail)