import React from 'react'
import Login from './Login.js';
import Logo from '../assets/favicon.svg';

const Header = (props) => {
    const getProfile = (profileObj) => {
        props.getProfile(profileObj);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light my-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="brand"/>My Coupons</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="m-2">
                    <Login getProfile={getProfile}/>
                </div>
            </nav>
        </div>
    )
}

export default Header;
