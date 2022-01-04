import React, {useContext} from 'react';
import CallbackForm from "../forms/CallbackForm";
import MyModal from "../UI/modal/MyModal";
import {SendMsgOk} from "../../context";

const Footer = () => {

    const {sendMsgStatus, setSendMsgStatus} = useContext(SendMsgOk)

    return (
        <div className="footer" id="anchor3">
            <div className="line1">
                <div className="in">
                    <div className="name mobile">У вас остались вопросы?</div>
                    <div className="flex">
                        <div className="left">
                            <span className="yellow-rounded">Ваш консультант</span>
                            <div className="name">Роман Климов</div>
                            <div className="title">Специалист по работе с&nbsp;радиодеталями</div>
                            <div className="btn-group btn-group--social">
                                <span className="btn-ico wt"></span>
                                <span className="btn-ico vb"></span>
                            </div>
                        </div>
                        <div className="pic"></div>
                        <div className="right desktop">
                            <div className="name">У вас остались вопросы?</div>
                            <div className="desc">Подробно на них ответим и порекомендуем лучший способ решения.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line2">
                <hr/>
                <div className="in">
                    <div className="footer--contact-block__wrapper">
                        <div className="in">
                            <div className="footer--contact-block gray-radio-bg">
                                <div className="flex">
                                    <div>
                                        <div className="label">Свяжитесь с нами по телефону:</div>
                                        <div className="phone">
                                            <a href="tel:88009343434">8 800 934-34-34</a>
                                        </div>
                                    </div>
                                    <div className="dotted-border-left">
                                        <div className="label">Либо сразу вышлите нам фото радиодетали
                                            <span>через Viber или WhatsApp</span>
                                        </div>
                                        <div className="bottom_big">
                                            <a href="https://api.whatsapp.com/send?phone=79854708800"
                                               className="big-wt"
                                               target="_blank" rel="noreferrer" />
                                            <a title="Должен быть установлен вайбер для ПК"
                                               href="viber://chat?number=%2B79854708800" target="_blank"
                                               className="big-vb" rel="noreferrer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <div className="footer--logo">
                            </div>
                            <div className="footer--logo_title" />
                            <div className="copy">© 2010-2020</div>
                        </div>
                        <div>
                            <div className="footer--menu">
                                <ul>
                                    <li><a href="#anchor1">Скупка радиодеталей</a></li>
                                    <li><a href="#anchor2">Как продать радиодеталь</a></li>
                                    <li><a href="#anchor3">О нас</a></li>
                                    <li><a href="#anchor4">Контакты</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-column">
                                <div className="footer--selector-wrapper">
                                    Скупка радиодеталей в
                                    <div className="selector footer--selector">
                                        <span>Москве</span>
                                    </div>
                                    <br/>
                                    <span className="footer--telephone"><a href="tel:84956698860">8 495 669 88 60</a></span>
                                </div>
                                <div className="footer--btn-group-wrapper">
                                    <div className="btn-group grayscale-button">
                                        <p><span className="btn btn-primary btn-footer" onClick={() => setSendMsgStatus(true)}>Оставить заявку</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="to-right to-bottom maslogo-wrapper">
                            <a className="developer" href="http://masshtab.kz" target="_blank" rel="noreferrer">Разработка сайта «Масштаб»</a>
                        </div>
                    </div>
                </div>
            </div>
                <MyModal visible={sendMsgStatus} setVisible={setSendMsgStatus}>
                    <CallbackForm/>
                </MyModal>
        </div>
    );
};

export default Footer;