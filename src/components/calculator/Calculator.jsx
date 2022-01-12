import React, {useEffect, useState} from 'react';
import Calculator_row from "./Calculator_row";
import {useQuery} from "@apollo/client";
import {CATEGORIES_GET_ALL} from "../../GraphQL/queries";
import Loader from "../UI/loader/Loader";
import {useAlert} from "react-alert";

const Calculator = () => {

    const alert = useAlert();

    const [cats, setCats] = useState([{}])

    const [rows, setRows] = useState([{id:0}])

    const addRow = () => {

    }

    const deleteRow = (id) => {
        if (localStorage.getItem('order') !== null) {
            let dataLS = JSON.parse(localStorage.getItem('order'))
            if (dataLS) {
                let newArr = dataLS.filter(item => item.LSrowID !== id)
                localStorage.setItem('order', JSON.stringify(newArr))
            }
        }
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
                                rows={rows}
                                setRows={setRows}
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
/*[
    [
        "1796",
        "Блоки и оборудование",
        "Б5-49",
        "1",
        "шт",
        "200"
    ],
    [
        "152",
        "Реле",
        "РПС-36Б ОС РС4.520.253 до 91 года паспорт (251, 252, 253)",
        "2",
        "шт",
        "1003.33"
    ]
]*/
export default Calculator;