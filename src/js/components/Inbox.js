import React from 'react'
import { connect } from 'react-redux'
import {store } from '../reducers/reducer'

const Inbox = (props) => {

    let {messages} = props;
    console.log(messages);
    return (
        <div className="Inbox">
            <div className="Messages">
            <h1>Inbox</h1>
            <ul>
                {
                    messages.length ?
                        messages.map( (msg,i) => <li key={i}>{msg.text}</li>)
                        : 'no messages'
                }
            </ul>
            </div>
        </div>
    )
};

function mapStateToProps(state){
    return {
        messages: state
    }
}

export default connect(
    mapStateToProps
)(Inbox)