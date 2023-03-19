import './news.scss'
import React, { useRef } from 'react'
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const News = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll =(direction)=>{
        const {current} = scrollRef
        if(direction==='left'){
            current.scrollLeft -= 300
        }else{
            current.scrollLeft += 300
        }
    }
    return (
        <div className="News container">
            <div className="head">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Hotel Blog</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>Our News</h1>
            </div>
            <div className="cards" ref={scrollRef} data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="card">
                    <div className="image">
                        <img src="/images/8.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className="para">Restaurant</p>
                        <h2>Historic restaurant renovated</h2>
                    </div>
                    <div className="data">
                        <p className="para">Dec</p>
                        <span>08</span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/10.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className="para">Spa</p>
                        <h2>Benefits of Spa Treatments</h2>
                    </div>
                    <div className="data">
                        <p className="para">Dec</p>
                        <span>02</span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/3.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className="para">Bathrooms</p>
                        <h2>Hotel Bathroom Collections</h2>
                    </div>
                    <div className="data">
                        <p className="para">Dec</p>
                        <span>06</span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/7.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className="para">Health</p>
                        <h2>Weight Loss with Fitness Health Club</h2>
                    </div>
                    <div className="data">
                        <p className="para">Dec</p>
                        <span>07</span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/6.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className="para">Design</p>
                        <h2>Retro Lighting Design in The Hotels</h2>
                    </div>
                    <div className="data">
                        <p className="para">Dec</p>
                        <span>03</span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/100.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className="para">Health</p>
                        <h2>Benefits of Swimming for Your Health</h2>
                    </div>
                    <div className="data">
                        <p className="para">Dec</p>
                        <span>09</span>
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

export default News
