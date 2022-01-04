import React from 'react';
import ProductsItem from "./ProductsItem";

const ProductList = ({posts}) => {
    if(!posts.length){
        return (
            <h3>Пусто</h3>
        )
    }
    return (
        <div>
            {posts.map((item, index) =>
                    <ProductsItem number={index+1} post={item} />
            )}
        </div>
    );
};

export default ProductList;