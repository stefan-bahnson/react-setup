import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

class Home extends React.Component {
    render() {
        const { dispatch } = this.props;
        console.log(this.props);
        return (
            <div>
                <h4> Home </h4>
                <label>Send a message <b>synchronously</b> to the Inbox</label><br/>
                <input type="text" ref={ ref => this._input1 = ref }/>
                <button
                    onClick={ () => {
                        {/* dispatch an action, informing Redux of our intention */}
                        dispatch(actions.setState(this._input1.value));
                        this._input1.value = '';
                    } }
                    > SEND
                </button>
                <hr/>
                <label>Send a message <b>asynchronously</b> to the Inbox</label><br/>
                <input type="text" ref={ ref => this._input2 = ref }/>
                <button
                    onClick={ () => {
                        dispatch(actions.setStateAsync(this._input2.value));
                        this._input2.value = '';
                    } }
                    > SEND
                </button>
                <p>The message will arrive in the Inbox with a delay of 3 seconds</p>
            </div>
        )
    }
}

export default connect()(Home)