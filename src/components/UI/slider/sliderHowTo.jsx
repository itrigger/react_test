import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import img1 from "./../../../img/hts-10.png"
import img2 from "./../../../img/hts-11.png"
import img3 from "./../../../img/hts-12.png"
import Modal from "react-modal";
import SendMsgForm from "../../forms/SendMsgForm";
import CallbackForm from "../../forms/CallbackForm";
import BtnCloseModal from "../button/BtnCloseModal";


const SliderHowTo = () => {

    Modal.setAppElement("#root");

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modal2IsOpen, set2IsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    function openModal2() {
        set2IsOpen(true);
    }
    function closeModal2() {
        set2IsOpen(false);
    }

    return (
        <div className="cont2">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    660: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <div>
                        <div className="custom-size--middle">
                            <div>
                                <div className="title">Отправьте фото нашему специалисту</div>
                                <div className="btn-group">
                                    <a className="btn btn-white sm btn-wt" href="#">Вацап</a>
                                    <a className="btn btn-white sm btn-vb" href="#">Вайбер</a>
                                </div>
                            </div>
                            <div className="pic"><img alt="" src={img2} /></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="custom-size--left">
                            <div>
                                <div className="title">Сформируйте продажу через форму обратной связи</div>
                                <div className="btn-group">
                                    <span className="btn btn-white sm" onClick={openModal}>Продать</span>
                                </div>
                            </div>
                            <div className="pic"><img alt="" src={img1} /></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="custom-size--right">
                            <div>
                                <div className="title">Либо закажите звонок и мы вам перезвоним</div>
                                <div className="btn-group">
                                    <span className="btn btn-white sm" onClick={openModal2}>Звонок</span>
                                </div>
                            </div>
                            <div className="pic"><img alt="" src={img3} /></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <BtnCloseModal onClick={closeModal} />
                <SendMsgForm closeModal={closeModal}/>
            </Modal>
            <Modal
                isOpen={modal2IsOpen}
                onRequestClose={closeModal2}
                contentLabel="Example Modal"
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <BtnCloseModal onClick={closeModal2} />
                <CallbackForm closeModal={closeModal2}/>
            </Modal>
        </div>
    );
};

export default SliderHowTo;