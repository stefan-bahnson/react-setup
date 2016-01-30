import React from 'react'
import { connect } from 'react-redux'
import {store } from '../reducers/reducer'

const Page02 = (props) => {

    console.log(props.messages);
    return (
        <div>
            <h3>Messages</h3>
            <ul>
                { props.messages.map( (msg,i) => <li key={i}>{msg.text}</li>) }
            </ul>
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
)(Page02)