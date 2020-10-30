import React from 'react';
import './Navbar.styles.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super();
    };

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md">
            <Link className="navbar-brand" to="/"><img src="https://www.thefrickpittsburgh.org/Files/User/logo.png" width="120"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-light">
                <ul className="navbar-nav nav-left">
                    <li className="nav-item">
                        <a className="nav-link">LIBRARY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">MY TOUR</a>
                    </li>
                    
                </ul>     
            </div>
            <div className="navbar-light collapse navbar-collapse" id="navbarNav">
                <ul className="ml-auto navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href='/wp-admin'>DASHBOARD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={reactInit.logoutUrl}>LOGOUT</a>
                    </li>
                    
                </ul>     
            </div>
            </nav>
        )
    }
}

export default Navbar;