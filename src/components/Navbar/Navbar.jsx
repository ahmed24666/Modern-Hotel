import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.scss"
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Navbar = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [toggleMenu, settoggleMenu] =useState(false);
    // change nav color 
    const [color, setColor] = useState(false)
    const changeColor=()=>{
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
    return (
        <div className={color ? "Navbar header-bg" : "Navbar"} data-aos="fade-down" data-aos-duration="2000" data-aos-delay='300'>
            <div className="left">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className=" menu">
                <DragHandleOutlinedIcon style={{transition: "1s;"}} fontSize="large" onClick={()=>settoggleMenu(!toggleMenu)}/>
            </div>
            <div className="right">
                <div className="item">
                    <NavLink className="routeLink"NavLink to="/">
                        Home
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink className="routeLink"NavLink to="/about">
                        About
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink className="routeLink"NavLink to="/rooms">
                        Rooms & Suites
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink className="routeLink"NavLink to="/restaurant">
                    Restaurant
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink className="routeLink"NavLink  to="/spa">
                        SPA
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink className="routeLink"NavLink to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
            {toggleMenu &&(
                <div className="smallMenu">
                <div className="item" onClick={()=>settoggleMenu(false)}>
                    <NavLink className="routeLink" to="/">
                        Home
                    </NavLink>
                </div>
                <div className="item" onClick={()=>settoggleMenu(false)}>
                    <NavLink className="routeLink" to="/about">
                        About
                    </NavLink>
                </div>
                <div className="item" onClick={()=>settoggleMenu(false)}>
                    <NavLink className="routeLink" to="/rooms">
                        Rooms & Suites
                    </NavLink>
                </div>
                <div className="item" onClick={()=>settoggleMenu(false)}>
                    <NavLink className="routeLink" to="/restaurant">
                    Restaurant
                    </NavLink>
                </div>
                <div className="item" onClick={()=>settoggleMenu(false)}>
                    <NavLink className="routeLink" to="/spa">
                        SPA
                    </NavLink>
                </div>
                <div className="item" onClick={()=>settoggleMenu(false)}>
                    <NavLink className="routeLink" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
            )}
        </div>
    )
}

export default Navbar
