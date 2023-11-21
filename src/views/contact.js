import React, {useEffect} from 'react';
import Header from '../components/header';
import ContactUsSVG from '../images/svgs/Contact_us.svg';
import Footer from '../components/footer';
import {useNavigate} from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className='contact'>
                <div className='d-flex contact-div justify-between'>
                    <div className='contact-div-1'>
                        <h1>Contact Us</h1>
                        <p>For all inquiries regarding Rentals or photos, feel free to get in touch with us via email or WhatsApp. We are here to assist you with any questions you may have and help you find your ideal home!</p>
                        <h3 className='mt-50'>Email</h3>
                        <p>Email: <span style={{color: "var(--secondary-color)"}}>xxx.xxx@gmail.com</span></p>

                        <h3 className='mt-50'>WhatsApp</h3>
                        <p>WhatsApp: <span style={{color: "var(--secondary-color)"}}>+1 999-999-1000</span></p>
                        <p>Tap the following link to send us a direct message on WhatsApp: <a style={{color: "var(--secondary-color)"}} href={'https://wa.me/19999999999'}>Chat</a></p>
                    </div>
                    
                    <div className='contact-div-2'>
                        <img src={ContactUsSVG} alt='Contact us'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;