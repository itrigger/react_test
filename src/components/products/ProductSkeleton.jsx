import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const ProductSkeleton = () => {
    let rows = [], i = 0, len = 12;
    while (++i <= len) rows.push(i);
    return (
        <div>
            <ul className="catalog--products-ul">
                {rows.map((item, index)=>
                    <li key={index} className="product">
                        <div className="img_wrapper"><Skeleton height={"344px"} width={"344px"} baseColor={"#ebebeb"}/></div>
                        <h2 className="woocommerce-loop-product__title"><Skeleton baseColor={"#ebebeb"} width={"250px"} height={"25px"} count={1} /></h2>
                        <div className="price_w"><Skeleton baseColor={"#ebebeb"} width={"250px"} height={"44px"} count={1} /></div>
                        <div className="btns-wrapper"><Skeleton baseColor={"#ebebeb"} width={"250px"} height={"54px"} count={1} /></div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProductSkeleton;