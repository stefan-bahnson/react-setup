import React from 'react'
import { connect } from 'react-redux'
import {store } from '../reducers/reducer'

const Inbox = (props) => {

    console.log(props.messages);
    return (
        <div>
            <h4>Inbox</h4>
            <ul>
                {/* conditional rendering */}
                {
                    props.messages.length ?
                        props.messages.map( (msg,i) => <li key={i}>{msg.text}</li>)
                        : 'no messages'
                }
            </ul>
        </div>
    )
};

/*
    Mapping what state this component is interested in
    and then passing it as an arg to the connect function.

    The messages name has nothing to do with the reducer.
    You could rename it if you want.

    { texts: state }

    Just remember to change the references in your components if you do.
 */
function mapStateToProps(state){
    return {
        messages: state
    }
}

/*
    ## Subscribe to the Store ##

    We're passing the state we want this component to subscribe to.
    If we don't tell Redux what state to track,
    the component will not update when state changes.
 */
export default connect(
    mapStateToProps
)(Inbox)