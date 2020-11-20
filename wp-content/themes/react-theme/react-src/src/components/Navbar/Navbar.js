import React from 'react';
import './Navbar.styles.css';
import BrandingLogo from './BrandingLogo';
import StressTest from './StressTest';
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

    handleClickNavLink = (authorOnly) => {
        const { setAuthorOnly, history } = this.props;
        setAuthorOnly(authorOnly);
        history.push(`/`);
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

        const { authorOnly } = this.props;
        let libraryLink = "nav-link";
        let mytoursLink = "nav-link";
        if (authorOnly === false) libraryLink += " select";
        if (authorOnly === true) mytoursLink += " select";
        return(
        <ul className="ml-auto navbar-nav">
                <li className="nav-item" >
                    <a className={libraryLink} onClick={() => this.handleClickNavLink(false)}>LIBRARY</a>
                </li>
                <li className="nav-item" >
                    <a className={mytoursLink} onClick={() => this.handleClickNavLink(true)}>MY TOURS</a>
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

    renderUsername() {
        if(this.state.showNavlink)
            return (
                <span id="user-name">{reactInit.username}</span>
            );
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md">
            <BrandingLogo className="nav-brand" handleClickNavLink={this.handleClickNavLink}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* < StressTest /> */}
            <div className="navbar-light collapse navbar-collapse" id="navbarNav">
                {this.renderUsername()}
                {this.renderNavlinks()}
            </div>
            </nav>
        )
    }
}

export default Navbar;