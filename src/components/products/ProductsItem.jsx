import React from 'react';
import {useHistory} from "react-router-dom";
import {DISCOUNTS, PRECIOUS_METAL} from "../../static/stocks";


const ProductsItem = (props) => {
    const router = useHistory()

    let item_price = Math.round(((props.post.metaData[0].value * PRECIOUS_METAL.GOLD / 31.1 * DISCOUNTS.GOLD_DISCOUNT + props.post.metaData[2].value * PRECIOUS_METAL.SILVER / 31.1 * DISCOUNTS.SILVER_DISCOUNT + props.post.metaData[4].value * PRECIOUS_METAL.PLATINUM / 31.1 * DISCOUNTS.PLATINUM_DISCOUNT + props.post.metaData[6].value * PRECIOUS_METAL.PALLADIUM / 31.1 * DISCOUNTS.PALLADIUM_DISCOUNT) * PRECIOUS_METAL.RUB + Number.EPSILON) * 100) / 100;

    let imgSrc

    if(props.post.image !== null){
        imgSrc = props.post.image.sourceUrl
    } else {
        imgSrc = 'http://localhost/wp-content/uploads/woocommerce-placeholder-600x600.png'
    }

    return (
        <li className="product">
                <div className="post__content">
                    <div className="img_wrapper">
                        <img src={imgSrc} alt={props.post.name}/>
                    </div>
                    <h2 className="woocommerce-loop-product__title" onClick={() => router.push(`/product/${props.post.id}`)}> {props.post.name}</h2>
                    <div className="price_w">
                        <div className="title">Цена за <span className="itemcount">кг</span>:</div>
                        <div className="price"><span className="price_value">{props.post.metaData[10].value > 0 ? props.post.metaData[10].value : item_price}</span> ₽</div>
                    </div>
                    <div className="btns-wrapper">
                        <div className="btn-buy-wrapper"><a className="btn btn-secondary btn-wt" href="#">Продать</a></div>

                        <div className="btn-put-to-storage">
                            <a href="#" className="btn btn-secondary">Добавить <span className="ico-calc" /></a></div>
                    </div>
                </div>
        </li>
    );
};

export default ProductsItem;