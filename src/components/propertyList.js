import React from "react";
import PropertyData from '../data.json';
import {useNavigate} from "react-router-dom";

const PropertyList = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{paddingTop: '100px', marginLeft: '20px'}}>List of properties</h1>
            <div className="property-list">
                {PropertyData.map((data) => {
                    return (
                    <div onClick={()=>navigate(`${data.id}`)} className="card">
                        <div className="card-img">

                        </div>
                        <div className="card-content"> 
                            <h2>148 Tyler St</h2>
                            <div className="card-sub-content">
                                <div className="card-sub-content-style">6 bed</div>
                                <div className="card-sub-content-style">2 bath</div>
                            </div>
                            <div className="d-flex align-center">
                                Price: <h3 className="ml-20">{'   $ 2200'}</h3>
                            </div>
                        </div>
                    </div>
                    )
                })}
                

                
            </div>
        </div>
    )
}

export default PropertyList;