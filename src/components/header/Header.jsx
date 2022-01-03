import React from 'react';
import Navbar from "../UI/navbar/Navbar";

const Header = () => {
    return (
            <div id="header">
                <div className="in">
                    <div className="flex">
                        <div className="mobile burger">
                            <div className="btn-burger">
                                <span></span>
                            </div>
                            <div id="mobile_menu">
                                <ul>
                                   <Navbar />
                                </ul>
                                <div className="top-telephone">
                                    <a href="tel:84956698860">8 495 669 88 60</a>
                                </div>
                                <div className="btn-group top-btn-group">
                                    <a className="btn btn-primary" href="#">Узнать цену</a>
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
                                <a className="btn btn-wt-color" href=""></a>
                                <a className="btn btn-vb-color" href=""></a>
                            </div>
                            <div className="btn-group top-btn-group">
                                <a className="btn btn-primary" href="#">Узнать цену</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;