import React from "react";
import NotFoundSVG from '../images/svgs/404.svg';

const NotFound = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img style={{height: '100vh'}}src={NotFoundSVG} alt='page not found' />
        </div>
    )
}

export default NotFound;