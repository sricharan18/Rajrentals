import React from "react";

const Footer  = () => {
    return (
        <div>
            <div className="footer">
                <img src={require('../images/logo-2.png')} alt='logo'></img>
                <div className="footer-items">
                    <div>Home</div>
                    <div>Properties</div>
                    <div>Contact us</div>
                </div>
                
            </div>
            <p style={{display: "block"}}>&copy; Raj homes, Inc</p>
        </div>
    )
}

export default Footer;