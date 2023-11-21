import React from "react";
import HouseSearchSVG from '../images/svgs/for_sale.svg';

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero-div">
                <div className="hero-img">
                    <img className='hero-img-tag' src={HouseSearchSVG} alt='House search'></img>
                </div>
            </div>

            <div className="hero-div">
                <div className="hero-text">
                    <h1>A home away from home for college students in Buffalo.</h1>
                    <p>Our carefully curated selection of homes offer the perfect balance of affordability, convenience, and comfort. Whether you're looking for a single-family home or a shared apartment, we have the perfect place for you.</p>

                    <div className="hero-text-btns">
                        <div className="btn-primary">View all properties</div>
                        <div className="contact-us-btn">Contact us</div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Hero;