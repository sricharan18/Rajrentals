import React from 'react';
import {useNavigate} from "react-router-dom";

const ContactBanner = (props) => {
    const navigate = useNavigate();

    return (

        <div className='ContactBanner'>
            <div className='ContactBanner-div d-flex'>
                <h1>{props.text}</h1>
                <div onClick={() => navigate('/contact')} className='btn-primary'>Contact Us</div>

            </div>
        </div>
    )
}

export default ContactBanner;