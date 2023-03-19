import './etiquette.scss'
import React from 'react'
import { RxCardStack } from 'react-icons/rx';
import { useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Etiquette = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [open, setOpen] = useState('1st')
    return (
        <div className='Etiquette container'>
            <div className="head" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>F.A.Qs</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>Spa Etiquette</h1>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('1st')}>
                    <h1>Arriving at The Spa</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='1st' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000" data-aos-delay=''>
                    <p className="para">Please arrive at The Spa 15 minutes prior to your scheduled treatment and enjoy the calm and serenity of The Spa atmosphere. Arriving late makes it necessary to curtail the time for your treatment.</p>
                </div>
                }
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('2nd')}>
                    <h1>Mobile Phones</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='2nd' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000">
                    <p className="para">Kindly refrain from using your mobile phone in The Spa premises. Please keep your mobile phone on silent mode at all times.</p>
                </div>
                }
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('3rd')}>
                    <h1>Valuables</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='3rd' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000">
                    <p className="para">We provide a secure place for your personal items inside The Spa complex. However, we do not accept liability for loss or damage. We recommend valuable items are stored inside the safe located in your hotel room/suite.</p>
                </div>
                }
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('4th')}>
                    <h1>Health Matters</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='4th' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000">
                    <p className="para">Please communicate health conditions such as high blood pressure and allergies, as well as pregnancy or any health-related concerns you may have when making your appointment. We do not recommend the consumption of alcohol before or directly after spa treatments or before using any facilities in the Spa and Health Club.</p>
                </div>
                }
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('5th')}>
                    <h1>Children</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='5th' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000">
                    <p className="para">The minimum age for entry to The Spa, The Health Club and the hydrothermal facilities is 16 years of age. Children under the age of 16 may use the hotel pool if they are accompanied by a parent/adult.</p>
                </div>
                }
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('6th')}>
                    <h1>Safety</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='6th' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000">
                    <p className="para">The max depth of the pool is 1.60 m. There is no lifeguard at the pool. Children may only use the pool if accompanied by an adult or parent/guardian.</p>
                </div>
                }
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="top" onClick={()=>setOpen('7th')}>
                    <h1>Smoking</h1>
                    <div className="icon"><RxCardStack/></div>
                </div>
                {open==='7th' &&
                <div className="hide" data-aos="fade-in" data-aos-duration="1000">
                    <p className="para">Kindly note that you are not allowed to smoke in The Spa, The Health Club or sauna area.</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Etiquette
