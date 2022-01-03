import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const SliderMob = () => {
    return (
        <div className="mobile">
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides
        >
            <SwiperSlide>
                <div className="slide-wrap slide-wrap-bg1">
                    <div className="">
                        <div className="title">Приезжаем <span>в&nbsp;течение</span>
                            <span>1&nbsp;часа!</span></div>
                        <div className="desc">Вам никуда не нужно ездить: оформите
                            заявку
                            прямо на сайте, и мы с вами свяжемся!
                        </div>
                    </div>
                    <div className="pic"></div>

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
                    <div className="pic"></div>
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
                    <div className="pic"></div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default SliderMob;