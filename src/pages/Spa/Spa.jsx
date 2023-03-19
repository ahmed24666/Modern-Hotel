import XlSlider from '../../components/XlSlider/XlSlider'
import React, { useEffect } from 'react'
import Service from '../../components/Service/Service'
import Testimonials from '../../components/Testimonials/Testimonials'
import Etiquette from '../../components/Etiquette/Etiquette'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Spa = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Spa' data-aos="fade-out" data-aos-duration="2000">
            <XlSlider
            img1={'images/spa/3.jpg'} 
            img2={'images/spa/1.jpg'} 
            img3={'images/spa/2.jpg'}
            />
            <Service/>
            <Etiquette/>
            <Testimonials img={'images/1010.jpg'}/>
        </div>
    )
}

export default Spa 
