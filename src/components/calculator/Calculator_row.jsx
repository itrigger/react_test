import React, {useEffect, useRef, useState} from 'react';
import {DISCOUNTS, PRECIOUS_METAL} from "../../static/stocks";

const CalculatorRow = ({value, title}) => {

    let cat1 = [
        {id: 1, name: 'KT 1', gold: "0.01", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 2, name: 'KT 2', gold: "0.02", silver: "0", platinum: "0", palladium: "1", typecount: "2", fixprice: "0"},
        {id: 3, name: 'KT 3', gold: "0.03", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 4, name: 'KT 4', gold: "0.04", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {
            id: 5,
            name: 'KT 5',
            gold: "0.05",
            silver: "0",
            platinum: "0",
            palladium: "1",
            typecount: "1",
            fixprice: "15000"
        },
        {id: 6, name: 'KT 6', gold: "0.06", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 7, name: 'KT 7', gold: "0.07", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 8, name: 'KT 8', gold: "0.08", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 9, name: 'KT 9', gold: "0.09", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"}]

    let cat2 = [
        {id: 1, name: 'MK 1', gold: "0.01", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 2, name: 'MK 2', gold: "0.02", silver: "0", platinum: "0", palladium: "1", typecount: "2", fixprice: "0"},
        {id: 3, name: 'MK 3', gold: "0.03", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 4, name: 'MK 4', gold: "0.04", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {
            id: 5,
            name: 'MK 5',
            gold: "0.05",
            silver: "0",
            platinum: "0",
            palladium: "1",
            typecount: "1",
            fixprice: "15000"
        },
        {id: 6, name: 'MK 6', gold: "0.06", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 7, name: 'MK 7', gold: "0.07", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 8, name: 'MK 8', gold: "0.08", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"},
        {id: 9, name: 'MK 9', gold: "0.09", silver: "0", platinum: "0", palladium: "1", typecount: "1", fixprice: "0"}]

    const [cats, setCats] = useState([
        {id: 1, name: 'Конденсаторы'},
        {id: 2, name: 'Диоды'},
        {id: 3, name: 'Лампы'},
        {id: 4, name: 'Приборы'},
        {id: 5, name: 'Резисторы'}
    ])
    const [productItem, setProductItem] = useState([])
    const [inputVal, setInputVal] = useState('1')
    const [select1, setSelect1] = useState('0')
    const [select2, setSelect2] = useState('0')
    const [itemPrice, setItemPrice] = useState(0)
    const inputValRef = useRef()

    const inputValChange = (event) => {
        if (!(parseInt(event.target.value) < 1) || !(event.target.value !== '')) {
            setInputVal(event.target.value)
        }
    }

    useEffect(() => {
        if (parseInt(select2) !== 0 && parseInt(select2) !== undefined) {
            calcRowPrice(parseInt(select2))
        }
        return () => {
            console.log('unmount')
        }
    }, [inputVal, select2])

    const changeCat = (event) => {
        let id = event.target.value
        setSelect1(event.target.value)
        id === "1" ? setProductItem(cat1) : setProductItem(cat2)
    }

    const changeCat2 = (event) => {
        setSelect2(event.target.value)
        if (parseInt(event.target.value) !== 0 && parseInt(event.target.value) !== undefined) {
            calcRowPrice(parseInt(event.target.value))
        }
    }

    const calcRowPrice = (id) => {
        let item_gold = productItem.filter(item => item.id === id)[0].gold
        let item_silver = productItem.filter(item => item.id === id)[0].silver
        let item_platinum = productItem.filter(item => item.id === id)[0].platinum
        let item_palladium = productItem.filter(item => item.id === id)[0].palladium
        let fixprice = productItem.filter(item => item.id === id)[0].fixprice
        if (inputVal) {
            inputValRef.current.classList.remove('error')
            if (fixprice > 0) {
                setItemPrice(fixprice * inputVal)
            } else {
                let item_price = (item_gold * PRECIOUS_METAL.GOLD * DISCOUNTS.GOLD_DISCOUNT + item_silver * PRECIOUS_METAL.SILVER * DISCOUNTS.SILVER_DISCOUNT + item_palladium * PRECIOUS_METAL.PALLADIUM * DISCOUNTS.PALLADIUM_DISCOUNT + item_platinum * PRECIOUS_METAL.PLATINUM * DISCOUNTS.PLATINUM_DISCOUNT) * 0.4 * PRECIOUS_METAL.RUB * parseInt(inputVal);
                setItemPrice(Math.round(item_price))
            }
        } else {
            setItemPrice(0)
            inputValRef.current.classList.add('error')
        }
    }

    return (
        <div>
            <div className="els-row els-row-1" data-id="1">
                <div className="el-wrap">
                    <select className="el-type el-type-1" name="el-type" value={select1}
                            onChange={changeCat}>
                        <option disabled hidden value="0">Выберите тип элемента</option>
                        {cats.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <div className="el-wrap">
                    <select className="el-name el-name-1" name="el-name" value={select2}
                            onChange={changeCat2}>
                        <option disabled hidden value="0">Наименование</option>
                        {productItem.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <div className="el-wrap labeled-input">
                    <label>Количество
                        <input ref={inputValRef} type="text" value={inputVal} onChange={inputValChange}
                               className="inputCount inputCount-1"/> <span
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