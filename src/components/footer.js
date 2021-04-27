import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="aux-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo-wrapper">
                        <img src="/assets/images/logo.png"/>
                    </div>
                    <div className="copyright-text">
                        Copyright 2021
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;