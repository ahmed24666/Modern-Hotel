import React, { useEffect } from 'react'
import Facilities from '../../components/Facilities/Facilities'
import Header from '../../components/Header/Header'
import News from '../../components/News/News'
import Rooms from '../../components/Rooms/Rooms'
import Section1 from '../../components/Section1/Section1'
import Service from '../../components/Service/Service'
import Slider from '../../components/Slider/Slider'
import Testimonials from '../../components/Testimonials/Testimonials'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="Home" data-aos="fade-out" data-aos-duration="2000">
            <Header/>
            <Section1/>
            <Rooms/>
            <Slider/>
            <Facilities/>
            <Testimonials img={'/images/2.jpg'}/>
            <Service/>
            <News/>
        </div>
    )
}

export default Home
