import React from 'react';
import './Navbar.styles.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-md">
            <a className="navbar-brand" href="/">BALTIMORE MUSEUM OF ART</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-dark collapse navbar-collapse" id="navbarNav">
                <ul className="ml-auto navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href='/wp-admin'>Access Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={reactInit.logoutUrl}>Logout</a>
                    </li>
                    
                </ul>     
            </div>
            </nav>
        )
    }
}

export default Navbar;