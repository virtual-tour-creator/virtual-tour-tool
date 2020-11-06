import React from 'react';
import '../Navbar/Navbar.styles.css';

import HamburgerMenu from 'react-hamburger-menu';

class CollapseNavbar extends React.Component {
    constructor(props){
        super();
        this.state = {
            open: 'true'
        }
    };

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md">
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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            /> */}
            </nav>
        )
    }
}

export default CollapseNavbar;