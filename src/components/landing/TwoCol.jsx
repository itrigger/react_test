import React from 'react';
import Slider from "../UI/slider/slider";
import SliderMob from "../UI/slider/slider_mob";

const TwoCol = () => {

    const reachGoalViber = () =>{
        //ym(66624295,'reachGoal','viber'); return true;
    }
    const reachGoalWhatsApp = () =>{
        //ym(66624295,'reachGoal','whatsapp'); return true;
    }

    return (
        <div>
            <div className="block-two-col">
                <div className="in">

                    <div className="grid">
                        <div className="g1">

                            <div className="main-page--slider-wrapper">
                                <div id="main-page--slider">
                                    <Slider />
                                    <SliderMob />
                                </div>
                            </div>

                        </div>
                        <div className="g2">
                            <div className="form--wrap">
                                <div className="tophead">
                                    <div className="right">
                                        <span className="yellow-rounded">Ваш консультант</span>
                                        <div className="name">Товмасян Артур</div>
                                        <div className="title">Специалист по работе с&nbsp;радиодеталями</div>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="heading">Задать вопрос специалисту,
                                        уточнить цены можно по телефону
                                    </div>
                                    <a href="tel:89854708800" className="btn btn-secondary">8 985 470-88-00</a>
                                    <div className="or_w">
                                        <span className="or">или сразу отправить фото</span>
                                    </div>
                                    <div className="dashed">
                                        <a href="https://api.whatsapp.com/send?phone=79854708800" className="big-wt"
                                           onClick={reachGoalWhatsApp}
                                           target="_blank"></a>
                                        <a title="Должен быть установлен вайбер для ПК"
                                           href="viber://chat?number=%2B79854708800" target="_blank"
                                           onClick={reachGoalViber}
                                           className="big-vb"></a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="g3">
                            <h2 id="anchor1">Скупаем радиолом оптом и в розницу</h2>
                            <p>
                                Радиодетали состоят из цветных металлов и частично из драгоценных металлов, цены на
                                которые сильно меняются.
                                Но
                                мы готовы предложить очень выгодные условия и купить радиодетали.
                            </p>

                            <div className="flex-wrapper">
                                <div className="flex flex-grid">
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Конденсаторы</div>
                                        <div className="pic pic-condensator"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Диоды</div>
                                        <div className="pic pic-diod"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Переключатели</div>
                                        <div className="pic pic-pereklyuchatel"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Потенциометры</div>
                                        <div className="pic pic-potenziometr"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Противогазы</div>
                                        <div className="pic pic-protivogaz"></div>
                                    </a>

                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Микросхемы</div>
                                        <div className="pic pic-mikroshemy"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Лампы</div>
                                        <div className="pic pic-lampy"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Реле</div>
                                        <div className="pic pic-rele"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Транзисторы</div>
                                        <div className="pic pic-tranzistor"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Резисторы</div>
                                        <div className="pic pic-rezistor"></div>
                                    </a>

                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Платы</div>
                                        <div className="pic pic-platy"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Платина</div>
                                        <div className="pic pic-platina"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Серебро</div>
                                        <div className="pic pic-serebro"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Разъемы</div>
                                        <div className="pic pic-razyomy"></div>
                                    </a>
                                    <a className="d-col-2 t-col-3 m-col-6 cat-block" data-fancybox data-src="#wtvb"
                                       href="">
                                        <div className="title">Радиолом</div>
                                        <div className="pic pic-radiolom"></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoCol;