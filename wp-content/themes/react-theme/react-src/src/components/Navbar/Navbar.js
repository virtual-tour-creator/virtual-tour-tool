import React from 'react';
import './Navbar.styles.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark">
            <a className="navbar-brand" href="/">PATRIMONIO NACIONAL</a>
            <a href='/wp-admin'>Go to Dashboard</a>
            </nav>
        )
    }
}

export default Navbar;