import React, {useContext, useEffect} from 'react';
import Navbar from "../UI/navbar/Navbar";
import {SendMsgOk} from "../../context";
import CallbackForm from "../forms/CallbackForm";
import {Link, useHistory} from "react-router-dom";
import Modal from 'react-modal';
import BtnCloseModal from "../UI/button/BtnCloseModal";

const Header = () => {
    Modal.setAppElement("#root");

    const {activeMobMenu, setActiveMobMenu} = useContext(SendMsgOk)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const history = useHistory()

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


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
                                <span />
                            </div>
                            <div id="mobile_menu" className={activeMobMenu}>
                                <ul>
                                   <Navbar />
                                </ul>
                                <div className="top-telephone">
                                    <a href="tel:84956698860">8 495 669 88 60</a>
                                </div>
                                <div className="btn-group top-btn-group">
                                    <span className="btn btn-primary" onClick={openModal}>Узнать цену</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-pull-left">
                            <Link to="/"><div className="logo">
                            </div></Link>
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
                                <span className="btn btn-wt-color" />
                                <span className="btn btn-vb-color" />
                            </div>
                            <div className="btn-group top-btn-group">
                                <span className="btn btn-primary" onClick={openModal}>Узнать цену</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="mymodal"
                    overlayClassName="myoverlay"
                >
                    <BtnCloseModal onClick={closeModal} />
                    <CallbackForm closeModal={closeModal}/>
                </Modal>
            </div>
    );
};

export default Header;