import React, {useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactBanner from "../components/contactBanner";
import { useParams } from "react-router-dom";
import PropertyData from '../data.json';

const PropertyDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    let {id} = useParams();

    return (
        <div>
            <Header />
            {PropertyData.map((data, i) => 
            {if(data.id == id) return <div className="details" style={{flex: "1 1 0"}}>
                <div className="details-img" style={{background: `url('${require(`../images/${data.image}`)}') center no-repeat`}}>
                </div>
                <div className="details-content">
                    <h1 style={{marginBottom: '0px'}}>{data.title}</h1>
                    <div className="d-flex align-center">
                        Price: <h3 className="ml-20">{`   $ ${data.price}`}</h3>
                    </div>
                    <div className="card-sub-content mb-50">
                        <div className="card-sub-content-style">{data.beds} beds</div>
                        <div className="card-sub-content-style">{data.bath} bath</div>
                    </div>
                    
                    <div>
                        <h2>Description</h2>
                        <p>{data.description}</p>
                    </div>
                    <div>
                        <h2>Ameneties</h2>                        
                        <ul>
                            
                            {data.Ameneties.map((amenetie, j) => {return <li>{amenetie}</li>})}
                        </ul>
                    </div>

                    <div>
                        <h2>Included</h2>
                        <div className="included-items">
                            {data.heating && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">device_thermostat</span>
                                <div>Heater</div>
                            </div>}
                            {data.laundry && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">local_laundry_service</span>
                                <div>Laundry</div>
                            </div>}
                            {data.oven && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">oven_gen</span>
                                <div>Oven</div>
                            </div>}
                            {data.sofa && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">scene</span>
                                <div>Sofa</div>
                            </div>}
                            {data.bathtub && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">bathtub</span>
                                <div>Bathtub</div>
                            </div>}
                            {data.dishwasher && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">dishwasher_gen</span>
                                <div>Dishwasher</div>
                            </div>}
                            {data.microwave && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">microwave</span>
                                <div>Microwave</div>
                            </div>}
                            {data.wifi && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">wifi_tethering</span>
                                <div>Wifi</div>
                            </div>}
                            {data.tables && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">table_restaurant</span>
                                <div>Tables</div>
                            </div>}
                            {data.lamps && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">table_lamp</span>
                                <div>Lamps</div>
                            </div>}
                            {data.chairs && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">event_seat</span>
                                <div>Chairs</div>
                            </div>}
                            {data.stove && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">cooking</span>
                                <div>Stove</div>
                            </div>}
                            {data.gas && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">propane_tank</span>
                                <div>Gas</div>
                            </div>}
                            {data.electricity && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">electric_bolt</span>
                                <div>Electricity</div>
                            </div>}
                            {data.water && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">water_drop</span>
                                <div>Water</div>
                            </div>}
                        </div>
                    </div>

                    <div>
                        <h2>Not included</h2>
                        <div className="included-items">
                            {!data.gas && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">propane_tank</span>
                                <div>Gas</div>
                            </div>}
                            {!data.electricity && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">electric_bolt</span>
                                <div>Electricity</div>
                            </div>}
                            {!data.water && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">water_drop</span>
                                <div>Water</div>
                            </div>}
                            {!data.wifi && <div className="d-flex">
                                <span class="material-symbols-outlined included-icon">wifi_tethering</span>
                                <div>Wifi</div>
                            </div>}
                        </div>
                    </div>
                    
                </div>
            </div>})
            }
            
            <ContactBanner text={<><span>More photos? <br></br> Enquire about house?</span></>}/>
            <Footer />

        </div>
    )
}

export default PropertyDetails;