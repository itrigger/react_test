import React from 'react';
import SliderHowTo from "../UI/slider/sliderHowTo";

const HowTo = () => {
    return (
        <div className="block-hts" id="anchor2">
            <div className="in">
                <h1>Как продать радиодетали?</h1>
                <div className="h1_desc">
                    Не важно сколько радиодеталей у вас на руках. Радиолом можно сдать в любом количестве и по высокой
                    цене. Скупка в
                    России принимает все радиодетали с содержанием драгметаллов.
                </div>
                <div className=" hts-3-blocks">

                  <SliderHowTo />

                </div>
            </div>
        </div>
    );
};

export default HowTo;