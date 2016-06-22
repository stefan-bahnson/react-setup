import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showGrowl} from '../redux/actions/growl.actions';


class Growl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.time
    }
  }

  _setCounter() {
    let counter = setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(counter);
        this.props.dispatch(showGrowl(false));
      } else {
        this.setState({
          count: this.state.count - 1
        });
      }
    }, 1000);


  }

  componentDidMount() {
    this._setCounter();
  }

  render() {
    return (
      <div className="growlContainer">
        {
          this.state.count > 0 ?
            <div>message will arive in { this.state.count } secs</div>
            : null
        }

      </div>
    );
  }
}

export default connect()(Growl);
