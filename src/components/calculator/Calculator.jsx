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
    const [savedRows, setSavedRows] = useState(JSON.parse(sessionStorage.getItem('order')) || [{id: 0,item: {LSrowID:0}}])
    const [rows, setRows] = useState([0])
    const {rowCountID, setRowCountID} = useContext(CalcContext)
    const [block, setBlock] = useState(false)

    useEffect(() => {
        let arr = []
        let arrSaved = []
        if (sessionStorage.getItem('order') !== null) {
            JSON.parse(sessionStorage.getItem('order')).map((item) => arr.push(item.LSrowID))
            setRows(arr)
            JSON.parse(sessionStorage.getItem('order')).map(item => arrSaved.push(
                {
                    id: item.LSrowID,
                    item
                }
            ))
            setSavedRows(arrSaved)
        }
    },[])

    const addRow = () => {
        if(!block) {
            let nextNumber = Math.max(...rows) + 1
            setRowCountID(nextNumber)
            setRows([...rows, nextNumber])
            let obj ={id: nextNumber, item:{LSrowID:nextNumber}}
            setSavedRows([...savedRows, obj])
           // setBlock(true)
        }
    }

    const deleteRow = (row) => {
        setRows(rows.filter(p => p !== row))
        setSavedRows(savedRows.filter(p => p.id !== row))
        if (sessionStorage.getItem('order') !== null) {
            let dataLS = JSON.parse(sessionStorage.getItem('order'))
            if (dataLS) {
                let newArr = dataLS.filter(item => item.LSrowID !== row)
                sessionStorage.setItem('order', JSON.stringify(newArr))
            }
        }
        //setBlock(false)
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
                    {
                        loading ? <Loader/> :
                            savedRows.map((row, index) =>
                                <Calculator_row
                                    cats={cats}
                                    key={row.id}
                                    deleteRow={deleteRow}
                                    count={1}
                                    setBlock={setBlock}
                                    {...row}
                                />
                            )
                    }
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