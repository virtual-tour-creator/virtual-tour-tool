import React from 'react';
import { Link } from 'react-router-dom';

const getLogo = () => (reactInit.logoUrl ? reactInit.logoUrl : "https://www.thefrickpittsburgh.org/Files/User/logo.png")
const BrandingLogo = () => (
    <Link to="/"><img id="brading-logo-img" src={getLogo()} width="130"/></Link>
)

export default BrandingLogo;