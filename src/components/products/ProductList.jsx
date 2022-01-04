import React from 'react';
import ProductsItem from "./ProductsItem";

const ProductList = ({posts}) => {
    if(!posts.length){
        return (
            <h3>Пусто</h3>
        )
    }
    return (
        <ul className="catalog--products-ul">
            {posts.map((item, index) =>
                    <ProductsItem number={index+1} post={item} key={index} />
            )}
        </ul>
    );
};

export default ProductList;