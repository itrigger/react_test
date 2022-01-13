import React, {useContext, useEffect, useState} from 'react';
import Calculator_row from "./Calculator_row";
import {useQuery} from "@apollo/client";
import {CATEGORIES_GET_ALL} from "../../GraphQL/queries";
import Loader from "../UI/loader/Loader";
import {useAlert} from "react-alert";
import {CalcContext} from "../../context";

const Calculator = () => {

    const alert = useAlert();

    const [cats, setCats] = useState([{}])
    const [rows, setRows] = useState([0])
    const [savedRows, setSavedRows] = useState(JSON.parse(sessionStorage.getItem('order')) || [])
    const {rowCountID, setRowCountID} = useContext(CalcContext)


    const getFromLS = () => {
        if (sessionStorage.getItem('order') !== null) {
            let dataLS = JSON.parse(sessionStorage.getItem('order'))
            if (dataLS) {
                setSavedRows(dataLS)
                //   sessionStorage.setItem('order', JSON.stringify(newArr))
            }
        }
    }

    //getFromLS()

    console.log(savedRows)
    console.log(rows)

    const addRow = () => {
        setRowCountID(rowCountID + 1)
        setRows([...rows, rowCountID])
    }

    const deleteRow = (row) => {
        setRows(rows.filter(p => p !== row))
        if (sessionStorage.getItem('order') !== null) {
            let dataLS = JSON.parse(sessionStorage.getItem('order'))
            if (dataLS) {
                let newArr = dataLS.filter(item => item.LSrowID !== row)
                sessionStorage.setItem('order', JSON.stringify(newArr))
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
            sessionStorage.setItem('categories', JSON.stringify(newData))
            setCats(newData)
        }
    }, [data])

    return (
        <div>
            <div className="calculator gray-radio-bg" id="main-page--calculator">
                <div className="els-header">Что продаёте?</div>
                <div className="flex els-body flex-column">
                    {loading ? <Loader/> : (savedRows.length > 0 ?
                            savedRows.map((row, index) =>
                                <Calculator_row
                                    cats={cats}
                                    key={row}
                                    deleteRow={deleteRow}
                                    count={1}
                                    row={row}
                                />
                            )
                            :
                            rows.map((row, index) =>
                                <Calculator_row
                                    cats={cats}
                                    key={row}
                                    deleteRow={deleteRow}
                                    count={1}
                                    row={row}
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