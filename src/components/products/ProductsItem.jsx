import React from 'react';
import {useHistory} from "react-router-dom";
import {DISCOUNTS, PRECIOUS_METAL} from "../../static/stocks";


const ProductsItem = (props) => {
    const router = useHistory()

    let item_price = Math.round(((props.post.acf.gold * PRECIOUS_METAL.GOLD / 31.1 * DISCOUNTS.GOLD_DISCOUNT + props.post.acf.silver * PRECIOUS_METAL.SILVER / 31.1 * DISCOUNTS.SILVER_DISCOUNT + props.post.acf.platinum * PRECIOUS_METAL.PLATINUM / 31.1 * DISCOUNTS.PLATINUM_DISCOUNT + props.post.acf.palladium * PRECIOUS_METAL.PALLADIUM / 31.1 * DISCOUNTS.PALLADIUM_DISCOUNT) * PRECIOUS_METAL.RUB + Number.EPSILON) * 100) / 100;


    return (
        <li className="product">
                <div className="post__content">
                    <div className="img_wrapper">
                        <img src={`${props.post.images[0].src}`} alt=""/>
                    </div>
                    <h2 className="woocommerce-loop-product__title" onClick={() => router.push(`/product/${props.post.id}`)}> {props.post.name}</h2>
                    <div className="price_w">
                        <div className="title">Цена за <span className="itemcount">кг</span>:</div>
                        <div className="price"><span className="price_value">{props.post.acf.fixprice > 0 ? props.post.acf.fixprice : item_price}</span> ₽</div>
                    </div>
                    <div className="btns-wrapper">
                        <div className="btn-buy-wrapper"><a className="btn btn-secondary btn-wt" href="#">Продать</a></div>

                        <div className="btn-put-to-storage"><a href="#" className="btn btn-secondary">Добавить <span
                            className="ico-calc"></span></a></div>
                    </div>
                    <div className="hidden_params">
                        <span className="item--gold">{props.post.acf.gold}</span>
                        <span className="item--silver">{props.post.acf.silver}</span>
                        <span className="item--platinum">{props.post.acf.platinum}</span>
                        <span className="item--palladium">{props.post.acf.palladium}</span>
                        <span className="item--fixprice">{props.post.acf.fixprice}</span>
                        <span className="item--typeofcount">{props.post.acf.typecount}</span>
                        <span className="item--id">{props.post.id}</span>
                    </div>

                </div>
        </li>
    );
};

export default ProductsItem;