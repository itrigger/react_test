import React, {useContext, useEffect} from 'react';
import Navbar from "../UI/navbar/Navbar";
import {SendMsgOk} from "../../context";
import MyModal from "../UI/modal/MyModal";
import CallbackForm from "../forms/CallbackForm";
import {useHistory} from "react-router-dom";

const Header = () => {

    const {sendMsgStatus, setSendMsgStatus} = useContext(SendMsgOk)
    const {activeMobMenu, setActiveMobMenu} = useContext(SendMsgOk)

    const history = useHistory()

    useEffect(() => {
        return history.listen((location) => {
            setActiveMobMenu('')
        })
    },[history])

    const clickBurger = () =>{
        if(activeMobMenu === ''){
            setActiveMobMenu('active')
        } else {
            setActiveMobMenu('')
        }
    }

    return (
            <div id="header">
                <div className="in">
                    <div className="flex">
                        <div className="mobile burger">
                            <div className={`btn-burger ${activeMobMenu}`} onClick={clickBurger}>
                                <span></span>
                            </div>
                            <div id="mobile_menu" className={activeMobMenu}>
                                <ul>
                                   <Navbar />
                                </ul>
                                <div className="top-telephone">
                                    <a href="tel:84956698860">8 495 669 88 60</a>
                                </div>
                                <div className="btn-group top-btn-group">
                                    <span className="btn btn-primary" onClick={() => setSendMsgStatus(true)}>Узнать цену</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-pull-left">
                            <div className="logo">
                            </div>
                            <div id="top-menu">
                                <ul>
                                    <Navbar />
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-pull-right">
                            <div className="top-selector-wrapper">
                                <div className="top-selector-wrapper__title">Скупка радиодеталей в</div>
                                <div className="selector-title"><span>Москве</span></div>
                            </div>
                            <div className="top-telephone">
                                <a href="tel:84956698860">8 495 669 88 60</a>
                            </div>
                            <div className="btn-group social-btn-group">
                                <span className="btn btn-wt-color"></span>
                                <span className="btn btn-vb-color"></span>
                            </div>
                            <div className="btn-group top-btn-group">
                                <span className="btn btn-primary" onClick={() => setSendMsgStatus(true)}>Узнать цену</span>
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

export default Header;