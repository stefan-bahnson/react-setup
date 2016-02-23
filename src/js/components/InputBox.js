import React from 'react'

class InputBox extends React.Component {
    render() {
        const { handleClick } = this.props;
        return (
            <div className="InputBox">
                <input
                    ref={ text => this._input = text}
                    type="text"
                    placeholder="Send a message"/>
                <i
                    className="material-icons"
                    onClick={() => {
                        handleClick(this._input.value);
                        this._input.value = null;
                    }}>
                    send
                </i>
            </div>
        );
    }
}
export default InputBox