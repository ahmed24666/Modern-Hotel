import './menu.scss'
import React, { useState } from 'react'
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import { useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Menu = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll = (direction)=>{
        const {current} =scrollRef
        if(direction==='left'){
            current.scrollLeft -= 300
        }else{
            current.scrollLeft += 300
        }
    }
    // each menu
    const [type, setType] = useState('breakfast')
    return (
        <div className='Menu container'>
            <div className="head">
                <p className="main-p"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Luxury Hotel</p>
                <h1 className="main-h1"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>Restaurant Menu</h1>
            </div>
            <div className="center"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="btn" onClick={()=>scroll('left')}><ArrowBackIosNewTwoToneIcon/></div>
                <div className="types" ref={scrollRef}>
                    <div className="type" onClick={()=>setType('mains')}>
                        Mains
                        </div>
                    <div className="type" onClick={()=>setType('wine')}>
                        Wine
                        </div>
                    <div className="type" onClick={()=>setType('breakfast')}>
                        Breakfast
                        </div>
                    <div className="type" onClick={()=>setType('dessert')}>
                        Dessert
                        </div>
                    <div className="type" onClick={()=>setType('starters')}>
                        Starters
                        </div>
                    <div className="type" onClick={()=>setType('salads')}>
                        Salads
                        </div>
                </div>
                <div className="btn" onClick={()=>scroll('right')}><ArrowForwardIosTwoToneIcon/></div>
            </div>
            {type==='breakfast'&&(
                <div className="bottom"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Egg Benedict</h3>
                                <span>60$</span>
                            </div>
                            <p className="para">English muffin, beef, hollandaise sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Texas Benedict</h3>
                                <span>30$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Rusty’s Omlette </h3>
                                <span>22$</span>
                            </div>
                            <p className="para">Mozzarella, cheddar, caramelized onion, black beans.</p>
                        </div>
                    </div>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Salmon Bagel</h3>
                                <span>30$</span>
                            </div>
                            <p className="para">Chocolate, marshmallow, biscuit bar</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Breakfast Bagel </h3>
                                <span>33$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Rusty’s Pancake </h3>
                                <span>44$</span>
                            </div>
                            <p className="para">Strawberry, white chocolate, dark chocolate, crispearls</p>
                        </div>
                    </div>
                </div>
            )}
            {type==='mains'&&(
                <div className="bottom"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Rusty’s Burger</h3>
                                <span>25$</span>
                            </div>
                            <p className="para">English muffin, beef, hollandaise sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Cajun Fish Steak </h3>
                                <span>40$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Southern Fried Chicken</h3>
                                <span>33$</span>
                            </div>
                            <p className="para">Mozzarella, cheddar, caramelized onion, black beans.</p>
                        </div>
                    </div>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Crab Cake</h3>
                                <span>20$</span>
                            </div>
                            <p className="para">Chocolate, marshmallow, biscuit bar</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Baby Back Ribs </h3>
                                <span>32$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Smokehouse Combo</h3>
                                <span>42$</span>
                            </div>
                            <p className="para">Strawberry, white chocolate, dark chocolate, crispearls</p>
                        </div>
                    </div>
                </div>
            )}
            {type==='wine'&&(
                <div className="bottom"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Château d'Yquem 2011</h3>
                                <span>400$</span>
                            </div>
                            <p className="para">English muffin, beef, hollandaise sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Alvear Cream NV</h3>
                                <span>30$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Chateau D'yquem 1990 </h3>
                                <span>900$</span>
                            </div>
                            <p className="para">Mozzarella, cheddar, caramelized onion, black beans.</p>
                        </div>
                    </div>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>La Grande Année 2007</h3>
                                <span>400$</span>
                            </div>
                            <p className="para">Chocolate, marshmallow, biscuit bar</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Sine Qua Non 2012</h3>
                                <span>520$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>W.S. Keyes Winery 2006</h3>
                                <span>205$</span>
                            </div>
                            <p className="para">Strawberry, white chocolate, dark chocolate, crispearls</p>
                        </div>
                    </div>
                </div>
            )}
            {type==='dessert'&&(
                <div className="bottom"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Bourbon Pecan Pie</h3>
                                <span>67$</span>
                            </div>
                            <p className="para">English muffin, beef, hollandaise sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>New York Cheesecake</h3>
                                <span>50$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Rusty’s ice-cream</h3>
                                <span>32$</span>
                            </div>
                            <p className="para">Mozzarella, cheddar, caramelized onion, black beans.</p>
                        </div>
                    </div>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>S’mores</h3>
                                <span>40$</span>
                            </div>
                            <p className="para">Chocolate, marshmallow, biscuit bar</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Rocky Road</h3>
                                <span>42$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Apple & Pear Crumble </h3>
                                <span>42$</span>
                            </div>
                            <p className="para">Strawberry, white chocolate, dark chocolate, crispearls</p>
                        </div>
                    </div>
                </div>
            )}
            {type==='starters'&&(
                <div className="bottom"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Mozzarella Dippers</h3>
                                <span>27$</span>
                            </div>
                            <p className="para">English muffin, beef, hollandaise sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Onion Rings</h3>
                                <span>32$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Fried Jalapeno</h3>
                                <span>52$</span>
                            </div>
                            <p className="para">Mozzarella, cheddar, caramelized onion, black beans.</p>
                        </div>
                    </div>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Buffalo Wings</h3>
                                <span>37$</span>
                            </div>
                            <p className="para">Chocolate, marshmallow, biscuit bar</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Chilli Con Carne</h3>
                                <span>32$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Potato Skins</h3>
                                <span>42$</span>
                            </div>
                            <p className="para">Strawberry, white chocolate, dark chocolate, crispearls</p>
                        </div>
                    </div>
                </div>
            )}
            {type==='salads'&&(
                <div className="bottom"data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Ceaser Salad</h3>
                                <span>47$</span>
                            </div>
                            <p className="para">English muffin, beef, hollandaise sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Waldorf Salad</h3>
                                <span>52$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Quinoa & Avocado Salad</h3>
                                <span>52$</span>
                            </div>
                            <p className="para">Mozzarella, cheddar, caramelized onion, black beans.</p>
                        </div>
                    </div>
                    <div className="side">
                        <div className="food">
                            <div className="price">
                                <h3>Grilled Salmon Salad</h3>
                                <span>37$</span>
                            </div>
                            <p className="para">Chocolate, marshmallow, biscuit bar</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Chicken Cobb Salad</h3>
                                <span>32$</span>
                            </div>
                            <p className="para">English muffin, short ribs, bbq sauce, poached egg.</p>
                        </div>
                        <div className="food">
                            <div className="price">
                                <h3>Salad Chicken</h3>
                                <span>42$</span>
                            </div>
                            <p className="para">Strawberry, white chocolate, dark chocolate, crispearls</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu
