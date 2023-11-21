import React from "react";
import MeditatingDoodle from '../images/svgs/MeditatingDoodle.svg'

const Features = () => {
    return (
        <div className="features">
            <div className="features-heading">
                <h1>Why choose Raj Homes?</h1>
            </div>

            <div className="features-content">
                <div className="features-content-item">
                    <img src={MeditatingDoodle} alt='image' />
                </div>
                <div className="features-content-item">
                    <ul>
                        <li>Our properties are strategically located near university, ensuring a quick and easy commute to your campus.</li>
                        <li>Each home is thoughtfully designed to offer a cozy and comfortable living experience, equipped with modern amenities to suit your needs.</li>
                        <li>Your safety is our top priority. All our homes are located in secure neighborhoods with reliable security measures.</li>
                        <li>We understand student budgets, and that's why our homes come at competitive and reasonable rates.</li>
                        <li>Our streamlined rental process ensures a smooth and hassle-free experience, so you can quickly move in and start making memories.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Features;