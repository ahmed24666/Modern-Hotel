import React from 'react'
import "./header.scss"
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
{/* <div data-aos="" data-aos-duration="" data-aos-delay=""> */}
const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <div className="Header fullScreen" >
            <div className="left" >
                <div className="text" >
                    <span>Reservation</span>
                    <p>855 100 4444</p>
                </div>
                <div className="phone">
                    <PhoneOutlinedIcon/>
                </div>
            </div>
            <div className="center">
                <div className="stars" >
                    <StarPurple500OutlinedIcon/>
                    <StarPurple500OutlinedIcon/>
                    <StarPurple500OutlinedIcon/>
                    <StarPurple500OutlinedIcon/>
                    <StarPurple500OutlinedIcon/>
                </div>
                <p data-aos="fade-up">Luxury Hotel & Best Resort</p>
                <h1 data-aos="fade-up">Enjoy a Luxury Experience</h1>
                <button className="recbtn">Rooms & Suites</button>
            </div>
            <div className="right">
               
            </div>
        </div>
    )
}

export default Header
