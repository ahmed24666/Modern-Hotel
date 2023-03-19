import React from 'react'
import "./section1.scss"
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Section1 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="Section1 container">
            <div className="left">
                <div className="stars" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="">
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                </div>
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">The Cappa Luxury Hotel</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">Enjoy a Luxury Experience</h1>
                <span className="para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</span>
                <span className="hide para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</span>
                <div className="call" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                    <div className="phone">
                        <PhoneOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="text">
                        <p>Reservation</p>
                        <span>855 100 4444</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="img1" data-aos="fade-up" data-aos-duration="2000">
                    <img src="/images/8.jpg" alt="" srcset="" />
                </div>
                <div className="img2" data-aos="fade-down" data-aos-duration="2000">
                    <img src="/images/3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section1
