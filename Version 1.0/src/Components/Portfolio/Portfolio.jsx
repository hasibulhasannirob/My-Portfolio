import React from "react";
import './Portfolio.css'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Ecommerce from '../../img/ecom.jpg'
import Messenger from '../../img/messenger.jpg'
import Delivery from '../../img/deliveries.jpg'
import Fshop from '../../img/fruitshop.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span>My </span>
            <span>Recent works</span>
            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                {/* <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src={Fshop} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Messenger} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Delivery} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;