import React from 'react';
import './Navbar.styles.css';
import BrandingLogo from './BrandingLogo';

class Navbar extends React.Component {
    constructor(props){
        super();
    };

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md">
            <BrandingLogo className="nav-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-light collapse navbar-collapse" id="navbarNav">
                <ul className="ml-auto navbar-nav">
                 <li className="nav-item">
                        <a className="nav-link" href='/'>LIBRARY</a>
                    </li>
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