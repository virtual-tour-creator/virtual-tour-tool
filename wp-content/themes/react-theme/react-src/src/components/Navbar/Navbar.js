import React from 'react';
import './Navbar.styles.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super();
    };

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-md">
            <Link className="navbar-brand" to="/">BALTIMORE MUSEUM OF ART</Link>
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