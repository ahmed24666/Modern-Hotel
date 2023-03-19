import './xlSlider.scss'
import React, { useState } from 'react'
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const XlSlider = ({img1,img2,img3,h11,h22,h33,p11,p22,p33}) => {  
    useEffect(() => {
        AOS.init();
    }, [])   
    const data = [
        img1,
        img2,
        img3,
    ]
    const [currentSlide, setcurrentSlide] = useState(0)
    const prevSlide=()=>{
        setcurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
    }
    const nextSlide=()=>{
        setcurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }
    // style={{transform:`translateX(-${currentSlide * 100}%)`}}
    return (
        <div className='XlSlider' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="cardContainer" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <div className="card">
                    <div className="image">
                        <img src={data[0]} alt="" />
                    </div>
                    <div className="text">
                        <p className="main-p">{p11}</p>
                        <h1 className="main-h1">{h11}</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={data[1]} alt="" />
                    </div>
                    <div className="text">
                        <p className="main-p">{p22}</p>
                        <h1 className="main-h1">{h22}</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={data[2]} alt="" />
                    </div>
                    <div className="text">
                        <p className="main-p">{p33}</p>
                        <h1 className="main-h1">{h33}</h1>
                    </div>
                </div>
            </div>
            <div className="btns">
                <div className="btn" onClick={prevSlide}><ArrowBackIosNewTwoToneIcon/></div>
                <div className="btn" onClick={nextSlide}><ArrowForwardIosTwoToneIcon/></div>
            </div>
        </div>
    )
}

export default XlSlider
