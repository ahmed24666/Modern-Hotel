import React, { useEffect } from 'react'
import Head from '../../components/Head/Head'
import Rooms from '../../components/Rooms/Rooms'
import Slider from '../../components/Slider/Slider'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Rooms_suits = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-out" data-aos-duration="2000">
            <Head img={'/images/1.jpg'} title="Rooms & Suites" p='The Cappa Luxury Hotel'/>
            <Rooms/>
            <Slider/>
        </div>
    )
}

export default Rooms_suits
