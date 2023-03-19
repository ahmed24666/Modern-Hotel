import './head.scss'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Head = ({title,p,img}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="Head container" style={{backgroundImage:`url('${img}')`}}>
            <div className="text">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>{p}</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>{title}</h1>
            </div>
        </div>
    )
}

export default Head
