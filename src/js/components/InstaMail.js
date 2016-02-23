import React from 'react'
import { connect } from 'react-redux'
import { setState } from '../actions/actions'

import InputBox from './InputBox'

class InstaMail extends React.Component {
    render() {
        const {dispatch} = this.props;
        return (
            <div className="InstaMail">
                <h1>InstaMail</h1>
                <InputBox handleClick={( msg =>  dispatch(setState(msg)) )}/>
            </div>
        );
    }
}

export default connect()(InstaMail)



