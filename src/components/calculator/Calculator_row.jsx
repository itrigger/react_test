import React, {useContext, useEffect, useRef, useState} from 'react';
import {DISCOUNTS, PRECIOUS_METAL} from "../../static/stocks";
import {CalcContext} from "../../context";
import {useQuery} from "@apollo/client";
import {PRODUCTS_GET_BY_CATEGORY_ID} from "../../GraphQL/queries";
import Loader from "../UI/loader/Loader";
import {useAlert} from "react-alert";

const CalculatorRow = ({sel1ActiveValue, cats, count, id, deleteRow}) => {

    const {rows, setRows} = useContext(CalcContext)
    const alert = useAlert();

    const [catsCur, setCatsCur] = useState(JSON.parse(localStorage.getItem('categories')) || cats)
    const [productItem, setProductItem] = useState([{databaseId:0,name:''}])
    const [inputVal, setInputVal] = useState(count)
    const [inputValError, setInputValError] = useState('')
    const [select1, setSelect1] = useState(sel1ActiveValue)
    const [select2, setSelect2] = useState('0')
    const [itemPrice, setItemPrice] = useState(0)
    const [isSelLoading, setIsSelLoading] = useState(true)
    const [currentId, setCurrentId] = useState(18)

    const inputValChange = (event) => {
        if (!(parseInt(event.target.value) < 1) || !(event.target.value !== '')) {
            setInputValError('')
            setInputVal(event.target.value)
        } else {
            setInputValError('error')
        }
    }

    useEffect(() => {
        setCatsCur(cats)
    }, [cats])

    useEffect(() => {
        if (parseInt(select2) !== 0 && parseInt(select2) !== undefined) {
            calcRowPrice(parseInt(select2))
           // updateRow(id)
        }
        return () => {
            // console.log('unmount')
        }
    }, [inputVal, select2])

    const {loading, error, data} = useQuery(PRODUCTS_GET_BY_CATEGORY_ID, {
        variables: {
            categoryId: parseInt(currentId)
        }
    });

    if (error) {
        alert.error(error)
    }

    useEffect(() => {
        if (!loading) {
            setProductItem(data.products.nodes)
            setIsSelLoading(false)
            localStorage.setItem(`categories${currentId}`, JSON.stringify(data.products.nodes))
            //console.log(data.products.nodes[0].databaseId)
        }
    }, [data])

/*    useEffect(() => {
        calcRowPrice(productItem[0].databaseId)
    }, [productItem])*/

    const changeCat = (event) => {
        let id = event.target.value
        setSelect1(event.target.value)
        setIsSelLoading(true)
        if (JSON.parse(localStorage.getItem(`categories${id}`)) !== null) {
            setProductItem(JSON.parse(localStorage.getItem(`categories${id}`)))
            setIsSelLoading(false)
            console.log(select2)
        } else {
            setCurrentId(id)
        }
    }

    const changeCat2 = (event) => {
        setSelect2(event.target.value)
        if (parseInt(event.target.value) !== 0 && parseInt(event.target.value) !== undefined) {
            calcRowPrice(parseInt(event.target.value))
        }
    }

    const updateRow = (rowId) => {
        const newRows = rows.map((item) => item.id === rowId ? {
            ...item,
            id: rowId,
            sel1: select1,
            sel2: select2,
            count: inputVal
        } : item)
        setRows(newRows)
    }


    const calcRowPrice = (id) => {
        let filteredProductItem = productItem.filter(item => item.databaseId === id)

        let item_gold = filteredProductItem[0].metaData.filter(item => item.key === 'gold')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'gold')[0].value : 0
        let item_silver = filteredProductItem[0].metaData.filter(item => item.key === 'silver')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'silver')[0].value : 0
        let item_platinum = filteredProductItem[0].metaData.filter(item => item.key === 'platinum')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'platinum')[0].value : 0
        let item_palladium = filteredProductItem[0].metaData.filter(item => item.key === 'palladium')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'palladium')[0].value : 0
        let fixprice = filteredProductItem[0].metaData.filter(item => item.key === 'fixprice')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'fixprice')[0].value : 0
        if (inputVal) {
            setInputValError('')
            if (fixprice > 0) {
                setItemPrice(fixprice * inputVal)
            } else {
                let item_price = (item_gold * PRECIOUS_METAL.GOLD * DISCOUNTS.GOLD_DISCOUNT + item_silver * PRECIOUS_METAL.SILVER * DISCOUNTS.SILVER_DISCOUNT + item_palladium * PRECIOUS_METAL.PALLADIUM * DISCOUNTS.PALLADIUM_DISCOUNT + item_platinum * PRECIOUS_METAL.PLATINUM * DISCOUNTS.PLATINUM_DISCOUNT) * 0.4 * PRECIOUS_METAL.RUB * parseInt(inputVal);
                setItemPrice(Math.round(item_price))
            }
        } else {
            setItemPrice(0)
            setInputValError('error')
        }
    }

    return (
        <div>
            {loading && <Loader/>}
            <div className="els-row els-row-1">
                <div className="els-del" onClick={() => deleteRow(id)}>×</div>
                <div className="el-wrap">
                    <select className="el-type el-type-1" name="el-type" value={select1}
                            onChange={changeCat}>
                        <option disabled hidden value="0">Выберите тип элемента</option>
                        {catsCur.map((item,index) => <option key={index}
                                                  value={item.productCategoryId}>{item.name}</option>)}
                    </select>
                </div>
                <div className="el-wrap">
                    <select
                        className="el-name el-name-1"
                        name="el-name"
                        value={select2}
                        disabled={isSelLoading}
                        onChange={changeCat2}
                    >
                        <option disabled hidden value="0">Наименование</option>
                        {productItem.map(item => <option key={item.databaseId}
                                                         value={item.databaseId}>{item.name}</option>)}
                    </select>
                </div>
                <div className="el-wrap labeled-input">
                    <label>Количество
                        <input type="text" value={inputVal} onChange={inputValChange}
                               className={`inputCount inputCount-1 ${inputValError}`}/> <span
                            className="typeOfCount typeOfCount-1">кг.</span>
                    </label>
                </div>
                <div className="el-wrap labeled-input input-dark to-right">
                    <label>Сумма</label>
                    <div className="row-total row-total-1"><span>{itemPrice}</span> ₽</div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorRow;