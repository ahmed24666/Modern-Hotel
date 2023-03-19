import React from 'react'
import "./restDetails.scss"
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import { BsClockHistory } from 'react-icons/bs';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const RestDetais = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="RestDetails container">
                <div className="stars" data-aos="fade-up" data-aos-duration="2000" data-aos-delay=''>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                    <StarPurple500OutlinedIcon fontSize="small"/>
                </div>
                <p className="main-p" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>An Experience for the Senses</p>
                <h1 className="main-h1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>The Restaurant</h1>
                <p className="para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.</p>
                <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Hours</h3>
                <div className="time" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="item">
                        <div className="icon"><BsClockHistory/></div>
                        <p className="para">Breakfast: 7.00 am – 11.00 am (daily)</p>
                    </div>
                    <div className="item">
                        <div className="icon"><BsClockHistory/></div>
                        <p className="para">Lunch: 12.00 noon – 2.00 pm (daily)</p>
                    </div>
                    <div className="item">
                        <div className="icon"><BsClockHistory/></div>
                        <p className="para">Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
                    </div>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Dress Code</h3>
                <p className="para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Smart casual (no shorts, hats, or sandals permitted)</p>
                <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Terrace</h3>
                <p className="para" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Open for drinks only</p>
        </div>
    )
}

export default RestDetais
