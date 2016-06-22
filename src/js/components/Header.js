import React from 'react'
import { Link } from 'react-router'

const Header = () => (
    <div className="Header">
        <h1>React Setup</h1>
        <Link to="/">InstaMail</Link>
        <Link to="/snailmail">SnailMail</Link>
        <div className="createdBy"> created by <b>stefan.bahnson@gmail.com</b></div>
    </div>
);

export default Header