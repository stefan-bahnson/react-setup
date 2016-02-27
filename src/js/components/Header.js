import React from 'react'
import { Link } from 'react-router'

const Header = () => (
    <div className="Header">
        <h1>React Setup</h1>
        <Link to="/">InstaMail</Link>
        <Link to="/snailmail">SnailMail</Link>
        <div className="created-by">
            <label>created by <b>stefan.bahnson@gmail.com</b></label>
        </div>
    </div>
);

export default Header