import React from 'react'

import Inbox from './Inbox'
import Header from './Header'
import Compose from './Compose'
import DevTools from './DevTools'

require('./../../sass/main.scss');

class App extends React.Component {

    render() {
        const {messages} = this.props;
        return (
            <div>
                <DevTools />
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