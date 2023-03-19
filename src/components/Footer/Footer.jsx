import React from 'react'
import './footer.scss'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="Footer container">
            <div className="left" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <h1>About Hotel</h1>
                <p className="para">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
            </div>
            <div className="center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                <h1>Explore</h1>
                <div className="lis">
                    <div className="li">
                        <div></div>                       
                         Home
                    </div>
                    <div className="li">
                        <div></div>                       
                        About
                    </div>
                    <div className="li">
                        <div></div>                       
                        Rooms & Suites
                    </div>
                    <div className="li">
                        <div></div>                       
                        Restaurant
                    </div>
                    <div className="li">
                        <div></div>                       
                        Spa
                    </div>
                    <div className="li">
                        <div></div>                       
                        Contact
                    </div>
                </div>
            </div>
            <div className="right" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                <h1>Contact</h1>
                <p className="para">1616 Broadway NY, New York 10001 United States of America</p>
                <div className="call">
                    <PhoneOutlinedIcon fontSize='large'/>
                    855 100 4444
                </div>
                <div className="mail">info@luxuryhotel.com</div>
                <div className="icons">
                    <FiFacebook/>
                    <FiInstagram/>
                    <FiTwitter/>
                    <FiYoutube/>
                    <FaPinterestP/>
                </div>
            </div>
        </div>
    )
}

export default Footer
