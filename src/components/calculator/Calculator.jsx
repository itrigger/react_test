import React, {useState} from 'react';
import Calculator_row from "./Calculator_row";

const Calculator = () => {

    return (
        <div>
            <div className="calculator gray-radio-bg" id="main-page--calculator">
                <div className="els-header">Что продаёте?
                    <div className="spinner loader">
                        <div className="rect1" />
                        <div className="rect2" />
                        <div className="rect3" />
                        <div className="rect4" />
                        <div className="rect5" />
                    </div>
                    <div className="loading_text" />
                </div>
                <div className="flex els-body flex-column">
                    <Calculator_row />
                    <Calculator_row />
                </div>
                <div className="els-footer">
                    <div className="el-add-row-btn">
                        <div className="btn-plus"><span>+</span></div>
                        Добавить элемент
                    </div>
                    <div className="els-total-price">
                        <span className="yellow-rounded">Итого</span>
                        <div className="els-total-price-num" id="els-total-price-num">
                            <span>0</span> ₽
                        </div>
                    </div>
                    <div className="send-btn-wrapper">
                        <span className="btn btn-secondary">Оформить продажу</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;