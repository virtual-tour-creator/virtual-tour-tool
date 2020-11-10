import React from 'react';
import './Navbar.styles.css';
import BrandingLogo from './BrandingLogo';

import HamburgerIcon from '../../images/hamburger.png';
import HamburgerCloseIcon from '../../images/hamburger-close.png';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showNavlink: this.props.isTourPage==true? false: true
        }
    };

    toggleHamburger = () => {
        this.setState({
            showNavlink: !this.state.showNavlink
        })
        
    }

    renderHamburger(){
        if(this.props.isTourPage == true){
            return(
                <li className="nav-hamburger" onClick={this.toggleHamburger}><img src={this.state.showNavlink==true? HamburgerCloseIcon : HamburgerIcon } /></li>
            )
        }
    }

    renderNavlinks() {
        const navlinks = document.getElementsByClassName('nav-item')
        for(var i=0; i<navlinks.length; i++){
            if(!this.state.showNavlink) {
                navlinks[i].style['display'] = 'none';
            } else{
                navlinks[i].style['display'] = 'block';
            }
        }

        return(
        <ul className="ml-auto navbar-nav">
            {console.log('this.state.showNavlink=',this.state.showNavlink)}
                <li className="nav-item" >
                    <a className="nav-link" href='/'>LIBRARY</a>
                </li>
                <li className="nav-item" >
                    <a className="nav-link" href='/wp-admin'>DASHBOARD</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={reactInit.logoutUrl}>LOGOUT</a>
                </li>
                {this.renderHamburger()}
               
            </ul>     
        )
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md">
            <BrandingLogo className="nav-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-light collapse navbar-collapse" id="navbarNav">
                {this.renderNavlinks()}
            </div>
            </nav>
        )
    }
}

export default Navbar;