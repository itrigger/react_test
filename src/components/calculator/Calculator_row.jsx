import React, {useContext, useEffect, useState} from 'react';
import {DISCOUNTS, PRECIOUS_METAL} from "../../static/stocks";
import {CalcContext} from "../../context";
import {useQuery} from "@apollo/client";
import {PRODUCTS_GET_BY_CATEGORY_ID} from "../../GraphQL/queries";
import {useAlert} from "react-alert";
import Loader from "../UI/loader/Loader";

const CalculatorRow = ({sel1ActiveValue, cats, count, id, deleteRow}) => {

    const {rows, setRows} = useContext(CalcContext) //в контексте храним общее кол-во строк в калькуляторе
    const alert = useAlert();

    const [catsCur, setCatsCur] = useState(JSON.parse(localStorage.getItem('categories')) || cats)
    const [productItem, setProductItem] = useState([])
    const [inputVal, setInputVal] = useState(count)
    const [inputValError, setInputValError] = useState('')
    const [select1, setSelect1] = useState(sel1ActiveValue)
    const [select2, setSelect2] = useState('0')
    const [itemPrice, setItemPrice] = useState(0)
    const [isSelLoading, setIsSelLoading] = useState(true)
    const [currentId, setCurrentId] = useState('1')

    //обработчик поля ввода кол-ва товаров, также меняем стэйт Ошибки, если поле пусто или значение меньше 1
    const inputValChange = (event) => {
        if (!(parseInt(event.target.value) < 1) || !(event.target.value !== '')) {
            setInputValError('')
            setInputVal(event.target.value)
        } else {
            setInputValError('error')
        }
    }

    //список категорий получаем в компоненте выше асинхронно, а тут обновляем первый селект при получении данных
    useEffect(() => {
        setCatsCur(cats)
    }, [cats])

    //Эффект обновления цены в строке калькулятора при изменении выпадающего списка номер 2 или поля кол-ва
    useEffect(() => {
        if (parseInt(select2) !== 0 && parseInt(select2) !== undefined) {
            calcRowPrice(parseInt(select2))
            // updateRow(id)
        }
        return () => {
            // console.log('unmount')
        }
    }, [inputVal, select2])

    //запрос к АПИ с параметром через Аполло
    const {loading, error, data, refetch} = useQuery(PRODUCTS_GET_BY_CATEGORY_ID, {
        variables: {
            categoryId: parseInt(currentId)
        }
    });

    // выводим сообщение об ошибке, если сервер выдал таковое
    if (error) {
        alert.error(error)
    }

    //записываем в локальное хранилище и стэйт список всех категорий
    useEffect(() => {
        setSelect2('0')
        ClearItemPrice()
        if (!loading) {
            setProductItem(data.products.nodes)
            setIsSelLoading(false)
            localStorage.setItem(`categories${currentId}`, JSON.stringify(data.products.nodes))
        }
    }, [data])

    //обновляем запрос к АПИ с параметром при смене стэйта со значением категории
    useEffect(() => {
        refetch(
            {
                categoryId: parseInt(currentId)
            }
        )
    }, [currentId])

    //функция обнуления цены в поле Сумма
    const ClearItemPrice = () => {
        setItemPrice(0)
    }

    //функция обработчик первого селекта, делаем проверку есть ли товары из нужной категории в локальном хранилище, если нет, меняет стэйт setCurrentId
    const changeCat = (event) => {
        let id = event.target.value
        setSelect1(event.target.value)
        setIsSelLoading(true)
        setSelect2('0')
        ClearItemPrice()
        if (JSON.parse(localStorage.getItem(`categories${id}`)) !== null) {
            setProductItem(JSON.parse(localStorage.getItem(`categories${id}`)))
            setIsSelLoading(false)
        } else {
            setCurrentId(id)
        }
    }

    //функция обработчик второго селекта, если значение не пустое, то вычисляем цену товарной позиции
    const changeCat2 = (event) => {
        setSelect2(event.target.value)
        if (parseInt(event.target.value) !== 0 && parseInt(event.target.value) !== undefined) {
            calcRowPrice(parseInt(event.target.value))
        }
    }

    //Сохраняем строку калькулятора в локальное хранилище
    //Данные храним в локальном хранилище, чтобы при повторном открытии сайта они сохранялись и подгружались
    const SaveItemToLs = () => {
        let LSitemID, LSitemName, LScatID, LScatName, LScount, LStypeOfCount, LSsum, LSrowID, data
        LSrowID = rows.length
        LSitemID = select2
        LScatID = select1
        LSsum = itemPrice
        LScount = inputVal
        let filteredProductItem = productItem.filter(item => item.databaseId === parseInt(select2))
        if(filteredProductItem[0]){
            LSitemName = filteredProductItem[0].name
            LStypeOfCount = filteredProductItem[0].metaData.filter(item => item.key === 'typecount')[0].value
        }
        let filteredCatsItem = cats.filter(item => item.productCategoryId === parseInt(select1))
        if(filteredCatsItem[0]){
            LScatName = filteredCatsItem[0].name
        }

        if(localStorage.getItem('order') !== null){
            let dataLS = JSON.parse(localStorage.getItem('order'))
            data = {LSrowID, LSitemID, LSitemName, LScatID, LScatName, LScount, LStypeOfCount, LSsum}
            if(dataLS) {
               let newArr = dataLS.filter(item => item.LSrowID !== LSrowID)
                newArr.push(data)
                localStorage.setItem('order', JSON.stringify(newArr))
            }
        } else {
            if(LSsum>0) {
                data = [{LSrowID, LSitemID, LSitemName, LScatID, LScatName, LScount, LStypeOfCount, LSsum}]
                localStorage.setItem('order', JSON.stringify(data))
            }
        }
    }

    //JSON.parse - получить
    //JSON.stringify - записать

    //запускаем функцию сохранения в ЛС при изменении стэйта зависимых полей
    useEffect(() => {
        SaveItemToLs()
    },[inputVal,select2, itemPrice])

    //функция подсчета цены строки калькулятора
    const calcRowPrice = (id) => {
        ClearItemPrice()
        let filteredProductItem = productItem.filter(item => item.databaseId === id)
        let item_gold = filteredProductItem[0].metaData.filter(item => item.key === 'gold')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'gold')[0].value : 0
        let item_silver = filteredProductItem[0].metaData.filter(item => item.key === 'silver')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'silver')[0].value : 0
        let item_platinum = filteredProductItem[0].metaData.filter(item => item.key === 'platinum')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'platinum')[0].value : 0
        let item_palladium = filteredProductItem[0].metaData.filter(item => item.key === 'palladium')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'palladium')[0].value : 0
        let fixprice = filteredProductItem[0].metaData.filter(item => item.key === 'fixprice')[0].value !== null ? filteredProductItem[0].metaData.filter(item => item.key === 'fixprice')[0].value : 0
        if (inputVal) {
            setInputValError('')
            if (fixprice > 0 && fixprice !== '999999') {
                setItemPrice(fixprice * inputVal)
            } else if (fixprice === '999999') {
                setItemPrice('Догов.')
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
                        {catsCur.map((item, index) => <option key={index}
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
                        <option disabled hidden value="0">Выберите наименование</option>
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