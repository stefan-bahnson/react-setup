import React from 'react'
import { Link } from 'react-router'

import Inbox from './Inbox'

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

const Header = () => (
    <div className="Header">
        <h1>React Setup</h1>
        <Link to="/">InstaMail</Link>
        <Link to="/snailmail">SnailMail</Link>
    </div>
);

const Compose = (props) => (
    <div className="Compose">
        {props.children}
    </div>
);
