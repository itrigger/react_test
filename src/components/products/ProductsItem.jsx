import React from 'react';
import BtnPrimary from "../UI/button/BtnPrimary";
import {useHistory} from "react-router-dom";

const ProductsItem = (props) => {
    const router = useHistory()

    return (
        <li className="product">
                <div className="post__content">
                    <div className="img_wrapper">
                        <img src={`${props.post.images[0].src}`} alt=""/>
                    </div>
                    <h2 className="woocommerce-loop-product__title" onClick={() => router.push(`/posts/${props.post.id}`)}> {props.post.name}</h2>
                    <div className="price_w">
                        <div className="title">Цена за <span className="itemcount">кг</span>:</div>
                        <div className="price"><span className="price_value">153489.38</span> ₽</div>
                    </div>
                    <div className="btns-wrapper">
                        <div className="btn-buy-wrapper"><a className="btn btn-secondary btn-wt" href="javascript:;">Продать</a></div>

                        <div className="btn-put-to-storage"><a href="#" className="btn btn-secondary">Добавить <span
                            className="ico-calc"></span></a></div>
                    </div>
                    <div className="hidden_params">
                        <span className="item--gold">{props.post.acf.gold}</span>
                        <span className="item--silver">0</span>
                        <span className="item--platinum">3</span>
                        <span className="item--palladium">45</span>
                        <span className="item--fixprice">0</span>
                        <span className="item--typeofcount">1</span>
                        <span className="item--id">15</span>
                    </div>

                </div>
        </li>
    );
};

export default ProductsItem;