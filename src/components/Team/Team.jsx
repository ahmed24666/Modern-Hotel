import './team.scss'
import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import { useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Team = () => {
    useEffect(() => {
        AOS.init();
    }, [])
const scrollRef = useRef(null)
const scroll=(direction)=>{
    const {current} =scrollRef
    if(direction==='left'){
        current.scrollLeft-=300
    }else{
        current.scrollLeft+=300
    }
}
    return (
        <div className="Team container">
            <div className="head">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Professionals</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>Meet The Team</h1>
            </div>
            <div className="cards" ref={scrollRef} data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="card">
                    <div className="image">
                        <img src="images/About/1.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Valentina Karla</h1>
                        <p className="para">General Manager</p>
                    </div>
                    <div className="hide">
                        <div className="icons">
                            <FiFacebook/>
                            <FiInstagram/>
                            <FiTwitter/>
                            <FiYoutube/>
                            <FaPinterestP/>
                        </div>
                        <p className="para">valentina@hotel.com</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="images/About/2.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Micheal White</h1>
                        <p className="para">Guest Service Department</p>
                    </div>
                    <div className="hide">
                        <div className="icons">
                            <FiFacebook/>
                            <FiInstagram/>
                            <FiTwitter/>
                            <FiYoutube/>
                            <FaPinterestP/>
                        </div>
                        <p className="para">micheal@hotel.com</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="images/About/3.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Olivia Martin</h1>
                        <p className="para">Reservations Manager</p>
                    </div>
                    <div className="hide">
                        <div className="icons">
                            <FiFacebook/>
                            <FiInstagram/>
                            <FiTwitter/>
                            <FiYoutube/>
                            <FaPinterestP/>
                        </div>
                        <p className="para">Olivia@hotel.com</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="images/About/4.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Mariana Dana</h1>
                        <p className="para">F&B Manager</p>
                    </div>
                    <div className="hide">
                        <div className="icons">
                            <FiFacebook/>
                            <FiInstagram/>
                            <FiTwitter/>
                            <FiYoutube/>
                            <FaPinterestP/>
                        </div>
                        <p className="para">mariana@hotel.com</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="images/About/5.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Enrico Brown</h1>
                        <p className="para">Head Chef</p>
                    </div>
                    <div className="hide">
                        <div className="icons">
                            <FiFacebook/>
                            <FiInstagram/>
                            <FiTwitter/>
                            <FiYoutube/>
                            <FaPinterestP/>
                        </div>
                        <p className="para">enrico@hotel.com</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="images/About/6.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Victoria Dan</h1>
                        <p className="para">Meetings and Events Manager</p>
                    </div>
                    <div className="hide">
                        <div className="icons">
                            <FiFacebook/>
                            <FiInstagram/>
                            <FiTwitter/>
                            <FiYoutube/>
                            <FaPinterestP/>
                        </div>
                        <p className="para">victoria@hotel.com</p>
                    </div>
                </div>
            </div>
            <div className="buttons" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="btn" onClick={()=>scroll('left')}><ArrowBackIosNewTwoToneIcon/></div>
                <div className="btn" onClick={()=>scroll('right')}><ArrowForwardIosTwoToneIcon/></div>
            </div>
        </div>
    )
}

export default Team 