import React from 'react';
import imgMap1 from './../../img/rfmap.svg'
import imgMap2 from './../../img/rfmap_mini.svg'

const BlockAbout = () => {
    return (
        <div className="about">
            <div className="in">
                <h1>О нас</h1>
                <div className="desc">
                    Компания «Схематика» работает на рынке более пяти лет. После вашей заявки, наши специалисты
                    оперативно осмотрят и
                    оценят по актуальным ценам образцы по адресам или у вас дома. Кто обращался к нам однажды –
                    продолжают с нами
                    сотрудничать! Платим наличными в день покупки радиодеталей.
                </div>
                <p>
                    Нам интересны радиодетали с содержание драгметаллов, новые и б/у, микросхемы, техническое серебро.
                    Вы можете продать платы, лампы, диоды, резисторы, переключатели, разъемы, реле, конденсаторы,
                    транзисторы.
                </p>

                <div className="points">
                    <h2>Пункты приёма радиодеталей</h2>
                    <div className="points--legend">

                        Мы работаем в восьми городах России:
                        <ul>
                            <li>Москва</li>
                            <li>Санкт-Петербург</li>
                            <li>Краснодар</li>
                            <li>Ессентуки</li>
                            <li>Симферополь</li>
                            <li>Воронеж</li>
                            <li>Нижний Новгород</li>
                            <li>Ижевск</li>
                        </ul>
                    </div>
                    <div className="points--map">
                        <img alt="" className="desktop" src={imgMap1} />
                            <img alt="" className="mobile" src={imgMap2} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockAbout;