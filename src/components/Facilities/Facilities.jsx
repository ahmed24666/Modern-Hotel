import React from 'react'
import './facilities.scss'
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Facilities = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Facilities container'>
            <div className="head">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Our Services</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>Hotel Facilities</h1>
            </div>
            <div className="cards">
                <div className="card" data-aos="fade-up" data-aos-duration="2000" >
                    <div className="icon">
                        <ModeOfTravelOutlinedIcon fontSize="inherit"/>
                    </div>
                    <h1>Pick Up & Drop</h1>
                    <p className="para">We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.</p>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon">
                        <DriveEtaOutlinedIcon fontSize="inherit"/>
                    </div>
                    <h1>Parking Space</h1>
                    <p className="para">Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon">
                        <BedOutlinedIcon fontSize="inherit"/>
                    </div>
                    <h1>Room Service</h1>
                    <p className="para">Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon">
                        <PoolOutlinedIcon fontSize="inherit"/>
                    </div>
                    <h1>Swimming Pool</h1>
                    <p className="para">Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.</p>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon">
                        <WifiOutlinedIcon fontSize="inherit"/>
                    </div>
                    <h1>Fibre Internet</h1>
                    <p className="para">Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon">
                        <FreeBreakfastOutlinedIcon fontSize="inherit"/>
                    </div>
                    <h1>Breakfast</h1>
                    <p className="para">Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant</p>
                </div>
            </div>
        </div>
    )
}

export default Facilities 
