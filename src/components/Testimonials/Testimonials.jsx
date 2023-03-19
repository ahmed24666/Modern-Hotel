import React from 'react'
import "./testimonials.scss"
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import { useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Testimonials = ({img}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll=(direction)=>{
        const{current}=scrollRef
        if(direction === 'left'){
            current.scrollLeft -=400
        }else{
            current.scrollLeft +=400
        }
    }
    return (
        <div className='Testimonials' style={{backgroundImage:`url('${img}')`}}>
            <div className="head">
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Testimonials</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>What Client's Say?</h1>
                <hr data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'/>
            </div>
            <div className="cards" ref={scrollRef} data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                <div className="card">
                    <p className="para">Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                    <div className="person">
                        <div className="image">
                            <img src="images/p1.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="stars">
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                            </div>
                            <h6>Emily Brown</h6>
                            <span>Guest review</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <p className="para">Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                    <div className="person">
                        <div className="image">
                            <img src="images/p2.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="stars">
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                            </div>
                            <h6>Nolan White</h6>
                            <span>Guest review</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <p className="para">Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                    <div className="person">
                        <div className="image">
                            <img src="images/p3.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="stars">
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                                <StarPurple500OutlinedIcon fontSize="inherit"/>
                            </div>
                            <h6>Olivia Martin</h6>
                            <span>Guest review</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btns" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                <div className="btn" onClick={()=>scroll('left')}>
                    <ArrowBackIosNewTwoToneIcon />
                </div>
                <div className="btn" onClick={()=>scroll('right')}>
                    <ArrowForwardIosTwoToneIcon />

                </div>
            </div>
        </div>
    )
}
export default Testimonials 
