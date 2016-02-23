import React from 'react'

import Inbox from './Inbox'
import Header from './Header'
import Compose from './Compose'

require('./_app.sass');

class App extends React.Component {

    render() {
        const {messages} = this.props;
        return (
            <div>
                <Header />
                <div className="Mail">
                    <Compose>
                        {this.props.children}
                    </Compose>
                    <Inbox />
                </div>
            </div>
        )
    }

}

export default App