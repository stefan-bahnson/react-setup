import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

class Page01 extends React.Component {
    render() {
        const { dispatch } = this.props;
        console.log(this.props);
        return (
            <div>
                <h4>> PAGE01</h4>
                <label>Send Message <b>synchronously</b> to page 02</label><br/>
                <input type="text" ref={ ref => this._input1 = ref }/>
                <button
                    onClick={ () => {
                        dispatch(actions.setState(this._input1.value));
                        this._input1.value = '';
                    } }
                    > SEND
                </button>
                <hr/>
                <label>Send Message <b>asynchronously</b> to page 02</label><br/>
                <input type="text" ref={ ref => this._input2 = ref }/>
                <button
                    onClick={ () => {
                        dispatch(actions.setStateAsync(this._input2.value))
                        this._input2.value = '';
                    } }
                    > SEND
                </button>
                <p>Message will arrive on page02 with a delay of 3 seconds</p>
            </div>
        )
    }
}

export default connect()(Page01)