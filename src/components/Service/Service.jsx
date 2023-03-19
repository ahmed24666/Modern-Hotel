import "./service.scss"
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Service = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="Service container">
            <div className="row">
                <div className="image" data-aos="fade-down" data-aos-duration="2000" data-aos-delay='300'>
                    <img src="/images/s3.jpg" alt="" />
                </div>
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="head">
                        <p className="main-p">Modern</p>
                        <h1 className="main-h1">Fitness Center</h1>
                        <p className="para">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='recbtn'>learn more</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="head">
                        <p className="main-p">Experiences</p>
                        <h1 className="main-h1">Spa Center</h1>
                        <p className="para">Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='recbtn'>learn more</button>
                    </div>
                </div>
                <div className="image" data-aos="fade-down" data-aos-duration="2000" data-aos-delay='300'>
                    <img src="/images/s2.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="image" data-aos="fade-down" data-aos-duration="2000" data-aos-delay='300'>
                    <img src="/images/s1.jpg" alt="" />
                </div>
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="head">
                        <p className="main-p">Discover</p>
                        <h1 className="main-h1">The Restaurant</h1>
                        <p className="para">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='recbtn'>learn more</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="head">
                        <p className="main-p">Experiences</p>
                        <h1 className="main-h1">The Health Club & Pool</h1>
                        <p className="para">The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='recbtn'>learn more</button>
                    </div>
                </div>
                <div className="image" data-aos="fade-down" data-aos-duration="2000" data-aos-delay='300'>
                    <img src="/images/s4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service 
