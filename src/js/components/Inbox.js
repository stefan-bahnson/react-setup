import React from 'react'
import { connect } from 'react-redux'
import {store } from '../reducers/reducer'

const Inbox = (props) => {

    let {messages} = props;
    console.log(messages);
    return (
        <div className="Inbox">
            <div className="messages">
            <h1>Inbox</h1>
                {
                    messages.length ?
                        messages.map( (msg,i) =>
                            <div className="msg" key={i}>
                                <i className="material-icons">mail</i>
                                <div>{msg.text}</div>
                            </div>)
                            : <div>no messages</div>
                }
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