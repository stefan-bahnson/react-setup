import React from 'react'

class InputBox extends React.Component {
  render() {
    const {handleClick, disabled} = this.props;
    return (
      <div className="InputBox">
        <input
          ref={ text => this._input = text }
          type="text"
          placeholder="Send a message"
          onKeyPress={ (e) => {
                            if (e.key === 'Enter') {
                                handleClick(this._input.value);
                                this._input.value = null;
                            }
                        }
                    } disabled={disabled}/>
        <i
          className="material-icons"
          onClick={() => {
                        if (!disabled) {
                          handleClick(this._input.value);
                          this._input.value = null;
                        }
                    }}>
          send
        </i>
      </div>
    );
  }
}
export default InputBox