import './contact.scss'
import React, { useEffect } from 'react'
import Head from '../../components/Head/Head'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { IoMailOpenOutline } from 'react-icons/io5';
import { MdOutlineShareLocation } from 'react-icons/md';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Contact' data-aos="fade-out" data-aos-duration="2000">
            <Head img={'/images/909.jpg'} title={'Contact Us'} p={'Get in touch'}/>
            <div className="details container">
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>The Cappa Luxury Hotel</h1>
                <p className="para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                <div className="calls">
                    <div className="call" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                        <div className="phone">
                            <PhoneOutlinedIcon fontSize="large"/>
                        </div>
                        <div className="text">
                            <p>Reservation</p>
                            <span>855 100 4444</span>
                        </div>
                    </div>
                    <div className="call" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                        <div className="phone">
                            <IoMailOpenOutline/>
                        </div>
                        <div className="text">
                            <p>Email Info</p>
                            <span>info@luxuryhotel.com</span>
                        </div>
                    </div>
                    <div className="call" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                        <div className="phone">
                            <MdOutlineShareLocation/>
                        </div>
                        <div className="text">
                            <p>Address</p>
                            <span>1616 Broadway</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.266018435694!2d31.417859310767867!3d31.041454962463455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1675376055504!5m2!1sar!2seg" style={{border:'0;'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact
