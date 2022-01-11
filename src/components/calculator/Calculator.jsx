import React, {useContext, useEffect, useState} from 'react';
import Calculator_row from "./Calculator_row";
import {CalcContext} from "../../context";
import {useQuery} from "@apollo/client";
import {CATEGORIES_GET_ALL} from "../../GraphQL/queries";
import Loader from "../UI/loader/Loader";
import {useAlert} from "react-alert";

const Calculator = () => {

    const alert = useAlert();

    const {rows, setRows} = useContext(CalcContext)
    const [cats, setCats] = useState([{}])

    const addRow = () => {
        let newId = rows.length
        setRows([...rows, {id: newId, sel1: "0", sel2: "0", count: "1"}])
    }

    const deleteRow = (id) => {
        setRows(rows.filter(p => p.id !== id))
    }

    const {loading, error, data} = useQuery(CATEGORIES_GET_ALL);

    if (error) {
        alert.error(error)
    }

    useEffect(() => {
        if (!loading) {
            let newData = data.productCategories.nodes.filter(item => item.productCategoryId !== 15)
            localStorage.setItem('categories', JSON.stringify(newData))
            setCats(newData)
        }
    }, [data])

    return (
        <div>
            <div className="calculator gray-radio-bg" id="main-page--calculator">
                <div className="els-header">Что продаёте?</div>
                <div className="flex els-body flex-column">
                    {loading ? <Loader/> : (
                        rows.map((row, index) =>
                            <Calculator_row
                                cats={cats}
                                key={index}
                                id={row.id}
                                deleteRow={deleteRow}
                                count={row.count}
                                sel1ActiveValue={row.sel1}
                                sel2ActiveValue={row.sel2}
                            />
                        )
                    )}
                </div>
                <div className="els-footer">
                    <div className="el-add-row-btn" onClick={addRow}>
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