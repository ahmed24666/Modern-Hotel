import React, { useEffect } from 'react'
import Head from '../../components/Head/Head'
import Section1 from './../../components/Section1/Section1'
import Slider from './../../components/Slider/Slider'
import Facilities from './../../components/Facilities/Facilities'
import Testimonials from './../../components/Testimonials/Testimonials'
import Team from '../../components/Team/Team'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="About" data-aos="fade-out" data-aos-duration="2000">
            <Head img={'/images/1.jpg'} title={'About us'} p={'Luxury Hotel'}/>
            <Section1/>
            <Slider/>
            <Facilities/>
            <Team/>
            <Testimonials img={'/images/2.jpg'}/>
        </div>
    )
}

export default About
