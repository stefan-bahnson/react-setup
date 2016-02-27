import React from 'react'
import { connect } from 'react-redux'
import { setState } from '../actions/actions'

import InputBox from './InputBox'
import Info from './Info'

const instructions = "The message will arrive instantly.";

class InstaMail extends React.Component {
    render() {
        const {dispatch} = this.props;
        return (
            <div className="InstaMail">
                <h1>InstaMail</h1>
                <InputBox handleClick={( msg =>  dispatch(setState(msg)) )}/>
                <Info text={ instructions } keyWord={ 'Enter' }/>
            </div>
        );
    }
}

export default connect()(InstaMail)