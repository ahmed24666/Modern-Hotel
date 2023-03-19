import React, {useEffect}from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./rooms.scss"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
const Rooms = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="Rooms container">
            <div className="head">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" >The Cappa Luxury Hotel</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>Rooms & Suites</h1>
            </div>
            <div className="row1">
                <div className="card-r1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="image">
                        <img src="/images/11.jpg" alt="" />
                    </div>
                    <div className="details">
                        <p>150$ / Night</p>
                        <h2>Junior Suite</h2>
                        <hr />
                        <div className="hidden">
                            <div className="icons">
                                <BedOutlinedIcon/>
                                <BathtubOutlinedIcon/>
                                <DinnerDiningOutlinedIcon/>
                            </div>
                            <div className="right">
                                Details
                                <ArrowForwardOutlinedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="book">Book</div>
                </div>
                <div className="card-r1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                    <div className="image">
                        <img src="/images/22.jpg" alt="" />
                    </div>
                    <div className="details">
                        <p>200$ / Night</p>
                        <h2>Family Room</h2>
                        <hr />
                        <div className="hidden">
                            <div className="icons">
                                <BedOutlinedIcon/>
                                <BathtubOutlinedIcon/>
                                <DinnerDiningOutlinedIcon/>
                            </div>
                            <div className="right">
                                Details
                                <ArrowForwardOutlinedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="book">Book</div>
                </div>
                <div className="card-r1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='700'>
                    <div className="image">
                        <img src="/images/33.jpg" alt="" />
                    </div>
                    <div className="details">
                        <p>250$ / Night</p>
                        <h2>Double Room</h2>
                        <hr />
                        <div className="hidden">
                            <div className="icons">
                                <BedOutlinedIcon/>
                                <BathtubOutlinedIcon/>
                                <DinnerDiningOutlinedIcon/>
                            </div>
                            <div className="right">
                                Details
                                <ArrowForwardOutlinedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="book">Book</div>
                </div>
            </div>
            <div className="row2">
                <div className="card-r2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="image">
                        <img src="/images/44.jpg" alt="" />
                    </div>
                    <div className="details">
                        <p>300$ / Night</p>
                        <h2>Deluxe Room</h2>
                        <hr />
                        <div className="hidden">
                            <div className="icons">
                                <BedOutlinedIcon/>
                                <BathtubOutlinedIcon/>
                                <DinnerDiningOutlinedIcon/>
                            </div>
                            <div className="right">
                                Details
                                <ArrowForwardOutlinedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="book">Book</div>
                </div>
                <div className="card-r2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                    <div className="image">
                        <img src="/images/55.jpg" alt="" />
                    </div>
                    <div className="details">
                        <p>150$ / Night</p>
                        <h2>Superior Room</h2>
                        <hr />
                        <div className="hidden">
                            <div className="icons">
                                <BedOutlinedIcon/>
                                <BathtubOutlinedIcon/>
                                <DinnerDiningOutlinedIcon/>
                            </div>
                            <div className="right">
                                Details
                                <ArrowForwardOutlinedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="book">Book</div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
