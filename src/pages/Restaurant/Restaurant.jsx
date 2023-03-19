import React, { useEffect } from 'react'
import XlSlider from '../../components/XlSlider/XlSlider'
import RestDetais from '../../components/RestDetails/RestDetais';
import Menu from '../../components/Menu/Menu';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Restaurant = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Restaurant' data-aos="fade-out" data-aos-duration="2000">
            <XlSlider
            h11={'Enjoy a Luxury Experience'}
            h22={'The Perfect Base For You'} 
            h33={'Enjoy The Best Moments of Life'}
            p11={'Luxury Hotel & Best Resort'} 
            p22={'Unique Place to Relax & Enjoy'} 
            p33={'The Ultimate Luxury Experience'} 
            img1={'images/restaurant/1.jpg'} 
            img2={'images/restaurant/2.jpg'} 
            img3={'images/restaurant/3.jpg'}/>
            <RestDetais/>
            <Menu/>
        </div>
    )
}

export default Restaurant 
