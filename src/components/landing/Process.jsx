import React from 'react';

const Process = () => {
    return (
        <div className="block-process">
            <div className="in">
                <h1>Процесс приема и оценки радиолома</h1>
                <div className="flex">
                    <div className="fr4 block-process-1">
                        <div className="title">Осмотр и оценка</div>
                        <div className="desc">
                            Для удобства подсчета стоимости скупки радиодетали необходимо отсортировать и распределить
                            по группам. Состав
                            радиодеталей определяется их стандартами.
                        </div>
                    </div>
                    <div className="fr4 block-process-2">
                        <div className="title">Спектральный анализ</div>
                        <div className="desc">
                            При необходимости установления фактического количества драгметаллов в б/у радиодеталях,
                            которые клиент сдает в
                            скупку, используется только профессиональное оборудование-специальные XRF-анализаторы.
                        </div>
                    </div>
                    <div className="fr4 block-process-3">
                        <div className="title">Подсчет / взвешивание и оплата</div>
                        <div className="desc">
                            На основе полученных данных о составе материала происходит расчет стоимости подлежащего
                            скупки радиолома. Цена
                            радиодеталей устанавливается по биржевым котировкам (LME) на момент установления стоимости.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;