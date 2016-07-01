import React from 'react'
import {connect} from 'react-redux'
import {store} from '../reducers/message.reducer.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Inbox extends React.Component {

  render() {
    const {messages} = this.props;
    return (
      <div className="Inbox">
        <div className="messages">
          <h1>Inbox</h1>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {
              messages.length ?
                messages.map((msg, i) =>
                  <div className="msg" key={'a' + i}>
                    {msg.pos}
                    <i className="material-icons">mail</i>

                    <div>{msg.text}</div>
                  </div>)
                :
                <div key={ 'noMsg'}>
                  no messages
                </div>
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps
)(Inbox)