import React from 'react';
import { Link } from 'react-router-dom';

const getLogo = () => (reactInit.logoUrl ? reactInit.logoUrl : "https://www.thefrickpittsburgh.org/Files/User/logo.png")
const BrandingLogo = (props) => (
    <img style={{'cursor': 'pointer'}} id="brading-logo-img" src={getLogo()} width="130" onClick={() => props.handleClickNavLink(false)}/>
)

export default BrandingLogo;