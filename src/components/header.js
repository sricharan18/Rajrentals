import React, {useState, useEffect} from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const routes = [{ path: "/contact" }, { path: "" }, {path: "/properties"}, {path: "/properties/:id"}]
    const [activeBackground, setActiveBackround] = useState(false)

    const CurrentPath = () => {
        const location = useLocation()
        const [{ route }] = matchRoutes(routes, location)
      
        return route.path
      }

    const listenScrollEvent = () => {
        if (window.scrollY > 50) {
            setActiveBackround(true)
          } else {
            setActiveBackround(false)
          }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, [])


    return (
        <>
        <div className="header">
            {activeBackground ? <div className="header-background"></div> : ''}
            <div></div>
            <div className="header-elements">
                <div onClick={()=>navigate("/")} className={`header-element ${CurrentPath()  === '' ? 'active' : ''}`}>Home</div>
                <div onClick={()=>navigate("/properties")} className={`header-element ${(CurrentPath() === '/properties' || CurrentPath() === '/properties/:id') ? 'active' : ''}`}>Properties</div>
                <div onClick={()=>navigate("/contact")} className={`header-element ${CurrentPath() === '/contact' ? 'active' : ''}`}>Contact us</div>
            </div>
        </div>
        </>
    )
}

export default Header;