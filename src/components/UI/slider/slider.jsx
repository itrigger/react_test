import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Slider = () => {
    return (
        <div className="desktop">
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides
        >
            <SwiperSlide>
                <div className="slide-wrap slide-wrap-bg1">
                    <div className="">
                        <div className="title">Приезжаем в течение одного часа!</div>
                        <div className="desc">Вам никуда не нужно ездить: оформите
                            заявку
                            прямо на сайте, и мы с вами свяжемся!
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-wrap slide-wrap-bg2">

                    <div className="">
                        <div className="title">Скупка радиодеталей
                            в Краснодаре выгодно!
                        </div>
                        <div className="desc">Нашли дома радиолом, мы готовы у вас его
                            купить!
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-wrap slide-wrap-bg3">

                    <div className="">
                        <div className="title">Продать радиолом
                            в Краснодаре просто!
                        </div>
                        <div className="desc">Вам никуда не нужно ездить: оформите
                            заявку
                            прямо на сайте, и мы с вами свяжемся!
                        </div>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Slider;