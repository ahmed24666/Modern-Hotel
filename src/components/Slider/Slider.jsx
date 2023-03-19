import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./slider.scss"
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
const Slider = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
      
    const scroll =(direction)=>{
        const { current } = scrollRef
        if (direction === 'left') {
            current.scrollLeft -= 300;
          } else {
            current.scrollLeft += 300;
          }
    }
    return (
        <div className="Slider container">
            <div className="left">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay=''>Best Prices</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Extra Services</h1>
                <span className='para' data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</span>
                <span className="hide para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</span>
                <div className="call" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                    <div className="phone">
                        <PhoneOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="text">
                        <p>For information</p>
                        <span>855 100 4444</span>
                    </div>
                </div>
            </div>
            <div className="right" ref={scrollRef}>
                <div className="card" id="card1" data-aos="fade-down" data-aos-duration="2000" data-aos-delay=''>
                    <div className="image">
                        <img src="/images/111.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h2>Room cleaning</h2>
                        <div className="price">
                            <span>$50</span>
                            /month
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon />
                            </div>
                            Hotel ut nisan the duru
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon/>
                            </div>
                             Orci miss natoque vasa ince
                        </div>
                        <div className="details para">
                         <ClearOutlinedIcon/>
                         Clean sorem ipsum morbin
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="image">
                        <img src="/images/222.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h2>Drinks included</h2>
                        <div className="price">
                            <span>$30</span>
                            /month
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon />
                            </div>
                            Hotel ut nisan the duru
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon/>
                            </div>
                             Orci miss natoque vasa ince
                        </div>
                        <div className="details para">
                         <ClearOutlinedIcon/>
                         Clean sorem ipsum morbin
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/333.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h2>Room Breakfast</h2>
                        <div className="price">
                            <span>$30</span>
                            /month
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon />
                            </div>
                            Hotel ut nisan the duru
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon/>
                            </div>
                             Orci miss natoque vasa ince
                        </div>
                        <div className="details para">
                         <ClearOutlinedIcon/>
                         Clean sorem ipsum morbin
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/444.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h2>Safe & Secure</h2>
                        <div className="price">
                            <span>$15</span>
                            /month
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon />
                            </div>
                            Hotel ut nisan the duru
                        </div>
                        <div className="details para">
                            <div className="icon">
                            <DoneOutlinedIcon/>
                            </div>
                             Orci miss natoque vasa ince
                        </div>
                        <div className="details para">
                         <ClearOutlinedIcon/>
                         Clean sorem ipsum morbin
                        </div>
                    </div>
                </div>
            </div>
            <div className="icons">
                <div className="left1" onClick={()=>scroll('left')}>
                <ArrowBackIosNewTwoToneIcon/>
                </div>
                <div className="right2" onClick={()=>scroll('right')}>
                <ArrowForwardIosTwoToneIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider
