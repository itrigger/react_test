import React from 'react';
import ProductsItem from "./ProductsItem";
import ProductSkeleton from "./ProductSkeleton";

const ProductList = ({posts}) => {
    if(!posts.length){
        return (
            <ProductSkeleton />
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