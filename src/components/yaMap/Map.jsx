import React, {useEffect, useRef, useState} from 'react';
import img1 from '../../img/map_legend_pic-04.jpg'
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import mapPointImg from '../../img/map.png'
import ChooseCityItem from "./ChooseCityItem";

const MyMap = () => {

    const [point, setPoint] = useState(0)
    const [mapCenter, setMapCenter] = useState([55.7922129, 37.4944932])
    const [bubbleText, setBubbleText] = useState(`<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Москва, ул. Маршала Бирюзова&nbsp;д. 8, корпус&nbsp;1, Метро Октябрьское поле</div><div class="hours">10:00 - 22:00</div><div class="tel"><a href="tel:89854708800">8 (985) 470 88 00</a></div><div class="email"><a href="mailto:moscow@sxematika.ru">moscow@sxematika.ru</a></div></div>`)
    const [sitesIndex] = useState(
        [
            ['Москва', 55.7922129, 37.4944932, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Москва, ул. Маршала Бирюзова&nbsp;д. 8, корпус&nbsp;1, Метро Октябрьское поле</div><div class="hours">10:00 - 22:00</div><div class="tel"><a href="tel:89854708800">8 (985) 470 88 00</a></div><div class="email"><a href="mailto:moscow@sxematika.ru">moscow@sxematika.ru</a></div></div>`, '', 'Москве'],
            ['Санкт-Петербург', 59.866644, 30.466147, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Санкт-Петербург, пр-т Обуховской Обороны, д.&nbsp;217</div><div class="hours">10:00 - 21:00</div><div class="tel"><a href="tel:89151833096">8 (915) 183 30 96</a></div><div class="email"><a href="mailto:piter@sxematika.ru">piter@sxematika.ru</a></div></div>`, 'spb', 'Санкт-Петербурге'],
            ['Армавир', 44.992339, 41.075502, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Армавир, ул.&nbsp;Новороссийская, д.&nbsp;72</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89891984731">8(989)198-47-31</a></div><div class="email"><a href="mailto:armavir@sxematika.ru">armavir@sxematika.ru</a></div></div>`, 'armavir','Армавире'],
            ['Барнаул', 53.375529, 83.746278, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Барнаул, пр-т.&nbsp;Ленина, д.&nbsp;167</div><div class="hours">10:00 - 20:00</div><div class="tel"><a href="tel:89835521637">8 (983) 552 16 37</a></div><div class="email"><a href="mailto:barnaul@sxematika.ru">barnaul@sxematika.ru</a></div></div>`, 'barnaul','Барнауле'],
            ['Белгород', 50.558857, 36.566786, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Белгород, ул.&nbsp;Конева, д.&nbsp;9</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89155702465">8 (915) 570-24-65</a></div><div class="email"><a href="mailto:belgorod@sxematika.ru">belgorod@sxematika.ru</a></div></div>`, 'belgorod','Белгороде'],
            ['Благовещенск', 50.278887, 127.514345, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Благовещенск, ул.&nbsp;Мухина, д.&nbsp;87</div><div class="hours">09:00 - 21:00</div><div class="tel"><a href="tel:89244406444">8 (924) 440-64-44</a></div><div class="email"><a href="mailto:blagoveshchensk@sxematika.ru">blagoveshchensk@sxematika.ru</a></div></div>`, 'blagoveshchensk','Благовещенске'],
            ['Волгоград', 48.735585, 44.492047, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Волгоград, ул.&nbsp;Карла Либкнехта, д.&nbsp;21</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89175207400">8 (917) 520-74-00</a></div><div class="email"><a href="mailto:volgograd@sxematika.ru">volgograd@sxematika.ru</a></div></div>`, 'volgograd','Волгограде'],
            ['Воронеж', 51.6584213, 39.1874443, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Воронеж, ул.&nbsp;Пушкинская,&nbsp;д.&nbsp;36</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89151833143">8 (915) 183 31 43</a></div><div class="email"><a href="mailto:voronezh@sxematika.ru">voronezh@sxematika.ru</a></div></div>`, 'voronezh','Воронеже'],
            ['Екатеринбург', 56.901410, 60.595148, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г.&nbsp;Екатеринбург, ул.&nbsp;40&nbsp;лет&nbsp;Октября, д.&nbsp;63</div><div class="hours">10:00 - 21:00</div><div class="tel"><a href="tel:89175258609">8 (917) 525 86 09</a></div><div class="email"><a href="mailto:ekaterinburg@sxematika.ru">ekaterinburg@sxematika.ru</a></div></div>`, 'ekaterinburg','Екатеринбурге'],
            ['Ессентуки', 44.0546225, 42.8988972, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Ессентуки, ул.&nbsp;Пятигорская,&nbsp;д.&nbsp;135</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89151832322">8 (915) 183 23 22</a></div><div class="email"><a href="mailto:essentuki@sxematika.ru">essentuki@sxematika.ru</a></div></div>`, 'essentuki','Ессентуках'],
            ['Ижевск', 56.8431039, 53.206947, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Ижевск, ул.&nbsp;Красноармейская,&nbsp;д.&nbsp;135</div><div class="hours">10:00 - 21:00</div><div class="tel"><a href="tel:89151832803">8 (915) 183 28 03</a></div><div class="email"><a href="mailto:izhevsk@sxematika.ru">izhevsk@sxematika.ru</a></div></div>`, 'izhevsk','Ижевске'],
            ['Казань', 55.8348211, 49.0864087, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Казань, ул.&nbsp;Восстания, д.&nbsp;28</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89151832603">8 (915) 183 26 03</a></div><div class="email"><a href="mailto:kazan@sxematika.ru">kazan@sxematika.ru</a></div></div>`, 'kazan','Казани'],
            ['Калининград', 54.727323, 20.469111, 1, `<div class="pic"><img alt="" src=${img1}></div><div class="desc"><div class="title">г. Калининград, ул.&nbsp;Коммунальная, д.&nbsp;54</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89114502870">8 (911) 450 28 70</a></div><div class="email"><a href="mailto:kaliningrad@sxematika.ru">kaliningrad@sxematika.ru</a></div></div>`, 'kaliningrad','Калининграде'],
            ['Кемерово', 55.344572, 86.068647, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Кемерово, пр-т.&nbsp;Ленина, д.&nbsp;12</div><div class="hours">10:00 - 19:00</div><div class="tel"><a href="tel:89134280547">8 (913) 428 05 47</a></div><div class="email"><a href="mailto:kemerovo@sxematika.ru">kemerovo@sxematika.ru</a></div></div>`, 'kemerovo','Кемерово'],
            ['Краснодар', 45.0974759, 38.9753053, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Краснодар, ул.&nbsp;Кореновская,&nbsp;д.&nbsp;32</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89184411105">8 (918) 441 11 05</a></div><div class="email"><a href="mailto:krasnodar@sxematika.ru">krasnodar@sxematika.ru</a></div></div>`, 'krasnodar','Краснодаре'],
            ['Красноярск', 56.028098, 92.889025, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Красноярск, ул. Шахтёров, д. 14</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89233124909">8 (923) 312 49 09</a></div><div class="email"><a href="mailto:krasnoyarsk@sxematika.ru">krasnoyarsk@sxematika.ru</a></div></div>`, 'krasnoyarsk','Красноярске'],
            ['Махачкала', 42.963093, 47.495654, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Махачкала, ул.&nbsp;Аскерханова, д.&nbsp;22</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89884663379">8 (988) 466 33 79</a></div><div class="email"><a href="mailto:mkala@sxematika.ru">mkala@sxematika.ru</a></div></div>`, 'mkala','Махачкале'],
            ['Набережные Челны', 55.748711, 52.421431, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Набережные Челны, пр-т Вахитова, д. 28 (Комплекс 30/02)</div><div class="hours">10:00 - 21:00</div><div class="tel"><a href="tel:89179210644">8 (917) 921 06 44</a></div><div class="email"><a href="mailto:nabchelny@sxematika.ru">nabchelny@sxematika.ru</a></div></div>`, 'nabchelny','Набережных Челнах'],
            ['Нижний Новгород', 56.290654, 44.042763, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Нижний Новгород, ул.&nbsp;Вячеслава Шишкова,&nbsp;д.&nbsp;1</div><div class="hours">10:00 - 21:00</div><div class="tel"><a href="tel:89151832952">8 (915) 183 29 52</a></div><div class="email"><a href="mailto:nizhnii@sxematika.ru">nizhnii@sxematika.ru</a></div></div>`, 'nnovgorod','Нижнем Новгороде'],
            ['Новороссийск', 44.696636, 37.786501, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Новороссийск, ул.&nbsp;Снайпера Рубахо, д.&nbsp;2</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89891984631">8 (989) 198 46 31</a></div><div class="email"><a href="mailto:novorossysk@sxematika.ru">novorossysk@sxematika.ru</a></div></div>`, 'novorossysk','Новороссийске'],
            ['Оренбург', 51.785084, 55.168596, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Оренбург, ул.&nbsp;Карагандинская, д.&nbsp;63</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89878604230">8 (987) 860 42 30</a></div><div class="email"><a href="mailto:orenburg@sxematika.ru">orenburg@sxematika.ru</a></div></div>`, 'orenburg','Оренбурге'],
            ['Пенза', 53.2018621, 44.9945709, 1, `<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Пенза ,ул.&nbsp;Суворова, д.&nbsp;143а</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89151832791">8 (915) 183 27 91</a></div><div class="email"><a href="mailto:penza@sxematika.ru">penza@sxematika.ru</a></div></div>`, 'penza','Пензе'],
            ['Пермь', 57.996396, 56.240097, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Пермь, ул.&nbsp;Краснофлотская, д.&nbsp;25</div><div class="hours">10:00 - 20:00</div><div class="tel"><a href="tel:89125900589">8 (912) 590 05 89</a></div><div class="email"><a href="mailto:perm@sxematika.ru">perm@sxematika.ru</a></div></div>', 'perm','Перми'],
            ['Ростов-на-Дону', 47.234328, 39.702894, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Ростов-на-Дону, ул.&nbsp;Текучёва, д.&nbsp;135</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89151832443">8 (915) 183 24 43</a></div><div class="email"><a href="mailto:rostov@sxematika.ru">rostov@sxematika.ru</a></div></div>', 'rostov','Ростове-на-Дону'],
            ['Самара', 53.211094, 50.156512, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Самара, пр.&nbsp;Масленникова, д.&nbsp;14</div><div class="hours">10:00 - 22:00</div><div class="tel"><a href="tel:89179648601">8 (917) 964 86 01</a></div><div class="email"><a href="mailto:samara@sxematika.ru">samara@sxematika.ru</a></div></div>', 'samara','Самаре'],
            ['Саратов', 51.526626, 46.024752, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Саратов, ул.&nbsp;Мичурина, д.&nbsp;73</div><div class="hours">8:00 - 20:00</div><div class="tel"><a href="tel:89170213346">8 (917) 021 33 46</a></div><div class="email"><a href="mailto:saratov@sxematika.ru">saratov@sxematika.ru</a></div></div>', 'saratov','Саратове'],
            ['Симферополь', 44.9667273, 34.108616, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Симферополь, ул.&nbsp;Садовая,&nbsp;д.&nbsp;5</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89151833180">8 (915) 183 31 80</a></div><div class="email"><a href="mailto:simferopol@sxematika.ru">simferopol@sxematika.ru</a></div></div>', 'simferopol','Симферополе'],
            ['Сочи', 43.474164, 39.901359, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Сочи, ул.&nbsp;Медовая, д.&nbsp;80А</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89151832490">8 (915) 183 24 90</a></div><div class="email"><a href="mailto:sochi@sxematika.ru">sochi@sxematika.ru</a></div></div>', 'sochi','Сочи'],
            ['Тверь', 56.855273, 35.857655, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Тверь, ул.&nbsp;Виноградова, д.&nbsp;9</div><div class="hours">9:00 - 20:00</div><div class="tel"><a href="tel:89157000949">8 (915) 700 09 49</a></div><div class="email"><a href="mailto:tver@sxematika.ru">tver@sxematika.ru</a></div></div>', 'tver','Твери'],
            ['Тюмень', 57.116986, 65.540939, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Тюмень, ул.&nbsp;Мельникайте, д.&nbsp;138а</div><div class="hours">10:00 - 21:00</div><div class="tel"><a href="tel:89151832532">8 (915) 183 25 32</a></div><div class="email"><a href="mailto:tumen@sxematika.ru">tumen@sxematika.ru</a></div></div>', 'tumen','Тюмени'],
            ['Уфа', 54.728332, 55.929963, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Уфа, ул.&nbsp;Гафури, д.&nbsp;52</div><div class="hours">9:00 - 21:00</div><div class="tel"><a href="tel:89870201336">8 (987) 020 13 36</a></div><div class="email"><a href="mailto:ufa@sxematika.ru">ufa@sxematika.ru</a></div></div>', 'ufa','Уфе'],
            ['Хабаровск', 48.486876, 135.062538, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Хабаровск, ул.&nbsp;Серышева, д.&nbsp;52</div><div class="hours">10:00 - 19:00</div><div class="tel"><a href="tel:89143723551">8 (914) 372 35 51</a></div><div class="email"><a href="mailto:khabarovsk@sxematika.ru">khabarovsk@sxematika.ru</a></div></div>', 'khabarovsk','Хабаровске'],
            ['Челябинск', 55.197605, 61.331811, 1, '<div class="pic"><img alt="" src="/wp-content/themes/sxematika/assets/img/map_legend_pic-04.jpg"></div><div class="desc"><div class="title">г. Челябинск, ул.&nbsp;Молодогвардейцев, д.&nbsp;24</div><div class="hours">10:00 - 20:00</div><div class="tel"><a href="tel:89822904876">8 (982) 290 48 76</a></div><div class="email"><a href="mailto:chelyabinsk@sxematika.ru">chelyabinsk@sxematika.ru</a></div></div>', 'chelyabinsk','Челябинске']
        ]
    )
    const [openSelector, setOpenSelector] = useState('')
    const [cityE, setCityE] = useState(sitesIndex[0][6])

    const bubble = useRef()

    useEffect(() => {
        let latX = sitesIndex[point][1]
        let latY = sitesIndex[point][2]
        let newBubbleText = sitesIndex[point][4]
        setMapCenter([latX, latY])
        setBubbleText(newBubbleText)
        setOpenSelector('')
        setCityE(sitesIndex[point][6])
    }, [point, sitesIndex, cityE])


    const onOpenSelector = (e) => {
        e.preventDefault()
        openSelector === 'active' ? setOpenSelector('') : setOpenSelector('active')

    }

    const onClickLiEvent = (index) => {
        setPoint(index)
    }

    /*7*/

    return (
        <div className="main-page-map">
            <div className="in">
                <h1>Скупка радиодеталей в&nbsp;
                    <div className="selector main-page-map--selector" onClick={onOpenSelector}>
                        <div className="selector-title"><span>{cityE}</span></div>
                        <ul className={`selector-dd ${openSelector}`}>
                            {
                                sitesIndex.map((item, index) => <ChooseCityItem key={index} active={index===point?'active':''} onClickLiEvent={onClickLiEvent} index={index} title={item[0]}/>)
                            }
                        </ul>
                    </div>
                </h1>
            </div>
            <div className="map">
                <div className="map_bubble" ref={bubble} dangerouslySetInnerHTML={{__html: bubbleText}}></div>
                <YMaps
                    query={{
                        ns: 'use-load-option',
                        load:
                            'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                    }}
                >
                    <div>
                        <Map state={{center: mapCenter, zoom: 8}} width="100%" height="420px">
                            {
                                sitesIndex.map((mark, index) =>
                                    <Placemark
                                        geometry={[mark[1], mark[2]]}
                                        modules={['geoObject.addon.balloon']}
                                        key={index}
                                        onClick={() => setPoint(index)}
                                        options={{
                                            //iconColor: '#ffcc00',
                                            iconLayout: 'default#image',
                                            iconImageHref: `${mapPointImg}`,
                                            iconImageSize: [76, 65],
                                            iconImageOffset: [-3, -42]
                                        }}
                                    />
                                )}
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    );
};

export default MyMap;